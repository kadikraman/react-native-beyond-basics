---
sidebar_position: 10
---

# Images

Good sources for finding free images for your app: [Unsplash](https://unsplash.com/) and [Adobe Stock](https://stock.adobe.com/uk/search/free).

## Local images

Use https://images.unsplash.com/photo-1621193677201-096db5e45734?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80 as background https://unsplash.com/photos/LS0CWcXo1dw

Use https://www.flaticon.com/free-icon/ying-yang_1390877?related_id=1390877 for the icon

Let's add the image of this happy cactus from [FlatIcon](https://www.flaticon.com/free-icon/cactus_874928) into our app using the React Native [Image](https://reactnative.dev/docs/image) component.

<img src="/img/icon-example.png" alt="Icon example" width="500" />

## Commit

**59f28cae194822eae62a29e6cdd01a5f77dbadee**

<img src="/img/cactus.png" alt="Cactus" width="200" />

First create an `/assets` folder inside your project's `/src` directory. This is a place to keep all your non-code files (images, icons, fonts etc).

Thank, right click & "Save Image As" to save the image in your new assets folder.

Now open `/src/components/Greeting.tsx`

At the top of the file, add the image source. In React Native, you need to use `require` to get the path for a local image.

```jsx
const imageSrc = require("~src/assets/cactus.png");
```

Then import `Image` from `react-native` and render it:

```jsx title="Greeting.jsx"
import React from "react";
import { StyleSheet, Image } from "react-native";

const imageSrc = require("~src/assets/cactus.png");

export const Greeting = () => {
  return <Image source={imageSrc} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    marginBottom: 10,
  },
});
```

And voila, you have rendered an image!

### Adapting to Screen Sizes

You would have noticed that when doing styling in React Native, we don't really use "pixels" or "ems" or "rems", but just "points". This is because the "points" are relative depending on the screen size.

The [pixel density](https://en.wikipedia.org/wiki/Pixel_density) of a screen denotes how many pixels a screen has per a inch or cm. What it comes down to is this: `width: 10` in React Native _is not_ the same as `width: "10px"` on the web. It actually means `width: (10 * pixel_density)px`.

An increased pixel density makes the displays looks more crisp and smooth, which is why the "retina displays" for mac and iPhone look so good. For a retina display, the pixel density is 3x a regular display. This makes for a wonderful user experience, but as developers, we will need to ensure that our image assets are large enough to support this high resolution. So e.g. if we wanted to display a `100x100` image on a retina display then really to make it as crisp as possible, the actual file included needs to be 3x larger than the point density on the screen, so `300px x 300px`.

To make things more complicated, in the mobile world you need to support all kinds of devices and screens.

As a result, when including `.png` or `.jpeg` images in mobile application, it is standard practice to include the same image in 3 sizes to account for the different screen resolutions.

[Download](https://www.flaticon.com/free-icon/cactus_874928) the `.svg` of the cactus [](https://www.flaticon.com/free-icon/cactus_874928) image and add it to a new Figma project. Resize the cactus to be 256 x 256.

Now drag to select the whole cactus and on the right menu choose "export".

You should see "1x" and ".png" pre-selected.

Click the + button twice more to get "2x" and "3x".

<img src="/img/cactus-export.png" alt="Cactus Export" />

Hit the "export" button.

This will download a `.zip` archive with 3 files: `cactus.png`, `cactus@2.png` and `cactus@3.png`.

Add the `cactus@2x.png` and `cactus@3x.png` images to your `/assets` directory and refresh your app.

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

## Images from url

In order to render images from a url, let's render this lovely desert for our cactus:

<img src="https://images.unsplash.com/photo-1527261460248-b0abfd14c0da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"/>

Open the `Greeting` component again, and add a constant at the top of the file for the image url:

```js
const networkImageUrl =
  "https://images.unsplash.com/photo-1527261460248-b0abfd14c0da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
```

Now let's add an image component on top of the existing one

```js
<Image source={{ uri: networkImageUrl }} />
```

And... nothing renders! That's because for network images, we also need to explicitly tell it how large to make the image. In out case, let's make it 200pt, and the full width of the screen:

```js
networkImage: {
  height: 200,
  width: Dimensions.get('screen').width,
  marginBottom: 10,
},
```

Voila! Finally, let's move the cactus so that it is inside the image. Unfortunately the `Image` component doesn't allow child components. So in order to do that we must replace it with the `ImageBackground` component.

```jsx title="Greeting.jsx"
import React from "react";
import { StyleSheet, Image, ImageBackground, Dimensions } from "react-native";

const imageSrc = require("~src/assets/cactus.png");
const networkImageUrl =
  "https://images.unsplash.com/photo-1527261460248-b0abfd14c0da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";

export const Greeting = () => {
  return (
    <ImageBackground
      source={{ uri: networkImageUrl }}
      style={styles.networkImage}
    >
      <Image source={imageSrc} style={styles.image} resizeMode="contain" />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    marginBottom: 10,
    height: 100,
  },
  networkImage: {
    height: 200,
    width: Dimensions.get("screen").width,
    marginBottom: 10,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
```

### Note on production usage

For production apps, it is recommended to use [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image) - it's a drop-in replacement for the React Native image component, and it adds a lot of performance optimisations the `Image` and `ImageBackground` component are missing.
