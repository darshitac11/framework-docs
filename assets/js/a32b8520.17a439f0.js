"use strict";(self.webpackChunkatriframework=self.webpackChunkatriframework||[]).push([[676],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>d});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),l=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||i;return r?t.createElement(m,a(a({ref:n},c),{},{components:r})):t.createElement(m,a({ref:n},c))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4224:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=r(7462),o=(r(7294),r(3905));const i={},a=void 0,s={unversionedId:"guides-frontend/responsiveness",id:"guides-frontend/responsiveness",title:"responsiveness",description:"How to make your portfolio responsive?",source:"@site/docs/guides-frontend/responsiveness.md",sourceDirName:"guides-frontend",slug:"/guides-frontend/responsiveness",permalink:"/guides-frontend/responsiveness",draft:!1,editUrl:"https://github.com/Atri-Labs/framework-docs/tree/main/docs/guides-frontend/responsiveness.md",tags:[],version:"current",frontMatter:{}},p={},l=[{value:"How to make your portfolio responsive?",id:"how-to-make-your-portfolio-responsive",level:2}],c={toc:l};function u(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-make-your-portfolio-responsive"},"How to make your portfolio responsive?"),(0,o.kt)("p",null,"Evaluate each section at different breakpoints. If necessary, consider making one of the following changes in order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check if you need to display a particular component in smaller screen sizes. For example, images are sometimes removed in mobile view.\na. This can be achieved by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"display")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"none"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you wish to retain components, you can consider displaying them one below the other instead of displaying them side-by-side.\na. This can be achieved by applying ",(0,o.kt)("inlineCode",{parentName:"p"},"flex wrap"),".\nb. Usually, ",(0,o.kt)("inlineCode",{parentName:"p"},"flex-wrap")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"wrap"),". Determine if you need ",(0,o.kt)("inlineCode",{parentName:"p"},"wrap")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"wrap-reverse"),"."))))}u.isMDXComponent=!0}}]);