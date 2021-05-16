---
sidebar_position: 6
---

# Navigation

You'll notice that this project template comes with some navigation already set up using [React Navigation v6](https://reactnavigation.org/docs/6.x/getting-started/).

This looks kind of complicated at first glance, but it is set to mirror the "usual" navigation you might end up with on a mobile app.

Here is the Navigation layout as a diagram:

<img src="/img/navigation.png" alt="Navigation" />

## Bottom Tabs

The bottom tabs we're used to seeing on mobile apps is built using the [bottom-tab-navigator](https://reactnavigation.org/docs/6.x/bottom-tab-navigator). This consists of 1 or more bottom tabs which can each contain wither a single screen, or a navigator with multiple screens.

In our example, we have two tabs: the **HomeTab** and the **OtherTab**.

## Stack Navigator

You'll notice that in the **OtherTab** we only have a single page to display whereas in the **HomeTab** we have a stack navigator with **FirstPage** and **SecondPage**. We can turn any page into a nested page by making it into a Stack navigator which is the case with the Home Tab.

## Full Screen Modals

Notice how pages within a navigator only stay within that area on the screen. For example when you navigate to the **SecondPage** on the **HomeTab**, the bottom navigation bar stays visible and only the screen content changes.

In order to display a full screen modal that gets rendered _above_ the bottom navigation, it needs to be configured adjacent to the **BottomTabs** navigator.
