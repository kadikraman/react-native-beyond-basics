"use strict";(self.webpackChunkreact_native_beyond_basics=self.webpackChunkreact_native_beyond_basics||[]).push([[1515],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,m=d["".concat(p,".").concat(f)]||d[f]||l[f]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3919:function(e,n,t){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return o}})},4996:function(e,n,t){t.d(n,{C:function(){return i},Z:function(){return a}});var r=t(2263),o=t(3919);function i(){var e=(0,r.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,p=i.absolute,s=void 0!==p&&p;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(c)return n+t;var u=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+u:u}(i,t,e,n)}}}function a(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},9314:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=t(4996),c={sidebar_position:2},p="iOS",s={unversionedId:"app-icons/ios",id:"app-icons/ios",isDocsHomePage:!1,title:"iOS",description:"To add an app icon to iOS, you need a 1024 x 1024px image. Feel free to create your own, or use this:",source:"@site/docs/app-icons/ios.mdx",sourceDirName:"app-icons",slug:"/app-icons/ios",permalink:"/react-native-beyond-basics/docs/app-icons/ios",editUrl:"https://github.com/kadikraman/react-native-beyond-basics/edit/main/website/docs/app-icons/ios.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Designing Your Icon",permalink:"/react-native-beyond-basics/docs/app-icons/design-your-icon"},next:{title:"Android",permalink:"/react-native-beyond-basics/docs/app-icons/android"}},u=[],l={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ios"},"iOS"),(0,i.kt)("p",null,"To add an app icon to iOS, you need a ",(0,i.kt)("inlineCode",{parentName:"p"},"1024 x 1024px")," image. Feel free to create your own, or use this:"),(0,i.kt)("img",{src:(0,a.Z)("/img/app-icons/app-icon.png"),width:"200"}),(0,i.kt)("p",null,"Next, open your project in Xcode, and on the file tree on the left navigate to folder -> MoodTracker -> MoodTracker -> Images.scassets -> AppIcon"),(0,i.kt)("img",{src:(0,a.Z)("/img/app-icons/xcode-app-icon.png"),width:"1000"}),(0,i.kt)("p",null,"You can see that the App Icon placeholder is already there and it also shows you what size icons are required."),(0,i.kt)("p",null,"We could of course manually export our icon using all these sizes, but a faster way is to use a tool for it."),(0,i.kt)("p",null,"Download ",(0,i.kt)("a",{parentName:"p",href:"https://raphaelhanneken.com/iconizer/"},"Iconizer")," and export the app icon for iPhone:"),(0,i.kt)("img",{src:(0,a.Z)("/img/app-icons/iconizer.png"),width:"600"}),(0,i.kt)("p",null,"When Prompted for a name, call the icon set ",(0,i.kt)("inlineCode",{parentName:"p"},"AppIcon"),"."),(0,i.kt)("p",null,"Now go back to Xcode and delete the AppIcon template by clicking on it and clicking the minus button below."),(0,i.kt)("p",null,"Finally, drag and drop the whole AppIcon folder to the Images section in XCode."),(0,i.kt)("img",{src:(0,a.Z)("/img/app-icons/xcode-app-icon-done.png"),width:"1000"}),(0,i.kt)("p",null,"Note you can also drag and drop the images manually if need be."),(0,i.kt)("p",null,"Now, close your iOS simulator completely by right clicking on the simulator icon on your menu bar and choosing Quit. The ensures that any old icons are not cached on the simulator."),(0,i.kt)("p",null,'While we\'re already in Xcode, let\'s also update the app name. Under "Display Name", you can update the name on the home screen, e.g. "Mood"'),(0,i.kt)("p",null,"Finally, rebuild the app from XCode."),(0,i.kt)("img",{src:(0,a.Z)("/img/app-icons/ios.png"),alt:"App icon iOS",width:"500px"}))}d.isMDXComponent=!0}}]);