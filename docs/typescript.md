---
sidebar_position: 2
---

# Into to TypeScript

You would have noticed that when creating the new project, we used the React Native TypeScript template. That's because we will indeed be building our app in TypeScript.

https://www.typescriptlang.org/play

## What is TypeScript

[TypeScript](https://www.typescriptlang.org/) is essentially "typed JavaScript". It is a superset of JavaScript, which means that all valid JavaScript code is also valid TypeScript code. TypeScript files in React Native have `.ts` and `.tsx` file extensions (instead of `.js` and `.jsx`).

TypeScript has two main usages:

### 1. Static Code Analysis

It analyses your existing code and points out any incorrect usages when possible.

For example, consider the following code:

```ts
const myNum = 5;
myNum.split("");
```

If you try this in a TypeScript file in your code editor, you should get a red underline under `split` with the following message:

> Property 'split' does not exist on type '5'.ts(2339)

TypeScript has noticed that `myNum` is a `number`, but the `split` method can only be called on `string` types which will most certainly cause an error if we try to run this code.

### 2. Expand JavaScript with Custom Types

You can also declare types for your code to communicate intent and stay type safe. For example, consider this functions that is designed for adding two numbers together:

```js title="add.js"
const add = (a, b) => a + b;
```

Since JavaScript is not type safe, there is really nothing preventing (or even warning you) from passing in strings, objects or even functions, which could cause unintended side-effects.

In typescript, we can communicate the intent of this functions by declaring types for the arguments and the return type:

```ts title="add.ts"
const add = (a: number, b: number): number => a + b;
```

Now if you tried to call the `add` function with `add("hello", "world")`, you would get a warning in your code editor.

## Checking for type errors

TypeScript is the most useful during development if you use an IDE that supports just-in-time type-checking.

I would recommend use [Visual Studio Code](https://code.visualstudio.com/) which comes with TypeScript support out of the box. VSCode and TypeScript are both built by Microsoft so they generally work very well together.

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
