(self.webpackChunkreact_native_beyond_basics=self.webpackChunkreact_native_beyond_basics||[]).push([[505],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,k=m["".concat(s,".").concat(u)]||m[u]||l[u]||r;return n?i.createElement(k,o(o({ref:t},p),{},{components:n})):i.createElement(k,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7979:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var i=n(2122),a=n(9756),r=(n(7294),n(3905)),o={sidebar_position:5},c={unversionedId:"mood-picker",id:"mood-picker",isDocsHomePage:!1,title:"Mood Picker",description:"Let's recap everything you should already know about building React Native apps by setting up the User Interface for our Mood Picker app.",source:"@site/docs/mood-picker.md",sourceDirName:".",slug:"/mood-picker",permalink:"/react-native-beyond-basics/docs/mood-picker",editUrl:"https://github.com/kadikraman/react-native-beyond-basics/edit/main/website/docs/mood-picker.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Navigation",permalink:"/react-native-beyond-basics/docs/navigation"},next:{title:"React Context",permalink:"/react-native-beyond-basics/docs/react-context"}},s=[{value:"Exercise 1 - View and Text",id:"exercise-1---view-and-text",children:[]},{value:"Checkpoint \ud83d\udd17",id:"checkpoint-",children:[]},{value:"Exercise 2 - useState and TouchableOpacity",id:"exercise-2---usestate-and-touchableopacity",children:[]},{value:"Checkpoint \ud83d\udd17",id:"checkpoint--1",children:[]},{value:"Exercise 3 - more styling",id:"exercise-3---more-styling",children:[]},{value:"Checkpoint \ud83d\udd17",id:"checkpoint--2",children:[]},{value:"Exercise 4 - submit mood, and display thank you message",id:"exercise-4---submit-mood-and-display-thank-you-message",children:[]},{value:"Checkpoint \ud83d\udd17",id:"checkpoint--3",children:[]},{value:"Exercise 5 - use date-fns to format the timestamp",id:"exercise-5---use-date-fns-to-format-the-timestamp",children:[]},{value:"Checkpoint \ud83d\udd17",id:"checkpoint--4",children:[]}],d={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Let's recap everything you should already know about building React Native apps by setting up the User Interface for our Mood Picker app."),(0,r.kt)("p",null,"We will be building a mood picker interface where the user can pick from 5 emoji options and see the past selections under the picker."),(0,r.kt)("img",{src:"/img/mood-picker/exercise-5.png",alt:"Mood Picker iOS",width:"50%"}),(0,r.kt)("img",{src:"/img/mood-picker/exercise-5-android.png",alt:"Mood Picker Android",width:"50%"}),(0,r.kt)("h2",{id:"exercise-1---view-and-text"},"Exercise 1 - View and Text"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"View")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Text")," components to display the mood options in a horizontal list"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const moodOptions = [\n  { emoji: "\ud83d\ude04", description: "amazing" },\n  { emoji: "\ud83d\ude0a", description: "great" },\n  { emoji: "\ud83d\ude42", description: "alright" },\n  { emoji: "\ud83d\ude41", description: "sad" },\n  { emoji: "\ud83d\ude14", description: "miserable" },\n];\n')),(0,r.kt)("img",{src:"/img/mood-picker/exercise-1.png",alt:"Mood Picker",width:"500px"}),(0,r.kt)("h2",{id:"checkpoint-"},"Checkpoint \ud83d\udd17"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/kadikraman/mood-tracker/commit/4c05e7aafeaf82621ffd57e8c463d2c898df83fb"},(0,r.kt)("strong",{parentName:"a"},"Display MoodPicker emoji options")," 4c05e7aafeaf82621ffd57e8c463d2c898df83fb")),(0,r.kt)("h2",{id:"exercise-2---usestate-and-touchableopacity"},"Exercise 2 - useState and TouchableOpacity"),(0,r.kt)("p",null,"Allow the user to select an emoji and store the currently selected option in a ",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," variable."),(0,r.kt)("p",null,"The colors used in the example are ",(0,r.kt)("inlineCode",{parentName:"p"},"#A0CFD3"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"#454C73")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"#8D94BA"),"."),(0,r.kt)("img",{src:"/img/mood-picker/exercise-2.png",alt:"Mood Picker",width:"500px"}),(0,r.kt)("h2",{id:"checkpoint--1"},"Checkpoint \ud83d\udd17"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/kadikraman/mood-tracker/commit/c6a8bf11b647b02487d89e544e2a9185663d4e05"},(0,r.kt)("strong",{parentName:"a"},"Enable selecting emoji")," c6a8bf11b647b02487d89e544e2a9185663d4e05")),(0,r.kt)("h2",{id:"exercise-3---more-styling"},"Exercise 3 - more styling"),(0,r.kt)("p",null,'Wrap the emoji list in a container with a title saying "How are you right now?" and a call to action to "Choose" and emoji.'),(0,r.kt)("img",{src:"/img/mood-picker/exercise-3.png",alt:"Mood Picker",width:"500px"}),(0,r.kt)("h2",{id:"checkpoint--2"},"Checkpoint \ud83d\udd17"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/kadikraman/mood-tracker/commit/383ada7c1511b557b108242ab9371139bd381af6"},(0,r.kt)("strong",{parentName:"a"},"Add emoji list container")," 383ada7c1511b557b108242ab9371139bd381af6")),(0,r.kt)("h2",{id:"exercise-4---submit-mood-and-display-thank-you-message"},"Exercise 4 - submit mood, and display thank you message"),(0,r.kt)("p",null,"Store the list of selected emoji in the ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeTab.screen.tsx")," component including the current timestamp."),(0,r.kt)("p",null,'Display a "Thank You" page when the user has selected an option. The "Add Another" button should let the use choose again.'),(0,r.kt)("img",{src:"/img/mood-picker/exercise-4.png",alt:"Mood Picker",width:"500px"}),(0,r.kt)("h2",{id:"checkpoint--3"},"Checkpoint \ud83d\udd17"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/kadikraman/mood-tracker/commit/9fdfc26494b436b248b5369f9bc4bfa77942ffcc"},(0,r.kt)("strong",{parentName:"a"},"Display previously selected moods")," 383ada7c1511b557b108242ab9371139bd381af6")),(0,r.kt)("h2",{id:"exercise-5---use-date-fns-to-format-the-timestamp"},"Exercise 5 - use date-fns to format the timestamp"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://date-fns.org/"},"date-fns")," library is incredibly handy when working with dates and times in JavaScript."),(0,r.kt)("p",null,"Install the library with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add date-fns\n")),(0,r.kt)("p",null,"And use the ",(0,r.kt)("a",{parentName:"p",href:"https://date-fns.org/v2.21.3/docs/format"},"format")," method format the timestamp on the emoji list."),(0,r.kt)("img",{src:"/img/mood-picker/exercise-5.png",alt:"Mood Picker",width:"500px"}),(0,r.kt)("h2",{id:"checkpoint--4"},"Checkpoint \ud83d\udd17"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/kadikraman/mood-tracker/commit/dae7d8143f79692bb36a08dd00e978398c8b2de4"},(0,r.kt)("strong",{parentName:"a"},"Display previously selected moods")," dae7d8143f79692bb36a08dd00e978398c8b2de4")))}p.isMDXComponent=!0}}]);