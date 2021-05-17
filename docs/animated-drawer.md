---
sidebar_position: 10
---

# Animated Drawer

In our app, the user is able to record their current mood multiple times a day. Let's group historic recordings by day.

A tip: in order to create "old" data, set your computer clock in the past and add some moods.

Install lodash and date-fns.

Add a drawer component

```js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type DrawerProps = {
  title: string,
};

export const Drawer: React.FC<DrawerProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => setIsOpen((val) => !val)}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      {isOpen ? children : null}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
  },
});
```

<img src="/img/layout-animation.png" alt="Layout Animation with Drawers" width="500px"/>
