"use strict";(self.webpackChunkatriframework=self.webpackChunkatriframework||[]).push([[9884],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3072:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"Use a template",description:"Steps to add a new component in your app"},i=void 0,l={unversionedId:"guides-frontend/template/use-template",id:"guides-frontend/template/use-template",title:"Use a template",description:"Steps to add a new component in your app",source:"@site/docs/guides-frontend/template/use-template.md",sourceDirName:"guides-frontend/template",slug:"/guides-frontend/template/use-template",permalink:"/guides-frontend/template/use-template",draft:!1,editUrl:"https://github.com/Atri-Labs/framework-docs/tree/main/docs/guides-frontend/template/use-template.md",tags:[],version:"current",frontMatter:{title:"Use a template",description:"Steps to add a new component in your app"},sidebar:"docs",previous:{title:"Create a new template",permalink:"/guides-frontend/template/add-template"},next:{title:"Add a hamburger menu for navigation",permalink:"/guides-frontend/template/responsive-navbar-example"}},p={},s=[{value:"How to use locally created templates",id:"how-to-use-locally-created-templates",level:3},{value:"How to use templated from atri-templates",id:"how-to-use-templated-from-atri-templates",level:3}],c={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"how-to-use-locally-created-templates"},"How to use locally created templates"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Template Picker")," icon on the top menu. This will open the ",(0,a.kt)("inlineCode",{parentName:"p"},"Template Manager"),". ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the template you are interested in adding to your app and drag and drop onto the canvas area. "))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Only those templates which were created locally inside this project can be accessed from the above method.")),(0,a.kt)("h3",{id:"how-to-use-templated-from-atri-templates"},"How to use templated from atri-templates"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Visit the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Atri-Labs/atri-templates"},"atri-templates")," repository and choose the template that you want to use inside the templates' folder.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy contents of the JSON file from this directory - open the required JSON file, copy its contents by clicking on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Copy raw contents")," icon in GitHub.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a new JSON file inside a corresponding folder (e.g. basics, layout, etc.) in atri_templates directory in your Atri app's root directory.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now paste the copied content in the newly created JSON file, Then follow the same steps which were followed to use a local template."))),(0,a.kt)("admonition",{title:"Success",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"A new template has been added to our app. ")))}m.isMDXComponent=!0}}]);