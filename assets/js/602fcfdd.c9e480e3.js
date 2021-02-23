(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{127:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},y=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),y=n,f=l["".concat(a,".").concat(y)]||l[y]||d[y]||o;return r?i.a.createElement(f,c(c({ref:t},u),{},{components:r})):i.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(7),o=(r(0),r(127)),a={id:"security",title:"Security"},c={unversionedId:"security",id:"version-2.3/security",isDocsHomePage:!1,title:"Security",description:"The Apache Software Foundation takes a rigorous stance on eliminating security issues in its software projects. Apache APISIX is also very concerned Security issues related to its features and functionality.",source:"@site/versioned_docs/version-2.3/security-guide.md",slug:"/security",permalink:"/docs/apisix/security",version:"2.3",lastUpdatedBy:"qier222",lastUpdatedAt:1614077482,sidebar:"version-2.3/docs",next:{title:"Subscribe Guide",permalink:"/docs/apisix/subscribe-guide"}},s=[],u={toc:s};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Apache Software Foundation takes a rigorous stance on eliminating security issues in its software projects. Apache APISIX is also very concerned Security issues related to its features and functionality."),Object(o.b)("p",null,"If you have apprehensions regarding APISIX\u2019s security or you discover vulnerability or potential threat, don\u2019t hesitate to get in touch with the Apache Security Team by dropping a mail at ",Object(o.b)("a",{parentName:"p",href:"mailto:security@apache.org."},"security@apache.org.")," Please specify the project name as APISIX and its product name APISIX or APISIX-Dashboard in the email and provide a description of the relevant problem or potential threat. You are also urged to recommend the way to reproduce and replicate the issue. The Apache Security Team and the APISIX community will get back to you after assessing and analysing the findings."),Object(o.b)("p",null,"Please pay attention to report the security issue on the security email before disclosing it on the public domain."))}p.isMDXComponent=!0}}]);