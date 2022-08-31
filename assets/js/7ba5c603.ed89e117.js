"use strict";(self.webpackChunkdeneb_doc=self.webpackChunkdeneb_doc||[]).push([[9203],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>d});var a=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,o=function(e,t){if(null==e)return{};var i,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=a.createContext({}),h=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=h(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=h(i),d=o,m=u["".concat(s,".").concat(d)]||u[d]||p[d]||n;return i?a.createElement(m,r(r({ref:t},c),{},{components:i})):a.createElement(m,r({ref:t},c))}));function d(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,r=new Array(n);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var h=2;h<n;h++)r[h]=i[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},53274:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var a=i(87462),o=(i(67294),i(3905));const n={id:"overview",slug:"/interactivity-overview",sidebar_label:"Interactivity Features"},r="Interactivity Features - An Overview",l={unversionedId:"interactivity/overview",id:"version-1.3/interactivity/overview",title:"Interactivity Features - An Overview",description:"Power BI provides the ability to create visuals using R and Python. Whilst these extend your options significantly, these are typically rendered as a static image and mean that it's currently not possible for you to interact back from these visuals to the rest of the report.",source:"@site/versioned_docs/version-1.3/interactivity/index.md",sourceDirName:"interactivity",slug:"/interactivity-overview",permalink:"/1.3/interactivity-overview",draft:!1,editUrl:"https://github.com/deneb-viz/deneb-viz.github.io/edit/source/versioned_docs/version-1.3/interactivity/index.md",tags:[],version:"1.3",frontMatter:{id:"overview",slug:"/interactivity-overview",sidebar_label:"Interactivity Features"},sidebar:"mainSidebar",previous:{title:"Performance Considerations",permalink:"/1.3/performance"},next:{title:"Tooltips",permalink:"/1.3/interactivity-tooltips"}},s={},h=[{value:"How Deneb Can Be Different from R &amp; Python Options",id:"how-deneb-can-be-different-from-r--python-options",level:2},{value:"Managing your Expectations",id:"managing-your-expectations",level:2},{value:"Reconciliation of Data and/or Row Context",id:"reconciliation-of-data-andor-row-context",level:2},{value:"Getting Data from the Model",id:"getting-data-from-the-model",level:3},{value:"Signaling Back to Power BI",id:"signaling-back-to-power-bi",level:3},{value:"Additional Datum Fields",id:"additional-datum-fields",level:4},{value:"Additional Cross-Highlighting Fields for Measures",id:"additional-cross-highlighting-fields-for-measures",level:4},{value:"What About..?",id:"what-about",level:3},{value:"Visual Effects and Behavior",id:"visual-effects-and-behavior",level:2}],c={toc:h};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interactivity-features---an-overview"},"Interactivity Features - An Overview"),(0,o.kt)("p",null,"Power BI provides the ability to create visuals using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/power-bi/create-reports/desktop-r-visuals?WT.mc_id=DP-MVP-5003712"},"R")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/power-bi/connect-data/desktop-python-visuals?WT.mc_id=DP-MVP-5003712"},"Python"),". Whilst these extend your options significantly, these are typically rendered as a static image and mean that it's currently not possible for you to interact back from these visuals to the rest of the report."),(0,o.kt)("p",null,"On occasion, these visuals may also require some additional dependencies if you want to share with a wider pool of end-users, or a library may not be available in the Power BI Service when it comes to deployment."),(0,o.kt)("h2",{id:"how-deneb-can-be-different-from-r--python-options"},"How Deneb Can Be Different from R & Python Options"),(0,o.kt)("p",null,"In addition to the JSON-based declarative syntax, Deneb is packaged with the Vega and Vega-Lite libraries. Because they are built for the web, anything you produce should ideally be portable within the Power BI ecosystem, irrespective of which device you're using."),(0,o.kt)("p",null,"Both ",(0,o.kt)("a",{parentName:"p",href:"https://vega.github.io/vega/docs/event-streams/"},"Vega")," and ",(0,o.kt)("a",{parentName:"p",href:"https://vega.github.io/vega-lite/docs/selection.html"},"Vega-Lite"),' have their own approaches to interactivity and it\'s only logical to start thinking about how we can make use of this to make the visual "fit in" with the functionality on offer in other Power BI visuals...'),(0,o.kt)("h2",{id:"managing-your-expectations"},"Managing your Expectations"),(0,o.kt)("p",null,"The interactivity part is one of the harder elements of developing your own custom visual and as such, it's going to be challenging to make this work in a visual like Deneb in a generic way, particularly as the Vega tooling provides a lot of creative freedom."),(0,o.kt)("p",null,"We fundamentally have three challenges when it comes to building visuals that are interactive within Power BI:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ensuring that Deneb visuals can interact with the main Power BI window (which handles interactivity events on a visual's behalf).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Reconciling data and row context to other visuals or the data model when events happen in our visual.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Prescribing how the our visual should behave and respond ",(0,o.kt)("em",{parentName:"p"},"visually")," when our end-users interact with it."))),(0,o.kt)("p",null,"As such, we have some considerations to make when trying to deliver functionality are interactivity so that you can produce visuals that look and feel at home in Power BI, and your end-users get a consistent experience with your visual vs. others."),(0,o.kt)("p",null,"The below is going to attempt to summarize some of the considerations we need to think about and this is a challenge to do concisely. For a deeper understanding, you're welcome to dive into the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/power-bi/developer/visuals?WT.mc_id=DP-MVP-5003712"},"developer documentation for visuals"),"."),(0,o.kt)("h2",{id:"reconciliation-of-data-andor-row-context"},"Reconciliation of Data and/or Row Context"),(0,o.kt)("h3",{id:"getting-data-from-the-model"},"Getting Data from the Model"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Visuals in Power BI can't read from the model of their own volition - they are effectively ring-fenced away from the main interface for a lot of (sensible) reasons.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When you add columns and measures to the data roles, this is part of Power BI's interface, rather than the visual's.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Power BI looks at all of these, plus the current filter context and runs a DAX query on the visual's behalf."))),(0,o.kt)("p",null,"To illustrate, we can use the Financial sample dataset that comes with Power BI Desktop to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"Country")," column and specify a sum of ",(0,o.kt)("inlineCode",{parentName:"p"},"Sales")," to Deneb's ",(0,o.kt)("em",{parentName:"p"},"Values")," data role:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"simple-column-and-measure-roles.png",src:i(55096).Z,title:"Adding a column and an implicit measure to the data roles.",width:"190",height:"168"})),(0,o.kt)("p",null,"After doing this, Power BI will generate the following query against the data model (which can be verified using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/power-bi/create-reports/desktop-performance-analyzer?WT.mc_id=DP-MVP-5003712"},"Performance Analyzer"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dax"},"// DAX Query\nDEFINE\n    VAR __DS0Core =\n        SUMMARIZECOLUMNS (\n            'financials'[Country],\n            \"Sumv_Sales\", CALCULATE ( SUM ( 'financials'[ Sales] ) )\n        )\n    VAR __DS0PrimaryWindowed =\n        TOPN ( 10001, __DS0Core, 'financials'[Country], 1 )\nEVALUATE\n__DS0PrimaryWindowed\nORDER BY 'financials'[Country]\n")),(0,o.kt)("p",null,"This would produce the following dataset (visualized using a table):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"simple-column-and-measure-result.png",src:i(44331).Z,title:"Results of a simple DAX query (using a table visual).",width:"283",height:"150"})),(0,o.kt)("p",null,"...and this dataset is supplied by Power BI into the visual. At this point, Deneb's logic will process the dataset and things continue as normal."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/dataset#grain--row-context"},"Dataset")," page if you want to see how this data would get represented internally.")),(0,o.kt)("h3",{id:"signaling-back-to-power-bi"},"Signaling Back to Power BI"),(0,o.kt)("p",null,"Now using the above as an example, we can talk about the following interactivity scenarios:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Displaying a report page tooltip or leveraging modern tooltip features"),(0,o.kt)("li",{parentName:"ul"},"Drilling-through from the context menu"),(0,o.kt)("li",{parentName:"ul"},"Cross-filtering other visuals"),(0,o.kt)("li",{parentName:"ul"},"Having other visuals cross-highlight ours")),(0,o.kt)("p",null,"All of these situations require the visual to tell Power BI what data it needs to work with... but here's the thing: just like how visuals can't just read whatever they like from the data model, they ",(0,o.kt)("em",{parentName:"p"},"definitely")," can't send anything back."),(0,o.kt)("p",null,"For these situations, Power BI provides APIs for a visual to request that Power BI try to do these things on its behalf. For Power BI to fulfil this, it needs to know which row(s) from the orginal dataset it has to resolve."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you have just taken the dataset as-is and created a mark using Vega or Vega-Lite, then a mark's datum still has the correct row context and identifying information that Power BI needs.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"However, if you apply an operation in your specification that mutates the data from its original dataset - for example a transform (",(0,o.kt)("a",{parentName:"p",href:"https://vega.github.io/vega/docs/transforms/"},"Vega")," | ",(0,o.kt)("a",{parentName:"p",href:"https://vega.github.io/vega-lite/docs/transform.html"},"Vega-Lite"),") - then we lose the ability to leverage this functionality in the resulting outputs."))),(0,o.kt)("p",null,"Any functionality we can deliver needs to bear these constraints in mind."),(0,o.kt)("h4",{id:"additional-datum-fields"},"Additional Datum Fields"),(0,o.kt)("p",null,"Provided that there are no such mutations, a Vega or Vega-Lite datum will contain the following additional fields for reconcilitation purposes. These field values represent the row of your dataset as a whole:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"__identity__")," - this is the raw identity and true row context."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For those familiar with Power BI visuals development, it is a ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/power-bi/developer/visuals/selection-api"},(0,o.kt)("inlineCode",{parentName:"a"},"SelectionId")),", which can be passed to Power BI's Selection Manager for ",(0,o.kt)("a",{parentName:"li",href:"#signaling-back-to-power-bi"},"delegation"),"."),(0,o.kt)("li",{parentName:"ul"},"This is a complex JavaScript object and therefore not something we can use in Vega directly. Complex objects are not comparable in the same way, say, text values are, so this should not be used for anything in your spec."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"__key__")," - this is a representation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"__identity__")," object that can be used inside a spec, as it has been suitably processed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"__row__")," - this is the (zero-based) index of the visual dataset's corresponding entry.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"__selected__")," - whether this particular row context is selected for ",(0,o.kt)("a",{parentName:"p",href:"interactivity-selection"},"cross-filtering"),"."))),(0,o.kt)("p",null,"These may become visible to you when ",(0,o.kt)("a",{parentName:"p",href:"interactivity-tooltips#debugging-with-tooltips"},"inspecting a datum using tooltips")," or similar, but they aren't currently supported for use outside of anything Deneb does for you."),(0,o.kt)("h4",{id:"additional-cross-highlighting-fields-for-measures"},"Additional Cross-Highlighting Fields for Measures"),(0,o.kt)("p",null,"The following additional entries will get created for all measures in your dataset in the event of having ",(0,o.kt)("a",{parentName:"p",href:"interactivity-highlight"},"cross-highlighting")," enabled on your visual:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"[measure name]__highlight")," - this is the highlight value for the measure, as opposed to its original value, which is stored in the regular measure field. This provides a way of being able to encode original vs. highlight.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"[measure_name]__highlightStatus")," - this provides additional state about this specific measure for this particular row context has a higlight applied or not (like the ",(0,o.kt)("inlineCode",{parentName:"p"},"__selected__")," field, but more-specific).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"[measure_name]__highlightComparator")," - this provides a pre-calculated way of determining if a highlight value is equal to its original value or not."))),(0,o.kt)("p",null,"These are covered in more detail on the ",(0,o.kt)("a",{parentName:"p",href:"interactivity-highlight#special-__highlight__-fields"},"Cross-Highlighting")," page."),(0,o.kt)("h3",{id:"what-about"},"What About..?"),(0,o.kt)("p",null,"There's a couple of interactivity scenarios we've missed out from above:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default tooltips are different to report page or modern tooltips.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In these cases Deneb can pass a list of values to display and ask Power BI to display them inside a standard tooltip."),(0,o.kt)("li",{parentName:"ul"},"This is also the fall-back behavior if the row context cannot be resolved by Power BI, or a suitable tooltip page cannot be found."),(0,o.kt)("li",{parentName:"ul"},"Tooltip functionality within Deneb is covered in much more detail on the ",(0,o.kt)("a",{parentName:"li",href:"interactivity-tooltips"},"Tooltips")," page."))),(0,o.kt)("li",{parentName:"ul"},"Slicer filtering works differently to cross-filtering, but as Deneb is not a slicer, we're skipping that one.")),(0,o.kt)("h2",{id:"visual-effects-and-behavior"},"Visual Effects and Behavior"),(0,o.kt)("p",null,"Whilst this section is not as large as the above one, it is still very important to consider."),(0,o.kt)("p",null,"In defining a specification, you have control over how Vega or Vega-Lite renders the output for interaction events. You may choose to employ dimming or opacity-based effects for non-selected marks, or you may choose to alter their color, or try something completely unique and original. You can read more about how to start working with these approaches on the ",(0,o.kt)("a",{parentName:"p",href:"interactivity-selection"},"Cross-Filtering")," and ",(0,o.kt)("a",{parentName:"p",href:"interactivity-highlight"},"Cross-Highlighting")," pages."))}p.isMDXComponent=!0},44331:(e,t,i)=>{i.d(t,{Z:()=>a});const a="data:image/png;base64,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"},55096:(e,t,i)=>{i.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);