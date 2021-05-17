---
sidebar_position: 9
---

# Persisting Data

## Commit

**b33b44bec49b09810229e79b0023fb2dc8be877d**

Currently, our past recorded moods will disappear as soon as we close the app. This is not desired behaviour in the long run. We'd like all past moods to be saved locally.

The simplest way of storing data across app launches is using [Async Storage](https://github.com/react-native-async-storage/async-storage). This is the native equivalent of `localstorage` from the web and works very similarly. It is a key-value store of data, scoped to the current app.

## Install Async Storage

To install Async Storage, run

```sh
yarn add @react-native-async-storage/async-storage
cd ios && pod install
```

And rebuild your app from Xcode / Android Studio.

The [api](https://react-native-async-storage.github.io/async-storage/docs/api) for AsyncStorage is pretty straightforward = you can get, set and delete items from th store based on an ID.

One thing to note is that we can only store things in async storage that are _serializable_ - in short this means that we can't store functions, classes or references.

Let's get functions to get our app data from storage on launch, and save it when it gets updated.

```js
const storageKey = "my-app-data";

type AppData = {
  moods: MoodWithTime[],
};

const getAppData = async (): Promise<AppData | null> => {
  try {
    const data = await AsyncStorage.getItem(storageKey);

    if (data) {
      return JSON.parse(data);
    }
    return null;
  } catch {
    return null;
  }
};

const setAppData = async (newData: AppData) => {
  try {
    await AsyncStorage.setItem(storageKey, JSON.stringify(newData));
  } catch {}
};
```

In our provider, we want to get the data from storage on launch:

```js
React.useEffect(() => {
  const getDataFromStorage = async () => {
    const data = await getAppData();

    if (data) {
      setMoods(data.moods);
    }
  };
  getDataFromStorage();
}, []);
```

And finally, whenever a mood is updated, we want to also sync this in out Async Storage

```js
const handleSelect = React.useCallback((moodItem: MoodItem) => {
  setMoods((current) => {
    const newValue = [...current, { timestamp: Date.now(), mood: moodItem }];
    setAppData({ moods: newValue });
    return newValue;
  });
}, []);
```
