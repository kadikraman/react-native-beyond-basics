---
sidebar_position: 5
---

# New Project

For this project, we'll be using plain React Native without Expo. This means that if you didn't previously, you will now need to make sure your development environment is set up for local development.

Check out the [React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup) page in the React Native docs and ensure you have followed the setup instructions up to (but not including "Creating a new application"),

## Creating a new application

To create a new React Native project, open your terminal and run:

```sh
npx react-native init MoodTracker --template https://github.com/kadikraman/react-native-template.git
```

This will create a new react native project called "MoodTracker" using a react native typescript template.

Now before you do anything else, navigate into the `MoodTracker` repository, initialize a new Git repository and commit the initial template:

```sh
cd MoodTracker
git init
git branch -m main
git add --all
git commit -m "Initial commit"
```

It is generally a good practice to do this even if you never plan to share your project with anyone. Aim to commit your changes whenever you reach a point where you're happy with your progress. This ensures you can easily see and revert any new changes and you'll always have a solid point to go back to if things get lopsided.

Note that it is common to use a Git GUI as in addition to the cli is common practice. This makes tracking changes a whole lot easier. Two of the most popular Git GUIs out there at the time of writing are [SourceTree](https://www.sourcetreeapp.com/) and [Fork](https://git-fork.com/).

## Running the iOS app (via Xcode)

While you can run your app from the cli, it is often better to build using Xcode as you get more control over the build. It is also very handy when changing native code or debugging build errors.

### Install dependencies

First thing we do when you open a new project is install the JavaScript dependencies:

```sh
yarn
```

Note: Because our project was created from a template, the dependencies are already installed.

For iOS, the build dependencies are managed using [CocoaPods](https://cocoapods.org/) (or "Pods" for short). You can think of this as the iOS version of `npm`. Now because we created our new app from template, the dependencies are already installed. However if you cloned a new project, you'd need to also:

Install iOS native dependencies:

```sh
cd ios
pod install
```

The Pods dependencies work similarly to JavaScript dependencies that you are already familiar with. In the case of JavaScript dependencies, we have:

- `package.json` - list of dependencies
- `yarn.lock` - an auto-generated file that records exact versions of your dependencies
- `node_modules` - all the project dependencies (not checked into .git)

CocoaPods work on a very similar way:

- `ios/Podfile` - list of dependencies
- `ios/Podfile.lock` - an auto-generated file that records exact versions of your dependencies
- `ios/Pods` - all the project dependencies (not checked into .git)

So whenever you add a new dependency that includes native code, you will often see that you are asked to do a

```sh
yarn install some-dependency
```

As well as

```sh
cd ios
pod install
```

To install the native module.

### Start packager

First open the terminal and start the metro bundler:

```sh
yarn start
```

Technically this is optional - if you don't start the do this, react native will open a new terminal window and do it for you. I prefer the control of doing this manually.

### Run the app via Xcode

Open Xcode, choose "Open a project or file" and open the `ios/MoodTracker.xcworkspace` file (note that it is _very_ important that you open the `.xcworkspace` file and not the `.xcodeproj` file! Although both will open, the project file does not recognize Pods and so you won't be able to run your app). You can also select the whole `ios` directory and Xcode will automatically open the workspace file.

Now at the very top of the `cli` you will see `MoodTracker > [some device name]`. Click on the "MoodTracker" to choose which simulator to run the project on. After you've chosen your preferred target, click on the "Play" icon to run your app. This will take a little while the first time.

<img src="/img/new-project-ios.png" alt="New Project iOS" width="500px"/>

## Running the Android app (via Android Studio)

As with the iOS app, it's possible to do this via the cli, but let's look how to do this using Android Studio.

### Install dependencies

First thing we do when you open a new project is install the JavaScript dependencies:

```sh
yarn
```

Note: Because our project was created from a template, the dependencies are already installed.

The Android build and dependencies are managed using [Gradle](https://gradle.org/) and they are installed automatically, so there is no equivalent `yarn install` / `pod install` step for Android.

### Start packager

First open the terminal and start the metro bundler:

```sh
yarn start
```

Technically this is optional - if you don't start the do this, react native will open a new terminal window and do it for you. I prefer the control of doing this manually.

### Run the App via Android Studio

Open Android Studio, choose "Open Existing project" and open the `/android` folder.

If you haven't configured a virtual device yet, you can do so now: click on the ADV Manager icon at the top of the IDE (it's a prone with the Android logo on it) and choose "Create Virtual Device". From here you can configure the exact device you want to use.

Now choose which device you want to run your app on at the top of the IDE, to the left of the "play" icon. Once you're happy, click on the "play" icon to build the project.

<img src="/img/new-project-android.png" alt="New Project Android" width="500px"/>
