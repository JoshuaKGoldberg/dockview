"use strict";(self.webpackChunkdockview_docs=self.webpackChunkdockview_docs||[]).push([[7318],{1029:function(e,n,t){t.d(n,{B:function(){return r}});var a=t(7483),i=t(7294),o={default:function(e){return i.createElement("div",{style:{padding:"20px"}},e.params.title)}},r=function(e){return i.createElement(a.TU,{components:o,proportionalLayout:e.proportional,onReady:function(e){e.api.addPanel({id:"panel_1",component:"default",params:{title:"Panel 1"},minimumSize:100}),e.api.addPanel({id:"panel_2",component:"default",params:{title:"Panel 2"},minimumSize:100}),e.api.addPanel({id:"panel_3",component:"default",params:{title:"Panel 3"},minimumSize:100})},orientation:a.i5.HORIZONTAL,className:"dockview-theme-dark"})}},9415:function(e,n,t){t.d(n,{t:function(){return o}});var a=t(1029),i=t(7294),o=function(e){var n=i.useState(50),t=n[0],o=n[1];return i.createElement("div",{style:{display:"flex",flexDirection:"column",height:"100px",margin:"10px 0px"}},i.createElement("div",{style:{height:"25px",display:"flex",alignItems:"center"}},i.createElement("input",{type:"range",min:20,max:100,defaultValue:50,value:t,onChange:function(e){o(Number(e.target.value))}}),i.createElement("span",{style:{padding:"0px 8px"}},"Slide to resize the splitview container")),i.createElement("div",{style:{flexGrow:1,display:"grid",gridTemplateColumns:t+"fr "+(100-t)+"fr"}},i.createElement("div",{style:{backgroundColor:"rgb(30,30,30)",color:"white",flexGrow:1,border:"1px solid grey"}},i.createElement(a.B,{proportional:e.proportional})),i.createElement("div",null)))}},3623:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return u}});var a=t(7462),i=t(3366),o=(t(7294),t(876)),r=(t(1029),t(9415)),l=["components"],p={sidebar_position:1},s="Basics",d={unversionedId:"basics",id:"basics",title:"Basics",description:"This section will take you through a number of concepts that can be applied to all dockview components.",source:"@site/docs/basics.mdx",sourceDirName:".",slug:"/basics",permalink:"/docs/next/basics",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/basics.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Dockview",permalink:"/docs/next/"},next:{title:"Theme",permalink:"/docs/next/theme"}},c={},u=[{value:"Panels",id:"panels",level:2},{value:"Adding a panel with parameters",id:"adding-a-panel-with-parameters",level:3},{value:"API",id:"api",level:2},{value:"Serialization",id:"serialization",level:3},{value:"Auto resizing",id:"auto-resizing",level:2},{value:"Events",id:"events",level:2},{value:"Proportional layout",id:"proportional-layout",level:2},{value:"Browser support",id:"browser-support",level:2}],m={toc:u};function h(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"basics"},"Basics"),(0,o.kt)("p",null,"This section will take you through a number of concepts that can be applied to all dockview components."),(0,o.kt)("h2",{id:"panels"},"Panels"),(0,o.kt)("p",null,"The below examples use ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactSplitview")," but the logic holds for ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactPaneview"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactGridview")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactDockview")," using their respective implementations and interfaces.\nAll components require you to provide an ",(0,o.kt)("inlineCode",{parentName:"p"},"onReady")," prop which you can use to build and control your component."),(0,o.kt)("h3",{id:"adding-a-panel-with-parameters"},"Adding a panel with parameters"),(0,o.kt)("p",null,"You can pass parameters to a panel through the ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," object"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const onReady = (event: SplitviewReadyEvent) => {\n    event.api.addPanel({\n        id: 'panel_1',\n        component: 'myComponent',\n        params: {\n            title: 'My Title',\n        },\n    });\n};\n")),(0,o.kt)("p",null,"and you can access those properties through the ",(0,o.kt)("inlineCode",{parentName:"p"},"props.params")," object. The TypeScript interface accepts an optional generic type ",(0,o.kt)("inlineCode",{parentName:"p"},"T")," that corresponds to the params objects type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const MyComponent = (props: ISplitviewPanelProps<{ title: string }>) => {\n    return <div>{`My first panel has the title: ${props.params.title}`}</div>;\n};\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,"There are two types of API you will interact with using ",(0,o.kt)("inlineCode",{parentName:"p"},"dockview"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"panel API")," is accessible via ",(0,o.kt)("inlineCode",{parentName:"li"},"props.api")," in user defined panels and via the ",(0,o.kt)("inlineCode",{parentName:"li"},".api")," variable found on panel instances. This API contains actions and variable related to the the individual panel."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"container API")," is accessible via ",(0,o.kt)("inlineCode",{parentName:"li"},"event.api")," in the ",(0,o.kt)("inlineCode",{parentName:"li"},"onReady")," events and ",(0,o.kt)("inlineCode",{parentName:"li"},"props.containerApi")," in user defined panels. This API contains actions and variable related to the component as a whole.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const MyComponent = (props: ISplitviewPanelProps<{ title: string }>) => {\n    React.useEffect(() => {\n        const disposable = props.api.onDidActiveChange((event) => {\n            console.log(`is panel active: ${event.isActive}`);\n        });\n\n        return () => {\n            disposable.dispose(); // remember to dispose of any subscriptions\n        };\n    }, [props.api]);\n\n    const addAnotherPanel = React.useCallback(() => {\n        props.containerApi.addPanel({\n            id: 'another_id',\n            component: 'anotherComponent',\n        });\n    }, [props.containerApi]);\n\n    return (\n        <div>\n            <span>{`My first panel has the title: ${props.params.title}`}</span>\n            <button onClick={addAnotherPanel}>Add Panel</button>\n        </div>\n    );\n};\n")),(0,o.kt)("h3",{id:"serialization"},"Serialization"),(0,o.kt)("p",null,"All components support ",(0,o.kt)("inlineCode",{parentName:"p"},"toJSON(): T")," which returns a Typed object representation of the components state. This same Typed object can be used to deserialize a view using ",(0,o.kt)("inlineCode",{parentName:"p"},"fromJSON(object: T): void"),"."),(0,o.kt)("h2",{id:"auto-resizing"},"Auto resizing"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SplitviewReact"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"GridviewReact"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"PaneviewReact")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"DockviewReact")," will all automatically resize to fill the size of their parent element.\nInternally this is achieved using a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver"},"ResizeObserver")," which some users may need to polyfill.\nYou can disable this by settings the ",(0,o.kt)("inlineCode",{parentName:"p"},"disableAutoResizing")," prop to be ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("p",null,"You can manually resize a component using the API method ",(0,o.kt)("inlineCode",{parentName:"p"},"layout(width: number, height: number): void"),".\nAn advanced case may use this in conjunction with ",(0,o.kt)("inlineCode",{parentName:"p"},"disableAutoResizing=true")," to allow a parent component to have ultimate control over the dimensions of the component."),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("p",null,"Many API properties can be listened on using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Event")," pattern. For example ",(0,o.kt)("inlineCode",{parentName:"p"},"api.onDidFocusChange(() => {...})"),".\nYou should dispose of any event listeners you create cleaning up any listeners you would have created."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"React.useEffect(() => {\n    const disposable = api.onDidFocusChange(() => {\n        // write some code\n    });\n\n    return () => {\n        disposable.dispose();\n    };\n}, []);\n")),(0,o.kt)("h2",{id:"proportional-layout"},"Proportional layout"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"proportionalLayout")," property indicates the expected behaviour of the component as it's container resizes, should all views resize equally or should just one view expand to fill the new space. ",(0,o.kt)("inlineCode",{parentName:"p"},"proportionalLayout")," can be set as a property on ",(0,o.kt)("inlineCode",{parentName:"p"},"SplitviewReact")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"GridviewReact")," components.\nAlthough not configurable on ",(0,o.kt)("inlineCode",{parentName:"p"},"DockviewReact")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PaneviewReact")," these both behave as if ",(0,o.kt)("inlineCode",{parentName:"p"},"proportionalLayout=true")," was set for them."),(0,o.kt)(r.t,{proportional:!1,mdxType:"SimpleSplitview2"}),(0,o.kt)(r.t,{proportional:!0,mdxType:"SimpleSplitview2"}),(0,o.kt)("h2",{id:"browser-support"},"Browser support"),(0,o.kt)("p",null,"dockview is intended to support all major browsers. Some users may require a polyfill for ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver"},"ResizeObserver"),"."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=dfb2590f.b772bc09.js.map