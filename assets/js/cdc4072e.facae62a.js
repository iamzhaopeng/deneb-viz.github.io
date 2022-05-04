"use strict";(self.webpackChunkdeneb_doc=self.webpackChunkdeneb_doc||[]).push([[2435],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(a),c=i,h=m["".concat(d,".").concat(c)]||m[c]||u[c]||o;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},363:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),r=["components"],l={id:"templates",description:"Understanding how to work with templates in Deneb",slug:"/templates",title:"Templates"},d="Working with Templates",s={unversionedId:"deeper-concepts/templates",id:"deeper-concepts/templates",title:"Templates",description:"Understanding how to work with templates in Deneb",source:"@site/docs/deeper-concepts/templates.md",sourceDirName:"deeper-concepts",slug:"/templates",permalink:"/next/templates",editUrl:"https://github.com/deneb-viz/deneb-viz.github.io/edit/source/docs/deeper-concepts/templates.md",tags:[],version:"current",frontMatter:{id:"templates",description:"Understanding how to work with templates in Deneb",slug:"/templates",title:"Templates"},sidebar:"mainSidebar",previous:{title:"Pattern Fills",permalink:"/next/pattern-fills"},next:{title:"Performance Considerations",permalink:"/next/performance"}},p=[{value:"Importing a Template",id:"importing-a-template",children:[{value:"Dataset Placeholders",id:"dataset-placeholders",children:[],level:3},{value:"Populating Placeholders",id:"populating-placeholders",children:[],level:3}],level:2},{value:"Generating a Template",id:"generating-a-template",children:[{value:"Template Information",id:"template-information",children:[],level:3},{value:"Template Information",id:"template-information-1",children:[],level:3},{value:"Review and Copy to Clipboard",id:"review-and-copy-to-clipboard",children:[],level:3},{value:"Saving the Template File",id:"saving-the-template-file",children:[],level:3}],level:2},{value:"Template Structure",id:"template-structure",children:[{value:"<code>deneb</code>",id:"deneb",children:[],level:3},{value:"<code>information</code>",id:"information",children:[],level:3},{value:"<code>dataset</code>",id:"dataset",children:[],level:3}],level:2},{value:"Additional Considerations for Developers",id:"additional-considerations-for-developers",children:[],level:2}],u={toc:p};function m(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"working-with-templates"},"Working with Templates"),(0,o.kt)("p",null,"Deneb has a number of built-in templates that are available from the ",(0,o.kt)("strong",{parentName:"p"},"Create New Specification")," dialog. This is demonstrated in the ",(0,o.kt)("a",{parentName:"p",href:"simple-example#selecting-the-template"},"Simple Worked Example")," when we create our first chart."),(0,o.kt)("p",null,"Of course, we can't capture everything in these templates and they're really to help you in getting started. You are able to generate your own, or import those generated by others."),(0,o.kt)("h2",{id:"importing-a-template"},"Importing a Template"),(0,o.kt)("p",null,"Much like creating from an inbuilt template, to import a template you will need to ensure that you have at least one column or measure in your visual's dataset so that the advanced editor can be accessed."),(0,o.kt)("p",null,"In the advanced editor's ",(0,o.kt)("em",{parentName:"p"},"Create New Specification")," dialog, you have the option to import a template, e.g.:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"import-template-location.png",src:a(22565).Z,title:"The 'Import Template' option can be found in the 'Create New Specification' dialog in Deneb's advanced editor."})),(0,o.kt)("p",null,"Navigate to or click ",(0,o.kt)("strong",{parentName:"p"},"Select JSON Template"),", browse to your template's ",(0,o.kt)("inlineCode",{parentName:"p"},".json")," file and click ",(0,o.kt)("strong",{parentName:"p"},"Open"),"."),(0,o.kt)("h3",{id:"dataset-placeholders"},"Dataset Placeholders"),(0,o.kt)("p",null,"The selected file's JSON will be validated and if successful, the placeholder information will be displayed, e.g.:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"import-template-details-initial.png",src:a(50859).Z,title:"Valid templates will provide options for the user to bind their dataset to template placeholders."})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Template Compatibility")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Only valid Deneb templates can be imported. If you're looking to add a Vega or Vega-Lite specification from elsewhere, it's better to create a blank template for the appropriate provider. Then, paste this into the editor and correct it directly, or manually add the appropriate metadata required for Deneb and then import. ",(0,o.kt)("a",{parentName:"p",href:"#template-structure"},"Refer below")," for more detail on this."))),(0,o.kt)("p",null,"For each placeholder, the suggested data type (that the author used in their dataset) is shown next to the name."),(0,o.kt)("p",null,"You are not restricted to choosing columns or measures of the the same data type, but it is likely that your results may vary if you do choose a different one to the author's design. The only restriction is that columns and measures cannot be used interchangeably, and these are greyed-out and disabled accordingly."),(0,o.kt)("p",null,"If the author decided to enter a description for the placeholder, this can be viewed by interacting with the information icon next to it."),(0,o.kt)("h3",{id:"populating-placeholders"},"Populating Placeholders"),(0,o.kt)("p",null,"Click or expand a placeholder's dropdown list to select an appropriate column or measure from your dataset, e.g.:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"import-placeholder-expand.png",src:a(40874).Z,title:"Opening the dropdown list for a placeholder shows available columns or measures and their data type."})),(0,o.kt)("p",null,"The data type for each column and measure is shown next to it, so that you can quickly identify eligible candidates. If a suitable candidate does not exist, you can add new columns or measures from the data model and the details in the dropdown list will update to match."),(0,o.kt)("p",null,"Once all placeholders have been assigned, the ",(0,o.kt)("em",{parentName:"p"},"Create")," button is enabled, e.g.:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"import-placeholders-assigned.png",src:a(56777).Z,title:"Once all placeholders have been assigned, the 'Create' button is enabled."})),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Keep your Dataset Tidy")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you have anything from your dataset that is unassigned, (particularly columns), it is recommended that you remove them, in order to preserve the cardinality or row context that the template author orginally intended."))),(0,o.kt)("p",null,"Selecting the ",(0,o.kt)("em",{parentName:"p"},"Create")," button will then add the template to the advanced editor, with all placeholders filled-out as specified, e.g.:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"import-template-complete.png",src:a(70546).Z,title:"Your specification is created from the template, with all placeholders assigned."})),(0,o.kt)("p",null,"Everyone's data is different, so it is highly likely that you'll need to make further tweaks to the specification to make it suit your particular scenario, but otherwise you're good to go! \ud83d\ude04"),(0,o.kt)("h2",{id:"generating-a-template"},"Generating a Template"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Direct Downloads are Not Possible")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Power BI visuals are not currently permitted to save/download files directly"),", so this functionality is the best we can manage at present."))),(0,o.kt)("p",null,"If you're happy with a specification and wish to share with others, or take a copy for re-use or source control, it is possible to 'export' a template."),(0,o.kt)("p",null,"In the advanced editor, select the ",(0,o.kt)("a",{parentName:"p",href:"/visual-editor#generate-json-template-ctrl--alt--e"},"Generate JSON Template")," command. This will open the dialog."),(0,o.kt)("h3",{id:"template-information"},"Template Information"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"export-enter-template-information.png",src:a(6615).Z,title:"The 'Generate JSON Template' dialog allows you to create and customize a version of your specification that is suitable for sharing."})),(0,o.kt)("p",null,"In the first tab, fill in a suitable, descriptive name for the template and a more detailed description. This will be displayed to any users when importing it and should help then with filling it in. The author details are currently not shown on import, but will be later on."),(0,o.kt)("h3",{id:"template-information-1"},"Template Information"),(0,o.kt)("p",null,"In the second tab, you have the opportunity to customize your dataset requirements for your users:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"export-enter-dataset-information.png",src:a(22533).Z,title:"The second tab allows you to rename and describe your dataset columns and measures for the shared template."})),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Keep Only What you Need")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Deneb assumes all columns and measures from your dataset are required. If any columns or measures are superfluous to the template, you should remove them from the ",(0,o.kt)("strong",{parentName:"p"},"Values")," data role so that they also get removed from this part of the dialog. This will ensure that they aren't included for your end users and cause potential side-effects or ambiguity as to how they should be used."))),(0,o.kt)("p",null,"Each dataset field has a text box that you can use to rename the placeholder to something more general-purpose for your template. This is also particularly useful if your names might be sensitive. It's recommended to try and use specific terms so this helps to document your template for end users."),(0,o.kt)("p",null,"If you leave a box empty or delete its contents the original name from your dataset will be used. This can also be seen underneath the box for comparison purposes."),(0,o.kt)("p",null,"Each field has an optional description. In here, you can type more information for your end users, should it be required. This description will be displayed in the information box next to the field placeholder when used for import."),(0,o.kt)("h3",{id:"review-and-copy-to-clipboard"},"Review and Copy to Clipboard"),(0,o.kt)("p",null,"In the final tab, you will see what the JSON for your generated template will look like, including the Deneb-specific metadata:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"export-review-template-content.png",src:a(97599).Z,title:"The final tab allows you to review your specification template and copy it to the clipboard."})),(0,o.kt)("p",null,"You cannot modify the data in this box, so if there are aspects of the template that you need to change, then you will need to edit in the appropriate place:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For the specification and config, this needs to be done in the main editors."),(0,o.kt)("li",{parentName:"ul"},"For the placeholders, navigate back to the appropriate tab and correct information accordingly.")),(0,o.kt)("p",null,"When ready, you can either click the ",(0,o.kt)("strong",{parentName:"p"},"Copy")," button to the right of the dialog, or manually select the template text and copy it with ",(0,o.kt)("strong",{parentName:"p"},"[ Ctrl + C ]"),"."),(0,o.kt)("h3",{id:"saving-the-template-file"},"Saving the Template File"),(0,o.kt)("p",null,"Paste the template into your editor of choice and name it with an extension of ",(0,o.kt)("inlineCode",{parentName:"p"},".json"),"."),(0,o.kt)("h2",{id:"template-structure"},"Template Structure"),(0,o.kt)("p",null,"Whilst templates do not include any data from your visual, they are intended to be portable. You would need to supply your own dataset but it should be possible to use this as jumping-off point elsewhere, similar to how you might start with an existing example before refining it in Deneb."),(0,o.kt)("p",null,"As such, a template is either a Vega or Vega-Lite specification, with a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"usermeta")," object (",(0,o.kt)("a",{parentName:"p",href:"https://vega.github.io/vega/docs/specification/#top-level-specification-properties"},"Vega")," | ",(0,o.kt)("a",{parentName:"p",href:"https://vega.github.io/vega-lite/docs/spec.html#top-level"},"Vega-Lite"),"). This would typically be ignored by an external Vega parser but is used to identify the template as valid for Deneb. This has the following objects:"),(0,o.kt)("h3",{id:"deneb"},(0,o.kt)("inlineCode",{parentName:"h3"},"deneb")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"All properties are required.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"build"),": Which version the template was built with.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Whist this is required, it is purely for the purposes of troubleshooting at these early stages, so is ideally left as-is."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"metaVersion"),": The template metadata version.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Only a value of ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," is currently supported."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"provider"),": Which provider should be used when loading and parsing the template.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Valid values are ",(0,o.kt)("inlineCode",{parentName:"li"},"vega")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"vegaLite"),"."),(0,o.kt)("li",{parentName:"ul"},"If this is manually modified, Deneb will do its best to auto-resolve this from the top-level ",(0,o.kt)("inlineCode",{parentName:"li"},"$schema")," property (if supplied), falling-back to parsing spec. It's not guaranteed to be successful.")))),(0,o.kt)("h3",{id:"information"},(0,o.kt)("inlineCode",{parentName:"h3"},"information")),(0,o.kt)("p",null,"The following required properties are populated from the details entered by the author in the ",(0,o.kt)("em",{parentName:"p"},"Template Information")," pane from the ",(0,o.kt)("em",{parentName:"p"},"Create JSON Template")," dialog:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),": The name of the template that is displayed in the dialog for users, once imported."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"description"),": Longer-form details of the template purpose that are displayed in the dialog for users, once imported."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"author"),": Used to identify the author.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Currently not displayed in the dialog upon import (but might be later on).")))),(0,o.kt)("p",null,"The following required properties are auto-generated by Deneb:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"uuid"),": unique ID for the template."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"generated"),": time (in UTC) the template was generated.")),(0,o.kt)("p",null,"The following properties are reserved for potential use elsewhere, and are not currently used within Deneb. This may change later on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"supportUri"),": A URI to indicate where further information about the template can be found (such as a blog or website)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"videoUri"),": A URI to indicate where a supporting video asset, such as a demo or 'how-to' guide can be found."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"previewImageBase64PNG"),": Placeholder for a base64-encoded PNG image, which could be used for displaying a thumbnail or assistive image.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This is shown in the ",(0,o.kt)("strong",{parentName:"li"},"Create New Specification")," dialog if included with the template."),(0,o.kt)("li",{parentName:"ul"},"Images should be no larger than 150x150 pixels.")))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"information")," object can be further extended with any properties you want for your own needs, but they will be ignored by Deneb upon import."),(0,o.kt)("h3",{id:"dataset"},(0,o.kt)("inlineCode",{parentName:"h3"},"dataset")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"All properties are required.")),(0,o.kt)("h2",{id:"additional-considerations-for-developers"},"Additional Considerations for Developers"),(0,o.kt)("p",null,"If you're looking to generate suitable templates offline that can be imported, then you'll need to ensure that the Vega or Vega-Lite component (i.e. the main spec) validates accordingly."),(0,o.kt)("p",null,"As the ",(0,o.kt)("inlineCode",{parentName:"p"},"usermeta")," object is extensible, there is a JSON schema you can use to validate that your object will parse correctly in Deneb when imported. This is hosted at:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://deneb-viz.github.io/schema/deneb-template-usermeta-v1.json"},"https://deneb-viz.github.io/schema/deneb-template-usermeta-v1.json")))}m.isMDXComponent=!0},22533:function(e,t,a){t.Z=a.p+"assets/images/export-enter-dataset-information-87d0980fe8e6698585fa2334970b6352.png"},6615:function(e,t,a){t.Z=a.p+"assets/images/export-enter-template-information-5d261effbc95cbb3130cf25cf9882ff0.png"},97599:function(e,t,a){t.Z=a.p+"assets/images/export-review-template-content-4a5a3c702378a679adca50b988a66a33.png"},40874:function(e,t,a){t.Z=a.p+"assets/images/import-placeholder-expand-74e6c2828b19a3f28676d0b207990f82.png"},56777:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAp4AAADwCAIAAAAmdfPHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACCqSURBVHhe7d2Lc1Xlvcbx8y/0tHPOtKfndM4I2Kqn7dSZc8QrtPWKlyqg4KUFhKPiFRHHyowXqpaiY60XbG1PScSqQJWpF2LrCBINJCQ43CICCUgSMIRwkwQhEDiP+S3eeV1rZ2cnrGQn7/5+Zk1mrXe9690rm/W+z3rX3sA/HQMAAAEh2gEACArRDgBAUIh2AACCQrQDABAUoh0AgKAQ7QAABIVoBwAgKEQ7AABBIdoBAAgK0Q4AQFCIdgAAgjKQov3AgQN3T5kyeNBJbpk/f15ra+vDDz/06iuvHD16NKqX8PisWaNGXrV79+5o+7iKioohgweVl5dH20BYli5desr3vqteo24SFeVm+fLld955R0NDQ7SdNuvLWrQSFR2njrxu3bo77rj99NN/pD4+fNh5ixe/F+3LZMGC+eedd25NTU203WuOHDn82GOPatm5s2n0qJE6t9nPPecPO26A0oATFQF5MvCi/Ybrr1uyZHFZ2Yda6uvrmpubb7jh+meeeVodL6qXQLSjAKlHzJjx8P9OmnTRhRes//jjqDQ3C19//cILLqit7a287CzalZR66dNOPUUddv68eaWlpb9//vl33imJdmfSZ9G+detWvZO6W9JIYtF+9ehRu3btinYfO/bJ+vVnnTmUaEd/MPCiPTkcdIloRwFSFF06YoTS8ZabbyoqmhOV9g+d9WXN188+68zfPvnkoUOHoqKu9Fm0v/TSS5pF7N2zx6J95FVX/eTHw5X0tlc3JZrEj/vFLxT/RDvybsBHu7qZYtv1pYaGhrvuulN3/UOHnqHhzKbyfrSvXbtW/VN31vr50ty5WiHaEaS33nxTSbN3797nZ8+2FSvfsWPH1LunqI9o+c3MmW1tbckSPy+/+OKL3//++dNP/5GWZ5995tbJk60PWp333ntvwvhx3/vuyep3zc077SUydsPO2rFDROn4xBOPX3nlz3Q+UZFHjeg3uvJnV6jPqtk//OH3alDl7lTd+GCfPqhE5drr6mj2r16vU33s0Ueamppmzvy1znDEiEuqKitd/ReLi3Vj4ZeblpYW3SEp3bVu0T5jxsO/vO++6dPv19ulQk3fr7nm6tdfey37cKTl7bfftt9C78OcOX+2Nyf5R2Cjlj0V8Ec5O0+9gXfcfptVyPhuo8AN7M/alcr+Rd+0Y8d1147VVV5fX1dSUnLG//y3epHKXbRrHnPJxRdNmjhRk4NlZWW677ZGOpoHwqF4U3bah8GrVq0688yhVVVVKldmKI3UHT755BOFhFJ/3759VrJ+/XorcbGtTR1uefyXv7yk7vO7p55SNLpo17oCb8OGDW+88TfV0bF6iWQ3XLRoUZZ2Os73Sy6b/UKjw//61wVqStGrw9WImrKP4XKMdrv50Kn+35/+pHXdQOicV6youOLyy/RG6RCrf/75P9XNyto1a5TTuh/Sm9Px+sdWrlx56YgRemmtW7RrVNGUXXN0K9S66m+urfWHo+uvuzb2Pugk//jCCxp/tFf3FjqTioqK5B+Kqtmo1Vm06zztQ5aMr6JyFLiB/Vm7rnv/ol+4cKGueOtp1lumTbtHt/bWSVRTFc46c+gn69d3tHdM7fBAHkHSRX7uOWcrNrS+d8+en//8Bk2IFZAuRTZu3Nje4dChQ1ai2LMSVXN5qWMVco899qjNBW3yaumrOj/8wfeVeSo/0NqqdLFYzdgNdzQ2jhlzTcZ2tGmsg8cKTew0dIa6a7n8sksbGxtzjHZ3qjpEca45tzWlOboNDlbffTNu3quvWrNaV029tObo9jGBi3ad1ZcP/156SeXaq2M1ImUfjg4ePKhNo8aHDTtP55b8Q9E52KjVWbTbXZRkfBXbhUIW1AN5/fTn9Fqsn1snUU3Xje1YPmtHqDT0x/qCe9Dd0NBw2623ar44YsQlmrYqRZIlLi83b978kx8Pt4AUvw+6On65dbfYS6v8448//ulPfpyxHSsRJagS1z7PjoqOi52GuFd3K/45qIJFoB3i6mjdBfOXrXTssjHBr2/l7hBNiC+5+CL3sbprwe4wNOlfvXqVbhd0O6Vd2Ycj3dMsKytT+qr+aaeeokJ7xeQfgQ5XU51FuzvPjK9iu1DIgop23cBedOEF1sHMvn37XCfRpn8nLm+9+SbRjvDYbPKeqXfbwy0tRUVzFBtLliyOanR8uKt5tv/Btl/igq25uVklNuNXHWvZ+qAffn6sZuyGO3fuvOqqKzO28+VrH6f4POV7333llZc1c42KOqh+ctZuX1B3p6EJsSLzlptv2r9/v+poBnzuOWdbBPqnqvPpbrRroPBvOPwW9GvqnuPGCePtd9Gu7MPR+++/f/rpP9IuvbG63bFZe0erX/L/CDQPufyySz/77DOV25+CNRs7z4yvYrtQyIKK9tramvPP/+n06ffrHr+pY3hau2aNyrXXeq86wFlnDr3j9tuqq6sXL35v7Jgxuskl2hGYlStXKj/cLFMUgddcPVpdQ+N+cXGRdZBHfvUrBcbWrVtjJX6027Notfbaa3/V5q9mzPj+f51mfdAPP9c3Fe0Zu2GsHa0PHXpGrC+LNnUO6pXjx/3i7bfeKi0tffrp37399tvKcvuo3j5rVyNaV4nK/dN4fvZslc+fP1+b6uZqR3tV7tfRONCtaNdvpHm5fYHO+C3Yo3i9kOLfdvnD0QUXnB97H5TEP/zB91V527Ztjz7yiJ2hfuvkH0FJSYnucp599hn9vlbTmo2dZ8ZXsV0oZEFFu6xdu1aDgiYop516ym233lpX9+VHUNprvVcDgQaLESMu0V51IXUeZu0Ij4LT4iHaPv7lcyVubW3tM888rfxTH1FPUX9pa2uLlai+Czat79mzR51FXUYd5+9/f0fTSvvM2K/j+qY9DI91w/r6uoztJKNdFJZvvvmGfYdcLWhqvnz5citXoutXULl+at0++fZPQ7NbNaujdLgC3kWgX8cPZtuVPdp1n6R5uWYFVi6xFjSMuHc7+3Ck9yHjGWb8I9A7ad/hP/ecs1VTL2HNxs5TMr7bKHADKdoB5Nf27dsVzL998sloO3T25N99gQ4YKIh2ANm8807JG2/8bdu2bZq/Tpo48awzh65bty7aFzrNxUdedZX/0QYwIBDtALIpLS29dMSIwYNOOu3UUxTta1av1lw22gegXyLaAQAICtEOAEBQiHYAAIJCtAMAEBSiHQCAoBDtAAAEhWgHACAoRDsAAEEh2gEACArRDgBAUIh2AACCQrQDABAUoh0AgKAQ7QAABKWLaN8IAAD6jSies2LWDgBAUIh2AACCQrQDABAUoh0AgKAQ7QAABIVoB0JTVlY2derUmwD0OXU9dcCoK+YP0Q6ERoPLli1bog0AfUhdTx3w6NGj0XaeEO1AaDR1iNYA9Lmbb76ZaAeQMqIdyCOiHUD6iHYgj4h2AOkj2oE8ItoBpI9oB/KIaAeQPqIdyCOivUAdOXJk8+bNFRUVH3zwQWlpqX5qXSUqj2oAJ4BoB/Io2Givrq4ePnxYVVVVtA3Pjh07ysvLV6xYUVdXd/DgQZXop9ZVonLttWpAjxHtQB4FG+1FRXMm3jhh9nPP5f3X62+2bdu2fPnyDRs2JN8Zlah82bJlDQ0NURHQI0Q7kEdhRntLS8sv77tPAXbvvdP27tkTlabq8VmzhgweZIvWo9J+b//+/ZWVlZs2bYq2M9FeTd9VM9oGui+XaE92opqamlEjR+qnVQDQM2FGe3V19UMPPXigteWxxx5duXJlVJqS3bt3jx410o/zF4uLVRhtJKjmggXzo418U2xXVVW1tbVF2x2/TkVFhX/+2qs62eMfyC57tOfSidRr/ApAATp8+HCWhNYuVYg2virMaC8qmvPWm29qZcmSxek+kz9w4MDdU6Z0K6r7T7RbZtfW1kbbnVOd2B0A0C1Zoj3HTkS0o8C1t7e//PLLS5cuzRhhKtQuVVC1qMgTYLTb0/itW7dqvbGxMd1n8jU1NZMmTexsjq7ByD1g1FTYhjDbHDbsPHvMqPJYifg1Fy1apJdwu/w23WiolQcfeECHqJGFCxdqpbW11Xapfc2HMp7h3r17V6xY0dTUFG13UM3YrF1URzVVP9oGuilLtGfpRCq0i1+h7i770tJSXeG6Sq1OD26vgQFKk/K5c+cm091yXbsKaNZuT+MPHfryi99HjhxO95m8xhcNKxpcom2PCouLi2yXxh1XzZ+1+7lrTSmSY0OV6rvUV6Hq79q1S+s6Sus2wKnc1XGjodYly0MC1dTh9upO7oVA7rJEu135GTuRLjl3MesydrN2f117O7szAMKTTPcuc10CjHb3NN6k+0w+y6jk80cfP2v9dTWimbdqxoYqN7pZ5OsVrVzcAOePdOI2/ZExiVk7+ky60d5ZOVAI/HSXLnNdQot2/2m8SfeZfCyGYzRmuaeIbnauYUiDkVYsql0FW8rLy2MjnRvF/OHMuJqx0c3OSpN7Vcgy6mX8rF2voqNivxGfteMEneADea3HLnLrR7r47YY4KgUKg6X7+x26zHUJLdqPP40/FG2n/Uze4llZGG17/IT2By8X7baePFYl/qfjOtb+/k/ytbRug11s1HM1M7bv4xvy6Btdfo0u44WaJdpVX0etXbNG0W69DCgoivM/d+gy1yW0aC8qmhObFtuS7jN5NejSWuzv7fgjkdaTs3bRsX6KG21ePXqUq6P6uXzW7o96onLdEHQ56vH32tE3skS7dNaJpLNo14Wty1sXuXUBoAC1t7fnGGRBRXvyabypr6/T/X6K35O3lHX3DfPnz4sVagxys3aNU8OHD/PT2h2os7JvtmuXKlhhlm/Iu0EtGe16Lf/+IIsu/zU67VWdqAjokezRLp11Infxuwr+Za8Su9MFkEVQ0Z58Gm/a2toeevCB1P/tml6icc3dFuTOHxO7xL8hj97WZbT3QPKOFkBGQUV77LvxvpKSkgHx78nbx5A9GL90SLeO4n9+Q69KPdp12zpq5Ei+AgLkIpxob2lpuffeaZ1NW1N/Jp8ii3P3ZLK7ua5IPnnIYPdsH+gPUox210HKy8ujIgBZhfY1OgD9QW88kAeQI6IdQPqIdiCPiHYA6SPagTwi2gGkj2gH8ohoB5A+oh3II6IdQPqIdiCPiHYA6Zs6deqWLVuiDQB9SF1PHZBoB5CysrIyDS6auwPoY+p66oBRV8wfoh0AgKAQ7QAABIVoBwAgKEQ7AABBIdoBAAhKF9HeBAAA+o0onrNi1g4AQFCIdgAAgkK0AwAQFKIdAICgEO0AAASFaAdCw78hD+QL/4Y8gF6hwYX/+Q3IC/7nNwC9QlOHaA1An+P/aweQPqIdyCOiHUD6iHYgj4h2AOkj2oE8ItoBpI9oB/KIaAeQPqIdyCOiHZ364osvNmzYsHz58g8++KC0tPTDDz+srKysr6/P+xWD/o9oB/IozGhvaWm5dfItyzr+zv7mzZuvv+7a+vo624Ucbd26ddmyZStXrty+fXtbW5tKWltba2try8vLFfC7d++2akBGRDuQR2FGu4L8huuvUw5pXQE/+ZabFfa2C7nQ/ZBy/dNPP422PYr5devWaSq/c+fOqAhIINqBPAoz2qsqKyeMH7d3716tFxXNmTnz16n/ko/PmjVk8CC3VFRURDvSppbvnjJFM+ZoO6uamppRI0fqZ7TdI8psTc3r6+uj7QS9mUr3jz76yGbzQFL2aD9w4ICuaus7w4add4JXbGfsVXqvbwL9VpjRPu/VV2fMePjIkcPKnunT71+4cGG0Iw27d+8ePWqkoj3a7kjfBQvmRxtp61a0+zRcTpo0sQdPzteuXbtmzRr/smhoaKiqqvLPYd++fStWrMgS/yhwWaLdepBLXF2ouuBsPV1EOwa6w4cPZ0lo7VKFaOOrgor2JUsWu2l0clHGpzLLVKj3XpAn9XG0f/7558psZXm03bnq6mrdAUQbwFdlifYe33R2F9GOAa29vf3ll19eunRpxpBWoXapgqpFRZ4AZ+0tLS2TJ99SVVmp9Y0bN04YP665udl2nbjso5LKtbe4uEh3EroD8J86appiR1mdRYsWDRt2npXv2rVL5bpdcE8C/CHJj3atW2ta7PbCauoV1ZpWtm/frsZ1kn5NNRu7HbGSaOOrGhsbKysrFfDRdofkrF3q6upUePDgwWgb8OQ+a3cy9he7/q1P6SLftGmTu7bdNWx9SuU6yqqpC6g8Fu3qAnagaxzo5zQpnzt3bjLdLde1qyBm7aa+vm78uHF1dVu1rnn8tGn3pBg/NtBoyIi2v8rGLDfiaHxRhGvFhhgLV6tjjVi51c8l2l8sLnbjnQ1PVtNVUIlFu9b9uxC/Eb9OUsYUz70QMNk/a9flpwCORWzG/qJLV2Fs65bN1k1U2X2tRI2oKS12lxzrHdq0Y10X8Psa0M8l073LXJcAo13zdc3a9+/fr/XnZ8/WYuWpsIzUkGGbGiBsHmAjRZbUdKNJrI4LXX+46SzaHdeIX9Mv17p+al0lWk826H6FGGbtSEX2aDe6FF3fiXHdwb9cdUkrzjVx17p/Scf6lNuVXLEKqq9N6xpA/+eney65LuFEuzLpissvs6BNLhdfdGEqf7Xdz0uns9gWlbtzyFjHRq4co11H2WN8LfbUMTlmucb10z9V175+uvpJGT9rzxjtfNaOLHKJdrELWBenbSb7i13/qqZ1Xcxat0vav/JjfUrsInd1VEHzeNeyFvfQHhgQLN3f79Blrktos3ZNIqdNu8e+Et/c3Dx27JhVq1bZrlTEotR0Fu0qdGNWZ3Vs5Mol2v2odo3Ezsdv3K/vNmtra1TfFWbEN+Rx4nKMdnFXfsb+Yte/rnOt67p1V69/5fuXvb/LX3nwgQdcBWAgUpz/uUOXuS6hRbvifMyYayzONa28duxYzeZtV1o0QOiW341B4oYhf4jxhx5bT9YRG7mUmlpxHz2qQU0s7Fi/glbUlBV2d9YuOoGJN07wzzwj/l47TlyWaNeVaZ+pi13AuiY76y/+Za+LWet2Sfv1VaK+Y/VFrdkhfh0r9G9PgQGnvb09x8AOLdr9OC8pKbEebrtSZEOJe7jnIlk/Y7F98pDB9vRPk4bs0a51VbAGi4uL3JDkKtg4ZRW0Yo34g5fEGrcG3ZCnajk+h+zyX6NT9ttXloCMskR7rPu4e01dn8n+Yte/9WIdqHX91Lp/5dtlb9+i16LG7eKM9Q7Xv7S4TgEEKbRoV5zfddedB1pb9Vs98cTj6X6HbqDzR8kuZfk35Kuqqmx4BTqT+wP5E2fRnss9K1AgQot2dEbD39WjR7kZTC74n9/QY0Q7kEdEe0GwR5Hz58+LtoFeRrQDeUS0A0hfX0Y7gBiiHUD6iHYgj4h2AOkj2oE8ItoBpI9oB/KIaAeQPqIdyCOiHUD6iHYgj4h2AOmbOnXqli1bog0AfUhdTx2QaAeQsrKyMg0umrsD6GPqeuqAUVfMH6IdAICgEO0AAASFaAcAIChEOwAAQSHaAQAIShfR3gQAAPqNKJ6zYtYOAEBQiHYAAIJCtAMAEBSiHQCAoBDtAAAEhWgHQvPxsoc+W/qtz8v/mYWFpY8XdT11wKgr5g/RDoSGXGdhyeOiDnjsGP/zG4BU2fgSbQDoQ5+Xf72j9xHtAFJFtAP5QrQD6BVEO5AvRDuAXkG0A/lCtAPoFUQ7kC9EO4BeQbQD+UK0F6LGxsaPPvroww8/LO2wbNmy6urqlpaWaDeQBqIdyJdgo11BdevkW5aVlWl98+bN1193bX19ne0qZK2tratWrVKWb9iwYd++fSo5cuRIU1PT6tWry8rKNm3adPRoni8FBINoB/Il2GhXkN9w/XW1tbVaV8BPvuVmZqX79++vqqrSfF0BHxV5NJVfvny5pu+kO1JBtAP5Emy0V1VWThg/bu/evVovKpozc+avU0ysx2fNGj1q5O7du6Pt4yoqKoYMHqSf0XZ/ol9fsa1cb2tri4oSdu7cWV5eXl9fH20DJyB7tGfpRCcPGZx6Jzpw4MDdU6aoe/qLSlQe1QACEmy0z3v11RkzHj5y5LCSbPr0+xcuXBjtSINGpYk3TliwYH603cGNHf0z2hXbOrGmpqZou4OS3h5sOBs3bly5cmWW+Ady1GW056UT6WZi0qSJNTU10XZ/ovck9oYAhw8fzjIv1S5ViDY8oUX7kiWL3S15clHGpxJaNippDPKfbGsw0pChpX9GuzJbQd7lo4tdu3Yl7wCAHsgl2mPz5j7oREQ7BpD29vY/vvDCu+++m3HoVqF2qYKqRUXHhTlrb2lpmTz5lqrKSq0r0iaMH9fc3Gy7UqEeWFxcpFHJH4BU+P6SJX6hVuyWYtiw8zZt2hQr1OK6sVasxB5RxkYfHWK3ETan0UurQRsTVVOH2LHz58+z+hmtWrVKb0W0cVxy1q5bH83aP/3002gb6Kkuoz3FTmRdY9GiRdYd/Moxsc7l96CMTemUrMSadQeqsna5nqt1Kxed3slDBlt9Ow17Uf2+sQa1WJf3S+xVrH1r0Pbae6KfWn/wgQdUs7y8XCXuHKypjiMQjiNHDj8/e3Yy3S3XtUsVoiJPmNFeX183fty4urqtWtc8ftq0ew4ePGi7UmFd2vqYTdzVFdV1t23b5vdA19Ospvqn1l8sLnaFVsGO1XRZhbW1NSqRLNHumlI1tWAvFzskKZniknsh0F1dRrvrRHY9W0doaGhQiV3Vro/YuvUCrSc7kXUNrVs/UuOu2Ri/p2g92YP8pqyCS3Q16+LWAlU/tW6H2Lqdkp2GnbP2WjvuWLWmWwet+AeKvSe2rhVX36rZeeqnXtfWRdXsJWzdHYKQJNM9e65LmNGu+bpm7fv379e6fnktVp4W64H+GGElfg/0e6nKdZdtNR13uIwaOdKfZPgtiw0QLtpdr7Zy69Wil3OvmMSsHX0sl2hPqxPFuoZKVK69tunzXzFjD4o1pXPQYutW324vVNOVi2sq4znHerTPb8c/1i/3T8k/59ip6lW0mfG3xkDnp3uXuS5BRXtjY+MVl19mz6aSy8UXXZjWX213PdC6n+u3rqfZSuwErAeqmiYBVuJmA/o5fPgwVyc2EFhnTka7Xt3acYsbC5IyftaejHY+a0dacol2rXSrE9kj6GQninUNlai1jCHnd66MPSjZy+w8RYXalTHa1aBSXN0nec46KtajRce6Cq4drbjX8tv3T8nOQSVaV7NXjx7l2tHihhSEJ0r3f/xDS/ZclwBn7QcPHpw27R77Snxzc/PYsWM0YbVdaXE9UF1L3UzvsnVCvweqxFZ8/oiT7O0qsceDsV3WmTPO2l3n7xLfkEcfyzHaU+lEsa7h14nxO1fGHhRrSifp4laF2tXlrN0d6/gvKqrj2vTb6azcPyX3QlaefJKBgCnOf/fUU1qy57oEGO2K8zFjrrE4r66uvnbsWM3mbVda/B6odd0p2+P0WA9UTscGF79bat1usbUiKnGH24q9hFrQjbk2k9GuXXYrYJvZab7O32tHX8ox2m39BDtRrGuoJJdoz9iDYk3pJN152ku7aHdTZL8d/dS6fdbu+C/qt2/rLsL998RvR4Wakbv2dYj9+rbL30Tw2tvbYw9fMwow2v04Lykp6Y3r3u+B6q66cbbe7ndasQ5pi52GVXAl1tvFnsZr8ZvVwKESde9FixapcjLaxVXT4gbHzuTyr9GtX78+l+sG6FLu0a7LOMdO5HqBK7FOFDtKJblEu8R6ULIpnYA7TxXaOVi5ztmdiasjsXNWg7EXVTvuK/RqxEW7nYydhjZVbo34f5XAzkFtdhzxJVdNi2sKBS7AaFec33XXnQdaWxVRTzzx+PNpf4duQNOoxL8hj76RPdoHOuU3OYp+K8BoR5c0Qdfcnf/5Db2KaAfyhWgH0CuIdiBfiHYAvSLsaAf6M6IdQK8g2oF8IdoB9AqiHcgXoh1AryDagXwh2gH0CqIdyBeiHUCvINqBfCHaAfSKz5Z+y9KdhYWl7xd1QKIdQMo+XvYQ6c7CkpdFXU8dMOqK+UO0AwAQFKIdAICgEO0AAASFaAcAIChEOwAAQeki2psAAEC/EcVzVszaAQAICtEOAEBQiHYAAIJCtAMAEBSiHQCAoBDtAAAEhWgHACAoRDsAAEEh2gEACArRDgBAUIh2AACCQrQDABAUoh0AgKAQ7QAABIVoBwAgKEQ7AABBIdoBAAgK0Q4AQFCIdgAAgkK0AwAQFKIdAICgEO0AAASFaAcAIChEOwAAQSHaAQAICtEOAEBQiHYAAIJCtAMAEBSiHQCAoBDtAAAEhWgHACAoRDsAAEEh2gEACArRDgBAUIh2AMCA9Hn51wpwOXbsaPT7d45oBwAMSLHMK5CFaAcABCuWeQWyEO0AgGDFMq9AFqIdABCsWOYVyEK0AwCCFcu8AlmIdgBAsGKZVyAL0Q4ACFYs8wpkIdoBAMGKZV6BLEQ7ACBYscwrkIVoBwAEK5Z5BbIQ7QCAYMUyr8fLo3f92+BBJ9mi9dje/rYQ7QCAYMUyrwdL3btfv/LC7/hx/scZ31Sh2+zBotbm/uZfY4UpLkQ7ACBYsczr7tK09Gu3//zfU49hoh0AgB6KZV53l9Wvf2PcqP/IOEdfUvQvSv37b/r24EEnad1KhnQ8sT/njP9c9fo3rJoi3D3JVwW7V7BNVVP7dqArcQeeyEK0AwCCFcu87i6W38rjWLkWy2P9dJtXXvidrR03Ae4oLS/M+KYdroxX4Y6OdX/Wbgfa3YMdaHVOZCHaAQDBimVedxcX0rFyLbFdflqrULN5m5G7xR4AWPb7lbs8sAcL0Q4ACFYs87q7dPlA3qJdP7VuD9XdogpWzZW4ab2L84wHLp4TPQno8UK0AwCCFcu87i4WvRbSsSU5a09W8+tkmbVnbP9EFqIdABCsWOb1YFHuaibtkliL/eW3WLRr003K3aKjlNxuPTlr12IHnuDfpostRDsAIFixzOvZotxV+roH5i92pHIs2rUorV0d2+UfeP9N33azds3gzz3jP9035GMH8jU6AAA6Fcu8AlmIdgBAsGKZVyAL0Q4ACFYs8wpkIdoBAMGKZV6BLEQ7ACBYscwrkIVoBwAEK5Z5BbIQ7QCAYMUyr0AWoh0AEKxY5hXIQrQDAIIVy7wCWYh2AECwYplXIAvRDgAIVizzCmQh2gEAKDhEOwAAQSHaAQAICtEOAEBQiHYAAAJy7Nj/A/GzyRcK94uDAAAAAElFTkSuQmCC"},70546:function(e,t,a){t.Z=a.p+"assets/images/import-template-complete-5678872c7bf79afb50b34c665ff82435.png"},50859:function(e,t,a){t.Z=a.p+"assets/images/import-template-details-initial-dfeef6b60afb4e114545dba579b7e95c.png"},22565:function(e,t,a){t.Z=a.p+"assets/images/import-template-location-28fc991e4b668977b6cbb9d50ab33015.png"}}]);