"use strict";(self.webpackChunkreact_native_beyond_basics=self.webpackChunkreact_native_beyond_basics||[]).push([[2222],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?o.createElement(f,s(s({ref:t},p),{},{components:n})):o.createElement(f,s({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:function(e,t,n){function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,{b:function(){return o},Z:function(){return r}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return s}});var o=n(2263),r=n(3919);function i(){var e=(0,o.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var i=void 0===o?{}:o,s=i.forcePrependBaseUrl,a=void 0!==s&&s,l=i.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+p:p}(i,n,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},3555:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),s=n(4996),a={sidebar_position:3},l="Pressable and useState",c={unversionedId:"basic-components/pressable-and-use-state",id:"basic-components/pressable-and-use-state",isDocsHomePage:!1,title:"Pressable and useState",description:"Pressable is a relatively new component, introduced in React Native 0.63. It is a more versatile alternative to the TouchableOpacity / TouchableHighlight / TouchableWithoutFeedback we're already familiar with. The Touchable components will be deprecated in future versions of React Native, so it is recommended to use Pressable instead.",source:"@site/docs/basic-components/pressable-and-use-state.mdx",sourceDirName:"basic-components",slug:"/basic-components/pressable-and-use-state",permalink:"/react-native-beyond-basics/docs/basic-components/pressable-and-use-state",editUrl:"https://github.com/kadikraman/react-native-beyond-basics/edit/main/website/docs/basic-components/pressable-and-use-state.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"View and Text",permalink:"/react-native-beyond-basics/docs/basic-components/view-and-text"},next:{title:"Styling",permalink:"/react-native-beyond-basics/docs/basic-components/styling"}},p=[],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pressable-and-usestate"},"Pressable and useState"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Pressable")," is a relatively new ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/pressable"},"component"),", introduced in React Native 0.63. It is a more versatile alternative to the ",(0,i.kt)("inlineCode",{parentName:"p"},"TouchableOpacity")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"TouchableHighlight")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"TouchableWithoutFeedback")," we're already familiar with. The Touchable components will be deprecated in future versions of React Native, so it is recommended to use ",(0,i.kt)("inlineCode",{parentName:"p"},"Pressable")," instead."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/pressable"},"Pressable")," component gives you fine grained control over the pressed state. Unlike ",(0,i.kt)("inlineCode",{parentName:"p"},"TouchableOpacity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Pressable")," does not have any styles applied for the pressed state, but if you wanted, you could achieve the same effect by applying the pressed style yourself:"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example component: Pressable styled as TouchableOpacity"),(0,i.kt)("p",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/PressableArea.tsx"',title:'"src/components/PressableArea.tsx"'},"import React from 'react';\nimport { Pressable, PressableProps } from 'react-native';\n\nexport const PressableArea: React.FC<PressableProps> = ({\n  children,\n  style,\n  ...rest\n}) => {\n  return (\n    <Pressable\n      {...rest}\n      style={(args) => {\n        const appliedStyle = typeof style === 'function' ? style(args) : style;\n        if (args.pressed) {\n          return [appliedStyle, { opacity: 0.9 }];\n        }\n        return appliedStyle;\n      }}\n    >\n      {children}\n    </Pressable>\n  );\n};\n")))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useState")," is one of the the core ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"React Hooks")," we'll be using to store the selected value."),(0,i.kt)("p",null,"Let's start by creating a TypeScript type for the emoji option."),(0,i.kt)("p",null,"Create a new file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," directory and call it ",(0,i.kt)("inlineCode",{parentName:"p"},"types.ts")," - this will hold all the shared types for our app."),(0,i.kt)("p",null,"Open the file and add a type for the mood option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/types.ts"',title:'"src/types.ts"'},"export type MoodOptionType = {\n  emoji: string;\n  description: string;\n};\n")),(0,i.kt)("p",null,"Now let's import this type in ",(0,i.kt)("inlineCode",{parentName:"p"},"MoodPicker"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="src/components/MoodPicker.tsx"',title:'"src/components/MoodPicker.tsx"'}," import React from 'react';\n-import { View, Text, StyleSheet } from 'react-native';\n+import { View, Text, StyleSheet, Pressable } from 'react-native';\n+import { MoodOptionType } from '../types';\n\n-const moodOptions = [\n+const moodOptions: MoodOptionType[] = [\n   { emoji: '\ud83e\uddd1\u200d\ud83d\udcbb', description: 'studious' },\n   { emoji: '\ud83e\udd14', description: 'pensive' },\n   { emoji: '\ud83d\ude0a', description: 'happy' },\n\n")),(0,i.kt)("p",null,"and let's create a ",(0,i.kt)("inlineCode",{parentName:"p"},"useState")," variable to store the mood option in:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const [selectedMood, setSelectedMood] = React.useState<MoodOptionType>();\n")),(0,i.kt)("p",null,"Notice we've added the option type in ",(0,i.kt)("inlineCode",{parentName:"p"},"<>")," and if we hover over ",(0,i.kt)("inlineCode",{parentName:"p"},"selectedMood"),", TypeScript will tell us that this value is wither of type ",(0,i.kt)("inlineCode",{parentName:"p"},"MoodOptionType")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," (since we don't give it an initial value)."),(0,i.kt)("p",null,"Next let's wrap each of the emoji in a ",(0,i.kt)("inlineCode",{parentName:"p"},"Pressable")," and use a ",(0,i.kt)("inlineCode",{parentName:"p"},"useState")," to store the currently selected option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="src/components/MoodPicker.tsx"',title:'"src/components/MoodPicker.tsx"'}," import React from 'react';\n-import { View, Text, StyleSheet } from 'react-native';\n+import { View, Text, StyleSheet, Pressable } from 'react-native';\n import { MoodOptionType } from '../types';\n\n const moodOptions: MoodOptionType[] = [\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="src/components/MoodPicker.tsx"',title:'"src/components/MoodPicker.tsx"'},"   return (\n     <View style={styles.moodList}>\n       {moodOptions.map(option => (\n-        <Text key={option.emoji} style={styles.moodText}>\n-          {option.emoji}\n-        </Text>\n+        <Pressable onPress={() => setSelectedMood(option)} key={option.emoji}>\n+          <Text style={styles.moodText}>{option.emoji}</Text>\n+        </Pressable>\n       ))}\n     </View>\n   );\n")),(0,i.kt)("p",null,"Let's give the currently selected mood a highlighted background so we could tell which mood is selected:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="src/components/MoodPicker.tsx"',title:'"src/components/MoodPicker.tsx"'},"   return (\n     <View style={styles.moodList}>\n       {moodOptions.map(option => (\n-        <Text key={option.emoji} style={styles.moodText}>\n-          {option.emoji}\n-        </Text>\n+        <Pressable\n+          onPress={() => setSelectedMood(option)}\n+          key={option.emoji}\n+          style={[\n+            styles.moodItem,\n+            option.emoji === selectedMood?.emoji\n+              ? styles.selectedMoodItem\n+              : undefined,\n+          ]}>\n+          <Text style={styles.moodText}>{option.emoji}</Text>\n+        </Pressable>\n       ))}\n     </View>\n   );\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="src/components/MoodPicker.tsx"',title:'"src/components/MoodPicker.tsx"'},"    justifyContent: 'space-between',\n    padding: 20,\n  },\n+  moodItem: {\n+    width: 60,\n+    height: 60,\n+    justifyContent: 'center',\n+    alignItems: 'center',\n+    borderRadius: 30,\n+    marginBottom: 5,\n+  },\n+  selectedMoodItem: {\n+    borderWidth: 2,\n+    backgroundColor: '#454C73',\n+    borderColor: '#fff',\n+  },\n});\n\n")),(0,i.kt)("p",null,"And finally, we'll add the description text for the selected item:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="src/components/MoodPicker.tsx"',title:'"src/components/MoodPicker.tsx"'},"   return (\n     <View style={styles.moodList}>\n       {moodOptions.map(option => (\n-        <Pressable\n-          onPress={() => setSelectedMood(option)}\n-          key={option.emoji}\n-          style={[\n-            styles.moodItem,\n-            option.emoji === selectedMood?.emoji\n-              ? styles.selectedMoodItem\n-              : undefined,\n-          ]}>\n-          <Text style={styles.moodText}>{option.emoji}</Text>\n-        </Pressable>\n+        <View>\n+          <Pressable\n+            onPress={() => setSelectedMood(option)}\n+            key={option.emoji}\n+            style={[\n+              styles.moodItem,\n+              option.emoji === selectedMood?.emoji\n+                ? styles.selectedMoodItem\n+                : undefined,\n+            ]}>\n+            <Text style={styles.moodText}>{option.emoji}</Text>\n+          </Pressable>\n+          <Text style={styles.descriptionText}>\n+            {selectedMood?.emoji === option.emoji ? option.description : ' '}\n+          </Text>\n+        </View>\n       ))}\n     </View>\n   );\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="src/components/MoodPicker.tsx"',title:'"src/components/MoodPicker.tsx"'},"    backgroundColor: '#454C73',\n    borderColor: '#fff',\n  },\n+  descriptionText: {\n+    color: '#454C73',\n+    fontWeight: 'bold',\n+    fontSize: 10,\n+    textAlign: 'center',\n+  },\n});\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Checkpoint \ud83d\udd17")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/kadikraman/MoodTracker/commit/2f64a2cee840bd5b95144ad33c11d940076cf7a3"},(0,i.kt)("strong",{parentName:"a"},"Select a mood")," 2f64a2cee840bd5b95144ad33c11d940076cf7a3")))),(0,i.kt)("img",{src:(0,s.Z)("/img/mood-picker/ios-exercise-2.png"),alt:"iOS select mood",width:"50%"}),(0,i.kt)("img",{src:(0,s.Z)("/img/mood-picker/android-exercise-2.png"),alt:"Android select mood",width:"50%"}))}m.isMDXComponent=!0}}]);