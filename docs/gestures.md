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
+          'react-native-reanimated/plugin',
          ...
      ],
  };
```

Make sure you also restart your packager with

```sh
yarn start --reset-cache
```

in order for the babel plugin to get included.

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

## Add a delete function

First, open `App.provider.tsx` and add a function that allows the user to delete a mode from the mood list. In this case we can use the timestamp as the unique identifier by which to locale the mood item in question.

```js
const handleRemoveMood = React.useCallback((mood: MoodOptionWithTimestamp) => {
  setMoodList((current) => {
    const newValue = current.filter(
      (item) => item.timestamp !== mood.timestamp
    );
    setAppData({ moods: newValue });
    return newValue;
  });
}, []);
```

Then, add a delete button to the `MoodItemRow.tsx` that will call the `handleRemoveMood` function with the current item:

```js
const { handleRemoveMood } = useAppContext();

...

<TouchableOpacity onPress={() => handleRemoveMood(item)}>
  <Text style={styles.deleteText}>delete</Text>
</TouchableOpacity>
```

## Checkpoint 🔗

[**Install react-native-reanimated and add a delete button to moods** 617a3ea75972f0f0a434f8df31ce07bd425cd748](https://github.com/kadikraman/mood-tracker/commit/617a3ea75972f0f0a434f8df31ce07bd425cd748)

<img src="/img/gestures/delete-mood.png" alt="Delete mood" width="500px"/>

## Add swipe to delete

The idea behind swipe to delete is this: we wrap the whole row in a GestureHandler, animate the row horizontally when the user "swipes", and trigger the "delete" animation if the user swipes across a certain threshold.

### Wrap MoodItemRow in a PanGestureHandler

First, let's wrap the whole `MoodItemRow` component in a PanGestureHandler. This allows us to track gesture events within the designated area:

```js
import { PanGestureHandler } from "react-native-gesture-handler";

...

<PanGestureHandler
  minDeltaX={1}
  minDeltaY={100}>

...

</PanGestureHandler>
```

Next, let's add a callback for `onGestureEvent` - this gets called whenever the user interacts with the area within the gesture handler:

```js
const onGestureEvent = React.useCallback(
  (event: PanGestureHandlerGestureEvent) => {
    console.warn(event.nativeEvent.translationX);
  },
  [],
);

<PanGestureHandler
  minDeltaX={1}
  minDeltaY={100}
  onGestureEvent={onGestureEvent}>
...
```

Now we want to use the `event.nativeEvent.translationX` value and animate the row right or left based on how much the user has moved.

To store an animated value, we can use `useSharedValue`, and to use it in an inline style we can use `useAnimatedStyle`.

Finally, in order to animate a view using an animated style, replace the `View` in question with `Animated.View`:

```js
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

...

const offset = useSharedValue(0);

...

const animatedStyles = useAnimatedStyle(() => ({
  transform: [{ translateX: offset.value }],
}));

const onGestureEvent = React.useCallback(
  (event: PanGestureHandlerGestureEvent) => {
    const xVal = Math.floor(event.nativeEvent.translationX);
    offset.value = xVal;
  },
  [],
);

...

<Animated.View style={[styles.moodItem, animatedStyles]}>
...
```

Lastly, we want to snap the row back to its original position if the user finishes dragging:

```js
...

const onHandlerStateChange = React.useCallback(() => {
  offset.value = withTiming(0);
}, [offset]);

...

<PanGestureHandler
  minDeltaX={1}
  minDeltaY={100}
  onGestureEvent={onGestureEvent}
  onHandlerStateChange={onHandlerStateChange}>

...
```

Notice that we set the value back `withTiming(0)` - this ensures that the card will animate back instead of snapping.

## Checkpoint 🔗

[**Add App Icons** 677b4075d0ae2105b0331d43b7eb73f593e39e5d](https://github.com/kadikraman/mood-tracker/commit/677b4075d0ae2105b0331d43b7eb73f593e39e5d)

## Delete item after swiping over a certain threshold

Let's do it so that if the user swipes 80pt or more in either direction, the item gets deleted:

```js
const maxPan = 80;

const [shouldRemove, setShouldRemove] = React.useState(false);

const onGestureEvent = React.useCallback(
  (event: PanGestureHandlerGestureEvent) => {
    const xVal = Math.floor(event.nativeEvent.translationX);

    offset.value = xVal;

    // use Absolute value so the user could swipe either left or right
    if (Math.abs(xVal) <= maxPan) {
      setShouldRemove(false);
    } else {
      setShouldRemove(true);
    }
  },
  [offset]
);

const onHandlerStateChange = React.useCallback(
  (event: PanGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.state === GestureState.END) {
      if (shouldRemove) {
        // if the item should be remove, animate it off the screen first
        offset.value = withTiming(Math.sign(offset.value) * 2000);

        // use LayoutAnimation to ensure the rest of the page animates up nicely
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

        // then trigger the remove mood item with a small delay
        setTimeout(() => {
          handleRemoveMood(item);
        }, 250);
      } else {
        // otherwise, animate the item back to the start
        offset.value = withTiming(0);
      }
    }
  },
  [handleRemoveMood, item, offset, shouldRemove]
);
```

## Checkpoint 🔗

[**Remove item when swiped** 2eef11e7670462db3056bbe8b4810fab3b1ed367](https://github.com/kadikraman/mood-tracker/commit/2eef11e7670462db3056bbe8b4810fab3b1ed367)
