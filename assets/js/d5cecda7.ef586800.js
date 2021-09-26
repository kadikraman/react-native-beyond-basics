"use strict";(self.webpackChunkreact_native_beyond_basics=self.webpackChunkreact_native_beyond_basics||[]).push([[9708],{3905:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return m}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},d=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return r?t.createElement(h,o(o({ref:n},d),{},{components:r})):t.createElement(h,o({ref:n},d))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3919:function(e,n,r){function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!t(e)}r.d(n,{b:function(){return t},Z:function(){return a}})},4996:function(e,n,r){r.d(n,{C:function(){return i},Z:function(){return o}});var t=r(2263),a=r(3919);function i(){var e=(0,t.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,r=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,r,t){var i=void 0===t?{}:t,o=i.forcePrependBaseUrl,s=void 0!==o&&o,c=i.absolute,l=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(s)return n+r;var d=r.startsWith(n)?r:n+r.replace(/^\//,"");return l?e+d:d}(i,r,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},6239:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var t=r(7462),a=r(3366),i=(r(7294),r(3905)),o=r(4996),s={sidebar_position:2},c="Android Splash Screen",l={unversionedId:"splash-screen/andorid",id:"splash-screen/andorid",isDocsHomePage:!1,title:"Android Splash Screen",description:"A splash screen is what we show to users while the app is getting loaded. This can either be a full page image, or an image with a background.",source:"@site/docs/splash-screen/andorid.mdx",sourceDirName:"splash-screen",slug:"/splash-screen/andorid",permalink:"/react-native-beyond-basics/docs/splash-screen/andorid",editUrl:"https://github.com/kadikraman/react-native-beyond-basics/edit/main/website/docs/splash-screen/andorid.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"iOS Splash Screen",permalink:"/react-native-beyond-basics/docs/splash-screen/ios"},next:{title:"Seamless Transition",permalink:"/react-native-beyond-basics/docs/splash-screen/seamless-transition"}},d=[{value:"Checkpoint \ud83d\udd17",id:"checkpoint-",children:[]}],p={toc:d};function u(e){var n=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"android-splash-screen"},"Android Splash Screen"),(0,i.kt)("p",null,"A splash screen is what we show to users while the app is getting loaded. This can either be a full page image, or an image with a background."),(0,i.kt)("p",null,"First we need to create the splash image layout. Create an ",(0,i.kt)("inlineCode",{parentName:"p"},"android/app/src/main/res/layout")," folder, and inside it a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"launch_screen.xml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"\n    android:layout_width="match_parent"\n    android:layout_height="match_parent"\n    android:orientation="vertical">\n    <ImageView\n        android:background="@color/splash_blue"\n        android:layout_width="match_parent"\n        android:layout_height="match_parent"\n        android:scaleType="center"\n        android:src="@drawable/launch_screen" />\n</RelativeLayout>\n')),(0,i.kt)("p",null,"To add the image, create a ",(0,i.kt)("inlineCode",{parentName:"p"},"android/app/src/main/res/drawable-xxhdpi")," and save the Ying Yang image there with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"launch_screen.png"),"."),(0,i.kt)("img",{src:(0,o.Z)("/img/images/ying-yang@3x.png"),alt:"Ying Yang image"}),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"app/src/main/res/values/colors.xml")," file and add ",(0,i.kt)("inlineCode",{parentName:"p"},"primary_dark")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"splash_blue")," colors:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="primary_dark">#000000</color>\n    <color name="splash_blue">#57C3EE</color>\n</resources>\n')),(0,i.kt)("p",null,"You can also preview the look and feel of the launch screen in Android Studio by opening the ",(0,i.kt)("inlineCode",{parentName:"p"},"launch_screen.xml")," file"),(0,i.kt)("img",{src:(0,o.Z)("/img/splash-screen/android-studio-layout.png"),alt:"Android studio screen"}),(0,i.kt)("img",{src:(0,o.Z)("/img/splash-screen/android.png"),alt:"Android splash screen",width:"500"}),(0,i.kt)("h2",{id:"checkpoint-"},"Checkpoint \ud83d\udd17"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/kadikraman/mood-tracker/commit/fbaa373ca0ff99e7966df629d2fb040e36a1ec16"},(0,i.kt)("strong",{parentName:"a"},"Add Android splash screen")," fbaa373ca0ff99e7966df629d2fb040e36a1ec16")))}u.isMDXComponent=!0}}]);