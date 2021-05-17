---
sidebar_position: 17
---

# Custom fonts

Most apps you might build for work or for client will use a custom font instead of the default one. Let's see how to add a custom font to your app.

For free fonts, check out [Google Fonts](https://fonts.google.com/).

I'm going to choose [Indie Flower](https://fonts.google.com/specimen/Indie+Flower#standard-styles)

Once you've chosen your font, download it and unzip it.

In your `/assets` directory, create a new directory for `/fonts` and add your font file(s) in there.

Create a new file at at the root of your project and call it `react-native.config.js`.

Inside it, add a link to the fonts directory.

```js
module.exports = {
  assets: ["./src/assets/fonts"],
};
```

Now we'll need to link the project with

```sh
npx react-native link
```

If the linking has worked correctly, then you should be able to see the font files being copied over to both iOS and Android directories.

Finally, rebuild the app from XCode / Android Studio.

## Using custom fonts

To use the new FontFamily, pass it in as a style on a Text component, e.g.

```js
fontFamily: 'IndieFlower',
```
