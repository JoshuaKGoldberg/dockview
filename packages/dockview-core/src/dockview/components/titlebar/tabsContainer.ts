import {
    IDisposable,
    CompositeDisposable,
    IValueDisposable,
} from '../../../lifecycle';
import { addDisposableListener, Emitter, Event } from '../../../events';
import { ITab, Tab } from '../tab/tab';
import { DockviewComponent } from '../../dockviewComponent';
import { DockviewGroupPanel } from '../../dockviewGroupPanel';
import { VoidContainer } from './voidContainer';
import { toggleClass } from '../../../dom';
import { IDockviewPanel } from '../../dockviewPanel';

export interface TabDropIndexEvent {
    event: DragEvent;
    readonly index: number;
}

export interface ITabsContainer extends IDisposable {
    readonly element: HTMLElement;
    readonly panels: string[];
    readonly size: number;
    height: number | undefined;
    delete: (id: string) => void;
    indexOf: (id: string) => number;
    at: (index: number) => ITab;
    onDrop: Event<TabDropIndexEvent>;
    setActive: (isGroupActive: boolean) => void;
    setActivePanel: (panel: IDockviewPanel) => void;
    isActive: (tab: ITab) => boolean;
    closePanel: (panel: IDockviewPanel) => void;
    openPanel: (panel: IDockviewPanel, index?: number) => void;
    setActionElement(element: HTMLElement | undefined): void;
    hidden: boolean;
    show(): void;
    hide(): void;
}

export class TabsContainer
    extends CompositeDisposable
    implements ITabsContainer
{
    private readonly _element: HTMLElement;
    private readonly tabContainer: HTMLElement;
    private readonly actionContainer: HTMLElement;
    private readonly voidContainer: VoidContainer;

    private tabs: IValueDisposable<ITab>[] = [];
    private selectedIndex = -1;
    private actions: HTMLElement | undefined;

    private _height: number | undefined;
    private _hidden = false;

    private readonly _onDrop = new Emitter<TabDropIndexEvent>();
    readonly onDrop: Event<TabDropIndexEvent> = this._onDrop.event;

    get panels() {
        return this.tabs.map((_) => _.value.panelId);
    }

    get size() {
        return this.tabs.length;
    }

    get height(): number | undefined {
        return this._height;
    }

    set height(value: number | undefined) {
        this._height = value;
        if (typeof value !== 'number') {
            this.element.style.removeProperty(
                '--dv-tabs-and-actions-container-height'
            );
        } else {
            this.element.style.setProperty(
                '--dv-tabs-and-actions-container-height',
                `${value}px`
            );
        }
    }

    get hidden(): boolean {
        return this._hidden;
    }

    set hidden(value: boolean) {
        this._hidden = value;
        this.element.style.display = value ? 'none' : '';
    }

    show(): void {
        if (!this.hidden) {
            this.element.style.display = '';
        }
    }

    hide(): void {
        this._element.style.display = 'none';
    }

    setActionElement(element: HTMLElement | undefined): void {
        if (this.actions === element) {
            return;
        }
        if (this.actions) {
            this.actions.remove();
            this.actions = undefined;
        }
        if (element) {
            this.actionContainer.appendChild(element);
            this.actions = element;
        }
    }

    public get element() {
        return this._element;
    }

    public isActive(tab: ITab) {
        return (
            this.selectedIndex > -1 &&
            this.tabs[this.selectedIndex].value === tab
        );
    }

    public at(index: number) {
        return this.tabs[index]?.value;
    }

    public indexOf(id: string): number {
        return this.tabs.findIndex((tab) => tab.value.panelId === id);
    }

    constructor(
        private readonly accessor: DockviewComponent,
        private readonly group: DockviewGroupPanel
    ) {
        super();

        this.addDisposables(this._onDrop);

        this._element = document.createElement('div');
        this._element.className = 'tabs-and-actions-container';

        this.height = accessor.options.tabHeight;

        toggleClass(
            this._element,
            'dv-full-width-single-tab',
            this.accessor.options.singleTabMode === 'fullwidth'
        );

        this.addDisposables(
            this.accessor.onDidAddPanel((e) => {
                if (e.api.group === this.group) {
                    toggleClass(
                        this._element,
                        'dv-single-tab',
                        this.size === 1
                    );
                }
            }),
            this.accessor.onDidRemovePanel((e) => {
                if (e.api.group === this.group) {
                    toggleClass(
                        this._element,
                        'dv-single-tab',
                        this.size === 1
                    );
                }
            })
        );

        this.actionContainer = document.createElement('div');
        this.actionContainer.className = 'action-container';

        this.tabContainer = document.createElement('div');
        this.tabContainer.className = 'tabs-container';

        this.voidContainer = new VoidContainer(this.accessor, this.group);

        this._element.appendChild(this.tabContainer);
        this._element.appendChild(this.voidContainer.element);
        this._element.appendChild(this.actionContainer);

        this.addDisposables(
            this.voidContainer,
            this.voidContainer.onDrop((event) => {
                this._onDrop.fire({
                    event: event.nativeEvent,
                    index: this.tabs.length,
                });
            }),
            addDisposableListener(this.tabContainer, 'mousedown', (event) => {
                if (event.defaultPrevented) {
                    return;
                }

                const isLeftClick = event.button === 0;

                if (isLeftClick) {
                    this.accessor.doSetGroupActive(this.group);
                }
            })
        );
    }

    public setActive(_isGroupActive: boolean) {
        // noop
    }

    private addTab(
        tab: IValueDisposable<ITab>,
        index: number = this.tabs.length
    ) {
        if (index < 0 || index > this.tabs.length) {
            throw new Error('invalid location');
        }

        this.tabContainer.insertBefore(
            tab.value.element,
            this.tabContainer.children[index]
        );

        this.tabs = [
            ...this.tabs.slice(0, index),
            tab,
            ...this.tabs.slice(index),
        ];

        if (this.selectedIndex < 0) {
            this.selectedIndex = index;
        }
    }

    public delete(id: string) {
        const index = this.tabs.findIndex((tab) => tab.value.panelId === id);

        const tabToRemove = this.tabs.splice(index, 1)[0];

        const { value, disposable } = tabToRemove;

        disposable.dispose();
        value.element.remove();
    }

    public setActivePanel(panel: IDockviewPanel) {
        this.tabs.forEach((tab) => {
            const isActivePanel = panel.id === tab.value.panelId;
            tab.value.setActive(isActivePanel);
        });
    }

    public openPanel(panel: IDockviewPanel, index: number = this.tabs.length) {
        if (this.tabs.find((tab) => tab.value.panelId === panel.id)) {
            return;
        }
        const tabToAdd = new Tab(panel.id, this.accessor, this.group);
        if (!panel.view?.tab) {
            throw new Error('invalid header component');
        }
        tabToAdd.setContent(panel.view.tab);

        const disposable = CompositeDisposable.from(
            tabToAdd.onChanged((event) => {
                const alreadyFocused =
                    panel.id === this.group.model.activePanel?.id &&
                    this.group.model.isContentFocused;

                const isLeftClick = event.button === 0;

                if (!isLeftClick || event.defaultPrevented) {
                    return;
                }

                this.group.model.openPanel(panel, {
                    skipFocus: alreadyFocused,
                });
            }),
            tabToAdd.onDrop((event) => {
                this._onDrop.fire({
                    event: event.nativeEvent,
                    index: this.tabs.findIndex((x) => x.value === tabToAdd),
                });
            })
        );

        const value: IValueDisposable<ITab> = { value: tabToAdd, disposable };

        this.addTab(value, index);
    }

    public closePanel(panel: IDockviewPanel) {
        this.delete(panel.id);
    }

    public dispose() {
        super.dispose();

        this.tabs.forEach((tab) => {
            tab.disposable.dispose();
        });
        this.tabs = [];
    }
}
