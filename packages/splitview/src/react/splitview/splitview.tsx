import * as React from 'react';
import { IPanelApi } from '../../api/panelApi';
import {
    IComponentSplitview,
    ComponentSplitview,
} from '../../splitview/componentSplitview';
import { Orientation } from '../../splitview/splitview';
import { usePortalsLifecycle } from '../react';
import { ReactComponentView } from './reactComponentView';

export interface SplitviewReadyEvent {
    api: IComponentSplitview;
}

export interface ISplitviewPanelProps {
    api: IPanelApi;
}

export interface ISplitviewComponentProps {
    orientation: Orientation;
    onReady?: (event: SplitviewReadyEvent) => void;
    components: {
        [index: string]: React.FunctionComponent<ISplitviewPanelProps>;
    };
}

export const SplitviewComponent: React.FunctionComponent<ISplitviewComponentProps> = (
    props: ISplitviewComponentProps
) => {
    const domRef = React.useRef<HTMLDivElement>();
    const splitviewRef = React.useRef<IComponentSplitview>();
    const [portals, addPortal] = usePortalsLifecycle();

    React.useEffect(() => {
        const splitview = new ComponentSplitview(domRef.current, {
            orientation: props.orientation,
            frameworkComponents: props.components,
            frameworkWrapper: {
                createComponent: (id: string, componentId, component: any) => {
                    return new ReactComponentView(id, componentId, component, {
                        addPortal,
                    });
                },
            },
            proportionalLayout: false,
        });

        splitview.resizeToFit();

        if (props.onReady) {
            props.onReady({ api: splitview });
        }

        splitviewRef.current = splitview;

        return () => {
            splitview.dispose();
        };
    }, []);

    return (
        <div
            style={{
                height: '100%',
                width: '100%',
            }}
            ref={domRef}
        >
            {portals}
        </div>
    );
};
SplitviewComponent.displayName = 'SplitviewComponent';