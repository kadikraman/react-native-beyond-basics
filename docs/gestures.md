---
sidebar_position: 16
---

# Gestures and Animation

One of the ways native mobile apps can be so much more powerful than mobile web is that you can use gestures.

Let's use gestures and animation to implement a swipe-to-delete UI for the mood history.

React Native comes with a built in animation capabilities using [Animated](https://reactnative.dev/docs/animated), however the Animated api has been notoriously tricky to use. Instead, we will be using [react-native-reanimated v2](https://docs.swmansion.com/react-native-reanimated/docs/installation).

## Install Reanimated 2

First, let's install and configure [Reanimated 2](https://docs.swmansion.com/react-native-reanimated/docs/installation).

```sh
yarn add react-native-reanimated@next
```

Open `babel.config.js` and add the following line:

```diff
  module.exports = {
      ...
      plugins: [
          ...
+          'react-native-reanimated/plugin',
      ],
  };
```

### iOS only

Install the native dependencies with

```sh
cd ios
pod install
```

### Android only

1. Turn on Hermes engine by editing android/app/build.gradle

```diff
project.ext.react = [
+  enableHermes: true
]
```

2. Plug Reanimated in MainApplication.java

```diff
+  import com.facebook.react.bridge.JSIModulePackage;
+  import com.swmansion.reanimated.ReanimatedJSIModulePackage;
  ...
  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
  ...

      @Override
      protected String getJSMainModuleName() {
        return "index";
      }

+      @Override
+      protected JSIModulePackage getJSIModulePackage() {
+        return new ReanimatedJSIModulePackage();
+      }
    };
  ...
```

### Rebuild everything

Restart the bundler and rebuild the app from XCode / Android Studio.

## Add an delete button

## Add swipe to delete
