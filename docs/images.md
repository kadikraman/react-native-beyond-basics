---
sidebar_position: 8
---

# Images

Let's spice up our app with some images!

## Local images

Create an `/assets` folder inside your project's `/src` directory. This is a place to keep all your non-code files (images, icons, fonts etc).

Then add an `/images` folder inside `/assets` to store all your app images.

Right click -> "Save Image As", and save the image in your `/images` folder.

<img src="/img/images/ying-yang.png" alt="Ying Yang image" />

Open `HomeTab.screen.tsx` and at the top of the file, add the image source. In React Native, you need to use `require` to get the path for a local image.

```diff
import React from 'react';
-import { StyleSheet, View } from 'react-native';
+import { StyleSheet, View, Image } from 'react-native';
import { useAppContext } from '~src/App.provider';
import { MoodPicker } from '~src/components/MoodPicker';

+const imageSrc = require('~src/assets/images/ying-yang.png');

export const HomeTab = () => {
  const { handleAddMood } = useAppContext();

  return (
    <View style={styles.container}>
+      <Image source={imageSrc} style={styles.image} />
      <MoodPicker onAddMood={handleAddMood} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
+  image: {
+    alignSelf: 'center',
+    marginBottom: 20,
+  },
});

```

And voila, you have rendered an image!

### Adapting to Screen Sizes

You would have noticed that when doing styling in React Native, we don't really use "pixels" or "ems" or "rems", but just "points". This is because the "points" are relative depending on the screen size.

The [pixel density](https://en.wikipedia.org/wiki/Pixel_density) of a screen denotes how many pixels a screen has per a inch or cm. What it comes down to is this: `width: 10` in React Native _is not_ the same as `width: "10px"` on the web. It actually means `width: (10 * pixel_density)px`.

An increased pixel density makes the displays looks more crisp and smooth, which is why the "retina displays" for mac and iPhone look so good. For a retina display, the pixel density is 3x a regular display. This makes for a wonderful user experience, but as developers, we will need to ensure that our image assets are large enough to support this high resolution. So e.g. if we wanted to display a `100x100` image on a retina display then really to make it as crisp as possible, the actual file included needs to be 3x larger than the point density on the screen, so `300px x 300px`.

To make things more complicated, in the mobile world you need to support all kinds of devices and screens.

As a result, when including `.png` or `.jpeg` images in mobile application, it is standard practice to include the same image in 3 sizes to account for the different screen resolutions.

Here are the 2x and 3x versions of the same ying yang image. Download and add them to the same `/assets` directory.

<img src="/img/images/ying-yang@2x.png" alt="Ying Yang image" />
<img src="/img/images/ying-yang@3x.png" alt="Ying Yang image" />

That's it! You don't actually have to do anything else here. React Native will determine the how large to make the image from the `cactus.png` and will automatically select the `2x` and `3x` files based on the pixel density of the current device.

### Sizing images

By default, the images will be sized based on the resolution of the main image file. You can use `width`, `height` and `aspectRatio` to size the image, e.g. to render an image that is 100pt tall and twice as high:

```js
height: 100,
aspectRatio: 2,
```

Using aspect ratio is handy, but sometimes you may want to give the image a fixed width and height, e.g.

```js
height: 100,
width: 300,
```

In this case you'll notice that the image gets cropped which may or may not what you want. In our case, cropping doesn't look the best. We can use the [resizeMode](https://reactnative.dev/docs/image#resizemode) prop on the image component to tell React Native how we want to handle image sizing. In the above case, `resizeMode="contain"` comes in handy, as it ensures that given the `300x100pt` window we have for the image, we maintain the aspect ratio of the image and keep it "contained" within it.

## Checkpoint

[**Add local image** 442cf524f2c41a6f839875d2cf6d9b32ee5cb138](https://github.com/kadikraman/mood-tracker/commit/442cf524f2c41a6f839875d2cf6d9b32ee5cb138)

<img src="/img/images/ios-local-image.png" alt="iOS local image" width="50%" />
<img src="/img/images/android-local-image.png" alt="Android local image" width="50%"  />

## Images from url

In order to render images from a url, let's display this peaceful smokey background for our ying yang:

<img src="https://images.unsplash.com/photo-1621193677201-096db5e45734?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" width="500"/>

Open the `HomeTab.screen.tsx` fine again, and add a constant at the top of the file for the image url:

```js
const networkImageUrl =
  "https://images.unsplash.com/photo-1621193677201-096db5e45734?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80";
```

Now let's add an image component on top of the existing one

```js
<Image source={{ uri: networkImageUrl }} />
```

And... nothing renders! That's because for network images, we also need to explicitly tell it how large to make the image. In out case, let's make it 200 pt high:

```js
networkImage: {
  height: 200,
},
```

Voila! Finally, let's move the image to the back of the page so that the whole page is wrapped in the image. Unfortunately the `Image` component doesn't allow child components. So in order to do that we must replace it with the `ImageBackground` component.

```js
import React from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import { useAppContext } from "~src/App.provider";
import { MoodPicker } from "~src/components/MoodPicker";

const imageSrc = require("~src/assets/images/ying-yang.png");
const networkImageUrl =
  "https://images.unsplash.com/photo-1621193677201-096db5e45734?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80";

export const HomeTab = () => {
  const { handleAddMood } = useAppContext();

  return (
    <ImageBackground style={styles.container} source={{ uri: networkImageUrl }}>
      <Image source={imageSrc} style={styles.image} />
      <MoodPicker onAddMood={handleAddMood} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
```

### Note on production usage

For production apps, it is recommended to use [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image) for images that are loaded via url - it's a drop-in replacement for the React Native image component, and it adds a lot of performance optimisations the `Image` and `ImageBackground` component are missing.

## Checkpoint

[**Use ImageBackground for the background image** 07908e87de8a1951e0eec12c9d676e4c8463eed7](https://github.com/kadikraman/mood-tracker/commit/07908e87de8a1951e0eec12c9d676e4c8463eed7)

<img src="/img/images/ios-bg-image.png" alt="iOS bg image" width="50%" />
<img src="/img/images/android-bg-image.png" alt="Android bg image" width="50%"  />

## Sources

The Ying Yang image is from [FlatIcon](https://www.flaticon.com/free-icon/ying-yang_1390877?related_id=1390877).

The smoky background image if rom [Unsplash](https://unsplash.com/photos/LS0CWcXo1dw)
