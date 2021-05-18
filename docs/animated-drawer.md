---
sidebar_position: 13
---

# Layout Animation

In our app, the user is able to record their current mood multiple times a day. Let's group these records by day.

A tip: in order to create "old" data, set your computer clock in the past and add some moods.

## Grouping entries by day

Let's start by getting the data in order and group the entries by day.

[Lodash](https://lodash.com/) is a handy library for doing data manipulation. It's JavaScript-only, meaning no native code.

```sh
yarn add lodash
```

For lodash, we'll also need to add the types separately:

```sh
yarn add @types/lodash --dev
```

In the `HistoryTab.screen.tsx` component, let's convert our days array into the appropriate format. First, ensure the days are in the right order:

```js
import orderBy from "lodash/orderBy";

const ordered = orderBy(moodList, "timestamp", "desc");
```

Next, let's use `groupBy` to group the items by day:

```js
import groupBy from "lodash/groupBy";

const grouped = groupBy(ordered, (item) =>
  format(new Date(item.timestamp), "dd MMM, yyyy")
);
```

Now, map over the object so we end up with an array of days with a sub-array of moods:

```js
const days = Object.entries(grouped).map(([day, moodsInDay]) => ({
  day,
  moodsInDay,
}));
```

Finally, we can wrap the whole thing in `useMemo` to ensure the calculation in only re-run when necessary:

```js
const days = useMemo(() => {
  const ordered = orderBy(moodList, "timestamp", "desc");

  const grouped = groupBy(ordered, (item) =>
    format(new Date(item.timestamp), "dd MMM, yyyy")
  );

  return Object.entries(grouped).map(([day, moodsInDay]) => ({
    day,
    moodsInDay,
  }));
}, [moodList]);
```

Now let's render the days using a FlatList:

```js
<FlatList
  keyExtractor={(item) => item.day}
  data={days}
  renderItem={({ item }) => (
    <View>
      <Text>{item.day}</Text>
      {item.moodsInDay.map((mood: MoodOptionWithTimestamp) => (
        <MoodItemRow item={mood} key={mood.timestamp} />
      ))}
    </View>
  )}
/>
```

## Checkpoint 🔗

[**Group entries by day in sections** d7ed9f9150604940a18b2f2ebbe213594037f02f](https://github.com/kadikraman/mood-tracker/commit/d7ed9f9150604940a18b2f2ebbe213594037f02f)

## Create a Drawer component

Let's refactor each day into a `Drawer` component: it should have a heading and items. The heading should be pressable so that pressing the heading will reveal or hide the items.

## Animate the drawer opening

We can use [LayoutAnimation](https://reactnative.dev/docs/layoutanimation) to animate the drawers open and close.

LayoutAnimation is incredibly powerful, although not very flexible - essentially, when you trigger a layout animation, it will automatically animate the _next_ UI update using the animation configuration. It can't be used for complex or intricate animations, but for our drawer example, it's perfect.

For Android, we need to first enable LayoutAnimation, since it's still an experimental feature. In open `App.tsx` and add:

```js
import { Platform, UIManager } from "react-native";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
```

To trigger a layout animation, add it just before `setIsOpen` gets called:

```diff
+import { LayoutAnimation } from "react-native";

const handleToggleOpen = React.useCallback(() => {
+  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  setIsOpen(val => !val);
}, []);
```

## Checkpoint 🔗

[**Add an animated drawer** 9f4a5333e0b479d91b29c4f8a106a671242f7039](https://github.com/kadikraman/mood-tracker/commit/9f4a5333e0b479d91b29c4f8a106a671242f7039)

<img src="/img/animated-drawer/ios.png" alt="iOS animated drawer" width="50%" />
<img src="/img/animated-drawer/android.png" alt="Android animated drawer" width="50%"  />
