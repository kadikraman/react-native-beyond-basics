---
sidebar_position: 12
---

# App Icons

An App Icon is a unique image added to every mobile application. It's displayed on the App/Play store as well as the home screen.

App icons should be as simple as possible and contain no text so they would look as good as possible even on small screens.

## Design you app icon

Feel free to skip step and move on to "Add to iOS" or "Add to Android" if you're not interested in designing your own App Icon.

To design your app icon, open [Figma](https://www.figma.com/) ad create a new project.

First, use the Frame tool (third from the top) create a new Frame that's exactly `1024 x 1024px`.

Next, choose an image for your app icon. I have chosen this ["attitude" icon](https://www.flaticon.com/free-icon/attitude_3174845) from FlatIcon.

Drag an drop your icon into Figma. Ensure it's centered within the square, and resize it so that it's big enough (but does not fill the whole square). I ended up with `700 x 700px`.

Next, choose a color for your background. I kept mine white with `#ffffff`.

When you're happy with your icon, select the whole frame from the left and hit "export" and export as `png`.

## Add to iOS

To add an app icon to iOS, you need a `1024 x 1024px` image. Feel free to create your own, or use this:

<img src="/img/app-icon.png" width="200" />

Next, open your project in Xcode, and on the file tree on the left navigate to folder -> MoodTracker -> MoodTracker -> Images.scassets -> AppIcon

<img src="/img/xcode-app-icon.png" width="1000" />

You can see that the App Icon placeholder is already there and it also shows you what size icons are required.

We could of course manually export our icon using all these sizes, but a faster way is to use a tool for it.

Download [Iconizer](https://raphaelhanneken.com/iconizer/) and export the app icon for iPhone:

<img src="/img/iconizer.png" width="600" />

When Prompted for a name, call the icon set `AppIcon`.

Now go back to Xcode and delete the AppIcon template by clicking on it and clicking the minus button below.

Finally, drag and drop the whole AppIcon folder to the Images section in XCode.

<img src="/img/xcode-app-icon-done.png" width="1000" />

Note you can also drag and drop the images manually if need be.

Now, close your iOS simulator completely by right clicking on the simulator icon on your menu bar and choosing Quit. The ensures that any old icons are not cached on the simulator.

Finally, rebuild the app from XCode.

<img src="/img/app-icon-ios.png" alt="App icon iOS" width="500px"/>

## Add to Android

For Android, we only need the image icon. If you have designed your own icon, export the image separately without the background. Otherwise feel free to use this:

<img src="/img/attitude.png" width="200" />

Open Android Studio and find app -> res -> mipmap -> ic_launcher

Notice that similarly to iOS, we have icons for various sizes here. To replace this icon with our own, we can use Android Asset Studio.

Right click on the "res" directory and choose new -> "image asset".

This will open a window for configuring new image assets.

<img src="/img/android-app-icon.png" width="1000" />

Let's overwrite the existing app icon. Keep the Icon Type as "Launcher Icons" and keep the icon name the same to overwrite the existing app icon.

In the Foreground Layer tab, select the asset patch to be the icon we've just downloaded.

In the Scaling section, select "Yes" under Trim, and resize the icon to fit comfortable within the icon area.

In the "Background Layer" tab, under "Source Asset", choose "Color" for the "Asset Type" and set the background to white.

You should end up with something like this:

<img src="/img/android-app-icon-done.png" width="1000" />

Hit next -> finish to create the icons.

Finally, rebuild the app from Android Studio.

<img src="/img/app-icon-android.png" alt="App icon Android" width="500px"/>
