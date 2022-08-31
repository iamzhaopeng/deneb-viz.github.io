"use strict";(self.webpackChunkdeneb_doc=self.webpackChunkdeneb_doc||[]).push([[8633],{3905:(e,t,i)=>{i.d(t,{Zo:()=>g,kt:()=>d});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var r=a.createContext({}),h=function(e){var t=a.useContext(r),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},g=function(e){var t=h(e.components);return a.createElement(r.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=h(i),d=n,c=p["".concat(r,".").concat(d)]||p[d]||u[d]||o;return i?a.createElement(c,s(s({ref:t},g),{},{components:i})):a.createElement(c,s({ref:t},g))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,s=new Array(o);s[0]=p;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var h=2;h<o;h++)s[h]=i[h];return a.createElement.apply(null,s)}return a.createElement.apply(null,i)}p.displayName="MDXCreateElement"},243:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var a=i(87462),n=(i(67294),i(3905));const o={id:"highlight",slug:"/interactivity-highlight",sidebar_label:"Cross-Highlighting"},s="Cross-Highlighting",l={unversionedId:"interactivity/highlight",id:"version-1.3/interactivity/highlight",title:"Cross-Highlighting",description:"It is possible to make your visual respond to cross-highlight interactions from other visuals. Much like Cross-Filtering, this requires some additional work to implement the necessary visual effects that you want your visual to have, so as such the properties are disabled by default. This page shows how to enable this, and provides some guidance on how you can work with the data that gets sent to the visual dataset.",source:"@site/versioned_docs/version-1.3/interactivity/highlight.md",sourceDirName:"interactivity",slug:"/interactivity-highlight",permalink:"/1.3/interactivity-highlight",draft:!1,editUrl:"https://github.com/deneb-viz/deneb-viz.github.io/edit/source/versioned_docs/version-1.3/interactivity/highlight.md",tags:[],version:"1.3",frontMatter:{id:"highlight",slug:"/interactivity-highlight",sidebar_label:"Cross-Highlighting"},sidebar:"mainSidebar",previous:{title:"Cross-Filtering (Selection)",permalink:"/1.3/interactivity-selection"},next:{title:"Change Log",permalink:"/1.3/changelog"}},r={},h=[{value:"Filtering vs. Highlighting: Conceptually",id:"filtering-vs-highlighting-conceptually",level:2},{value:"Filtering",id:"filtering",level:3},{value:"Highlighting",id:"highlighting",level:3},{value:"What this Means for Deneb",id:"what-this-means-for-deneb",level:2},{value:"Deneb is the Visual",id:"deneb-is-the-visual",level:3},{value:"Cross-Highlighting = Additional Thinking",id:"cross-highlighting--additional-thinking",level:3},{value:"&quot;Out of the Box&quot; Assumptions",id:"out-of-the-box-assumptions",level:3},{value:"Recommended Approaches",id:"recommended-approaches",level:2},{value:"Cross-Filtering Only",id:"cross-filtering-only",level:3},{value:"How We Try to Help (if you don&#39;t do this)",id:"how-we-try-to-help-if-you-dont-do-this",level:4},{value:"Cross-Highlighting",id:"cross-highlighting-1",level:3},{value:"Cross-Highlighting Strategy",id:"cross-highlighting-strategy",level:2},{value:"Special <code>__highlight</code> Fields",id:"special-__highlight-fields",level:2},{value:"Simple Example of How Fields Respond to Cross-Highlighting from Other Visuals",id:"simple-example-of-how-fields-respond-to-cross-highlighting-from-other-visuals",level:4},{value:"Managing Highlight State Visually Through Encodings",id:"managing-highlight-state-visually-through-encodings",level:2},{value:"Limitations and Considerations",id:"limitations-and-considerations",level:2},{value:"Simple Worked Examples",id:"simple-worked-examples",level:2},{value:"Example 1: Simple Cross-Highlight Handling Using Layers",id:"example-1-simple-cross-highlight-handling-using-layers",level:4},{value:"Example 2: Extending Design to Include Cross-Filtering",id:"example-2-extending-design-to-include-cross-filtering",level:4}],g={toc:h};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cross-highlighting"},"Cross-Highlighting"),(0,n.kt)("p",null,"It is possible to make your visual respond to cross-highlight interactions from other visuals. Much like ",(0,n.kt)("a",{parentName:"p",href:"interactivity-selection"},"Cross-Filtering"),", this requires some additional work to implement the necessary visual effects that you want your visual to have, so as such the properties are ",(0,n.kt)("strong",{parentName:"p"},"disabled")," by default. This page shows how to enable this, and provides some guidance on how you can work with the data that gets sent to the visual dataset."),(0,n.kt)("admonition",{title:"This is A Deep and Info-Dense Topic",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This whole page provides valuable knowledge about how cross-highlighting works in Power BI, and the theory you need to consider how to approach it in your own visuals."),(0,n.kt)("p",{parentName:"admonition"},"If you're the sort of person that just wants to get on with it, the one thing you absolutely need to bear in mind is: ",(0,n.kt)("strong",{parentName:"p"},"any visual you want to build that supports cross-highlighting is really 2 visuals in one"),":"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"A visual that shows the original values."),(0,n.kt)("li",{parentName:"ol"},"A visual that shows the highlighted values in context with the originals.")),(0,n.kt)("p",{parentName:"admonition"},"It is recommended that you read the page in order so you can best understand what cross-highlighting involves. If you want to jump straight in, you can head down to the ",(0,n.kt)("a",{parentName:"p",href:"#recommended-approaches"},"Recommended Approaches")," section, but for those who read the whole thing, it may make your life a bit easier \ud83d\ude42")),(0,n.kt)("h2",{id:"filtering-vs-highlighting-conceptually"},"Filtering vs. Highlighting: Conceptually"),(0,n.kt)("p",null,"Power BI offers three types of ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/power-bi/create-reports/service-reports-visual-interactions?WT.mc_id=DP-MVP-5003712"},"interactions between visuals"),": ",(0,n.kt)("strong",{parentName:"p"},"Filter"),", ",(0,n.kt)("strong",{parentName:"p"},"Highlight")," and ",(0,n.kt)("strong",{parentName:"p"},"None"),"."),(0,n.kt)("p",null,"As creators, a lot of what goes on under the hood is abstracted away from us with visuals that we directly consume in Power BI. If we want to tear off the mask and manage this ourselves, we need to know more about this at a basic level. What follows is a simple guide on how these interactions may work (this can also be dug into at a lower-level ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/power-bi/developer/visuals/highlight?WT.mc_id=DP-MVP-5003712"},"in the custom visuals SDK documentation"),")."),(0,n.kt)("p",null,"Let's say we have a chart which shows ",(0,n.kt)("strong",{parentName:"p"},"Sales")," by ",(0,n.kt)("strong",{parentName:"p"},"Country Code"),", but we intend to build a visual with Deneb that used ",(0,n.kt)("strong",{parentName:"p"},"Sales")," by ",(0,n.kt)("strong",{parentName:"p"},"Product"),". For now we will represent this using a table visual:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"cross-highlight-vs-cross-filter-01.png",src:i(76645).Z,title:"A bar chart, showing Sales by Country, and an accompanying table visual showing Product and corresponding Sales amount.",width:"663",height:"238"})),(0,n.kt)("h3",{id:"filtering"},"Filtering"),(0,n.kt)("p",null,"When it comes to the ",(0,n.kt)("strong",{parentName:"p"},"Filter")," interaction, our visual dataset's fields are directly updated by Power BI with the revised values, e.g.:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"cross-highlight-vs-cross-filter-02.png",src:i(45277).Z,title:"A bar chart, showing Sales by Country, and an accompanying table visual showing Product and corresponding Sales amount. The bar chart's US value is highlighted and the amounts in the table for Product are adjusted to show the values for the US rather than for all Countries in the bar chart.",width:"653",height:"239"})),(0,n.kt)("p",null,"It should be fairly evident that the totals have updated in our table to reflect the values from the ",(0,n.kt)("em",{parentName:"p"},"US")," category. In our Deneb dataset, the ",(0,n.kt)("strong",{parentName:"p"},"Sales")," field will contain the same value and our chart would update as we expect."),(0,n.kt)("h3",{id:"highlighting"},"Highlighting"),(0,n.kt)("p",null,"With the ",(0,n.kt)("strong",{parentName:"p"},"Highlight")," interaction, we want to be able to show the values in context to the original values. With this enabled, things change a bit. Our dataset now looks similar to the following representation:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"cross-highlight-vs-cross-filter-03.png",src:i(500).Z,title:"A bar chart, showing Sales by Country, and an accompanying table visual showing Product and corresponding Sales amounts. The bar chart's US value is highlighted and the amounts in the table show the original Sales amount for all Products (irrespective of Country), as well as the values for the current highlight, which is the US.",width:"742",height:"239"})),(0,n.kt)("p",null,"Here we can see that this is a combination of ",(0,n.kt)("em",{parentName:"p"},"both")," of the above tables - our ",(0,n.kt)("strong",{parentName:"p"},"Sales")," measure shows the original values that were provided, and we have an additional set of values showing the amount for the highlighted ",(0,n.kt)("strong",{parentName:"p"},"Country")," in our other visual."),(0,n.kt)("p",null,"If we flip things the other way around and click on a row in our table, we can see a similar effect on the bar chart, e.g.:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"cross-highlight-vs-cross-filter-04.png",src:i(8713).Z,title:"A bar chart, showing Sales by Country, and an accompanying table visual showing Product and corresponding Sales amounts. The table's 'Amarilla' Product and the amounts in the bar chart show the original Sales amount for all Countries (irrespective of Country), as well as the values for the current highlight, which is the 'Amarilla' Product.",width:"736",height:"239"})),(0,n.kt)("p",null,"What we see in the bar chart, is almost the same thing as our table: (ignoring the data labels for a second) each ",(0,n.kt)("strong",{parentName:"p"},"Country")," has:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A solid bar - representing the ",(0,n.kt)("strong",{parentName:"li"},"Sales")," amount for the highlighted ",(0,n.kt)("strong",{parentName:"li"},"Product"),"."),(0,n.kt)("li",{parentName:"ul"},"A less opaque bar - representing the original ",(0,n.kt)("strong",{parentName:"li"},"Sales")," amount for each ",(0,n.kt)("strong",{parentName:"li"},"Country")," (for all ",(0,n.kt)("strong",{parentName:"li"},"Products"),").")),(0,n.kt)("p",null,"Without spoiling things too much, this is the type of approach we need to think about if we want to build a visual using Deneb that implements cross-highlighting."),(0,n.kt)("p",null,'To complete the loop, if we have no filtering applied, but our visual is enabled for cross-highlight, we can consider that both of these "measures" exist in the dataset, but have the same value, e.g.:'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"cross-highlight-vs-cross-filter-05.png",src:i(25317).Z,title:"A bar chart, showing Sales by Country, and an accompanying table visual showing Product and corresponding Sales amount. The table also has a 'Highlights' version of the Sales field, which is the same, because both visuals have no interactive highlights applied to them.",width:"735",height:"237"})),(0,n.kt)("h2",{id:"what-this-means-for-deneb"},"What this Means for Deneb"),(0,n.kt)("p",null,"With the above in-mind, and before we talk about the strategy and how to work with cross-highlighting in Deneb, there are some other considerations to think about."),(0,n.kt)("h3",{id:"deneb-is-the-visual"},"Deneb is the Visual"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Deneb is the actual custom ",(0,n.kt)("em",{parentName:"p"},"Visual")," that you're adding to your report, and the features it supports at a high-level are what Power BI knows about.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Your specification is executed within Deneb's environment.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If a Power BI ",(0,n.kt)("em",{parentName:"p"},"Visual")," wants to support cross-highlighting, it's assumed that you're going to handle it in your code, and if you're writing a specific custom visual that you're going to package and distribute, that's normally fine.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Deneb is different in that it's a host for a language that lets you create your own visual, but as far as Power BI is concerned, it's the one that ",(0,n.kt)("em",{parentName:"p"},"should")," be cross-highlighting (as we told Power BI that the feature is supported at the ",(0,n.kt)("em",{parentName:"p"},"Visual")," level).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For us to offer the functionality for creators who wish to leverage it, we have to enable this support at the visual (Deneb) level."))),(0,n.kt)("h3",{id:"cross-highlighting--additional-thinking"},"Cross-Highlighting = Additional Thinking"),(0,n.kt)("p",null,"As such, having the feature enabled essentially creates the challenge that you need to start thinking about it:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"With Deneb, you as a creator ",(0,n.kt)("em",{parentName:"p"},"might")," want to enable support and spend the time building everything around it. But, you might not, and that's fine too.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Many users have their default interaction set to cross-highlight rather than cross-filter in Power BI's ",(0,n.kt)("strong",{parentName:"p"},"Options")," dialog:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"powerbi-default-visual-interaction.png",src:i(62926).Z,title:"Partial view of the 'Report settings' pane in the Power BI 'Options' dialog. The 'Change default visual interaction from cross highlighting to cross-filtering' option is highlighted in red. This option is set to 'OFF', or unchecked.",width:"428",height:"358"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you don't want to go to the effort of implementing cross-highlight, this situation may cause confusion if you haven't explicitly set all interactions from other visuals to your Deneb visual to highlight rather than filter."))),(0,n.kt)("p",null,"Based on the above explanation of how the different interaction modes work, you would normally see no change in your visual, because the 'base' or original values remain in-place."),(0,n.kt)("p",null,"Whilst this is not intuitive, it is technically correct. However, we understand that there's a lot to think about when learning a language, and having to understand more about how Power BI works under the hood when it comes to this kind of thing."),(0,n.kt)("h3",{id:"out-of-the-box-assumptions"},'"Out of the Box" Assumptions'),(0,n.kt)("p",null,"Therefore, Deneb's approach to cross-highlighting assumes the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You're unlikely to want to implement it without understanding what all the above means.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"It may not make sense to you until you do.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"When you do understand, you're aware of what this might entail and are ready to opt-in."))),(0,n.kt)("p",null,"Therefore, we want to try and meet you halfway. As such, we assume that cross-highlighting functionality should not be on by default if you want to op-in to add cross-highlight functionality in your visual, it's a 2-stage process. This is detailed further below."),(0,n.kt)("h2",{id:"recommended-approaches"},"Recommended Approaches"),(0,n.kt)("p",null,"You probably want to get into this as quickly as possible, so use the appropriate directions under each section to set up the visual how you need it for the situation you want. However, the sections that follow afterwards are pretty much recommended reading if you want to understand how or why things work the way they do, and what you need to understand what's happening inside your visual."),(0,n.kt)("p",null,"Bear in mind that ",(0,n.kt)("strong",{parentName:"p"},"we cannot control the default interactions in the visual header from inside Deneb"),"; these are outside the body of the visual and as such need to be manually specified by the report creator."),(0,n.kt)("h3",{id:"cross-filtering-only"},"Cross-Filtering Only"),(0,n.kt)("p",null,"If you don't want cross-highlighting support in your specification at all:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Ensure that the ",(0,n.kt)("strong",{parentName:"p"},"Expose Cross-Highlight Values for Measures")," property is disabled in the ",(0,n.kt)("em",{parentName:"p"},"Vega > Power BI Interactivity")," section of the ",(0,n.kt)("a",{parentName:"p",href:"visual-editor#settings-tab"},(0,n.kt)("strong",{parentName:"a"},"Settings")," pane")," of the Visual Editor. This should be disabled by default, unless you have loaded a template that utilises it.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Confirm that any other visuals that can interact with your visual are set to ",(0,n.kt)("strong",{parentName:"p"},"Filter")," your visual in the visual header."))),(0,n.kt)("h4",{id:"how-we-try-to-help-if-you-dont-do-this"},"How We Try to Help (if you don't do this)"),(0,n.kt)("p",null,"If the ",(0,n.kt)("strong",{parentName:"p"},"Expose Cross-Highlight Values for Measures")," property is disabled, but the interaction in the visual header has not been set, we will attempt to map highlight values to measure values by their original name internally, e.g.:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"cross-highlight-example-without-highlight-prop.gif",src:i(49631).Z,title:"Cross-Highlight functionality can now be leveraged, so you can bind encodings for original and highlight values.",width:"565",height:"384"})),(0,n.kt)("admonition",{title:"Always Check Behavior",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Note that this may not be 100% reliable but is the best we can do due to custom visual limitations. If leaving this as-is, you should really ensure that your data is correct for your readers, and explicitly set the correct interactions if not.")),(0,n.kt)("h3",{id:"cross-highlighting-1"},"Cross-Highlighting"),(0,n.kt)("p",null,"If you want to take-up cross-highlighting support in your specification:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Ensure that the ",(0,n.kt)("strong",{parentName:"p"},"Expose Cross-Highlight Values for Measures")," property is enabled in the ",(0,n.kt)("em",{parentName:"p"},"Vega > Power BI Interactivity")," section of the ",(0,n.kt)("a",{parentName:"p",href:"visual-editor#settings-tab"},(0,n.kt)("strong",{parentName:"a"},"Settings")," pane")," of the Visual Editor. This should be disabled by default, unless you have loaded a template that utilises it.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Confirm that any other visuals that can interact with your visual are set to ",(0,n.kt)("strong",{parentName:"p"},"Highlight")," your visual in the visual header."))),(0,n.kt)("p",null,"To know more about how this works at a lower level, and how to access the necessary fields in your dataset to leverage the functionality, you can keep reading."),(0,n.kt)("h2",{id:"cross-highlighting-strategy"},"Cross-Highlighting Strategy"),(0,n.kt)("p",null,"Now, we can talk about how to get started. As this is a dense topic, some points may be repeated from above, just to ensure that everything is laid out in one place."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can configure whether Deneb should expose highlight values to the dataset, through the ",(0,n.kt)("strong",{parentName:"p"},"Expose Cross-Highlight Values for Measures")," property is enabled in the ",(0,n.kt)("em",{parentName:"p"},"Vega > Power BI Interactivity")," section of the ",(0,n.kt)("a",{parentName:"p",href:"visual-editor#settings-tab"},(0,n.kt)("strong",{parentName:"a"},"Settings")," pane")," of the Visual Editor.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"This setting is ",(0,n.kt)("strong",{parentName:"p"},"disabled")," by default.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For each row in the visual dataset, Deneb will expose and generate ",(0,n.kt)("a",{parentName:"p",href:"#special-__highlight-fields"},"special fields for each measure"),", which you can use to assign encoding of mark properties (or use other functionality such as conditions or expressions) and represent data points that are highlighted vs. their original values.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When data points in another visual are selected, ",(0,n.kt)("strong",{parentName:"p"},"and")," Deneb's interaction with the visual is set to ",(0,n.kt)("strong",{parentName:"p"},"Highlight"),", your dataset will respond to these changes:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The original measure value prior to the highlight operation is preserved."),(0,n.kt)("li",{parentName:"ul"},"The highlight fields are updated with the information Power BI provides from the main window."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If there is no active selection in another visual, the highlight and original values of measures are equal to each other (but still exist). You can get a visual representation of what tis might look like in our ",(0,n.kt)("a",{parentName:"p",href:"#highlighting"},"walkthrough of the concept above"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"It is up to you as a creator to use this field to ",(0,n.kt)("a",{parentName:"p",href:"interactivity-overview#visual-effects-and-behavior"},"manage the visual effects within your specification")," for highlighted vs. original data points or field values. A simple illustration of this is covered ",(0,n.kt)("a",{parentName:"p",href:"simple-example#cross-highlighting"},"in the worked example")," and some further simple examples are ",(0,n.kt)("a",{parentName:"p",href:"#managing-highlight-state-visually-through-encodings"},"covered further down the page"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"We ",(0,n.kt)("a",{parentName:"p",href:"#how-we-try-to-help-if-you-dont-do-this"},"try to map highlight values internally")," to our regular values, if the option has not been enabled."))),(0,n.kt)("h2",{id:"special-__highlight-fields"},"Special ",(0,n.kt)("inlineCode",{parentName:"h2"},"__highlight")," Fields"),(0,n.kt)("p",null,"Where ",(0,n.kt)("a",{parentName:"p",href:"interactivity-selection"},"cross-filtering")," works for the whole row, cross-highlighting works at the measure-level. If the the ",(0,n.kt)("strong",{parentName:"p"},"Expose Cross-Highlight Values for Measures")," property is enabled, then your visual dataset contains additional fields for each measure."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"[measure name]__highlight")," - this is the highlight value for the measure, as opposed to its original value, which is stored in the regular measure field. This provides a way of being able to encode original vs. highlight.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"[measure_name]__highlightStatus")," - this provides additional state about this specific measure for this particular row context has a higlight applied or not (like the ",(0,n.kt)("inlineCode",{parentName:"p"},"__selected__")," field, but more-specific). This can be one of the following values:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"on")),": the visual has an active cross-highlight state and the measure is actively highlighted"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"off")),": the visual has an active cross-highlight state, but the measure is not highlighted (this tends to be a likely scenario when using multiple measures rather than a single measure)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"neutral")),": there is no cross-highlight state applied to the visual. The orginal and highlight values will be equal to each other."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"[measure_name]__highlightComparator")," - this provides a pre-calculated way of determining if a highlight value is equal to its original value or not and allow you to apply conditional encodings without the need to derive this separately in a ",(0,n.kt)("inlineCode",{parentName:"p"},"calculate")," transform or similar. This can be one of the following values:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"eq")),": the original and highlight values are equal to each other"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"lt")),": the highlight value is less than the original value"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"gt")),": the highlight value is greater than the original value"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"neq")),": the highlight value and original value are not equal, or not directly comparable (this will typically be used for text-based measures)")))),(0,n.kt)("h4",{id:"simple-example-of-how-fields-respond-to-cross-highlighting-from-other-visuals"},"Simple Example of How Fields Respond to Cross-Highlighting from Other Visuals"),(0,n.kt)("p",null,"Using a similar example as our walkthrough above (using the same Product column and $ Sales measure), here's how our dataset will look if we enable the ",(0,n.kt)("strong",{parentName:"p"},"Expose Cross-Highlight Values for Measures")," property:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"cross-highlight-dataset-01.png",src:i(50484).Z,title:"A bar chart, showing Sales by Country, and an accompanying table visual showing Product and corresponding Sales amount. The table also shows Deneb's 'Highlights' version of the Sales field, which is the same as the original due to no active cross-highlight being applied. There is also a 'Highlight Status' field, which shows 'neutral', and a 'Highlight Comparator' field, which shows 'eq', again because there is no active cross-highlight applied.",width:"1098",height:"238"})),(0,n.kt)("p",null,"Selecting a data point in our other visual will now cause Power BI to update our visual's higlight values, and Deneb will update the additional fields accordingly, e.g.:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"cross-highlight-dataset-02.png",src:i(95869).Z,title:"A bar chart, showing Sales by Country, and an accompanying table visual showing Product and corresponding Sales amount. The table also shows Deneb's 'Highlights' version of the Sales field, and the 'Highlight Status' and 'Highlight Comparator' fields.  The bar chart's US value is highlighted and the amounts in the table show the original Sales amount for all Products (irrespective of Country), as well as the values for the current highlight, which is the US. The 'Highlight Status' fields shows 'on', indicating the measure is actively highlighted. The 'Highlight Comparator' value shows 'lt', which specifies that the highlighted value is less than the original value.",width:"1095",height:"237"})),(0,n.kt)("h2",{id:"managing-highlight-state-visually-through-encodings"},"Managing Highlight State Visually Through Encodings"),(0,n.kt)("p",null,"Much like for cross-filtering, you will need to ensure that you design your visual and its encodings to effectively communicate cross-highlight status for your readers. This is often uncharted territory when it comes to bespoke visuals in Power BI, as there are often no existing visuals or patterns to crib ideas from."),(0,n.kt)("p",null,"It's generally regarded to try and communicate where your highlights are vs. your original values, so that your readers can contextually resolve this information."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"#simple-examples"},"Simple Worked Examples")," section below shows how you may be able to get started with exploring this further. While these focus on Vega-Lite, both versions of the ",(0,n.kt)("em",{parentName:"p"},"Simple Bar Chart")," template available from the ",(0,n.kt)("em",{parentName:"p"},"New Specification")," dialog contain simple bindings for cross-highlighting to help you get started."),(0,n.kt)("h2",{id:"limitations-and-considerations"},"Limitations and Considerations"),(0,n.kt)("admonition",{title:"This Sounds Hard...",type:"info"},(0,n.kt)("p",{parentName:"admonition"},'Well, it\'s not always straightforward! It is early days for this type of "visual thinking" within Power BI, and it is likely that the community will be able to uncover better design patterns than the ones outlined on this page. They will certainly help you get on your way.'),(0,n.kt)("p",{parentName:"admonition"},"If you have found an alternative approach, or have a great idea on how to help us improve this, then ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/deneb-viz/deneb/issues"},"please let us know"),"! We would love to continue to evolve this functionality and make it more accessible if we can do so.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cross-highlight values are only applicable to measures; Power BI does not apply this to columns.")),(0,n.kt)("h2",{id:"simple-worked-examples"},"Simple Worked Examples"),(0,n.kt)("p",null,"The following examples are for Vega-Lite but similar principles can be applied for Vega."),(0,n.kt)("p",null,"This report shows the three examples below how they would be rendered in Power BI, using a model based on the sample finanical data available in Power BI Desktop. In each case, the full tooltip data is exposed so that you can observe the state of the ",(0,n.kt)("inlineCode",{parentName:"p"},"__highlight")," fields. A table is also visible to show what the highlight fields look like as the visual is being cross-highlighted from our core visual on the left. We'll provide basic example JSON for each underneath."),(0,n.kt)("iframe",{width:"100%",height:"486",src:"https://app.powerbi.com/view?r=eyJrIjoiZTAxMDg4NGUtMDgxMC00YmFjLWJlNDctYjM0ZjI0NzNlM2QyIiwidCI6IjUzYmJlMGQ3LTU0NzItNGQ0NS04NGY0LWJiNzJiYjFjMjI4OSJ9",frameborder:"0",allowFullScreen:"true"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{target:"_blank",href:i(52064).Z},"Download this workbook"))),(0,n.kt)("h4",{id:"example-1-simple-cross-highlight-handling-using-layers"},"Example 1: Simple Cross-Highlight Handling Using Layers"),(0,n.kt)("p",null,"Here, we're altering the approach of our bar chart slightly, using ",(0,n.kt)("a",{parentName:"p",href:"http://vega.github.io/vega-lite/docs/layer.html"},"layers")," to draw 2 bars - one for the original values and another for the highlights. The ",(0,n.kt)("inlineCode",{parentName:"p"},"x")," position of each bar is bound accordingly, e.g.:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:"highlight={5-12,15-22} showLineNumbers",highlight:"{5-12,15-22}",showLineNumbers:!0},'{\n  "data": { "name": "dataset" },\n  "layer": [\n    {\n      "description": "Original Value",\n      "mark": {\n        "type": "bar",\n        "opacity": 0.3\n      },\n      "encoding": {\n        "x": { "field": "Sales" }\n      }\n    },\n    {\n      "description": "Highlight Value",\n      "mark": {\n        "type": "bar"\n      },\n      "encoding": {\n        "x": {\n          "field": "Sales__highlight"\n        }\n      }\n    }\n  ],\n  "encoding": {\n    "y": {\n      "field": "Product",\n      "type": "nominal"\n    },\n    "x": { "type": "quantitative" }\n  }\n}\n')),(0,n.kt)("h4",{id:"example-2-extending-design-to-include-cross-filtering"},"Example 2: Extending Design to Include Cross-Filtering"),(0,n.kt)("p",null,"Example 1 will work for cross-highlight only; in order to ensure that our design allows our visual to cross-filter other visuals ",(0,n.kt)("em",{parentName:"p"},"and")," handle incoming cross-highlight, we extend the ",(0,n.kt)("inlineCode",{parentName:"p"},"opacity")," encoding in our highlights layer to effectively toggle visibility of the mark if the ",(0,n.kt)("inlineCode",{parentName:"p"},"__selected__")," field is off. This will utilise the underlying mark for the orignal values for the 'dimmed' value, e.g.:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:"highlight={23-32} showLineNumbers",highlight:"{23-32}",showLineNumbers:!0},'{\n  "data": { "name": "dataset" },\n  "layer": [\n    {\n      "description": "Original Value",\n      "mark": {\n        "type": "bar",\n        "opacity": 0.3\n      },\n      "encoding": {\n        "x": { "field": "Sales" }\n      }\n    },\n    {\n      "description": "Highlight Value",\n      "mark": {\n        "type": "bar"\n      },\n      "encoding": {\n        "x": {\n          "field": "Sales__highlight"\n        },\n        "opacity": {\n          "condition": {\n            "test": {\n              "field": "__selected__",\n              "equal": "off"\n            },\n            "value": 0\n          },\n          "value": 1\n        }\n      }\n    }\n  ],\n  "encoding": {\n    "y": {\n      "field": "Product",\n      "type": "nominal"\n    },\n    "x": { "type": "quantitative" }\n  }\n}\n')))}u.isMDXComponent=!0},52064:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/files/Deneb-Simple-Cross-Highlighting-Examples-e676c9459ed8e74e8f8f670e39ee15ec.pbix"},50484:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/cross-highlight-dataset-01-d73c45e9d9c631c93218c48f1e937cff.png"},95869:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/cross-highlight-dataset-02-2a9f23d9e1936b227796c885c0b49800.png"},49631:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/cross-highlight-example-without-highlight-prop-bb74452929edc90931be30cd870f5b17.gif"},76645:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/cross-highlight-vs-cross-filter-01-e8dab263ab145debb95cb05b24f36bd7.png"},45277:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/cross-highlight-vs-cross-filter-02-cde7bffce8cb71e3916fc4a1a6b7aa22.png"},500:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/cross-highlight-vs-cross-filter-03-03548ef4798c546550affe66991ef1bd.png"},8713:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/cross-highlight-vs-cross-filter-04-8ecf27c4b99da4cedcf1a89e17b78f86.png"},25317:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/cross-highlight-vs-cross-filter-05-22e59d432eb830d43c20b7429249db0c.png"},62926:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/powerbi-default-visual-interaction-92e264dc7148d99b0233db3337779227.png"}}]);