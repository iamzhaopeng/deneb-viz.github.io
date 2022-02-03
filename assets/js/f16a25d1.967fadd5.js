"use strict";(self.webpackChunkdeneb_doc=self.webpackChunkdeneb_doc||[]).push([[7985],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7169:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"performance-considerations",description:"Things to consider when working with large datasets or a large quantity of marks",slug:"/performance",title:"Performance Considerations"},l="Performance Considerations",c={unversionedId:"deeper-concepts/performance-considerations",id:"version-1.1/deeper-concepts/performance-considerations",title:"Performance Considerations",description:"Things to consider when working with large datasets or a large quantity of marks",source:"@site/versioned_docs/version-1.1/deeper-concepts/performance-considerations.md",sourceDirName:"deeper-concepts",slug:"/performance",permalink:"/performance",editUrl:"https://github.com/deneb-viz/deneb-viz.github.io/edit/source/versioned_docs/version-1.1/deeper-concepts/performance-considerations.md",tags:[],version:"1.1",frontMatter:{id:"performance-considerations",description:"Things to consider when working with large datasets or a large quantity of marks",slug:"/performance",title:"Performance Considerations"},sidebar:"mainSidebar",previous:{title:"Templates",permalink:"/templates"},next:{title:"Interactivity Features",permalink:"/interactivity-overview"}},u=[{value:"It&#39;s Early Days for Deneb",id:"its-early-days-for-deneb",children:[],level:2},{value:"Selection of Renderer",id:"selection-of-renderer",children:[],level:2},{value:"Applying Changes as You Type vs. Manually",id:"applying-changes-as-you-type-vs-manually",children:[],level:2},{value:"Include only Necessary Columns and Measures",id:"include-only-necessary-columns-and-measures",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"performance-considerations"},"Performance Considerations"),(0,o.kt)("h2",{id:"its-early-days-for-deneb"},"It's Early Days for Deneb"),(0,o.kt)("p",null,"We're in the very first stages of getting Deneb off the ground and most of what has been done so far has been around solving technical challenges to get the functionality working within a custom visual."),(0,o.kt)("p",null,"For the majority of cases, Deneb should perform quite well, but if you're building a behemoth visual with lots of data, then you may need to think about the resulting output and the demand this can potentially create on a client machine - either while you're building a visual, or when your end users are consuming it."),(0,o.kt)("p",null,"Please bear in mind that while care has been taken so far to try and make things work nicely, we will apply concerted effort to work on performance of the interface as we iterate."),(0,o.kt)("p",null,"The following page has some recommendations for keeping performance optimal."),(0,o.kt)("h2",{id:"selection-of-renderer"},"Selection of Renderer"),(0,o.kt)("p",null,"You can specify the renderer to use ",(0,o.kt)("a",{parentName:"p",href:"visual-editor#settings-tab"},"in the Settings panel of the Visual Editor"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SVG")," is the default , which will render your specification using vector graphics. You also have the option to select ",(0,o.kt)("strong",{parentName:"p"},"Canvas"),", which will use pixel graphics."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'SVG is typically used for the lion\'s share of simple data visualizations and tyically produces "clearer" output that scales well at a variety of sizes.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"However much like adding multiple visuals to a report page in Power BI can have an impact on performance, using SVG with a lot of data can have similar detrimental effects on performance.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It's recommended that you try and stick with Canvas, particularly if you're prototyping a design and aren't sure on how many elements or data points you're potentially working with.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you want to use SVG and you're working with a lot of data, consider if you can use elements that consolidate many data points into a single item on-screen, such as a ",(0,o.kt)("inlineCode",{parentName:"p"},"line")," rather than a ",(0,o.kt)("inlineCode",{parentName:"p"},"point"),", as this helps reduce the number of moving parts."))),(0,o.kt)("p",null,"For more details on Canvas vs. SVG, ",(0,o.kt)("a",{parentName:"p",href:"https://css-tricks.com/when-to-use-svg-vs-when-to-use-canvas"},"there's a great article here at CSS-Tricks")," that consolidates a lot of useful info and summarizes a number of pros and cons."),(0,o.kt)("h2",{id:"applying-changes-as-you-type-vs-manually"},"Applying Changes as You Type vs. Manually"),(0,o.kt)("p",null,"The Visual Editor has the ability to ",(0,o.kt)("a",{parentName:"p",href:"visual-editor#toggle-auto-apply-ctrl--shift--enter"},"apply changes to your output as you type them"),". Whilst this is pretty cool, it can really slow things down if you're making many changes to a particularly ambitious specification in a short space of time, as each change requires Vega or Vega-Lite to re-parse and render the output."),(0,o.kt)("p",null,"We already use some techinques to minimise unnecessary chatter if this option is enabled, such as ",(0,o.kt)("a",{parentName:"p",href:"https://css-tricks.com/debouncing-throttling-explained-examples/"},"debouncing text input"),", but it's still recommended that you apply your changes manually when ready, if editing a complex or data-intensive specification."),(0,o.kt)("h2",{id:"include-only-necessary-columns-and-measures"},"Include only Necessary Columns and Measures"),(0,o.kt)("p",null,"Any data that you add to the visual will have performance implications, specifically:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The DAX query required by Power BI to generate the dataset for Deneb.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The amount of resources needed by Deneb to process the dataset and for Vega or Vega-Lite to render the resulting output as per your specification.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Creating a row context with lower granularity than you actually need, which can make producing the desired output more challenging."))),(0,o.kt)("p",null,"Therefore, only add the columns and measures (and filter context) that your visual needs to communicate its message."))}d.isMDXComponent=!0}}]);