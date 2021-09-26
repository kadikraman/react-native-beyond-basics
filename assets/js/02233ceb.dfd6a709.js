"use strict";(self.webpackChunkreact_native_beyond_basics=self.webpackChunkreact_native_beyond_basics||[]).push([[6939],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(2263),o=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,s=void 0!==a&&a,c=i.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},2779:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=n(4996),s={sidebar_position:4},c="Styling",l={unversionedId:"basic-components/styling",id:"basic-components/styling",isDocsHomePage:!1,title:"Styling",description:"Styling in React Native is done using inline styles which makes things both easier and harder. Easier because you'll know your styles will never conflict with each other as is often the case with CSS. But harder since there's no built in way to share styles.",source:"@site/docs/basic-components/styling.mdx",sourceDirName:"basic-components",slug:"/basic-components/styling",permalink:"/react-native-beyond-basics/docs/basic-components/styling",editUrl:"https://github.com/kadikraman/react-native-beyond-basics/edit/main/website/docs/basic-components/styling.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Pressable and useState",permalink:"/react-native-beyond-basics/docs/basic-components/pressable-and-use-state"},next:{title:"Props and useCallback",permalink:"/react-native-beyond-basics/docs/basic-components/props-and-use-callback"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"styling"},"Styling"),(0,i.kt)("p",null,"Styling in React Native is done using inline styles which makes things both easier and harder. Easier because you'll know your styles will never conflict with each other as is often the case with CSS. But harder since there's no built in way to share styles."),(0,i.kt)("p",null,"One common approach is to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"theme")," file somewhere in the codebase and use it to store constants such as colors, spacing, fonts and any UI elements you tend to use frequently."),(0,i.kt)("p",null,"Add a new file to your ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," directory: ",(0,i.kt)("inlineCode",{parentName:"p"},"theme.ts"),". Let's pull all our current colour values into this theme file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export const theme = {\n  colorPurple: '#454C73',\n  colorWhite: '#fff',\n};\n")),(0,i.kt)("p",null,"Now whenever you need to use a colour in your styles, import theme into your component and use the theme value. This allows us to swap out colours globally and ensure we always have a good overview of all the colours used in our application."),(0,i.kt)("p",null,'Next, let\'s wrap the emoji list in a container, add a title saying "How are you right now?", and a call to action to "Choose" your current mood'),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Checkpoint \ud83d\udd17")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/kadikraman/mood-tracker/commit/72ecbf9126e73855ece539021e950303f0182b37"},(0,i.kt)("strong",{parentName:"a"},"Style the mood picker")," 72ecbf9126e73855ece539021e950303f0182b37")))),(0,i.kt)("img",{src:(0,a.Z)("/img/mood-picker/ios-exercise-3.png"),alt:"iOS styling",width:"50%"}),(0,i.kt)("img",{src:(0,a.Z)("/img/mood-picker/android-exercise-3.png"),alt:"Android styling",width:"50%"}))}d.isMDXComponent=!0}}]);