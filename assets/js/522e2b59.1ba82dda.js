(self.webpackChunkreact_native_beyond_basics=self.webpackChunkreact_native_beyond_basics||[]).push([[502],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return m},kt:function(){return b}});var n=a(7294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var c=n.createContext({}),l=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),d=l(a),b=o,g=d["".concat(c,".").concat(b)]||d[b]||p[b]||r;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function b(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4655:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var n=a(2122),o=a(9756),r=(a(7294),a(3905)),i={sidebar_position:4},s={unversionedId:"navigation",id:"navigation",isDocsHomePage:!1,title:"Navigation",description:"You'll notice that this project template comes with some navigation already set up using React Navigation v6.",source:"@site/docs/navigation.md",sourceDirName:".",slug:"/navigation",permalink:"/react-native-beyond-basics/docs/navigation",editUrl:"https://github.com/kadikraman/react-native-beyond-basics/edit/main/website/docs/navigation.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"New Project",permalink:"/react-native-beyond-basics/docs/new-project"},next:{title:"Mood Picker",permalink:"/react-native-beyond-basics/docs/mood-picker"}},c=[{value:"Bottom Tabs",id:"bottom-tabs",children:[]},{value:"Stack Navigator",id:"stack-navigator",children:[]},{value:"Full Screen Modals",id:"full-screen-modals",children:[]},{value:"Exercise: update the navigation",id:"exercise-update-the-navigation",children:[]},{value:"Checkpoint \ud83d\udd17",id:"checkpoint-",children:[]}],l={toc:c};function m(t){var e=t.components,a=(0,o.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You'll notice that this project template comes with some navigation already set up using ",(0,r.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/6.x/getting-started/"},"React Navigation v6"),"."),(0,r.kt)("p",null,'This looks kind of complicated at first glance, but it is set to mirror the "usual" navigation you might end up with on a mobile app.'),(0,r.kt)("p",null,"Here is the Navigation layout as a diagram:"),(0,r.kt)("img",{src:"/img/navigation/navigation.png",alt:"Navigation"}),(0,r.kt)("h2",{id:"bottom-tabs"},"Bottom Tabs"),(0,r.kt)("p",null,"The bottom tabs we're used to seeing on mobile apps is built using the ",(0,r.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/6.x/bottom-tab-navigator"},"bottom-tab-navigator"),". This consists of 1 or more bottom tabs which can each contain wither a single screen, or a navigator with multiple screens."),(0,r.kt)("p",null,"In our example, we have two tabs: the ",(0,r.kt)("strong",{parentName:"p"},"HomeTab")," and the ",(0,r.kt)("strong",{parentName:"p"},"OtherTab"),"."),(0,r.kt)("h2",{id:"stack-navigator"},"Stack Navigator"),(0,r.kt)("p",null,"You'll notice that in the ",(0,r.kt)("strong",{parentName:"p"},"OtherTab")," we only have a single page to display whereas in the ",(0,r.kt)("strong",{parentName:"p"},"HomeTab")," we have a stack navigator with ",(0,r.kt)("strong",{parentName:"p"},"FirstPage")," and ",(0,r.kt)("strong",{parentName:"p"},"SecondPage"),". We can turn any page into a nested page by making it into a Stack navigator which is the case with the Home Tab."),(0,r.kt)("h2",{id:"full-screen-modals"},"Full Screen Modals"),(0,r.kt)("p",null,"Notice how pages within a navigator only stay within that area on the screen. For example when you navigate to the ",(0,r.kt)("strong",{parentName:"p"},"SecondPage")," on the ",(0,r.kt)("strong",{parentName:"p"},"HomeTab"),", the bottom navigation bar stays visible and only the screen content changes."),(0,r.kt)("p",null,"In order to display a full screen modal that gets rendered ",(0,r.kt)("em",{parentName:"p"},"above")," the bottom navigation, it needs to be configured adjacent to the ",(0,r.kt)("strong",{parentName:"p"},"BottomTabs")," navigator."),(0,r.kt)("h2",{id:"exercise-update-the-navigation"},"Exercise: update the navigation"),(0,r.kt)("p",null,"Update the app navigation to match the following diagram: a tab navigator with 3 tabs."),(0,r.kt)("img",{src:"/img/navigation/new-navigation.png",alt:"Navigation"}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a new component in the ",(0,r.kt)("inlineCode",{parentName:"li"},"screens")," directory called ",(0,r.kt)("inlineCode",{parentName:"li"},"AnalyticsTab.screen.tsx"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="AnalyticsTab.screen.tsx"',title:'"AnalyticsTab.screen.tsx"'},'import React from "react";\nimport { StyleSheet, View, Text } from "react-native";\n\nexport const AnalyticsTab = () => {\n  return (\n    <View style={styles.container}>\n      <Text>Analytics Tab</Text>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: "center",\n    alignItems: "center",\n  },\n});\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("inlineCode",{parentName:"li"},"BottomTabs.navigator.tsx")," and add the new screen as the third bottom tab")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<BottomTabs.Screen name="AnalyticsTab" component={AnalyticsTab} />\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Rename ",(0,r.kt)("inlineCode",{parentName:"p"},"OtherTab.screen.tsx")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"HistoryTab.screen.tsx"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeTab.navigator.tsx"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeTabFirstPage.screen.tsx")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeTabSecondPage.screen.tsx"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new component in the ",(0,r.kt)("inlineCode",{parentName:"p"},"screens")," directory called ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeTab.screen.tsx")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="HomeTab.screen.tsx"',title:'"HomeTab.screen.tsx"'},'import React from "react";\nimport { StyleSheet, View, Text } from "react-native";\n\nexport const HomeTab = () => {\n  return (\n    <View style={styles.container}>\n      <Text>Home Tab</Text>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: "center",\n    alignItems: "center",\n  },\n});\n')),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("inlineCode",{parentName:"li"},"BottomTabs.navigator.tsx")," and use the ",(0,r.kt)("inlineCode",{parentName:"li"},"HomeTab")," screen component for the Home tab instead of the stack navigator")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="BottomTabs.navigator.tsx"',title:'"BottomTabs.navigator.tsx"'},"import * as React from 'react';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { BottomTabsParamList } from '~src/types';\nimport { HistoryTab } from './HistoryTab.screen';\nimport { AnalyticsTab } from './AnalyticsTab.screen';\nimport { HomeTab } from './HomeTab.screen';\n\nconst BottomTabs = createBottomTabNavigator<BottomTabsParamList>();\n\nexport const BottomTabsNavigator: React.FC = () => {\n  return (\n    <BottomTabs.Navigator>\n      <BottomTabs.Screen name=\"HomeTab\" component={HomeTab} />\n      <BottomTabs.Screen name=\"HistoryTab\" component={HistoryTab} />\n      <BottomTabs.Screen name=\"AnalyticsTab\" component={AnalyticsTab} />\n    </BottomTabs.Navigator>\n  );\n};\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Finally open ",(0,r.kt)("inlineCode",{parentName:"li"},"src/types.ts")," and update the navigation types to match the new layout")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="types.ts"',title:'"types.ts"'},'import { NavigatorScreenParams } from "@react-navigation/native";\n\nexport type RootStackParamList = {\n  BottomTabs: NavigatorScreenParams<BottomTabsParamList>,\n  ExampleModal: undefined,\n};\n\nexport type BottomTabsParamList = {\n  HomeTab: undefined,\n  HistoryTab: undefined,\n  AnalyticsTab: undefined,\n};\n')),(0,r.kt)("h2",{id:"checkpoint-"},"Checkpoint \ud83d\udd17"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/kadikraman/mood-tracker/commit/e2fb8d0914d37b3354b4f44b3bcbc43aa360a011"},(0,r.kt)("strong",{parentName:"a"},"Update Navigation")," e2fb8d0914d37b3354b4f44b3bcbc43aa360a011")),(0,r.kt)("img",{src:"/img/navigation/ios.png",alt:"iOS navigation",width:"50%"}),(0,r.kt)("img",{src:"/img/navigation/android.png",alt:"Android navigation",width:"50%"}))}m.isMDXComponent=!0}}]);