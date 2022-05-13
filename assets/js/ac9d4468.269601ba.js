"use strict";(self.webpackChunkdeneb_doc=self.webpackChunkdeneb_doc||[]).push([[8328],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return m}});var i=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,i,n=function(t,e){if(null==t)return{};var a,i,n={},o=Object.keys(t);for(i=0;i<o.length;i++)a=o[i],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)a=o[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=i.createContext({}),s=function(t){var e=i.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},d=function(t){var e=s(t.components);return i.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},c=i.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=s(a),m=n,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return a?i.createElement(h,r(r({ref:e},d),{},{components:a})):i.createElement(h,r({ref:e},d))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,r=new Array(o);r[0]=c;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:n,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85151:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var i=a(83117),n=a(80102),o=(a(67294),a(3905)),r=["components"],l={id:"tooltips",slug:"/interactivity-tooltips",sidebar_label:"Tooltips"},p="Tooltips",s={unversionedId:"interactivity/tooltips",id:"version-1.1/interactivity/tooltips",title:"Tooltips",description:"We saw in the worked example, that it's fairly straightforward to add tooltips to a specification, but we'll unpack on this page in a bit more detail.",source:"@site/versioned_docs/version-1.1/interactivity/tooltips.md",sourceDirName:"interactivity",slug:"/interactivity-tooltips",permalink:"/1.1/interactivity-tooltips",draft:!1,editUrl:"https://github.com/deneb-viz/deneb-viz.github.io/edit/source/versioned_docs/version-1.1/interactivity/tooltips.md",tags:[],version:"1.1",frontMatter:{id:"tooltips",slug:"/interactivity-tooltips",sidebar_label:"Tooltips"},sidebar:"mainSidebar",previous:{title:"Interactivity Features",permalink:"/1.1/interactivity-overview"},next:{title:"Context Menu",permalink:"/1.1/interactivity-context-menu"}},d={},u=[{value:"Tooltip Strategy",id:"tooltip-strategy",level:2},{value:"Data Point Resolution",id:"data-point-resolution",level:2},{value:"Default Tooltip Styling",id:"default-tooltip-styling",level:2},{value:"Vega-Lite Syntax",id:"vega-lite-syntax",level:2},{value:"Vega Syntax",id:"vega-syntax",level:2},{value:"&#39;Debugging&#39; with Tooltips",id:"debugging-with-tooltips",level:2},{value:"Limitations and Considerations",id:"limitations-and-considerations",level:2}],c={toc:u};function m(t){var e=t.components,l=(0,n.Z)(t,r);return(0,o.kt)("wrapper",(0,i.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tooltips"},"Tooltips"),(0,o.kt)("p",null,"We saw ",(0,o.kt)("a",{parentName:"p",href:"simple-example#tooltips"},"in the worked example"),", that it's fairly straightforward to add tooltips to a specification, but we'll unpack on this page in a bit more detail."),(0,o.kt)("p",null,"If you haven't read it already, it's worth reviewing the ",(0,o.kt)("a",{parentName:"p",href:"interactivity-overview"},"preceding page")," to understand some of the considerations that need to be made with integrating back to Power BI. It will certainly help with understanding the logistics around report page tooltips in particular."),(0,o.kt)("h2",{id:"tooltip-strategy"},"Tooltip Strategy"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/vega/vega-tooltip/blob/master/docs/creating_your_tooltip.md#step-4-define-your-tooltip-in-vega-or-vega-lite"},"Vega")," and ",(0,o.kt)("a",{parentName:"p",href:"https://vega.github.io/vega-lite/docs/tooltip.html"},"Vega-Lite")," both provide the ability to customize how their tooltip events can be interpreted. Deneb contains a tooltip handler writen specifically for Power BI, which will display under the following conditions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Tooltip Handler")," is enabled in the ",(0,o.kt)("em",{parentName:"p"},"Vega > Power BI Interactivity")," section of the ",(0,o.kt)("a",{parentName:"p",href:"visual-editor#settings-tab"},"Settings pane in the Visual editor"),". This is enabled by default.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"An appropriate ",(0,o.kt)("inlineCode",{parentName:"p"},"tooltip")," property is assigned to a mark. Refer ",(0,o.kt)("a",{parentName:"p",href:"#vega-lite-syntax"},"below")," for the recommended syntax for each provider.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"A tooltip-enabled mark is hovered over."))),(0,o.kt)("h2",{id:"data-point-resolution"},"Data Point Resolution"),(0,o.kt)("p",null,"Provided that your mark's datum is not transformed or mutated away from the ",(0,o.kt)("inlineCode",{parentName:"p"},'"dataset"')," and represents the ",(0,o.kt)("em",{parentName:"p"},'"pure"')," row context passed-in, Deneb can resolve this back to Power BI for delegation."),(0,o.kt)("p",null,"If a report page exists with at least one of the columns in the current datum, then Power BI will display it for the current row context, e.g.:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"tooltip-report-page-example.png",src:a(87195).Z,title:"Deneb resolving a mark's datum back to a report page tooltip.",width:"639",height:"366"})),(0,o.kt)("p",null,"If there is no suitable report page for the current datum or you have specified a default tooltip in the ",(0,o.kt)("em",{parentName:"p"},"Tooltip")," menu in Power BI's ",(0,o.kt)("em",{parentName:"p"},"Properties")," pane, then a default tooltip will be displayed, e.g.:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"tooltip-default-example.png",src:a(59278).Z,title:"Deneb resolving a mark's datum back to a default tooltip.",width:"640",height:"432"})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"A default tooltip will display all values for the current mark's datum, including any other columns or measures bound to its particular row context."))),(0,o.kt)("p",null,"If the title of a tooltip field matches the name of a column or measure from the ",(0,o.kt)("strong",{parentName:"p"},"Values")," data role, Deneb will attempt to see if it has a format string set in the data model and apply this automatically. If this cannot be resolved, then you can consider ",(0,o.kt)("a",{parentName:"p",href:"formatting"},"applying a format manually"),"."),(0,o.kt)("p",null,"If you have enabled ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/power-bi/create-reports/desktop-visual-tooltips"},"modern tooltip support")," in your report, and a data point has a corresponding drill through page, this is resolved in the tooltip, e.g.:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"tooltip-modern.png",src:a(19786).Z,title:"Deneb resolving a mark's datum back to a default tooltip. In this case, modern tooltip support is enabled, and a drill through page is available.",width:"835",height:"417"})),(0,o.kt)("h2",{id:"default-tooltip-styling"},"Default Tooltip Styling"),(0,o.kt)("p",null,"This is done in the usual way, i.e. in the ",(0,o.kt)("em",{parentName:"p"},"Tooltip")," menu in Power BI's properties pane."),(0,o.kt)("h2",{id:"vega-lite-syntax"},"Vega-Lite Syntax"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://vega.github.io/vega-lite/docs/tooltip.html#encoding"},"simplest approach for this")," is recommended, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n        "mark": {\n            ...\n            "tooltip": true,\n            ...\n        },\n    ...\n}\n')),(0,o.kt)("h2",{id:"vega-syntax"},"Vega Syntax"),(0,o.kt)("p",null,"With Vega, you need to specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"tooltip")," signal in your mark's ",(0,o.kt)("inlineCode",{parentName:"p"},"encode")," property, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "encode": {\n        "enter": {\n            ...\n            "tooltip": {\n                "signal": "datum"\n            },\n            ...\n        }\n    },\n    ...\n}\n')),(0,o.kt)("h2",{id:"debugging-with-tooltips"},"'Debugging' with Tooltips"),(0,o.kt)("p",null,"If you're using an approach to display the underlying data point (",(0,o.kt)("a",{parentName:"p",href:"https://vega.github.io/vega-lite/docs/tooltip.html#data"},"e.g. Vega-Lite"),") rather than the resolved tooltip info that Vega provides by setting to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", we're able to see a bit further under the hood, .e.g:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"tooltip-datum-full.png",src:a(63230).Z,title:"The raw underlying tooltip datum exposes additional properties.",width:"613",height:"449"})),(0,o.kt)("p",null,"This can be useful to understand what additional fields or calculations may be applied to a datum for usage in expressions. It can also help to understand if a mark still ",(0,o.kt)("a",{parentName:"p",href:"interactivity-overview/#reconciliation-of-data-andor-row-context"},"has row context")," and can be reconciled back to Power BI for interactivity purposes. If a tooltip's ",(0,o.kt)("inlineCode",{parentName:"p"},"datum")," contains the following properties, then this is a slam-dunk:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"__identity__")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"__key__")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"identityIndex")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"__selected__"))),(0,o.kt)("p",null,"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"interactivity-overview/#additional-datum-fields"},"interactivity documentation")," for a further explanation of what these mean."),(0,o.kt)("h2",{id:"limitations-and-considerations"},"Limitations and Considerations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Tooltip integration with Power BI is wholly dependent on the correct row context. ",(0,o.kt)("a",{parentName:"p",href:"#data-point-resolution"},"Refer above"),", or to the ",(0,o.kt)("a",{parentName:"p",href:"interactivity-overview"},"Overview")," page for more information about ensuring this is preserved.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Adding a tooltip does not automatically add visual feedback or effects. If you want to track the position of the resolved data point more visually (e.g. like for a line chart), you will need to add a suitable set of marks to do this. Both ",(0,o.kt)("a",{parentName:"p",href:"https://vega.github.io/vega/examples/"},"Vega")," and ",(0,o.kt)("a",{parentName:"p",href:"https://vega.github.io/vega-lite/examples/"},"Vega-Lite")," have examples you can refer to.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Development so far has been focused on Power BI integration. It's possible that if you deviate from the above patterns, then tooltips may not display correctly. If you find any such use cases, please ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/deneb-viz/deneb/issues"},"create an issue")," with the appropriate reproduction steps (e.g. example specification and/or data) and we'll see what we can do about it."))))}m.isMDXComponent=!0},63230:function(t,e,a){e.Z=a.p+"assets/images/tooltip-datum-full-cca98d1ed92e4745bac8186030dd085d.png"},59278:function(t,e,a){e.Z=a.p+"assets/images/tooltip-default-example-8e1601928a47c24d96dfa452e8a76e47.png"},19786:function(t,e,a){e.Z=a.p+"assets/images/tooltip-modern-5e4edbef7b62b097844028310aa755db.png"},87195:function(t,e,a){e.Z=a.p+"assets/images/tooltip-report-page-example-314637288f112f61ac93a540007ea665.png"}}]);