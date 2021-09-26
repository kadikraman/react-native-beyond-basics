"use strict";(self.webpackChunkreact_native_beyond_basics=self.webpackChunkreact_native_beyond_basics||[]).push([[6353],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,v=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(v,r(r({ref:t},p),{},{components:n})):a.createElement(v,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return i}})},4996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return r}});var a=n(2263),i=n(3919);function o(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,r=o.forcePrependBaseUrl,s=void 0!==r&&r,l=o.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(s)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+p:p}(o,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},7102:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=n(4996),s={sidebar_position:1},l="Navigation",c={unversionedId:"bottom-navigation/navigation",id:"bottom-navigation/navigation",isDocsHomePage:!1,title:"Navigation",description:"React Native does not come with navigation out of the box, so in order to add navigation into out app, we'll need to install a navigation library. For this project, we'll be using React Navigation v6.",source:"@site/docs/bottom-navigation/navigation.mdx",sourceDirName:"bottom-navigation",slug:"/bottom-navigation/navigation",permalink:"/react-native-beyond-basics/docs/bottom-navigation/navigation",editUrl:"https://github.com/kadikraman/react-native-beyond-basics/edit/main/website/docs/bottom-navigation/navigation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Solution",permalink:"/react-native-beyond-basics/docs/typescript/solution"},next:{title:"Exercise",permalink:"/react-native-beyond-basics/docs/bottom-navigation/exercise"}},p=[{value:"Install the navigation library",id:"install-the-navigation-library",children:[{value:"Android Only - additional native code",id:"android-only---additional-native-code",children:[]},{value:"iOS Only - install dependencies",id:"ios-only---install-dependencies",children:[]}]},{value:"Cleanup",id:"cleanup",children:[]},{value:"Update project structure",id:"update-project-structure",children:[]},{value:"Add a bottom tab navigator",id:"add-a-bottom-tab-navigator",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"navigation"},"Navigation"),(0,o.kt)("p",null,"React Native does not come with navigation out of the box, so in order to add navigation into out app, we'll need to install a navigation library. For this project, we'll be using ",(0,o.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/getting-started/"},"React Navigation v6"),"."),(0,o.kt)("h2",{id:"install-the-navigation-library"},"Install the navigation library"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @react-navigation/native react-native-screens react-native-safe-area-context @react-navigation/bottom-tabs\n# or\nnpm install @react-navigation/native react-native-screens react-native-safe-area-context @react-navigation/bottom-tabs\n")),(0,o.kt)("h3",{id:"android-only---additional-native-code"},"Android Only - additional native code"),(0,o.kt)("p",null,"The react-native-screens package requires one additional configuration step to properly work on Android devices. Edit ",(0,o.kt)("inlineCode",{parentName:"p"},"MainActivity.java")," file which is located in ",(0,o.kt)("inlineCode",{parentName:"p"},"android/app/src/main/java/moodtracker/MainActivity.java")),(0,o.kt)("p",null,"Add the following code to the body of MainActivity class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Override\nprotected void onCreate(Bundle savedInstanceState) {\n  super.onCreate(null);\n}\n")),(0,o.kt)("p",null,"and make sure to add an import statement at the top of this file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import android.os.Bundle;\n")),(0,o.kt)("h3",{id:"ios-only---install-dependencies"},"iOS Only - install dependencies"),(0,o.kt)("p",null,"Since this library includes native code, we'll also need to install the native dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ios\npod install\ncd ..\n")),(0,o.kt)("p",null,"Finally, rebuild your iOS or android app from the terminal / Xcode / Android Studio."),(0,o.kt)("h2",{id:"cleanup"},"Cleanup"),(0,o.kt)("p",null,"We're mostly going to use the TypeScript template as is, but there are two small fixes I'll do:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"remove the ",(0,o.kt)("inlineCode",{parentName:"li"},"__tests__")," folder (we don't be covering testing in this course, but even if we were, placing your test files next to your components is preferrable)"),(0,o.kt)("li",{parentName:"ol"},"in ",(0,o.kt)("inlineCode",{parentName:"li"},".prettierrc.js"),", set ",(0,o.kt)("inlineCode",{parentName:"li"},"bracketSpacing: true,")," - this is a personal preference"),(0,o.kt)("li",{parentName:"ol"},"in ",(0,o.kt)("inlineCode",{parentName:"li"},"tsconfig.json"),", set ",(0,o.kt)("inlineCode",{parentName:"li"},'"skipLibCheck": false,')," - this prevents the ",(0,o.kt)("inlineCode",{parentName:"li"},"tsc")," command from checking ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules"))),(0,o.kt)("h2",{id:"update-project-structure"},"Update project structure"),(0,o.kt)("p",null,"If you completed the into React Native course, then you should already be familiar with the Stack Navigator. In this project, we want to use tab-based navigation, so we're going to use the ",(0,o.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/bottom-tab-navigator"},"Bottom Tab Navigator")," instead. We already installed ",(0,o.kt)("inlineCode",{parentName:"p"},"@react-navigation/bottom-tabs")," in the install step above, so we can already use it in our project."),(0,o.kt)("p",null,"The layout we're looking for looks like this:"),(0,o.kt)("img",{src:(0,r.Z)("/img/navigation/navigation.png"),alt:"Navigation"}),(0,o.kt)("p",null,"First, let's create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," directory at the root of your project. This is where all our code is going to live."),(0,o.kt)("p",null,"Next, let's move our ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," into ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," and replace the contents of the file to just render a full screen teal background:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},"import React from 'react';\nimport { StyleSheet, View } from 'react-native';\n\nexport const App: React.FC = () => {\n  return <View style={styles.container} />;\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: 'teal',\n  },\n});\n")),(0,o.kt)("p",null,"Update ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," to include the correct import for ",(0,o.kt)("inlineCode",{parentName:"p"},"App")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="index.js"',title:'"index.js"'},"import { AppRegistry } from 'react-native';\n-import App from './App';\n+import { App } from './src/App';\nimport { name as appName } from './app.json';\n\nAppRegistry.registerComponent(appName, () => App);\n\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Checkpoint \ud83d\udd17")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/kadikraman/MoodTracker/commit/b70127f959dfb28a586750eb0983c263767ec57d"},(0,o.kt)("strong",{parentName:"a"},"Add react navigation; update folder structure")," b70127f959dfb28a586750eb0983c263767ec57d")))),(0,o.kt)("img",{src:(0,r.Z)("/img/navigation/ios-initial.png"),alt:"iOS initial",width:"50%"}),(0,o.kt)("img",{src:(0,r.Z)("/img/navigation/android-initial.png"),alt:"Android initial",width:"50%"}),(0,o.kt)("h2",{id:"add-a-bottom-tab-navigator"},"Add a bottom tab navigator"),(0,o.kt)("p",null,"Next, let's create a ",(0,o.kt)("inlineCode",{parentName:"p"},"screens")," directory inside ",(0,o.kt)("inlineCode",{parentName:"p"},"src"),". This is for all of out screens."),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"screens")," directory, let's create two files for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"History")," tabs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/screens/Home.screen.tsx"',title:'"src/screens/Home.screen.tsx"'},"import React from 'react';\nimport { StyleSheet, View, Text } from 'react-native';\n\nexport const Home: React.FC = () => {\n  return (\n    <View style={styles.container}>\n      <Text>Home</Text>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n  },\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/screens/History.screen.tsx"',title:'"src/screens/History.screen.tsx"'},"import React from 'react';\nimport { StyleSheet, View, Text } from 'react-native';\n\nexport const History: React.FC = () => {\n  return (\n    <View style={styles.container}>\n      <Text>History</Text>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n  },\n});\n")),(0,o.kt)("p",null,"Note that we're calling giving these files a filename with ",(0,o.kt)("inlineCode",{parentName:"p"},"screen.tsx")," at the end. The ",(0,o.kt)("inlineCode",{parentName:"p"},"tsx")," is the file extension for TypeScript, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"screen")," is just a convention to indicate that this is a screen file."),(0,o.kt)("p",null,"Next, let's create the Bottom Tabs Navigator. Add a new file to the ",(0,o.kt)("inlineCode",{parentName:"p"},"screens")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/screens/BottomTabs.navigator.tsx"',title:'"src/screens/BottomTabs.navigator.tsx"'},"import React from 'react';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { Home } from './Home.screen';\nimport { History } from './History.screen';\n\nconst BottomTabs = createBottomTabNavigator();\n\nexport const BottomTabsNavigator: React.FC = () => {\n  return (\n    <BottomTabs.Navigator>\n      <BottomTabs.Screen name=\"Home\" component={Home} />\n      <BottomTabs.Screen name=\"History\" component={History} />\n    </BottomTabs.Navigator>\n  );\n};\n")),(0,o.kt)("p",null,"Now we'll need to wrap this in a navigation container. Open ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," and replace the existing by wrapping the ",(0,o.kt)("inlineCode",{parentName:"p"},"BottomTabsNavigator")," in a ",(0,o.kt)("inlineCode",{parentName:"p"},"NavigationContainer"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="src/screens/App.tsx"',title:'"src/screens/App.tsx"'}," import React from 'react';\n-import { StyleSheet, View } from 'react-native';\n+import { NavigationContainer } from '@react-navigation/native';\n+import { BottomTabsNavigator } from './screens/BottomTabs.navigator';\n\n export const App: React.FC = () => {\n-  return <View style={styles.container} />;\n+  return (\n+    <NavigationContainer>\n+      <BottomTabsNavigator />\n+    </NavigationContainer>\n+  );\n };\n-\n-const styles = StyleSheet.create({\n-  container: {\n-    flex: 1,\n-    backgroundColor: 'teal',\n-  },\n-});\n\n")),(0,o.kt)("p",null,"You should now have a two tab layout with a Home and a History tab."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Checkpoint \ud83d\udd17")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/kadikraman/MoodTracker/commit/f770e7156e248ccb790f4997a034aa14bd228e76"},(0,o.kt)("strong",{parentName:"a"},"Implement two tab layout")," f770e7156e248ccb790f4997a034aa14bd228e76")))),(0,o.kt)("img",{src:(0,r.Z)("/img/navigation/ios-two-tab.png"),alt:"iOS two tabs",width:"50%"}),(0,o.kt)("img",{src:(0,r.Z)("/img/navigation/android-two-tab.png"),alt:"Android two tabs",width:"50%"}))}m.isMDXComponent=!0}}]);