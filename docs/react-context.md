---
sidebar_position: 6
---

# React Context

Next up, we'd like to input the data on the first screen, but show the past moods on the second screen.

In order to do this, we'll need some sort of shared way to store data so that it could be accessed simultaneously from both pages.

There are several ways to do this, for example [redux](https://redux.js.org/) is a popular option. However let's look into a system built into React called [React Context](https://reactjs.org/docs/context.html).

React Context consists of two parts: a provider and a consumer.

A Provider is a top level component that stores the data.

A Consumer can consume all data within the Provider from anywhere in the component tree without having to pass the data down as props.

## Create a Provider

First, let's create a provider. Add a new file in your `/src` directory called `App.provider.tsx`.

A new context is created using the `createContext` function where we pass in the default value for the context.

A Provider is a component that wraps component tree that should have access to context. The object passed in as the `value` to the provider will contain all the data that the child components will have access to.

```js
import React, { createContext } from "react";

type AppContextType = {
  greeting: string,
};

const defaultValue = {
  greeting: "",
};

const AppContext = createContext < AppContextType > defaultValue;

export const AppProvider: React.FC = ({ children }) => {
  return (
    <AppContext.Provider value={{ greeting: "Hello" }}>
      {children}
    </AppContext.Provider>
  );
};
```

## Wrap your app in a context provider

Remember that context is only available from the components that are nested within the context provider.

In our case, let's put our context provider as high as possible, and wrap our whole app in `App.tsx`:

```diff
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./screens/Root.navigator";
+import { AppProvider } from "./App.provider";


export const App: React.FC = () => {
  return (
+    <AppProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
+    </AppProvider>
  );
};
```

## Access the context

To access your context, you can use `useContext` hook. Add this to your `App.provider.tsx`:

```js
export const useAppContext = () => useContext(AppContext);
```

Now you'll be able to use the same context values from anywhere in your app, e.g. `HistoryTab.screen.tsx`:

```diff
import React from "react";
import { StyleSheet, View, Text } from "react-native";
+import { useAppContext } from "~src/App.provider";

export const HistoryTab = () => {
+  const appContext = useAppContext();

  return (
    <View style={styles.container}>
      <Text>History Tab</Text>
+      <Text>{appContext.greeting}</Text>
    </View>
  );
};
```

## Checkpoint 🔗

[**Set Up App Context** df7f6074124b0916edef708974bad43734eae5ff](https://github.com/kadikraman/mood-tracker/commit/df7f6074124b0916edef708974bad43734eae5ff)

## Exercise

By moving the data to the App Context, move the list of `MoodItemsRow`s to the history tab.

## Checkpoint 🔗

[**Move mood list to AppContext** f0b4ca4cba8299faee8ee23fd3852129cf1556c5](https://github.com/kadikraman/mood-tracker/commit/f0b4ca4cba8299faee8ee23fd3852129cf1556c5)

<img src="/img/react-context/ios.png" alt="React Context iOS" width="50%"/>
<img src="/img/react-context/android.png" alt="React Context Android" width="50%"/>
