"use strict";(self.webpackChunkatriframework=self.webpackChunkatriframework||[]).push([[4600],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),o=n(6010),i=n(2389),l=n(7392),u=n(7094),s=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n;const{lazy:i,block:d,defaultValue:m,values:v,groupId:f,className:b}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:y.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,l.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===m?m:null!=(t=null!=m?m:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==w&&!h.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:x}=(0,u.U)(),[j,O]=(0,a.useState)(w),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=f){const e=k[f];null!=e&&e!==j&&h.some((t=>t.value===e))&&O(e)}const N=e=>{const t=e.currentTarget,n=T.indexOf(t),r=h[n].value;r!==j&&(E(t),O(r),null!=f&&x(f,String(r)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=T.indexOf(e.currentTarget)+1;n=null!=(r=T[t])?r:T[0];break}case"ArrowLeft":{var a;const t=T.indexOf(e.currentTarget)-1;n=null!=(a=T[t])?a:T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},b)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>T.push(e),onKeyDown:C,onFocus:N,onClick:N},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(y.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function m(e){const t=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},1713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(5488),i=n(5162);const l={title:"Development flow for an existing project",description:"How to continue using Atri framework"},u=void 0,s={unversionedId:"dev-flow-existing-proj",id:"dev-flow-existing-proj",title:"Development flow for an existing project",description:"How to continue using Atri framework",source:"@site/docs/dev-flow-existing-proj.md",sourceDirName:".",slug:"/dev-flow-existing-proj",permalink:"/dev-flow-existing-proj",draft:!1,editUrl:"https://github.com/Atri-Labs/framework-docs/tree/main/docs/dev-flow-existing-proj.md",tags:[],version:"current",frontMatter:{title:"Development flow for an existing project",description:"How to continue using Atri framework"},sidebar:"docs",previous:{title:"Scatter Chart",permalink:"/comp-reference/charts/scatter-chart"},next:{title:"How-to guides [frontend]",permalink:"/category/how-to-guides-frontend"}},c={},p=[{value:"1. Activate virtual environment",id:"1-activate-virtual-environment",level:3},{value:"2. Start Atri engine",id:"2-start-atri-engine",level:3},{value:"Exit pipenv",id:"exit-pipenv",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Once you have installed ",(0,a.kt)("inlineCode",{parentName:"p"},"atri")," CLI, everytime you return to work on an existing project (or are working on a new project), you always begin by following the instructions in this page.  "),(0,a.kt)("h3",{id:"1-activate-virtual-environment"},"1. Activate virtual environment"),(0,a.kt)("p",null,"Go to your project root directory and activate the virtual environment you are using. In this example, our project directory is ",(0,a.kt)("inlineCode",{parentName:"p"},"my_app"),". "),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"pipenv",label:"pipenv",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd my_app\npipenv shell\n"))),(0,a.kt)(i.Z,{value:"conda",label:"conda",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd my_app\nconda activate my_env\n")))),(0,a.kt)("h3",{id:"2-start-atri-engine"},"2. Start Atri engine"),(0,a.kt)("p",null,"Once the the virtual environment is activated, please run the following command from inside ",(0,a.kt)("inlineCode",{parentName:"p"},"my_app")," directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"atri start\n")),(0,a.kt)("p",null,"At the start of a new project, you will be asked to select the virtual environment you are using. "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The visual editor is now available at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4002"),". If the editor doesn't open automatically, please manually open ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4002")," in the browser.")),(0,a.kt)("h3",{id:"exit-pipenv"},"Exit pipenv"))}m.isMDXComponent=!0}}]);