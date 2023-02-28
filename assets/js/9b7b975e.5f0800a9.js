"use strict";(self.webpackChunkdockview_docs=self.webpackChunkdockview_docs||[]).push([[1251],{7455:(t,e,n)=>{n.d(e,{M:()=>l});var a=n(2784);const l=t=>{const e=a.useRef();return a.useLayoutEffect((()=>{e.current&&(e.current.scrollTop=Math.max(0,e.current.scrollHeight-e.current.clientHeight))}),[t.lines]),a.createElement("div",{ref:e,className:"console-container"},t.lines.map(((t,e)=>a.createElement("div",{key:e,className:"console-line"},a.createElement("span",{className:"console-line-timestamp"},(t=>{const e=t=>t<10?`0${t}`:`${t}`;return`${e(t.getHours())}:${e(t.getMinutes())}:${e(t.getSeconds())}.${t.getMilliseconds()}`})(t.timestamp)),a.createElement("span",{className:"console-line-text",style:t.css},t.text)))))}},525:(t,e,n)=>{n.d(e,{R:()=>d});var a=n(3407),l=n(2784),r=n(7455);const i={default:t=>l.createElement("div",{style:{padding:"20px"}},t.params.title)},d=()=>{const[t,e]=l.useState([]),[n,d]=l.useState(!1),[p,o]=l.useState();l.useEffect((()=>{if(!p)return()=>{};const t=[p.onDidAddPanel((t=>{e((e=>[...e,{timestamp:new Date,text:`onDidAddPanel: ${t.id}`}]))})),p.onDidRemovePanel((t=>{e((e=>[...e,{timestamp:new Date,text:`onDidRemovePanel: ${t.id}`}]))})),p.onDidActivePanelChange((t=>{e((e=>[...e,{timestamp:new Date,text:`onDidActivePanelChange: ${t?.id}`}]))})),p.onDidLayoutChange((t=>{e((t=>[...t,{timestamp:new Date,text:"onDidLayoutChange"}]))})),p.onDidLayoutFromJSON((t=>{e((t=>[...t,{timestamp:new Date,text:"onDidLayoutFromJSON"}]))}))];return()=>{t.forEach((t=>t.dispose()))}}),[p]),l.useEffect((()=>{p&&(e((t=>[...t,{timestamp:new Date,text:`Rebuilding view fromJSON:${n}`,css:{color:"yellow",backgroundColor:"grey"}}])),n?p.fromJSON({grid:{root:{type:"branch",data:[{type:"branch",data:[{type:"leaf",data:{id:"panel_3",component:"default",params:{title:"Panel 3"},snap:!1},size:394},{type:"branch",data:[{type:"leaf",data:{id:"panel_5",component:"default",params:{title:"Panel 5"},snap:!1},size:50},{type:"branch",data:[{type:"leaf",data:{id:"panel_6",component:"default",params:{title:"Panel 6"},minimumWidth:10,snap:!1},size:131},{type:"leaf",data:{id:"panel_8",component:"default",params:{title:"Panel 8"},minimumWidth:10,snap:!1},size:131},{type:"leaf",data:{id:"panel_7",component:"default",params:{title:"Panel 7"},minimumWidth:10,snap:!1},size:132}],size:50}],size:394}],size:100},{type:"leaf",data:{id:"panel_2",component:"default",params:{title:"Panel 2"},snap:!1},size:100},{type:"branch",data:[{type:"leaf",data:{id:"panel_1",component:"default",params:{title:"Panel 1"},snap:!1},size:394},{type:"leaf",data:{id:"panel_4",component:"default",params:{title:"Panel 4"},snap:!1},size:394}],size:100}],size:788},width:788,height:300,orientation:a.i5.VERTICAL},activePanel:"panel_8"}):(p.clear(),p.orientation=a.i5.VERTICAL,p.addPanel({id:"panel_1",component:"default",params:{title:"Panel 1"}}),p.addPanel({id:"panel_2",component:"default",params:{title:"Panel 2"}}),p.addPanel({id:"panel_3",component:"default",params:{title:"Panel 3"}}),console.log("sdf"),p.addPanel({id:"panel_4",component:"default",params:{title:"Panel 4"},position:{referencePanel:"panel_1",direction:"right"}}),p.addPanel({id:"panel_5",component:"default",params:{title:"Panel 5"},position:{referencePanel:"panel_3",direction:"right"}}),p.addPanel({id:"panel_6",component:"default",params:{title:"Panel 6"},position:{referencePanel:"panel_5",direction:"below"},minimumWidth:10}),p.addPanel({id:"panel_7",component:"default",params:{title:"Panel 7"},position:{referencePanel:"panel_6",direction:"right"},minimumWidth:10}),p.addPanel({id:"panel_8",component:"default",params:{title:"Panel 8"},position:{referencePanel:"panel_6",direction:"right"},minimumWidth:10})))}),[p,n]);return l.createElement(l.Fragment,null,l.createElement("label",null,l.createElement("input",{type:"checkbox",checked:n,onChange:t=>d(t.target.checked)}),l.createElement("span",null,"fromJSON")),l.createElement("div",{style:{height:"300px",backgroundColor:"rgb(30,30,30)",color:"white",margin:"20px 0px"}},l.createElement(a.$R,{components:i,onReady:t=>{o(t.api)},proportionalLayout:!1,orientation:a.i5.VERTICAL,className:"dockview-theme-abyss"})),l.createElement(r.M,{lines:t}))}},645:(t,e,n)=>{n.d(e,{X:()=>i});var a=n(3407),l=n(2784);const r={default:t=>l.createElement("div",{style:{padding:"20px"}},t.params.title)},i=()=>l.createElement(a.$R,{components:r,onReady:t=>{t.api.addPanel({id:"panel_1",component:"default",params:{title:"Panel 1"}}),t.api.addPanel({id:"panel_2",component:"default",params:{title:"Panel 2"}}),t.api.addPanel({id:"panel_3",component:"default",params:{title:"Panel 3"}}),t.api.addPanel({id:"panel_4",component:"default",params:{title:"Panel 4"},position:{referencePanel:"panel_1",direction:"right"}}),t.api.addPanel({id:"panel_5",component:"default",params:{title:"Panel 5"},position:{referencePanel:"panel_3",direction:"right"}}),t.api.addPanel({id:"panel_6",component:"default",params:{title:"Panel 6"},position:{referencePanel:"panel_5",direction:"below"},minimumWidth:10}),t.api.addPanel({id:"panel_7",component:"default",params:{title:"Panel 7"},position:{referencePanel:"panel_6",direction:"right"},minimumWidth:10}),t.api.addPanel({id:"panel_8",component:"default",params:{title:"Panel 8"},position:{referencePanel:"panel_6",direction:"right"},minimumWidth:10})},proportionalLayout:!1,orientation:a.i5.VERTICAL,className:"dockview-theme-abyss"})},295:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>g,frontMatter:()=>p,metadata:()=>m,toc:()=>k});var a=n(7896),l=(n(2784),n(876)),r=n(645),i=n(525),d=n(9817);const p={description:"Gridview Documentation"},o="Gridview",m={unversionedId:"components/gridview",id:"version-1.6.0/components/gridview",title:"Gridview",description:"Gridview Documentation",source:"@site/versioned_docs/version-1.6.0/components/gridview.mdx",sourceDirName:"components",slug:"/components/gridview",permalink:"/docs/components/gridview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.6.0/components/gridview.mdx",tags:[],version:"1.6.0",frontMatter:{description:"Gridview Documentation"},sidebar:"tutorialSidebar",previous:{title:"Dockview",permalink:"/docs/components/dockview"},next:{title:"Paneview",permalink:"/docs/components/paneview"}},u={},k=[{value:"Introduction",id:"introduction",level:2},{value:"GridviewReact Component",id:"gridviewreact-component",level:2},{value:"Gridview API",id:"gridview-api",level:2},{value:"Gridview Panel API",id:"gridview-panel-api",level:2},{value:"Events",id:"events",level:2}],s={toc:k},N="wrapper";function g(t){let{components:e,...n}=t;return(0,l.kt)(N,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"gridview"},"Gridview"),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("div",{style:{height:"300px",backgroundColor:"rgb(30,30,30)",color:"white",margin:"20px 0px"}},(0,l.kt)(r.X,{mdxType:"SimpleGridview"})),(0,l.kt)("h2",{id:"gridviewreact-component"},"GridviewReact Component"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ReactGridview } from 'dockview';\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onReady"),(0,l.kt)("td",{parentName:"tr",align:null},"(event: SplitviewReadyEvent) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"components"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"orientation"),(0,l.kt)("td",{parentName:"tr",align:null},"Orientation"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Orientation.HORIZONTAL"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"proportionalLayout"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)(d.Z,{to:"../basics/#proportional-layout",mdxType:"Link"},"Proportional layout"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hideBorders"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"className"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"''"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disableAutoResizing"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)(d.Z,{to:"../basics/#auto-resizing",mdxType:"Link"},"Auto Resizing"))))),(0,l.kt)("h2",{id:"gridview-api"},"Gridview API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const MyComponent = (props: IGridviewPanelProps<{ title: string }>) => {\n    // props.containerApi...\n\n    return <div>{`My first panel has the title: ${props.params.title}`}</div>;\n};\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const onReady = (event: GridviewReadyEvent) => {\n    // event.api...\n};\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Component pixel height")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Component pixel width")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minimumHeight"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maximumHeight"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maximumWidth"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maximumWidth"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"length"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Number of panels")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"panels"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ISplitviewPanel[]")),(0,l.kt)("td",{parentName:"tr",align:null},"all panels")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"orientation"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Orientation")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidLayoutChange"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<void>")),(0,l.kt)("td",{parentName:"tr",align:null},"Fires on layout change")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidLayoutFromJSON"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<void>")),(0,l.kt)("td",{parentName:"tr",align:null},"Fires of layout change caused by a fromJSON deserialization call")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidAddPanel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<IGridviewPanel>")),(0,l.kt)("td",{parentName:"tr",align:null},"Fires when a view is added")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidRemovePanel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<IGridviewPanel>")),(0,l.kt)("td",{parentName:"tr",align:null},"Fires when a view is removed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidActivePanelChange"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<IGridviewPanel \\| undefined>")),(0,l.kt)("td",{parentName:"tr",align:null},"Fires when the active group changes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"addPanel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"addPanel(options: AddComponentOptions): IGridviewPanel")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"removePanel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(panel: IGridviewPanel, sizing?: Sizing): void")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"movePanel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(panel: IGridviewPanel, options: {direction: Direction, refernece:string, size?: number}): void")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getPanel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(id: string) \\| IGridviewPanel \\| undefined")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"updateOptions"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(options:SplitviewComponentUpdateOptions): void")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"focus"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(): void")),(0,l.kt)("td",{parentName:"tr",align:null},"Focus the active panel, if exists")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"layout"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(width: number, height:number): void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(d.Z,{to:"../basics/#auto-resizing",mdxType:"Link"},"Auto Resizing"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fromJSON"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(data: SerializedGridview): void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(d.Z,{to:"../basics/#serialization",mdxType:"Link"},"Serialization"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"toJSON"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(): SerializedGridview")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(d.Z,{to:"../basics/#serialization",mdxType:"Link"},"Serialization"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clear"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(): void")),(0,l.kt)("td",{parentName:"tr",align:null},"Clears the current layout")))),(0,l.kt)("h2",{id:"gridview-panel-api"},"Gridview Panel API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const MyComponent = (props: IGridviewPanelProps<{ title: string }>) => {\n    // props.api...\n\n    return <div>{`My first panel has the title: ${props.params.title}`}</div>;\n};\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Panel id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isFocused"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Is panel focsed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isActive"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Is panel active")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isVisible"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Is panel visible")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Panel width")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Panel height")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidDimensionsChange"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<PanelDimensionChangeEvent>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidFocusChange"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<FocusEvent>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidVisibilityChange"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<VisibilityEvent>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidActiveChange"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<ActiveEvent>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidConstraintsChange"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onDidConstraintsChange: Event<PanelConstraintChangeEvent>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setVisible"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(isVisible: boolean): void")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setActive"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(): void")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setConstraints"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(value: PanelConstraintChangeEvent2): void;")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setSize"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(event: SizeEvent): void")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GridviewReact")," exposes a number of events that the developer can listen to and below is a simple example with a log panel showing those events that occur."),(0,l.kt)(i.R,{mdxType:"EventsGridview"}))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=9b7b975e.5f0800a9.js.map