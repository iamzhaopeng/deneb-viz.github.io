"use strict";(self.webpackChunkdeneb_doc=self.webpackChunkdeneb_doc||[]).push([[6159],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14201:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],l={id:"context-menu",slug:"/interactivity-context-menu",sidebar_label:"Context Menu"},s="Context Menu",u={unversionedId:"interactivity/context-menu",id:"version-1.2/interactivity/context-menu",title:"Context Menu",description:"If you or a user right-clicks the visual canvas, Deneb will display the Power BI context menu.",source:"@site/versioned_docs/version-1.2/interactivity/context-menu.md",sourceDirName:"interactivity",slug:"/interactivity-context-menu",permalink:"/interactivity-context-menu",draft:!1,editUrl:"https://github.com/deneb-viz/deneb-viz.github.io/edit/source/versioned_docs/version-1.2/interactivity/context-menu.md",tags:[],version:"1.2",frontMatter:{id:"context-menu",slug:"/interactivity-context-menu",sidebar_label:"Context Menu"},sidebar:"mainSidebar",previous:{title:"Tooltips",permalink:"/interactivity-tooltips"},next:{title:"Cross-Filtering (Selection)",permalink:"/interactivity-selection"}},c={},p=[{value:"Context Menu Strategy",id:"context-menu-strategy",level:2},{value:"Data Point Resolution",id:"data-point-resolution",level:2},{value:"Regular Context Menu (or Resolution Not Possible)",id:"regular-context-menu-or-resolution-not-possible",level:2},{value:"Limitations and Considerations",id:"limitations-and-considerations",level:2}],m={toc:p};function d(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"context-menu"},"Context Menu"),(0,i.kt)("p",null,"If you or a user right-clicks the visual canvas, Deneb will display the Power BI context menu."),(0,i.kt)("p",null,"The context menu is managed by the main Power BI window, so Deneb manages integration beetween the Vega view and Power BI, in order to delegate as much as possible on your behalf."),(0,i.kt)("h2",{id:"context-menu-strategy"},"Context Menu Strategy"),(0,i.kt)("p",null,"The context menu works as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The context menu will always be available when right-clicking the visual canvas (or within the boundary representing the visual viewport in the Advanced Editor's ",(0,i.kt)("a",{parentName:"p",href:"visual-editor/#preview-area"},"Preview Area"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can configure whether Deneb should attempt to ",(0,i.kt)("a",{parentName:"p",href:"#data-point-resolution"},"resolve data points")," when invoking the context menu, through the ",(0,i.kt)("strong",{parentName:"p"},"Resolve Data Points in Context Menu")," property in the ",(0,i.kt)("em",{parentName:"p"},"Vega > Power BI Interactivity")," section of the ",(0,i.kt)("a",{parentName:"p",href:"visual-editor#settings-tab"},"Settings pane in the Visual editor"),". This is enabled by default."))),(0,i.kt)("h2",{id:"data-point-resolution"},"Data Point Resolution"),(0,i.kt)("p",null,"With the ",(0,i.kt)("strong",{parentName:"p"},"Resolve Data Points in Context Menu")," property enabled: if the right-click target area is a mark, and represents an un-transformed row from your ",(0,i.kt)("inlineCode",{parentName:"p"},'"dataset"'),", Deneb will attempt to resolve the current row context and present any options that Power BI makes available from the main window, e.g.:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"context-menu-data-point.png",src:n(71794).Z,title:"By default, Deneb will attempt to resolve data point context if a mark is right-clicked.",width:"644",height:"430"})),(0,i.kt)("h2",{id:"regular-context-menu-or-resolution-not-possible"},"Regular Context Menu (or Resolution Not Possible)"),(0,i.kt)("p",null,"If the property is disabled or a datum cannot be resolved from a mark (or the target area is not a mark), Deneb will display the regular context menu, e.g.:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"context-menu-no-data-point.png",src:n(27862).Z,title:"By default, Deneb will attempt to resolve data point context if a mark is right-clicked.",width:"640",height:"431"})),(0,i.kt)("h2",{id:"limitations-and-considerations"},"Limitations and Considerations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Data resolution integration with Power BI is wholly dependent on the correct row context. ",(0,i.kt)("a",{parentName:"p",href:"#data-point-resolution"},"Refer above"),", or to the ",(0,i.kt)("a",{parentName:"p",href:"interactivity-overview"},"Overview")," page for more information about ensuring this is preserved.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The Power BI context menu only accepts a single datum, or row. This means that if you are aggregating rows into marks then we cannot resolve the context menu in these cases."))))}d.isMDXComponent=!0},71794:function(e,t,n){t.Z=n.p+"assets/images/context-menu-data-point-25c634198f37b76d44ab51b332e14cb6.png"},27862:function(e,t,n){t.Z=n.p+"assets/images/context-menu-no-data-point-73d76c70e5624425f2b66416918ebb99.png"}}]);