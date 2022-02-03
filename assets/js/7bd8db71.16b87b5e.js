"use strict";(self.webpackChunkdeneb_doc=self.webpackChunkdeneb_doc||[]).push([[5223],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1374:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],s={id:"introduction",slug:"/",sidebar_position:0,sidebar_label:"Introduction"},c="Declarative Visualization in Power BI",l={unversionedId:"introduction",id:"version-1.0/introduction",title:"Declarative Visualization in Power BI",description:"Deneb is a custom visual for Microsoft Power BI, which allows developers to use the declarative JSON syntax of the Vega or Vega-Lite languages to create their own data visualizations.",source:"@site/versioned_docs/version-1.0/intro.md",sourceDirName:".",slug:"/",permalink:"/1.0/",editUrl:"https://github.com/deneb-viz/deneb-viz.github.io/edit/source/versioned_docs/version-1.0/intro.md",tags:[],version:"1.0",sidebarPosition:0,frontMatter:{id:"introduction",slug:"/",sidebar_position:0,sidebar_label:"Introduction"},sidebar:"mainSidebar",next:{title:"Getting Started",permalink:"/1.0/getting-started"}},u=[],p={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"declarative-visualization-in-power-bi"},"Declarative Visualization in Power BI"),(0,o.kt)("p",null,"Deneb is a custom visual for ",(0,o.kt)("a",{parentName:"p",href:"https://www.powerbi.com"},"Microsoft Power BI"),", which allows developers to use the declarative ",(0,o.kt)("a",{parentName:"p",href:"https://www.json.org/json-en.html"},"JSON")," syntax of the ",(0,o.kt)("a",{parentName:"p",href:"http://vega.github.io/vega"},"Vega")," or ",(0,o.kt)("a",{parentName:"p",href:"http://vega.github.io/vega-lite"},"Vega-Lite")," languages to create their own data visualizations."),(0,o.kt)("p",null,"This is similar to the approaches used for creating ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/power-bi/create-reports/desktop-r-visuals?WT.mc_id=DP-MVP-5003712"},"R")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/power-bi/connect-data/desktop-python-visuals?WT.mc_id=DP-MVP-5003712"},"Python")," visuals in Power BI, with the following additional benefits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Libraries are packaged with the visual, so no additional dependencies on local libraries or gateways for your end-users when publishing reports."),(0,o.kt)("li",{parentName:"ul"},"Specifications are rendered inside the Power BI client, rather than being delegated to another location, typically resulting in faster render times for end-users."),(0,o.kt)("li",{parentName:"ul"},"Built for the web, meaning that it's possible to integrate with Power BI's interactivity features, with some additional setup.")),(0,o.kt)("p",null,"Please use the menu to start learning more about the visual."))}d.isMDXComponent=!0}}]);