"use strict";(self.webpackChunkdeneb_doc=self.webpackChunkdeneb_doc||[]).push([[8122],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=r,A=f["".concat(s,".").concat(m)]||f[m]||u[m]||o;return n?a.createElement(A,i(i({ref:t},p),{},{components:n})):a.createElement(A,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4118:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"formatting",description:"Understanding how to format numeric values in Deneb",slug:"/formatting"},s="Formatting Values",c={unversionedId:"deeper-concepts/formatting",id:"version-1.0/deeper-concepts/formatting",title:"Formatting Values",description:"Understanding how to format numeric values in Deneb",source:"@site/versioned_docs/version-1.0/deeper-concepts/formatting-values.md",sourceDirName:"deeper-concepts",slug:"/formatting",permalink:"/1.0/formatting",editUrl:"https://github.com/deneb-viz/deneb-viz.github.io/edit/source/versioned_docs/version-1.0/deeper-concepts/formatting-values.md",tags:[],version:"1.0",frontMatter:{id:"formatting",description:"Understanding how to format numeric values in Deneb",slug:"/formatting"},sidebar:"mainSidebar",previous:{title:"Visual Editor",permalink:"/1.0/visual-editor"},next:{title:"Pattern Fills",permalink:"/1.0/pattern-fills"}},p=[{value:"Default Formatting Behavior",id:"default-formatting-behavior",children:[],level:2},{value:"Power BI Custom Formatter",id:"power-bi-custom-formatter",children:[],level:2},{value:"Vega-Lite Implementation",id:"vega-lite-implementation",children:[{value:"Quantitative Axis Example",id:"quantitative-axis-example",children:[],level:4},{value:"Quantitative &amp; Temporal Axes Example",id:"quantitative--temporal-axes-example",children:[],level:4}],level:2},{value:"Vega Implementation",id:"vega-implementation",children:[],level:2},{value:"Locale-Awareness",id:"locale-awareness",children:[],level:2}],u={toc:p};function f(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"formatting-values"},"Formatting Values"),(0,o.kt)("h2",{id:"default-formatting-behavior"},"Default Formatting Behavior"),(0,o.kt)("p",null,"When it comes to formatting values (if you're just using simple encodings), then Vega or Vega-Lite will use its own deterministic behavior to figure out things like decimal precision or other elements."),(0,o.kt)("p",null,"You can provide your own overrides to these wherever they are used. ",(0,o.kt)("a",{parentName:"p",href:"https://vega.github.io/vega/docs/api/locale/"},"Vega")," and ",(0,o.kt)("a",{parentName:"p",href:"https://vega.github.io/vega-lite/docs/format.html"},"Vega-Lite")," both use the D3 formatting convention for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/d3/d3-format"},"numbers")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/d3/d3-time-format"},"date & time")," values (incidentally, so does ",(0,o.kt)("a",{parentName:"p",href:"https://charticulator.com/docs/user-interaction.html#text-formatting"},"Charticulator"),")."),(0,o.kt)("p",null,"Power BI ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/power-bi/create-reports/desktop-custom-format-strings?WT.mc_id=DP-MVP-5003712#supported-custom-format-syntax"},"has its own syntax"),", which is probably your preference for applying any customized formatting strings into a specification."),(0,o.kt)("p",null,"To ensure correct compatibility with Vega and Vega-Lite, particularly if you're bringing examples in (or even looking to take them out!) Deneb will use the D3 convention by default, but there's some help at hand if that's not your preference."),(0,o.kt)("h2",{id:"power-bi-custom-formatter"},"Power BI Custom Formatter"),(0,o.kt)("p",null,"If you prefer working with Power BI format strings, Deneb has a ",(0,o.kt)("a",{parentName:"p",href:"https://vega.github.io/vega-lite/docs/config.html#custom-format-type"},"custom format type")," named ",(0,o.kt)("inlineCode",{parentName:"p"},"pbiFormat")," that you can use in lieu of the D3 format convention."),(0,o.kt)("h2",{id:"vega-lite-implementation"},"Vega-Lite Implementation"),(0,o.kt)("p",null,"In Vega-Lite, we can specify ",(0,o.kt)("inlineCode",{parentName:"p"},'"pbiFormat"')," as a ",(0,o.kt)("inlineCode",{parentName:"p"},"formatType")," wherever you're specifying a ",(0,o.kt)("inlineCode",{parentName:"p"},"format"),"."),(0,o.kt)("h4",{id:"quantitative-axis-example"},"Quantitative Axis Example"),(0,o.kt)("p",null,"Let's say we have a simple bar chart that uses the Power BI financial sample dataset, which shows ",(0,o.kt)("inlineCode",{parentName:"p"},"[$ Sales]")," for each ",(0,o.kt)("inlineCode",{parentName:"p"},"[Country]"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "name": "dataset"\n  },\n  "mark": {\n    "type": "bar"\n  },\n  "encoding": {\n    "y": {\n      "field": "Country",\n      "type": "nominal"\n    },\n    "x": {\n      "field": "$ Sales",\n      "type": "quantitative"\n    }\n  }\n}\n')),(0,o.kt)("p",null,"And this will result in the following output:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"vega-lite-default.png",src:n(1894).Z,title:"Simple bar chart using Financial sample dataset (with [$ Sales] as a measure). The measure axis displays raw values, with a maximum of 1,000,000,000."})),(0,o.kt)("p",null,"That's a lot of zeroes! What might be nicer is if his were a little easier to read. If we want to use a Power BI format string for this, we can modify the specification as follows to show values in $bn to one decimal place (changes highlighted):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"highlight={8-11}",highlight:"{8-11}"},'{\n  ...\n  "encoding": {\n    ...\n    "x": {\n      "field": "$ Sales",\n      "type": "quantitative",\n      "axis": {\n        "format": "$#0,,,.0bn",\n        "formatType": "pbiFormat"\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"This results in something a little more human-readable:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"vega-lite-billions.png",src:n(841).Z,title:"After applying a Power BI format string and specifying our custom formatter, the axis becomes much more human readable. This updates to show tick values as $bn, to one decimal place."})),(0,o.kt)("h4",{id:"quantitative--temporal-axes-example"},"Quantitative & Temporal Axes Example"),(0,o.kt)("p",null,"If instead, we had a line chart using the same dataset, but this time we wanted to plot ",(0,o.kt)("inlineCode",{parentName:"p"},"[$ Sales]")," by ",(0,o.kt)("inlineCode",{parentName:"p"},"[Date]")," then we could express this as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json{"},'  "data": {\n    "name": "dataset"\n  },\n  "mark": {\n    "type": "line"\n  },\n  "encoding": {\n    "x": {\n      "field": "Date",\n      "type": "temporal"\n    },\n    "y": {\n      "field": "$ Sales",\n      "type": "quantitative"\n    }\n  }\n}\n')),(0,o.kt)("p",null,"And here's how it looks out of the gate:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"vega-lite-line-default.png",src:n(7080).Z,title:"Simple line chart using Financial sample dataset (with [$ Sales] as a measure and [Date] along the x-axis). The measure axis displays raw values, with a maximum of just over 400,000,000."})),(0,o.kt)("p",null,"We could use a similar approach as above for both axes, to get them how we want (changes highlighted):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"{6-9,13-16}","{6-9,13-16}":!0},'{\n  ...\n  "encoding": {\n    "x": {\n      ...\n      "axis": {\n        "format": "MMM yyyy",\n        "formatType": "pbiFormat"\n      }\n    },\n    "y": {\n      ...\n      "axis": {\n        "format": "$#0,,,.0bn",\n        "formatType": "pbiFormat"\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"And now, we have both axes formatted as we like:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"vega-lite-line-formatted.png",src:n(8571).Z,title:"After specifying format strings and the Power BI custom formatter for both axes, the specification updates as required."})),(0,o.kt)("h2",{id:"vega-implementation"},"Vega Implementation"),(0,o.kt)("p",null,"If using Vega, you'd call the custom formatter in lieu of the ",(0,o.kt)("a",{parentName:"p",href:"https://vega.github.io/vega/docs/expressions/#format"},"format")," expression, e.g. for an axis tick label:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"highlight={10}",highlight:"{10}"},'{\n  ...\n  "axes": [\n    {\n      ...\n      "encode": {\n        "labels": {\n          "update": {\n            "text": {\n              "signal": "pbiFormat(datum.value, \'$#0,,,.0bn\')"\n            }\n          }\n        }\n      }\n    },\n    ...\n  ],\n  ...\n}\n')),(0,o.kt)("h2",{id:"locale-awareness"},"Locale-Awareness"),(0,o.kt)("p",null,"If using the ",(0,o.kt)("inlineCode",{parentName:"p"},"pbiFormat")," formatter, Deneb currently will resolve your locale ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/power-bi/fundamentals/supported-languages-countries-regions?WT.mc_id=DP-MVP-5003712#choose-the-language-or-locale-of-power-bi-desktop"},"according to your Power BI configuration")," for any values."),(0,o.kt)("p",null,"For example, we can view the live chart example from above ",(0,o.kt)("em",{parentName:"p"},"en fran\xe7ais")," (fr-FR), and the formatting strings will work as expected:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"vega-lite-line-fr-FR.png",src:n(685).Z,title:"If we are in a different locale, e.g. French, then our [$ Sales] and [Date] format string update to use locale-specific decimal separators and month naming."})))}f.isMDXComponent=!0},841:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAe0AAAEmCAIAAADA+V/bAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABl6SURBVHhe7Z3bcxzVtYf9B54q/Qt5Os8J5EJeUpXzMlQKHvAl2AI7hMTMCQm5cAy+YcoVYw9mjI0MgeATdGQLS1aEwm0SRVIVnLW7V+/e09OS2zOrp2/fV7+yeq/ee/dWT/enzmiCDn0LAABNBo8DADQbPA4A0GzwOABAs8HjAADNBo8DADQbPN42Pvvss6Wlpfsl8Omnn+qWKTKt+cyrq6u6ZUpJZ0AoaeaSzkODTq+7tkq7bnXLjnhOvZMfBTzeNobD4YkTJ7atGY1Gn3zyiTZMWVlZ+fLLL7VhxL179/7xj39ow44HDx5sbGxow46trS25gbVhx9dff728vKwNU2Tar776Sht2yEmQU6ENI9bW1jY3N7Vhh8wpwtWGHfLty12md/KjgMfbxuuXrj725AunL75vm1+dXzr68p8zRZMc++2VX569lSnOmGdfufqL197NFGfPc3+6/vyr72SKs+fUmRvHf38tU5w9L557r6SXTKaVyTPF2SMnQU5FpjhjFv/49sn/GWaKj5RXr97RWyvgiy++WF9f14Yd8tMRj4Pjl3+8/B9P/DchxCT/+dRremsF4HEoFzxOiGHwOFQAHifEMHgcKgCPE2IYPA4VgMcJMQwehwrA44QYBo9DBeBxQgyDx6EC8DghhsHjUAF4nBDD4HGoADxOiGHwOFQAHifEMHgcKgCPE2IYPA4VgMcJMQwehwrA44QYBo9DBeBxQgyDx6EC8DghhsHjnWPQO5TQG2htdmTWhX7hawaPE2IYPN4p1vsLgb2d0a1UjscJqSx4vEs4jY+Je319oC909ik96trTYjIm+jEQo9JOKq6rloo87+NxQgyDxzuEk+4+D82DQaBqp99I0N7o8aj1wUAH69N3usvJW7eyM0WMRqO7Acd+fSZzIRJCpg4e7xIHv/nhH6QTj2vfsVGR3x1SCvqMdxqbKUJe+JcCfvL0ycyFSAiZOni8S4w9IjsS+0Z29lv7eTzSczQ+LuV5fHKmPHhfhRDD4PFOEVnWy9V5OW545/oObkMdHXrcb0RbaaekkjNTHnicEMPg8a4R+VVJNZtUF/r9WNapolN9R7Z29PpjtnYV/3vOiZnywOOEGAaPQwXgcUIMg8ehAvA4IYbB41ABeJwQw+BxqAA8Tohh8DhUAB4nxDB4HCoAjxNiGDwOFYDHCTEMHocKwOOEGAaPQwXgcUIMg8ehAvA4IYbB41ABeJwQw+BxqAA8Tohh8DhUAB4nxDB4HCoAjxNiGDwOFYDHCTEMHocKwOOEGAaPQwXgcUIMg8ehAvA4IYbB41ABw+FwcXFRG3bs7e1Nd4U9lJWVle3tbW0Ysbq6OhqNtGHH5ubm1taWNuyQu3dtbU0bduzu7i4vL2vDFJl2Z2dHG3bISZBToQ0jNjY2Pv/8c23YgcehXPC4gMcFPC7gcWgkeFzA4wIeF/A4NBI8LuBxAY8LeBwayeW33u4dPnX7kw3b3Lqzdv6t9zJFk1y8dvvGR6uZ4oy59PYH7/zlbqY4e67cvHP1vb9lirPn+gcrl4cfZYqzR16yC1eXMkWTyLQ3P76fKc4eOQlyKjLFGYPHoZHweRVCfP7v3n08Ds0DjxPig8ehkeBxQnzwODQSPE6IDx6HRoLHCfHB49BI8DghPngcGgkeJ8QHj0MjweOE+OBxaCR4nBAfPA6NBI8T4oPHoZHgcUJ88Dg0EjxOiA8eh0aCxwnxwePQSPA4IT54HBoJHifEB49DI8HjhPjgcZieQe/QGAt9+9d8H/A4IT54HKbHebw30MZ8weOE+OBxmJ48j0ttoddbiHcED+xxP79XSJ7e1/txe7JwwA8JPE6IDx6H6Qk0LcQadrVEyIOBetiZOXJyutdtuZLb5StuQ7+Eo3LA44T44HGYnsTFIdmaa0d4j8d7E0mn2o5JH8ZjsvMreJwQHzwO0/MQj0dKjiTtn6yLeTw7p2NpaenJgMf/63DmUiaks8HjMD0FPB5tRkKPtiY97r7GItd97ktcSHcJo9HobsCxX5/JXMqEdDZ4HKbnIR6P/S0s9Pv61D3pccEVI7SdDJucPIX3VQjxwePQSPA4IT54HBoJHifEB49DI8HjhPjgcWgkeJwQHzwOjQSPE+KDx6GR4HFCfPA4NBI8TogPHodGgscJ8cHj0EjwOCE+eBwaCR4nxAePQyPB44T44HFoJHicEB88Do0EjxPig8ehkeBxQnzwODQSPE6IDx6HRoLHCfHB49BI8DghPngcGgkeJ8QHj0MjufzW273Dp25/smGbW3fWzr/1XqZokovXbt/4aDVTnDGX3v7gnb/czRRnz5Wbd66+97dMcfZc/2Dl8vCjTHH2yEt24epSpmgSmfbmx/czxdkjJ0FORaY4YwQ8Ds1jOBwuLi5qw469vb3prrCHsrKysr29rQ0jVldXR6ORNuzY3Nzc2trShh1y966trWnDjt3d3eXlZW2YItPu7Oxoww45CXIqtGEEHodGgscFPC7gcQGPQyPB4wIeF/C4gMeFQe/Qod5AG9AI8LiAxwU8LuBxwXlcWejbrxpKgM+rkLrlyO+HenUeCB4vyeMRgcwFfF5z8DipW/B4Qcr0eEpqdN5sqS14nNQteLwg83seP7TQ6y3wWF5f8DipW/B4QUryeKjwwNyuzBN5TcHjpG7B4wUp0eM5wsbjNQaPk7oFjxek1OdxlN0k8DipW/B4QUry+Hqft8KbBh4ndQseL0ipz+MZeDyvNXic1C14vCB4HBQ8TuoWPF6QkjwOzQOPk7oFjxekxOfx8PHbvV/O2+X1Bo+TugWPF8Tc47nvqMTwvkqtweOkbsHjBbF/Ho8+qpIHGq83eJzULXi8IPYej8i+rwL1B4+TugWPF6Qkj0PzwOOkbsHjBSnN4znvk/OAXmvwOKlb8HhBSvI4nx/fn/Dc1OkzPHic1C14vCAlehxt5+BOTCrvWp0mPE7qFjxekJI87j61wufFJ3Cf5RnzdnCa0s/5aA+RfPyfbO8N3Ga/Hz/HS3+n/3gr6ZgQDY2O0tNiWklnzX9h8DipW/B4QUp8Hp9gzGCdZH+Jpnu8c9051Fp0On0x2nLd4r2DgZ7XZKT7Gvf2nWRDO++7AjxOahc8XhA8Pk8Ci0ayjXCVtBXjTpU7h3rK0k3XMd4aM7I/326ft3fQSUWuX2LkhX8p4CdPn8zcRYRUGzxekJI8DrmkFk5Q0U7uCOUdbKYdE0W7Srrl9rmvamvvcVdc6A9CjX87Go3uBhz79ZnMXURItcHjBeF5fL64ExOo1DfTurewKxX0eFRxG9GWnyHtFG8vCElrEt5XIXULHi8IHp87kW8TUq+mZT1PBT3uB0a/CXWlfTw+3pgEj5O6BY8XpCSPZ0n1A1XxEI3jcVK74PGCzMnjwRMlVED8zH7wC4DHSd2CxwtSksedtifA47UGj5O6BY8XZH4ex+I1B4+TugWPF6Qkj0PzwOOkbsHjBcHjoOBxUrfg8YKU6PHk83COAz8oAbUAj5O6BY8XpCyPT75BjsprDh4ndQseL0hJHo80HvxmM9uG+oHHSd2CxwuCx0HB46RuweMFKcnjOe+roPGag8dJ3YLHC1KWx4Xw95xIvP7gcVK34PGClOhxaBZ4nNQteLwgpXh8/L+K5d5i4XG8/uBxUrfg8YLYe1zfTvEfM0zeXkHlNQePk7oFjxfE3OOxtselHdf4AHm9weOkbsHjBTH3uHsXZdLYkcl5Iq81eJzULXi8IKV4fNLYfH68/rx+6epjT75w+uL7tvnV+aWjL/85UzTJsd9e+eXZW5nijHn2lau/eO3dTHH2PPen68+/+k6mOHtOnblx/PfXMsXZ8+K590p6yWRamTxTPCDXP7yvV+eB4HFzj+snx8ecnVOC2jEcDhcXF7Vhx97e3nRX2ENZWVnZ3t7WhhGrq6uj0Ugbdmxubm5tbWnDDrl7RWHasGN3d3d5eVkbpsi0Ozs72rADj9t7PNF2Bt4drzt4XMDjAh4X8LiQfEglBoc3ATwu4HEBjwt4HBoJHhfwuIDHBTwOjeR3Z69856enf7z4pm2eOHHpu8+8lima5HuHX//R8TcyxRnz2JGzP3z2YqY4e75/7LwkU5w9stTHj57LFGePvGRybjNFk5TxkknkJMz4qp2++L7eBgl4HBoJnzsknU3v9FW9DRLwODQSPE46GzwOLQGPk84Gj0NLwOOks8Hj0BLwOOls8Di0BDxOOhs8Di0Bj5POBo9DS8DjpLPB49AS8DjpbPA4tAQ8TjobPA4tAY+TzgaPQ0vA46SzwePQEvA46WzwOLQEPE46GzwOLQGPk84Gj0NLwOOks8HjYEb81/DCv4IX/anTwn8WT3rP8Cf08DjpbPA4mOE8viB4F8d/sXpOf94Uj5POBo+DGc7jvX5/oTeI26LxXi99xk7/eHXUIbJ+tCvaITX/PO57+h8B8U8EIZl7EjxOOhs8DmZEHh84e0eyjTa8m/2GdvM99N+46bqkgp8opFuT4HHS2eBxMEMFrV72ko7E6/aFxOaOy7qd9E2GeIKCHiLiwYMHVwJ+duI3mYubkI4Ej4MZiWQjg0f/pA4OBRwgu9N3T7RvMsQTFPA4IZPB42CGl6wTr/6+0ztYNnTLdfM16S9t33QbY/u1w8TQSXhfhXQ2eBzMcJaNH5ZTaaubHW53TCJ77Z1spn1dIe2ZV5gEj5POBo9DS8DjpLPB49AS8DjpbPA4tAQ8TjobPA4tAY+TzgaPQ0vA46SzwePQEvA46WzwOLQEPE46GzwOLQGPk84Gj0NLwOOks8Hj0BLwOOls8Di0BDxOOhs8Di0Bj5POBo9DS8DjpLPB49AS8DjpbPA4tAQ8TjobPA4tAY+TzgaPQ0vA46SzwePQEn539sp3fnr6x4tv2uaJE5e++8xrmaJJvnf49R8dfyNTnDGPHTn7w2cvZoqz5/vHzksyxdkjS3386LlMcfbISybnNlM0SRkvmUROwoyv2umL7+ttkIDHoZEMh8PFxUVt2LG3tzfdFfZQVlZWtre3tWHE6urqaDTShh2bm5tbW1vasEPu3rW1NW3Ysbu7u7y8rA1TZNqdnR1t2CEnQU6FNozA49BI8LiAxwU8LuBxaCR4XMDjAh4X8Dg0Ejwu4HEBjwt4HBoJv+eU8HtOSQd/zzkZmfMHP7+QKc4emTP3Jbt5Zya543FQ+NwhIVXlzZsreh9OBR4HBY8TUlXwONiAxwmpKngcbMDjhFQVPA424HFCqgoeBxvwOCFVBY+DDXickKqCx8EGPE5IVcHjYAMeJ6Sq4HGwAY8TUlXwONiAxwmpKngcbMDjhFQVPA424HFCqgoeBxvwOCFVBY+DDXickKqCx8EGPE5IVWm+x9f7C4cW+v6/ou6avYE2Mvh9g144ZB9yZ3LFBD/FAdMdtJxHRI7iyM4WrcjkEIXOyr7gcUKqSqc8npAZsg85M4UD3Xa8/6DpnHxNJLufZeXgC73egs0xZgGPE1JVWuxxJz4xXPQQG3eI97l/fS1pBLbV595obEaPeVYem07HOly/pOkXFJMsN+2dnTRY2Pgyc44uHeJ/feVQr6/90+9WB/qJkoKsIT5LvYHbjGbxnSYXOrEADx4npKq02+O6w225WrLPD/HmSoclfaOKzhTgjRbs8dN9OxhoNX86HaNHTSvpMhL8sHRrspMgcySzJzvdtHHPdCuZJJ3DH9zt0prudbviStJ98tvKAY8TUlVa7vF4K6mFXxNjhci+dFAw0yQ6Mj5uMl2MmyEiGuvn8+WY8PCTBwkPLQOjyZOvIdJPu8mW7g1W44fofO5LiBvrF+i75x0o7ucHRTx48OBKwM9O/CZzbRFC5pPmezzjHVWWkBoqqYVf3ZC0rycdlLd3nOTAyXTRRroVjfXzja8ywPUI9egID50MzJlAhybEu/1qgiE6XzhtgptDa9p94kBuWFwam0Be+JcCfvL0ycy1RQiZT1rg8UBcsZa0kRoq0U/4NeqU9h4rRaNcJZVWRKYkXX3PaKzbyIzNm05rUtGV+nEePyzdkg3tnjBeSSZxX7XsOyT73GRpJdry8/vu6QS6LxkdbSSdJ+B9FUKqSgs8LjjhJHjPpIZKROSFFPWPXBWpKWJsnJD3e87xI8WyS4qJAuM9fVVoXImn8WOTgTkH9/h9SWcZ7Q8YkS24ETKP+6J130N36VaMHtItKt1MB4adkkHpt5UDHiekqrTD41A9eJyQqoLHwQY8TkhVweNgAx4npKrgcbABjxNSVfA42IDHCakqeBxswOOEVBU8DjbgcUKqCh4HG/A4IVUFj4MNeJyQqoLHwQY8TkhVweNgAx4npKrgcbABjxNSVfA42IDHCakqeBxswOOEVBU8DjbgcUKqCh4HG/A4IVUFj4MNeJyQqoLHwYbfnb3ynZ+e/vHim7Z54sSl7z7zWqZoku8dfv1Hx9/IFGfMY0fO/vDZi5ni7Pn+sfOSTHH2yFIfP3ouU5w98pLJuc0UTVLGSyaRk2D+qsmcP/j5hUxx9sicuS/ZzTv5f6WrIHgclOFwuLi4qA079vb2prvCHsrKysr29rY2jFhdXR2NRtqwY3Nzc2trSxt2yN27tramDTt2d3eXl5e1YYpMu7Ozow075CTIqdCGERsbG59//rk27Pjiiy/W12dSdi54HBQ8LuBxAY8LeBwaya1bt44cOfKLEjh+/LhumXLixIlTp05pwwj5SXby5Elt2PHcc889//zz2rBDlioL1oYdclZLeslkWvOXTCjjVSvpJZM5S3rJLly4oHfyo4DH28aHH34o1+7/WnP79u0nn3xSG6Y888wz169f14YRIprLly9rw46XX375D3/4gzbseOONN8Rf2rDj3Xfffeqpp7Rhikx748YNbdghFrt48aI2jDh9+vSZM2e0YcfZs2dffPFFbdghN8Lhw4f1Tn4U8Hjb+Otf//rCCy9ow44vv/xSPP7NN99o246jR49++umn2jBCjPDxxx9rw45z587Jjwdt2CE/I1966SVt2LG5ufn0009rwxSZ9u9//7s27Oj3+0tLS9ow4tVXX7127Zo27BgOh6+88oo27Lh//778j2ltPAp4vG3gcQGPC3hcwOPQSPC4gMcFPC7gcWgkeFzA4wIeF/A4NJJ//vOfZXwiSrh7965umSIS//e//60NI+QM/Otf/9KGHVtbW2V8iG00Gm1sbGjDjt3d3Xv37mnDFJlWJteGHXISvv76a20Y8dlnn8kjiDbs+Oqrr8r4SSY3wnTPNHgcAKDZ4HEAgGaDxwEAmg0ebymD3iGlN9DSen8hU0nJ7pPhC/3p3mXPObKv5cyZdtedMxx6Ch5xtYrrEfev+Wr9gCpWm7fcgy5C313XWP1qI/ZZhuEtMzt4vJXE19R6vz9wm9GF5i67aCPnepvcN/VFmXNkP5k/TEp6nOi2cHunPvQUPOJqFenhb986rzatyVbUa56rzVuuX1HOQqSUdqrFagW3FmFyGZPfyVxXmwWPt5L4SowuSsXfHDkXXM4+97XXix84gl2ZUg6TR3YlvS/8xZ9HsnPqQ0/BNKt1Y/p+V41XK5Xs4ee52pzlujUGhx0/mv8G/EbFq3U1OUaw6JSc72Suq82Cx1uKXEJjV4+/OeJduhmTsy8aHtX8FetK8XQTE4wRDQ2vWyloI/eWUPwiZjj0FDzqamW3HN8vNh5fz9VKxVukktVOLDc9bfkHc/uD7hWvVvHHDsn5Tua82nHweIuRhwv34BhdQDkXnmefi1JLyd60FPTfh/DIbqDeB/4CnyDtM+uhp6D4amVn1CldRo1X69ahlWRJ81/t2HKDIwQriUnX77cqXq2SLiwgOHqypApWm4LHW4xclPHFJFdQcDVKYfy6zNk340UZHvmhAzPVGQ89BYVX6/aFyN4arzaouE33us5/tTJrsYswKNRktUqw6JSc76SC1abg8TaiV010USaXmb+SkkLA5D53BcYlty9znR5wUeYd2W/kjZNaZjXTHnoKHnm1Cem+Oq92fJVua46rTaYrehH6BdVntTHBwgL84X3nea52AjzeTtx1o/hrMKmFhWQ7uy+6Anvuypz43+YPuSjzjhxf40IyKjly0DnC7Z/+0FPwSKtNSZdR79X6AeHS5rXa3OUmtbCQbCffSX1W63D1vNUm/ZP2fFebAY+3mOjhohKqO/I0sNoS4eTOAzwOANBs8DgAQLPB4wAAzQaPAwA0GzwOANBs8DhANaz3F8r8KBp0CDwOMH/8R6WTDxhPkHw8WRj7OHOWqN+BPaD94HGAeeMsvtAfyPN49P8byTF5ZOeoHhn/AE/jccDjAHNH1es8vt/7KvHz+sTunIf0MY+nj/np0GDMvoeDhoPHAeaN1+1DPC6ET9rOyPGI4CE99XjeVrAZjcHk7QSPA8yf9MF5P7fu1yMSc0RG1IG84+1oVNJdd0A7weMA1eCNvK9jU5dHTo6bGWf7zVD8ETptWN/3SNBs8DhANYiBe4PIsge+2xH18KKOu+Z5PKjloTrH5K0EjwPMGTWz+z1n9o/PKN7dybbrkoo6dnK8P63mbaWjxzahZeBxgLkTiVbJN2vYIzayEPvbVRbc3mhk4OygQzDrw48FjQePA1SDCBavggl4HACg2eBxAIBmg8cBAJoNHgcAaDZ4HACg2eBxAIBmg8cBAJoNHgcAaDZ4HACg2eBxAIBmg8cBAJoNHgcAaDZ4HACg2eBxAIBmg8cBAJoNHgcAaDZ4HACgyXz77f8D3wnxkOC62mYAAAAASUVORK5CYII="},1894:function(e,t){t.Z="data:image/png;base64,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pF5eiLg1NiPliXaFZbKDOFJRgZI/g4Pio0emgrPMTNytgNSUHOqODM41G6lzs5azczJj76k7z+FOi7dkwx4eMToTLWJ+2ml3QLTPLBbPBFtufXd4vIDdF50dbEQHj8EXLIhV2YyUC6Y5ES41caSiFrkmBccHuQrqFDBynpD1156jtxT2LpqMKhju6dmKhjPhMu7c6MSMG3e4fdHBcra7wYD0hDlD1jE/7Lw7wu6yWyH2Js2dijfjE5MHRSfFDysDUo5YlY1JOVQPKUesSlIOapByxKok5aAGKUesSlIOapByxKok5aAGKUesSlIOapByxKok5aAGKUesSlIOapByxKok5aAGKUesSlIOapByxKok5aAGKUesSlIOapByxKok5aAGKUesSlIOapByxKok5aAGKUesSlIOapByxKok5aAGKUesSlIOarx//PxTrxz649Qnur60/+zTO4+lJlV8ZtfHL+47k5os6LO7j7/w2unUZHGf33tSTE0WV+7qc3tOpCaLK0+ZXNvUpIplPGWiXAT1Z03W/MOfT6UmiytrZj5lV25k/9teOSHlEDMYDKampuxAj/X19Sd+kU1mdnZ2ZWXFDpSYm5sbDod2oMfS0tLy8rId6CFv4Pn5eTvQY21tbWZmxg5UkWVXV1ftQA+5CHIp7ECJxcXF+/fv24EeDx48WFgoVO1MSDnEkHKBlAukXCDl4CtXr17dvXv3myWwb98+u6XK/v37Dx48aAdKyB9mBw4csAM9Xn/99TfeeMMO9JC7KnfYDvSQq1rSUybLqj9lQhnPWklPmaxZ0lN26tQp+07eJKS8aXz99dfy8v1fba5fv759+3Y7UGXnzp2XLl2yAyWkNefOnbMDPd57772PPvrIDvQ4c+aMJMwO9Pjiiy9effVVO1BFlr18+bId6CEhO336tB0ocejQoaNHj9qBHsePH3/nnXfsQA95I+zatcu+kzcJKW8a33777VtvvWUHejx8+FBS/uuvv9qxHnv27Ll9+7YdKCFR+O677+xAjxMnTsifEHagh/wxefjwYTvQY2lpaceOHXagiiz7ww8/2IEevV5venraDpQ4cuTIxYsX7UCPwWDwwQcf2IEed+7ckf9JbQebhJQ3DVIukHKBlAukHHyFlAukXCDlAikHXyHlAikXSLlAysFXfvrppzJ+TUq4efOm3VJFOv7LL7/YgRJyBX7++Wc70GN5ebmM32wbDoeLi4t2oMfa2tqtW7fsQBVZVha3Az3kIjx+/NgOlLh37558CrEDPR49elTGH2byRnjijzWkHADAe0g5AID3kHIAAO8h5U2l390W0OmV8sW5Dyz0OomHP35BzP6Abt/OJMi4fptbIWNfrjXrjntcEx8Y13arIeXNRF7FwQvYvOaz3kwtIHy7R2/j8QvitqJdSTKu3+ZWyNiXa826Y+5p+Hjkvtv7PP4oMh59TK7rMGmFjH251mw2pLyRyMs4/ZZoGfK4O71e8q2euiDmZ6oDMRnXb3MrZOzLtWb9cQ81uZF6FJOuTNaD3twKGftyrdlwSHkjiV/+idd9i5BHbR50fBnGL0jiDR6/6yMyrt/mVsjYl2tNLzCPKPF4xx/FpCuT7zpMWiFjX641Gw4pbyStex2PII85fMjxZRi/IObnRrHIun6bWyFjX641a0/8SN3W+KOYdGWyHvTmVsjYl2vNhkPKG0n88k+87tuCechJzNt4/IIk3uDxuz4i4/ptboWMfbnWrDvJ+xnd+/FHkfHoY3Jdh0krZOzLtWbDIeXNJHqNt+RlvAGJCoxfkOSbPjrKkXH9NrdCxr5ca9YduceJRx8+svFHkfHoY3Jdh0krZOzLtWazIeVNRV7JAW14FW/ESAbGL4h5kxvcMTLhtjOu3+ZWGNuXc826Ez2u5H3m2lYPKQeI6ffiODwZxVdoKlzbUiHlAA5qUx5c23Ih5QAA3kPKAQC8h5QDAHgPKQcA8B5SDlANC71OO35NDrYCUg6w9US/8ixskPPoV6eFxG9PjxMcN/EIaAWkHGCrMSHv9Pryqbxrkp4R8yDQwXwQ/QmpJuUQQMoBthhbX5Pyjb5gCT+1j+3O+Kg+kvL4w358auKcDW8O/IeUA2w1rri/k3Ih+XnbRDk8I/FRPU551lZiMziHmDcWUg6w9cQfnzfK60ZHBG0OSLU60e9wOzgrOtzugMZCygGqwUV5w8zGOQ+yHA5T2XabyfYH2GWT8xveEngPKQeoBolwtx+EduLXHsERrtXhoVkpT8xlYYtOzJsKKQfYYmyczV979kx/x0vu8h1tm0PiVodZDvfHs1lb8dkjm9A8SDnAlhO01pId1+QRYZSFMOFmpmP2Bmcmsp04ILHq798WNAFSDlAN0ljSClqQcgAA7yHlAADeQ8oBALyHlAMAeA8pBwDwHlIOAOA9pBwAwHtIOQCA95ByAADvIeUAAN5DygEAvIeUAwB4DykHAPAeUg4A4D2kHADAe0g5AID3kHIAAM/57bf/B3iJkARzFctgAAAAAElFTkSuQmCC"},7080:function(e,t,n){t.Z=n.p+"assets/images/vega-lite-line-default-680a675401ae51ea5884385be486051f.png"},8571:function(e,t,n){t.Z=n.p+"assets/images/vega-lite-line-formatted-a70eb7ae0b6097bc5edbbe973cf20260.png"},685:function(e,t,n){t.Z=n.p+"assets/images/vega-lite-line-fr-FR-8542076a4bf7b890a6b3287dc19e8afc.png"}}]);