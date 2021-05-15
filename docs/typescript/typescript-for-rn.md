---
sidebar_position: 2
---

# TypeScript for React Native

Let's consider manually typing the following object:

```js
const MyItems: MyItemsType = {
  justString: "Hello",
  justNumber: 5,
  stringArray: ["one", "two", "three"],
  numberArray: [1, 2, 3],
  objectArray: [{ val: 1 }, { val: 2 }, { val: 3 }],
  mixedArray: [1, "hello"],
  funcReturningNothing: () => {},
  funcWithArgs: (arg1, arg2) => arg1 + arg2,
};

type MyItemsType = {
  justString: string,
  justNumber: number,
  stringArray: string[], // or Array<string>
  numberArray: number[], // or Array<number>
  objectArray: { val: number }[], // or Array<{ val: number }>
  mixedArray: (number | string)[], // or Array<number | string>
  funcReturningNothing: () => void,
  funcWithArgs: (arg1: number, arg2: number) => number,
  mightNotExist?: string,
};
```

- you can use `?` to denote an optional type. That means the arg is either as typed or `undefined`
- `void` means that no return type is set
- when the type can one of many things, you can use `|` as an "or" between the options

## Typing React Components

When typing React components, add `React.FC` after the function name to declare that the return type is a function component.

### In JavaScript:

```jsx title="Greeting.jsx"
import React from "react";
import { Text } from "react-native";

export const Greeting = () => {
  return <Text>Hello</Text>;
};
```

### In TypeScript:

```tsx title="Greeting.tsx"
import React from "react";
import { Text } from "react-native";

export const Greeting: React.FC = () => {
  return <Text>Hello</Text>;
};
```

## Typing React Component Props

You can type the properties of a component by passing in the type in `React.FC<{}>`:

```jsx title="User.jsx"
import React from "react";
import { Text } from "react-native";

export const User = ({ firstName, lastName }) => {
  return (
    <Text>
      {firstName} {lastName}
    </Text>
  );
};
```

```tsx title="User.tsx"
import React from "react";
import { Text } from "react-native";

type UserProps = {
  firstName: string;
  lastName: string;
};

export const User: React.FC<UserProps> = ({ firstName, lastName }) => {
  return (
    <Text>
      {firstName} {lastName}
    </Text>
  );
};
```
