---
sidebar_position: 8
---

# React Context

Next up, we'd like to input the data on the first screen, but show the past moods on the second screen.

```js
// App.provider.tsx
import React from "react";

const AppContext = React.createContext({});

export const AppProvider: React.FC = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
```

## Commit

**0c534f509a6ea8beaf2f903238ba97116718aadc**

<img src="/img/react-context-1.png" alt="React context (Other)" width="500" />
<img src="/img/react-context-2.png" alt="React context (home)" width="500" />
