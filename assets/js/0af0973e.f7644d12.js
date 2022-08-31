"use strict";(self.webpackChunkdeneb_doc=self.webpackChunkdeneb_doc||[]).push([[6769],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=i,u=c["".concat(s,".").concat(m)]||c[m]||h[m]||o;return a?n.createElement(u,r(r({ref:t},d),{},{components:a})):n.createElement(u,r({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},65100:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const o={id:"selection",slug:"/interactivity-selection",sidebar_label:"Cross-Filtering (Selection)"},r="Cross-Filtering (Selection)",l={unversionedId:"interactivity/selection",id:"version-1.3/interactivity/selection",title:"Cross-Filtering (Selection)",description:"It is possible to enable cross-filtering of other visuals when a mark containing a resolvable datum is clicked (or Ctrl-Clicked for multi-select).",source:"@site/versioned_docs/version-1.3/interactivity/selection.md",sourceDirName:"interactivity",slug:"/interactivity-selection",permalink:"/1.3/interactivity-selection",draft:!1,editUrl:"https://github.com/deneb-viz/deneb-viz.github.io/edit/source/versioned_docs/version-1.3/interactivity/selection.md",tags:[],version:"1.3",frontMatter:{id:"selection",slug:"/interactivity-selection",sidebar_label:"Cross-Filtering (Selection)"},sidebar:"mainSidebar",previous:{title:"Context Menu",permalink:"/1.3/interactivity-context-menu"},next:{title:"Cross-Highlighting",permalink:"/1.3/interactivity-highlight"}},s={},p=[{value:"Cross-Filtering Strategy",id:"cross-filtering-strategy",level:2},{value:"Data Point Resolution",id:"data-point-resolution",level:2},{value:"Primitive Aggregate Resolution",id:"primitive-aggregate-resolution",level:3},{value:"Data Point Limit",id:"data-point-limit",level:2},{value:"The <code>__selected__</code> Field",id:"the-__selected__-field",level:2},{value:"Managing Selection State Visually through Encodings",id:"managing-selection-state-visually-through-encodings",level:2},{value:"Limitations and Considerations",id:"limitations-and-considerations",level:2},{value:"Simple Worked Examples",id:"simple-worked-examples",level:2},{value:"Example 1: Simple Encoding of Opacity with Conditions",id:"example-1-simple-encoding-of-opacity-with-conditions",level:4},{value:"Example 2: Styling Explicitly Selected Marks vs. Standard (neutral)",id:"example-2-styling-explicitly-selected-marks-vs-standard-neutral",level:4},{value:"Example 3: Approach for Styling Aggregate Marks",id:"example-3-approach-for-styling-aggregate-marks",level:4}],d={toc:p};function h(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cross-filtering-selection"},"Cross-Filtering (Selection)"),(0,i.kt)("p",null,"It is possible to enable cross-filtering of other visuals when a mark containing a resolvable datum is clicked (or Ctrl-Clicked for multi-select)."),(0,i.kt)("p",null,"However, cross-filtering is a bit of a special case vs. ",(0,i.kt)("a",{parentName:"p",href:"interactivity-tooltips"},"tooltips")," and the ",(0,i.kt)("a",{parentName:"p",href:"interactivity-context-menu"},"context menu"),". As such, this is ",(0,i.kt)("strong",{parentName:"p"},"disabled")," by default, so as not to create potential UX issues prior to ensuring your visual effects are applied based on selection state. We'll explain on this page what you need to think about if you want to enable this for your visuals, and what to think about from an implementation perspective when creating your specification."),(0,i.kt)("h2",{id:"cross-filtering-strategy"},"Cross-Filtering Strategy"),(0,i.kt)("p",null,"Both ",(0,i.kt)("a",{parentName:"p",href:"https://vega.github.io/vega/docs/event-streams/"},"Vega")," (with Signals and Events) and ",(0,i.kt)("a",{parentName:"p",href:"https://vega.github.io/vega-lite/docs/parameter.html"},"Vega-Lite")," (with Parameters) both have their own ways of managing interactivity internally when it comes to clicking on marks. However we also have to think about ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/power-bi/developer/visuals/selection-api?WT.mc_id=DP-MVP-5003712"},"how Power BI manages selection state between visuals")," and apply this in a generic manner, so Deneb again bridges this particular gap as much as possible. Therefore, cross-filtering works as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can configure whether Deneb should attempt to ",(0,i.kt)("a",{parentName:"p",href:"#data-point-resolution"},"resolve data points")," when clicking on marks, through the ",(0,i.kt)("strong",{parentName:"p"},"Cross-Filtering (Selection) of Data Points")," property in the ",(0,i.kt)("em",{parentName:"p"},"Vega > Power BI Interactivity")," section of the ",(0,i.kt)("a",{parentName:"p",href:"visual-editor#settings-tab"},"Settings pane in the Visual editor"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This setting is ",(0,i.kt)("strong",{parentName:"p"},"disabled")," by default.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For each row in the visual ",(0,i.kt)("inlineCode",{parentName:"p"},'"dataset"'),", Deneb will generate a ",(0,i.kt)("a",{parentName:"p",href:"#the-__selected__-field"},"special field for each row")," called ",(0,i.kt)("inlineCode",{parentName:"p"},'"__selected__"'),", and will update this based on click events, or eligible external events to your visual, such as restoring a bookmark with an active selection state.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If multiple data points are selected (i.e. by holding the Ctrl key), Deneb will add these to the current list of selected data points and update the ",(0,i.kt)("inlineCode",{parentName:"p"},"__selected__")," value accordingly.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Clicking anything other than a mark within the visual canvas (or a mark that cannot be resolved to one or more data points) will clear the current selection from the visual, and signal to Power BI to do the same for other visuals on the page.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It is up to you as a creator to use this field to ",(0,i.kt)("a",{parentName:"p",href:"interactivity-overview#visual-effects-and-behavior"},"manage the visual effects within your specification")," for selected vs. unselected marks. A simple illustration of this is covered ",(0,i.kt)("a",{parentName:"p",href:"simple-example#cross-filtering"},"in the worked example")," and some further simple examples are ",(0,i.kt)("a",{parentName:"p",href:"#managing-selection-state-visually-through-encodings"},"covered further down the page"),"."))),(0,i.kt)("h2",{id:"data-point-resolution"},"Data Point Resolution"),(0,i.kt)("p",null,"With the ",(0,i.kt)("strong",{parentName:"p"},"Cross-Filtering (Selection) of Data Points")," property enabled, Deneb will monitor marks for click events. If the mark represents an un-transformed row's datum from your ",(0,i.kt)("inlineCode",{parentName:"p"},'"dataset"')," (or has enough information for Deneb to resolve it), it will be added to the list of currently selected data points and delegated to Power BI for handling other visuals in a page, e.g.:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"selection-simple-single-point.png",src:a(97885).Z,title:"Enabling cross-filtering and clicking a resolvable data point will trigger selection in other visuals on the page.",width:"950",height:"421"})),(0,i.kt)("admonition",{title:"You Must Manage Visual Effects and Encodings",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Note that the above is based on the visual produced ",(0,i.kt)("a",{parentName:"p",href:"simple-example#adding-cross-filtering"},"in the worked example"),". As such this has an encoding applied to add an effect to marks that are in the current list of selected data points and is to help illustrate the concept. You will need to ",(0,i.kt)("a",{parentName:"p",href:"#managing-selection-state-visually-through-encodings"},"manage such encodings yourself"),". The card to the right of the visual is merely for illustrative purposes: it helps us to re-state the selected values via another measure and confirm selections are propagated.")),(0,i.kt)("p",null,"Holding the Ctrl key and clicking additional marks that contain resolvable data points will add these to the current list and affect other visuals, e.g.:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"selection-simple-multiple-point.png",src:a(45174).Z,title:"Ctrl-clicking additional resolvable data points will add these to the list of selected data points and update other visuals accordingly.",width:"950",height:"422"})),(0,i.kt)("h3",{id:"primitive-aggregate-resolution"},"Primitive Aggregate Resolution"),(0,i.kt)("p",null,"For marks or layers that contain simple aggregates, Deneb can attempt to resolve and collect the individual data points, based on the unique values of grouped fields. This can be useful but there are a couple of considerations here:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Any columns and measures need to be aliased in this new data stream as the corresponding columns and measures they are derived from."),(0,i.kt)("li",{parentName:"ul"},"If you are applying filtering or additional transforms that remove the compent rows, this is not taken into account."),(0,i.kt)("li",{parentName:"ul"},"As the data is a new stream, the granularity (and therefore the row context) is different to the base ",(0,i.kt)("inlineCode",{parentName:"li"},'"dataset"'),". This means that there is no ",(0,i.kt)("a",{parentName:"li",href:"#the-__selected__-field"},"corresponding ",(0,i.kt)("inlineCode",{parentName:"a"},"__selected__")," field")," to help manage selection state, but it is possible to be creative here and give the impression of selection at a higher level; there is an example of this below.")),(0,i.kt)("h2",{id:"data-point-limit"},"Data Point Limit"),(0,i.kt)("p",null,"A high number of active selections can give Power BI a lot of work to do in terms of managing state between all the visuals on a page and can potentially cause performance issues. Given the flexible nature of Vega/Vega-Lite and the types of visuals you can produce, there is a limit on the number of data points that can be supplied to Power BI. This can start to add up, particularly if you use a low level of granularity but are attempting to select a mark that ",(0,i.kt)("a",{parentName:"p",href:"#primitive-aggregate-resolution"},"aggregates many data points"),"."),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"Data Point Limit")," property is exposed in the ",(0,i.kt)("strong",{parentName:"p"},"Settings")," pane when cross-filtering is enabled, e.g.:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"selection-data-limit-property.png",src:a(18683).Z,title:"The Data Point Limit property allows you to specify a maximum number of data points that Power BI should delegate for cross-filtering purposes within the current report page from Deneb.",width:"560",height:"311"})),(0,i.kt)("p",null,"As you can see from the above screenshot, this defaults at ",(0,i.kt)("strong",{parentName:"p"},"50"),", but can be set from anywhere between ",(0,i.kt)("strong",{parentName:"p"},"1")," and ",(0,i.kt)("strong",{parentName:"p"},"250"),"."),(0,i.kt)("p",null,"When interacting with your visual, if you accumulate enough data points in the current selection list, you will see this message in the visual header:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"selection-data-limit-exceeded.png",src:a(18261).Z,title:"If a selection exceeds the maximum limit, Deneb will prompt with a warning and prohibit further selection (but keep the current selection active).",width:"820",height:"61"}),"."),(0,i.kt)("p",null,"In this situation, Deneb will keep the current selection active, but will not add any more rows to it."),(0,i.kt)("p",null,"This warning can then be dismissed by either:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clicking the close icon (continuing to preserve the current selection)"),(0,i.kt)("li",{parentName:"ul"},"Clicking on anothe mark (initializing a new selection, if eligible)"),(0,i.kt)("li",{parentName:"ul"},"Clicking elsewhere in the visual (clearing the selection)")),(0,i.kt)("h2",{id:"the-__selected__-field"},"The ",(0,i.kt)("inlineCode",{parentName:"h2"},"__selected__")," Field"),(0,i.kt)("p",null,"Deneb will maintain the value of this field for each row in your dataset as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"on")),": the visual has an active selection state and the row is ",(0,i.kt)("strong",{parentName:"li"},"included")," in the list of selected data points."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"off")),": the visual has an active selection state and the row is ",(0,i.kt)("strong",{parentName:"li"},"excluded")," from the list of selected data points."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"neutral")),": the visual has no current selection state and the data point should be displayed normally.")),(0,i.kt)("admonition",{title:"Why 3 States?",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The reason we have three states rather than a simple ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"on")),"/",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"off")),", or binary state, is to allow us the (optional) opportunity to style elements that are explicitly highlighted differently to those that are displayed regulary (",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"neutral")),") and open up further possibilities for our readers.")),(0,i.kt)("p",null,"Some further examples of leveraging this state management are ",(0,i.kt)("a",{parentName:"p",href:"#simple-examples"},"detailed further below"),"."),(0,i.kt)("h2",{id:"managing-selection-state-visually-through-encodings"},"Managing Selection State Visually through Encodings"),(0,i.kt)("p",null,"As mentioned higher up, if you want Cross-Filtering to work effectively for your readers, you will need to use the state of the ",(0,i.kt)("inlineCode",{parentName:"p"},"__selected__")," field for each row and encode marks accordingly, so that your visuals communicate selected vs un-selected marks effectively. We'd recommend a similar approach to most other Power BI visuals in at least setting the opacity of effected marks accordingly, but the flexibility of the Vega languages gives you the ability to explore other possibilities."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"#simple-examples"},"Simple Worked Examples")," section below shows how you may be able to get started with exploring this further. While these focus on Vega-Lite, both versions of the ",(0,i.kt)("em",{parentName:"p"},"Simple Bar Chart")," template available from the ",(0,i.kt)("em",{parentName:"p"},"New Specification")," dialog contain simple bindings for Cross-Filtering to help you get started."),(0,i.kt)("h2",{id:"limitations-and-considerations"},"Limitations and Considerations"),(0,i.kt)("admonition",{title:"This Sounds Hard...",type:"info"},(0,i.kt)("p",{parentName:"admonition"},'Well, it\'s not always straightforward! It is early days for this type of "visual thinking" within Power BI, and it is likely that the community will be able to uncover better design patterns than the ones outlined on this page. They will certainly help you get on your way.'),(0,i.kt)("p",{parentName:"admonition"},"If you have found an alternative approach, or have a great idea on how to help us improve this, then ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/deneb-viz/deneb/issues"},"please let us know"),"! We would love to continue to evolve this functionality and make it more accessible if we can do so.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Data resolution integration with Power BI is wholly dependent on the correct row context. ",(0,i.kt)("a",{parentName:"p",href:"#data-point-resolution"},"Refer above"),", or to the ",(0,i.kt)("a",{parentName:"p",href:"interactivity-overview"},"Overview")," page for more information about how to to try and ensure that this is preserved.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It might sometimes be possible to simulate a selection effect when using aggregates, but this will require some lateral thought. ",(0,i.kt)("a",{parentName:"p",href:"#example-3-approach-for-styling-aggregate-marks"},"Example 3 below")," shows one potential approach to how this could be solved."))),(0,i.kt)("h2",{id:"simple-worked-examples"},"Simple Worked Examples"),(0,i.kt)("p",null,"The following examples are for Vega-Lite but similar principles can be applied for Vega."),(0,i.kt)("p",null,"This report shows the three examples below how they would be rendered in Power BI, using a model based on the sample finanical data available in Power BI Desktop. In each case, the full tooltip data is exposed so that you can observe the state of the ",(0,i.kt)("inlineCode",{parentName:"p"},"__selected__")," field. We've also added some additional marks to the examples to show this value explicitly as interaction events occur. We'll provide basic example JSON for each underneath."),(0,i.kt)("iframe",{width:"100%",height:"486",src:"https://app.powerbi.com/view?r=eyJrIjoiMmI5OTRhMGMtODJiMi00MTIyLTgzZDgtYjU2N2M2NWM3ZDk4IiwidCI6IjUzYmJlMGQ3LTU0NzItNGQ0NS04NGY0LWJiNzJiYjFjMjI4OSJ9",frameborder:"0",allowFullScreen:"true"}),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{target:"_blank",href:a(51576).Z},"Download this workbook"))),(0,i.kt)("h4",{id:"example-1-simple-encoding-of-opacity-with-conditions"},"Example 1: Simple Encoding of Opacity with Conditions"),(0,i.kt)("p",null,"As per the worked example and the in-built templates for the bar chart, we can encode our ",(0,i.kt)("inlineCode",{parentName:"p"},"opacity")," based on the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"__selected__")," being set to ",(0,i.kt)("inlineCode",{parentName:"p"},'"off"'),", e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"highlight={16-25} showLineNumbers",highlight:"{16-25}",showLineNumbers:!0},'{\n  "data": { "name": "dataset" },\n  "mark": {\n    "type": "bar",\n    "tooltip": true\n  },\n  "encoding": {\n    "y": {\n      "field": "Country (Short)",\n      "type": "nominal"\n    },\n    "x": {\n      "field": "$ Sales",\n      "type": "quantitative"\n    },\n    "opacity": {\n      "condition": {\n        "test": {\n          "field": "__selected__",\n          "equal": "off"\n        },\n        "value": 0.3\n      },\n      "value": 1\n    }\n  }\n}\n')),(0,i.kt)("h4",{id:"example-2-styling-explicitly-selected-marks-vs-standard-neutral"},"Example 2: Styling Explicitly Selected Marks vs. Standard (neutral)"),(0,i.kt)("p",null,"We can extend the above example to explicitly style selected marks when ",(0,i.kt)("inlineCode",{parentName:"p"},"__selected__")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"on")," rather than just having a binary state if we so wish. Here we have applied a ",(0,i.kt)("a",{parentName:"p",href:"pattern-fills"},"pattern fill")," when ",(0,i.kt)("inlineCode",{parentName:"p"},"__selected__")," for a row is ",(0,i.kt)("inlineCode",{parentName:"p"},"neutral"),", making it more emphasized, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"highlight={25-35} showLineNumbers",highlight:"{25-35}",showLineNumbers:!0},'{\n  "data": { "name": "dataset" },\n  "mark": {\n    "type": "bar",\n    "tooltip": true\n  },\n  "encoding": {\n    "y": {\n      "field": "City",\n      "type": "nominal"\n    },\n    "x": {\n      "field": "Mean Temperature",\n      "type": "quantitative"\n    },\n    "opacity": {\n      "condition": {\n        "test": {\n          "field": "__selected__",\n          "equal": "off"\n        },\n        "value": 0.3\n      }\n    },\n    "fill": {\n      "condition": {\n        "test": {\n          "field": "__selected__",\n          "equal": "on"\n        },\n        "value": {\n          "expr": "pbiPatternSVG(\'diagonal-stripe-6\', \'#605E5C\', \'#ffffff\')"\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("h4",{id:"example-3-approach-for-styling-aggregate-marks"},"Example 3: Approach for Styling Aggregate Marks"),(0,i.kt)("p",null,"This scenario is much more complicated, as many transforms tend to create separate data streams; this will often cause us to the lose the row context information. This example uses aggregates internally to group rows. The top 3 have the same grain but the row identifies are not preserved in the output data stream. The ",(0,i.kt)("em",{parentName:"p"},"'All Others'")," group contains three underlying data points but these are aggregated down to a single row and our lineage is not available."),(0,i.kt)("p",null,"As mentioned above, Deneb will attempt a simple reconciliation against the original ",(0,i.kt)("inlineCode",{parentName:"p"},'"dataset"'),", much like it does for tooltips, but this is currently very basic. However we can use approaches, such as ",(0,i.kt)("a",{parentName:"p",href:"https://vega.github.io/vega-lite/docs/layer.html"},"layers")," to give the impression of selection effects. This example is detailed more in the embedded report page above, but the high-level strategy is as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"At the top level, ",(0,i.kt)("a",{parentName:"li",href:"https://vega.github.io/vega-lite/docs/calculate.html"},(0,i.kt)("inlineCode",{parentName:"a"},"calculate")," a column")," that conditionally sums our measure value if a row's ",(0,i.kt)("inlineCode",{parentName:"li"},"__selected__")," value is not ",(0,i.kt)("inlineCode",{parentName:"li"},"off"),". Otherwise, treat the value as ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,i.kt)("li",{parentName:"ol"},"Add a layer that calculates two additional marks:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"bar")," with reduced opacity that is the total sum of the primary measure."),(0,i.kt)("li",{parentName:"ul"},"A fully opaque ",(0,i.kt)("inlineCode",{parentName:"li"},"bar")," based on the ",(0,i.kt)("inlineCode",{parentName:"li"},"sum")," of the calculated value in step 1. As this is drawn after the dimmed bar above, it will be zero-width if the value is ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"; otherwise it will have the same width as our primary measure and sit over the top of the underlying mark.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  "data": { "name": "dataset" },\n  "transform": [\n    {\n      "calculate": "datum.__selected__ === \'off\' ? 0 : datum[\'$ Sales\']",\n      "as": "Sales_Selected"\n    }\n  ],\n  "layer": [\n    {\n      "description": "Dimmed Bar; width = sum of Sales",\n      "mark": {\n        "type": "bar",\n        "opacity": 0.3,\n        "tooltip": true\n      },\n      "encoding": {\n        "x": {\n          "aggregate": "sum",\n          "field": "$ Sales",\n          "tooltip": true\n        }\n      }\n    },\n    {\n      "description": "Fully Opaque Bar; width = Selected_Sales",\n      "mark": { "type": "bar" },\n      "encoding": {\n        "x": {\n          "aggregate": "sum",\n          "field": "Sales_Selected"\n        }\n      }\n    }\n  ],\n  "encoding": {\n    "y": {\n      "field": "Product Group",\n      "type": "nominal",\n      "sort": {\n        "field": "Product Group Sort"\n      }\n    }\n  }\n}\n')))}h.isMDXComponent=!0},51576:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/Deneb-Simple-Cross-Filtering-Examples-20b748abea10fa926bc2db03a293755f.pbix"},18261:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},18683:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/selection-data-limit-property-8764d3a292a9093832155d354cba5037.png"},45174:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/selection-simple-multiple-point-9fabdf40c672b8837875c14ee27040f0.png"},97885:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/selection-simple-single-point-5147edf044e9b4381ea7c87be5049e85.png"}}]);