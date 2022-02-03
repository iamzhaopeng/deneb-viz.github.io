"use strict";(self.webpackChunkdeneb_doc=self.webpackChunkdeneb_doc||[]).push([[8929],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9301:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={id:"pattern-fills",title:"Pattern Fills",description:"Understanding how to work with pattern fills in Deneb",slug:"/pattern-fills"},s="Pattern Fills",p={unversionedId:"deeper-concepts/pattern-fills",id:"version-1.1/deeper-concepts/pattern-fills",title:"Pattern Fills",description:"Understanding how to work with pattern fills in Deneb",source:"@site/versioned_docs/version-1.1/deeper-concepts/pattern-fills.md",sourceDirName:"deeper-concepts",slug:"/pattern-fills",permalink:"/pattern-fills",editUrl:"https://github.com/deneb-viz/deneb-viz.github.io/edit/source/versioned_docs/version-1.1/deeper-concepts/pattern-fills.md",tags:[],version:"1.1",frontMatter:{id:"pattern-fills",title:"Pattern Fills",description:"Understanding how to work with pattern fills in Deneb",slug:"/pattern-fills"},sidebar:"mainSidebar",previous:{title:"Color Schemes",permalink:"/schemes"},next:{title:"Templates",permalink:"/templates"}},d=[{value:"Overview",id:"overview",children:[],level:2},{value:"Default Patterns",id:"default-patterns",children:[{value:"Backgrounds",id:"backgrounds",children:[],level:3},{value:"Intensity Modifier",id:"intensity-modifier",children:[],level:3},{value:"Available Patterns",id:"available-patterns",children:[],level:3}],level:2},{value:"Dynamic Variations",id:"dynamic-variations",children:[{value:"The <code>pbiPatternSVG</code> Expression Function",id:"the-pbipatternsvg-expression-function",children:[],level:3},{value:"Simple Example - Mark Properties",id:"simple-example---mark-properties",children:[],level:3}],level:2}],u={toc:d};function c(e){var t=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pattern-fills"},"Pattern Fills"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Pattern fills are not a Vega feature")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"They are only supported for the SVG renderer and will not work for Canvas. Please bear these points in mind if looking to port a specification elsewhere."))),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"There are a range of SVG fill patterns available wherever a ",(0,r.kt)("inlineCode",{parentName:"p"},"color"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"stroke")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"fill")," can be used in a mark's property. These are based on ",(0,r.kt)("a",{parentName:"p",href:"https://iros.github.io/patternfills/"},"the excellent work of Irene Ros"),"."),(0,r.kt)("p",null,"Because SVG patterns have to be explicitly defined inside a web page, we can't add all possible combinations of colors and patterns without significant performance reduction. Therefore the functionality is split into two components:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Default Patterns"),": pre-defined monochrome patterns, which are a good starting point for many data visualization use cases."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Dynamic Variations"),": a custom expression function to generate variations of the default patterns with a specific foreground and/or background color.")),(0,r.kt)("h2",{id:"default-patterns"},"Default Patterns"),(0,r.kt)("p",null,"Default patterns are referenced using the following syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"url(#[pattern name])\n")),(0,r.kt)("p",null,"For example, if we want to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"diagonal-stripe-1")," pattern, we would refer to this as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"url(#diagonal-stripe-1)\n")),(0,r.kt)("p",null,"So, instead of shading our example bar chart from the formatting page with a color, we could use this instead, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"{5}","{5}":!0},'{\n  "data": { "name": "dataset" },\n  "mark": {\n    "type": "bar",\n    "fill": "url(#diagonal-stripe-1)"\n  },\n  "encoding": {\n    "y": {\n      "field": "Country",\n      "type": "nominal"\n    },\n    "x": {\n      "field": "$ Sales",\n      "type": "quantitative"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"And instead of a solid fill, we would now get the following rendered visual:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"vega-lite-diagonal-stripe-1.png",src:n(5394).Z,title:"Simple bar chart using Financial sample dataset (with [$ Sales] as a measure). The measure axis displays raw values, with a maximum of 1,000,000,000. We have specified the 'diagonal-stripe-1' pattern fill to fill the bars with a pattern instead of a solid color."})),(0,r.kt)("p",null,"We could augment this with a ",(0,r.kt)("inlineCode",{parentName:"p"},"stroke")," to provide a boundary to the mark, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"highlight={6}",highlight:"{6}"},'{\n  "data": { "name": "dataset" },\n  "mark": {\n    "type": "bar",\n    "fill": "url(#diagonal-stripe-1)",\n    "stroke": "black"\n  },\n  "encoding": {\n    "y": {\n      "field": "Country",\n      "type": "nominal"\n    },\n    "x": {\n      "field": "$ Sales",\n      "type": "quantitative"\n    }\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"vega-lite-diagonal-stripe-1-stroke.png",src:n(1751).Z,title:"We can add a stroke property to border a mark with a pattern fill."})),(0,r.kt)("h3",{id:"backgrounds"},"Backgrounds"),(0,r.kt)("p",null,"Default patterns have a transparent background, and this can be observed in the above example with the x-axis gridlines. If you want to provide a solid background, you can either use the ",(0,r.kt)("a",{parentName:"p",href:"#dynamic-variations"},"dynamic pattern variation expression"),", or layer a mark behind it with a solid fill, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"highlight={3-10,16-17}",highlight:"{3-10,16-17}"},'{\n  "data": { "name": "dataset" },\n  "layer": [\n    {\n      "mark": {\n        "type": "bar",\n        "fill": "white"\n      }\n    },\n    {\n      "mark": {\n        "type": "bar",\n        "fill": "url(#diagonal-stripe-1)",\n        "stroke": "black"\n      }\n    }\n  ],\n  "encoding": {\n    "y": {\n      "field": "Country",\n      "type": "nominal"\n    },\n    "x": {\n      "field": "$ Sales",\n      "type": "quantitative"\n    }\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"vega-lite-diagonal-stripe-1-solid-layer.png",src:n(3713).Z,title:"Adding a layer and a mark with a solid fill behind our mark with a pattern fill can remove transparency."})),(0,r.kt)("h3",{id:"intensity-modifier"},"Intensity Modifier"),(0,r.kt)("p",null,"Default patterns also have a modifier suffix that can be added to reduce the intensity of the stroke from ",(0,r.kt)("inlineCode",{parentName:"p"},"black (#000000)")," to a softer color. These are in intervals of 10, from ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"90"),", and also at the 1st and 3rd quartiles (",(0,r.kt)("inlineCode",{parentName:"p"},"25")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"75"),")."),(0,r.kt)("p",null,"So, for our above example, if we wish to reduce the stroke intensity down to 30%, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"url(#diagonal-stripe-1-30)"),", e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"highlight={13}",highlight:"{13}"},'{\n  "data": { "name": "dataset" },\n  "layer": [\n    {\n      "mark": {\n        "type": "bar",\n        "fill": "white"\n      }\n    },\n    {\n      "mark": {\n        "type": "bar",\n        "fill": "url(#diagonal-stripe-1-30)",\n        "stroke": "black"\n      }\n    }\n  ],\n  "encoding": {\n    "y": {\n      "field": "Country",\n      "type": "nominal"\n    },\n    "x": {\n      "field": "$ Sales",\n      "type": "quantitative"\n    }\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"vega-lite-diagonal-stripe-1-30.png",src:n(788).Z,title:"Adding a '-30' suffix to the 'diagonal-stripe-1' SVG URL will apply a stroke color of 30% intensity of black."})),(0,r.kt)("h3",{id:"available-patterns"},"Available Patterns"),(0,r.kt)("p",null,"The following Power BI report shows all available pre-defined patterns and their SVG URL IDs."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can hover over a pattern to get a tooltip showing its ID in a larger font, as well as how the SVG URL should look in order to apply it."),(0,r.kt)("li",{parentName:"ul"},"The slicer at the bottom of the page can be used to observe the patterns at the specified intensity, and the SVG URL ID required to apply it.")),(0,r.kt)("iframe",{width:"100%",height:"486",src:"https://app.powerbi.com/view?r=eyJrIjoiMWY0NTdlYjQtYzVlZS00ZjJmLWExMGItNzIxNmYyMjk4ZjAxIiwidCI6IjUzYmJlMGQ3LTU0NzItNGQ0NS04NGY0LWJiNzJiYjFjMjI4OSJ9",frameborder:"0",allowFullScreen:"true"}),(0,r.kt)("h2",{id:"dynamic-variations"},"Dynamic Variations"),(0,r.kt)("p",null,"If you wish to use more color in your patterns, then Deneb provides an expression function that you can use. This will dynamically generate and apply a variation of a default SVG pattern definition to the visual's DOM, and re-use them if necessary."),(0,r.kt)("h3",{id:"the-pbipatternsvg-expression-function"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"pbiPatternSVG")," Expression Function"),(0,r.kt)("p",null,"The function has the following syntax within a Vega or Vega-Lite expression ref:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pbiPatternSVG(pattern, foreground, background)\n")),(0,r.kt)("p",null,"Where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"pattern")," is one of the pre-defined pattern IDs above, enclosed with single quotes."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"#")," used in the SVG URL should not be included here."),(0,r.kt)("li",{parentName:"ul"},"If an unknown (or invalid) ",(0,r.kt)("inlineCode",{parentName:"li"},"pattern")," is provided, then this will result in no fill being applied."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"foreground")," is a valid CSS color name or hex value, enclosed with single quotes."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"foreground")," is omitted (or ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"), Deneb will resolve this back to the value used by the default pattern (",(0,r.kt)("inlineCode",{parentName:"li"},"black"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transparent")," is a permitted value, and this will effectively hide the pattern stroke from the reader."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"foreground")," overrides the intensity modifier, if this is supplied in ",(0,r.kt)("inlineCode",{parentName:"li"},"pattern"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"background")," is a valid CSS color name or hex value, enclosed with single quotes."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"background")," is omitted, then Deneb will produce a transparent background for the generated pattern.")))),(0,r.kt)("h3",{id:"simple-example---mark-properties"},"Simple Example - Mark Properties"),(0,r.kt)("p",null,"If we wanted to apply a custom foreground and background, we could use ",(0,r.kt)("inlineCode",{parentName:"p"},"pbiPatternSVG")," in an expression function as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"highlight={5-7}",highlight:"{5-7}"},'{\n  "data": { "name": "dataset" },\n  "mark": {\n    "type": "bar",\n    "fill": {\n      "expr": "pbiPatternSVG(\'diagonal-stripe-3\', \'#DA9A0F\', \'#333333\')"\n    },\n    "stroke": "black"\n  },\n  "encoding": {\n    "y": {\n      "field": "Country",\n      "type": "nominal"\n    },\n    "x": {\n      "field": "$ Sales",\n      "type": "quantitative"\n    }\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pbiPatternSVG-simple-fg-bg.png",src:n(3284).Z,title:"Using the 'pbiPatternSVG' function with a foreground color of '#DA9A0F' and '#333333' to produce a diagonal stripe effect on our example bar chart."})))}c.isMDXComponent=!0},3284:function(e,t,n){t.Z=n.p+"assets/images/pbiPatternSVG-simple-fg-bg-97a43caab47b2ed77fabbb33970c4d0b.png"},788:function(e,t,n){t.Z=n.p+"assets/images/vega-lite-diagonal-stripe-1-30-5a5163337ab76d08849c93b048c6668e.png"},3713:function(e,t,n){t.Z=n.p+"assets/images/vega-lite-diagonal-stripe-1-solid-layer-309a6405c5c65667f97f529ce6b79913.png"},1751:function(e,t,n){t.Z=n.p+"assets/images/vega-lite-diagonal-stripe-1-stroke-cb038ba033601fa51c0df34e4a5d2fbe.png"},5394:function(e,t,n){t.Z=n.p+"assets/images/vega-lite-diagonal-stripe-1-8e119801ca07424995d2f530e2246b11.png"}}]);