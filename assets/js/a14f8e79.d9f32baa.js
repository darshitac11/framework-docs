"use strict";(self.webpackChunkatriframework=self.webpackChunkatriframework||[]).push([[6218],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3075:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={title:"Installation bugs",description:"How to debug errors faced during installation"},a=void 0,l={unversionedId:"troubleshoot/installation_error",id:"troubleshoot/installation_error",title:"Installation bugs",description:"How to debug errors faced during installation",source:"@site/docs/troubleshoot/installation_error.md",sourceDirName:"troubleshoot",slug:"/troubleshoot/installation_error",permalink:"/troubleshoot/installation_error",draft:!1,editUrl:"https://github.com/Atri-Labs/framework-docs/tree/main/docs/troubleshoot/installation_error.md",tags:[],version:"current",frontMatter:{title:"Installation bugs",description:"How to debug errors faced during installation"},sidebar:"docs",previous:{title:"Prerequisites bugs",permalink:"/troubleshoot/prereq"},next:{title:"Other bugs",permalink:"/troubleshoot/atri_start"}},s={},p=[{value:"pipenv is not recognized as an internal or external command, operable program or batch file",id:"pipenv-is-not-recognized-as-an-internal-or-external-command-operable-program-or-batch-file",level:3},{value:"zsh: command not found: pipenv",id:"zsh-command-not-found-pipenv",level:3},{value:"Unable to create process error",id:"unable-to-create-process-error",level:3},{value:"--system is intended to be used for pre-existing Pipfile installation, not installation of specific packages. Aborting.",id:"--system-is-intended-to-be-used-for-pre-existing-pipfile-installation-not-installation-of-specific-packages-aborting",level:3},{value:"Failed building wheel for yarl",id:"failed-building-wheel-for-yarl",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Please refer to the Frequently Asked Questions in this page. If the provided solution does not resolve your error or you do not find your error discussed here, please submit a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Atri-Labs/atrilabs-engine/discussions/categories/help-installation-start"},"new Discussion"),"."),(0,o.kt)("h3",{id:"pipenv-is-not-recognized-as-an-internal-or-external-command-operable-program-or-batch-file"},"pipenv is not recognized as an internal or external command, operable program or batch file"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Check if pipenv is installed in your system. Make sure you ",(0,o.kt)("a",{parentName:"li",href:"getting-started/installation/install_prereqs"},"satisfy the prerequisites"),".  "),(0,o.kt)("li",{parentName:"ol"},"Check if pipenv is added in the PATH environment variable."),(0,o.kt)("li",{parentName:"ol"},"Refer to ",(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/47676529"},"this Stack overflow answer"),".")),(0,o.kt)("h3",{id:"zsh-command-not-found-pipenv"},"zsh: command not found: pipenv"),(0,o.kt)("p",null,"Your pre-requisites are not satisfied. Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.atrilabs.com/getting-started/installation/install_prereqs"},"the documentation")," for details. "),(0,o.kt)("p",null,"If you have installed ",(0,o.kt)("inlineCode",{parentName:"p"},"pipenv")," but are still facing this issue, then add ",(0,o.kt)("inlineCode",{parentName:"p"},"pipenv")," to the PATH environment variable. Refer this guide for ",(0,o.kt)("a",{parentName:"p",href:"https://datatofish.com/add-python-to-windows-path/"},"reference"),". "),(0,o.kt)("h3",{id:"unable-to-create-process-error"},"Unable to create process error"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"pipenv install atri")," again. If it still doesn't work, upgrade your Python /",(0,o.kt)("inlineCode",{parentName:"p"},"pipenv"),"."),(0,o.kt)("h3",{id:"--system-is-intended-to-be-used-for-pre-existing-pipfile-installation-not-installation-of-specific-packages-aborting"},"--system is intended to be used for pre-existing Pipfile installation, not installation of specific packages. Aborting."),(0,o.kt)("p",null,"This error occurs due to an existing virtual environment created for the same path. To resolve this error in Unix based OS, visit your ",(0,o.kt)("inlineCode",{parentName:"p"},"virtualenvs")," and delete the folder with the same name to your projects directory."),(0,o.kt)("h3",{id:"failed-building-wheel-for-yarl"},"Failed building wheel for yarl"),(0,o.kt)("p",null,"There seems to be a problem with the Python installed on your computer. Reinstall Python (refer the ",(0,o.kt)("a",{parentName:"p",href:"getting-started/installation/install_prereqs"},"prerequisites")," for more details)."))}u.isMDXComponent=!0}}]);