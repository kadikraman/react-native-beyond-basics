"use strict";(self.webpackChunkreact_native_beyond_basics=self.webpackChunkreact_native_beyond_basics||[]).push([[6967],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=p(n),f=i,h=l["".concat(s,".").concat(f)]||l[f]||u[f]||o;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return a}});var r=n(2263),i=n(3919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,c=void 0!==a&&a,s=o.absolute,p=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(c)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+d:d}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},6013:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return l}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=n(4996),c={sidebar_position:3},s="Android",p={unversionedId:"app-icons/android",id:"app-icons/android",isDocsHomePage:!1,title:"Android",description:"For Android, we only need the image icon. If you have designed your own icon, export the image separately without the background. Otherwise feel free to use this:",source:"@site/docs/app-icons/android.mdx",sourceDirName:"app-icons",slug:"/app-icons/android",permalink:"/react-native-beyond-basics/docs/app-icons/android",editUrl:"https://github.com/kadikraman/react-native-beyond-basics/edit/main/website/docs/app-icons/android.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"iOS",permalink:"/react-native-beyond-basics/docs/app-icons/ios"},next:{title:"iOS Splash Screen",permalink:"/react-native-beyond-basics/docs/splash-screen/ios"}},d=[{value:"Checkpoint \ud83d\udd17",id:"checkpoint-",children:[]}],u={toc:d};function l(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"android"},"Android"),(0,o.kt)("p",null,"For Android, we only need the image icon. If you have designed your own icon, export the image separately without the background. Otherwise feel free to use this:"),(0,o.kt)("img",{src:(0,a.Z)("/img/app-icons/attitude.png"),width:"200"}),(0,o.kt)("p",null,"Open Android Studio and find app -> res -> mipmap -> ic_launcher"),(0,o.kt)("p",null,"Notice that similarly to iOS, we have icons for various sizes here. To replace this icon with our own, we can use Android Asset Studio."),(0,o.kt)("p",null,'Right click on the "res" directory and choose new -> "image asset".'),(0,o.kt)("p",null,"This will open a window for configuring new image assets."),(0,o.kt)("img",{src:(0,a.Z)("/img/app-icons/android-app-icon.png"),width:"1000"}),(0,o.kt)("p",null,'Let\'s overwrite the existing app icon. Keep the Icon Type as "Launcher Icons" and keep the icon name the same to overwrite the existing app icon.'),(0,o.kt)("p",null,"In the Foreground Layer tab, select the asset patch to be the icon we've just downloaded."),(0,o.kt)("p",null,'In the Scaling section, select "Yes" under Trim, and resize the icon to fit comfortable within the icon area.'),(0,o.kt)("p",null,'In the "Background Layer" tab, under "Source Asset", choose "Color" for the "Asset Type" and set the background to white.'),(0,o.kt)("p",null,"You should end up with something like this:"),(0,o.kt)("img",{src:(0,a.Z)("/img/app-icons/android-app-icon-done.png"),width:"1000"}),(0,o.kt)("p",null,"Hit next -> finish to create the icons."),(0,o.kt)("p",null,"To change the App Name, open ",(0,o.kt)("inlineCode",{parentName:"p"},"android/app/src/main/res/values/strings.xml")," and update the value in ",(0,o.kt)("inlineCode",{parentName:"p"},"app_name"),', e.g "Mood"'),(0,o.kt)("p",null,"Finally, rebuild the app from Android Studio."),(0,o.kt)("img",{src:(0,a.Z)("/img/app-icons/android.png"),alt:"App icon Android",width:"500px"}),(0,o.kt)("h2",{id:"checkpoint-"},"Checkpoint \ud83d\udd17"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/kadikraman/mood-tracker/commit/7d170889d1054d9e3d5dc6fc5b3092bf80879afb"},(0,o.kt)("strong",{parentName:"a"},"Add App Icons")," 7d170889d1054d9e3d5dc6fc5b3092bf80879afb")))}l.isMDXComponent=!0}}]);