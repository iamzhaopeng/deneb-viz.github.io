"use strict";(self.webpackChunkdeneb_doc=self.webpackChunkdeneb_doc||[]).push([[721],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=i,h=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8981:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={id:"changelog",description:"Deneb Change Log - high-level details of new features and fixes for each version"},c="Change Log",s={unversionedId:"changelog",id:"version-1.0/changelog",title:"Change Log",description:"Deneb Change Log - high-level details of new features and fixes for each version",source:"@site/versioned_docs/version-1.0/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/changelog",editUrl:"https://github.com/deneb-viz/deneb-viz.github.io/edit/source/versioned_docs/version-1.0/changelog.md",tags:[],version:"1.0",frontMatter:{id:"changelog",description:"Deneb Change Log - high-level details of new features and fixes for each version"},sidebar:"mainSidebar",previous:{title:"Cross-Filtering (Selection)",permalink:"/interactivity-selection"},next:{title:"Previous Releases (< 1.0)",permalink:"/archive/changelog-001"}},u=[{value:"1.0.0 (2021-11-13)",id:"100-2021-11-13",children:[{value:"IMPORTANT NOTES",id:"important-notes",children:[],level:3},{value:"Bugs Fixed",id:"bugs-fixed",children:[],level:3},{value:"Performance and Stability",id:"performance-and-stability",children:[],level:3}],level:2},{value:"Older Versions",id:"older-versions",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"change-log"},"Change Log"),(0,o.kt)("h2",{id:"100-2021-11-13"},"1.0.0 (2021-11-13)"),(0,o.kt)("h3",{id:"important-notes"},"IMPORTANT NOTES"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This is the promotion of the preview codebase into ",(0,o.kt)("a",{parentName:"li",href:"https://appsource.microsoft.com/en-us/product/power-bi-visuals/coacervolimited1596856650797.deneb"},"the official AppSource release")," \ud83c\udf89\ud83c\udf89\ud83c\udf89\ud83c\udf89"),(0,o.kt)("li",{parentName:"ul"},"Fetching via remote URLs (e.g. for image marks) has been disabled to comply with Power BI certification requirements. This can be mitigated by ",(0,o.kt)("a",{parentName:"li",href:"getting-started#standalone-version"},"downloading the standalone build"),"."),(0,o.kt)("li",{parentName:"ul"},"There a no major changes in this release; just those that help with QA.")),(0,o.kt)("h3",{id:"bugs-fixed"},"Bugs Fixed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Swapping editor position causes editor UI to crash (#137)")),(0,o.kt)("h3",{id:"performance-and-stability"},"Performance and Stability"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Improved target area of whitespace for clearing an active selection (#140)"),(0,o.kt)("li",{parentName:"ul"},"Visual rendering events synced-up with Vega View API (#141)")),(0,o.kt)("h2",{id:"older-versions"},"Older Versions"),(0,o.kt)("p",null,"To keep the change log (reasonably) tidy, the details of older versions get archived from time to time. Each archive can be found as a sub-page of this section (and you can follow the navigation below to continue reading)."))}p.isMDXComponent=!0}}]);