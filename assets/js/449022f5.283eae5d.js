"use strict";(self.webpackChunkdockview_docs=self.webpackChunkdockview_docs||[]).push([[6884],{7083:function(t,e,a){a.d(e,{f:function(){return o}});var n=a(7483),r=a(7294),l={default:function(t){return r.createElement("div",{style:{padding:"20px"}},t.params.title)}},o=function(){return r.createElement(n.tu,{components:l,onReady:function(t){t.api.addPanel({id:"panel_1",component:"default",params:{title:"Panel 1"}}),t.api.addPanel({id:"panel_2",component:"default",params:{title:"Panel 2"}}),t.api.addPanel({id:"panel_3",component:"default",params:{title:"Panel 3"}}),t.api.addPanel({id:"panel_4",component:"default",params:{title:"Panel 4"},position:{referencePanel:"panel_1",direction:"right"}})},className:"dockview-theme-vs"})}},2318:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(876)),o=a(7083),i=["components"],d={sidebar_position:3},p="Theme",u={unversionedId:"theme",id:"version-1.4.3/theme",title:"Theme",description:"Introduction",source:"@site/versioned_docs/version-1.4.3/theme.mdx",sourceDirName:".",slug:"/theme",permalink:"/docs/theme",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.4.3/theme.mdx",tags:[],version:"1.4.3",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/docs/basics"},next:{title:"Components",permalink:"/docs/category/components"}},c={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Customizing Theme",id:"customizing-theme",level:2}],s={toc:m};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"theme"},"Theme"),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dockview")," requires some css to work correctly.\nThe css is exported as one file under ",(0,l.kt)("a",{parentName:"p",href:"https://unpkg.com/browse/dockview@latest/dist/styles/dockview.css"},(0,l.kt)("inlineCode",{parentName:"a"},"dockview/dict/styles/dockview.css")),"\nand depending can be imported"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"@import './node_modules/dockview/dist/styles/dockview.css';\n")),(0,l.kt)("h2",{id:"customizing-theme"},"Customizing Theme"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dockview")," supports theming through the use of css properties.\nYou can view the built-in themes at ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/mathuo/dockview/blob/master/packages/dockview/src/theme.scss"},(0,l.kt)("inlineCode",{parentName:"a"},"dockview/src/theme.scss")),"\nand are free to build your own themes based on these css properties."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"CSS Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--dv-paneview-active-outline-color"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--dv-tabs-and-actions-container-font-size"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--dv-tabs-and-actions-container-height"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--dv-tab-close-icon"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--dv-drag-over-background-color"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--dv-drag-over-border-color"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--dv-tabs-container-scrollbar-color"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--dv-group-view-background-color"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--dv-tabs-and-actions-container-background-color"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--dv-activegroup-visiblepanel-tab-background-color"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--dv-activegroup-hiddenpanel-tab-background-color"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--dv-inactivegroup-visiblepanel-tab-background-color"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--dv-inactivegroup-hiddenpanel-tab-background-color"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--dv-tab-divider-color"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--dv-activegroup-visiblepanel-tab-color"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--dv-activegroup-hiddenpanel-tab-color"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--dv-inactivegroup-visiblepanel-tab-color"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--dv-inactivegroup-hiddenpanel-tab-color"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--dv-separator-border"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--dv-paneview-header-border-color"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"You can further customise the theme through adjusting class properties but this is up you.\nAs an example if you wanted to add a bottom border to the tab container for an active group in the ",(0,l.kt)("inlineCode",{parentName:"p"},"DockviewReact")," component you could write:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".groupview {\n    &.active-group {\n        > .tabs-and-actions-container {\n            border-bottom: 2px solid var(--dv-activegroup-visiblepanel-tab-background-color);\n        }\n    }\n    &.inactive-group {\n        > .tabs-and-actions-container {\n            border-bottom: 2px solid var(--dv-inactivegroup-visiblepanel-tab-background-color);\n        }\n    }\n}\n")),(0,l.kt)("div",{style:{height:"300px",backgroundColor:"rgb(30,30,30)",color:"white",margin:"20px 0px"}},(0,l.kt)(o.f,{mdxType:"CustomCSSDockview"})))}k.isMDXComponent=!0}}]);
//# sourceMappingURL=449022f5.283eae5d.js.map