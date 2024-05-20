---
publishDate: 'May 16 2024'
title: 'Unleashing the Power of the React Compiler'
description: 'This blog post explores the recently open-sourced React Compiler, discussing its functionality, optimization capabilities, and integration with the React ecosystem, and how to use it to enhance the performance of your React applications.'
image: '~/assets/images/unleashing-the-react-compiler/cover.jpg'
tags: [react, compiler, javascript, programming, web, ui]
---

Facebook has recently open-sourced the React Compiler with the public release of it's [Babel](https://www.npmjs.com/package/babel-plugin-react-compiler) and [ESLint](https://www.npmjs.com/package/eslint-plugin-react-compiler) plugins. We can explore the changes from the pull request that merges the compiler to official React library codebase [here](https://github.com/facebook/react/pull/29061).

Many of us are curious about how this React compiler works and integrates with the React ecosystem. In this blog, we will discuss what the React Compiler is and how it functions.

## What is React Compiler

The React Compiler is a new build-time tool in the React ecosystem that automatically optimizes your React app to improve its performance, especially on updates (re-renders). It works with existing JavaScript (and TypeScript) and understands the [Rules of React](https://react.dev/reference/rules). If your app adheres to these rules, you generally won't need to modify any extra code to use it after configuring the React compiler.

Don’t worry, the React compiler is built with Rust. Having an efficient and performant compiler built with Rust has added more power to React.

## How does the Compiler optimize your React app?

The React compiler replaces the useMemo, useCallback, and React.memo functions by offering out-of-the-box optimization. Primarily, the React compiler does the following:

1. Automatically memoizes your code where needed for expensive calculations and unnecessary re-renders.
2. When compiling for performance, if the compiler detects a violation of the Rules of React, it omits that part of the code and proceeds.

## How does the Rust-based React Compiler integrate with React?

The introduction of Rust to compile React, marks an important milestone with the native support of Rust’s powerful performance for React. 

Like Babel, which React uses to transpile JSX code, the React compiler is a Babel plugin—`babel-plugin-react-compiler`—that transpiles raw React code into optimized code.

For static analysis of our code, we can use the `eslint-plugin-react-compiler` package, which helps analyze React Compiler-specific rules.

## How can I access the React Compiler?

Refer to the [official guide](https://react.dev/learn/react-compiler#usage-with-babel) for getting started with the React Compiler in different bundler settings.

As of now, it is only supported with React `19-rc-***` versions.

## How it works

Let's have a hands on with a [demo project](https://github.com/subashcs/react-compiler-demo). This project is setup with Vite + React. 

### Let’s delve into the details

In the project root directory, we can see `vite.config.js` configured with React Compiler configurations.

To demonstrate the working of the React Compiler, we have the React Compiler currently configured in  “annotation” mode for convenience.

My `vite.config.js` looks like this:

```jsx
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const ReactCompilerConfig = {
  compilationMode: "annotation"
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
      },
    }),
  ],
});
```

In the vite configuration, I have not specified any directories so the compiler won’t automatically compile any of the files. However, I have specified in files whether to compile that specific file or not using the “use memo” string.

```jsx
function App() {
  // "use memo";  

  // Info: with the above string react compiler automatically memoizes callbacks and data
  // Experiment: remove the use memo string above and 
  // notice the how react re renders the Count component 
  // on count change
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((count) => count + 1);
  };
  console.log("compiler check: app component called");

  return (
    <>
      <p>count is {count}</p>
      <Count onClick={handleClick} />
    </>
  );
}
```

In the App component, uncomment the “use memo” string to see how React prevents the re-render of the `Count` component on `count` variable change.

It seems like advanced memoization is not happening currently.  
Such as: When `theme` is changed in the `TodoMain` Component with the `TodoList` component as a child,  the `filterTodos` function gets called although the theme prop has nothing to do with `filterTodos` function.

```jsx
import { filterTodos } from '../utils'

export default function TodoList({ todos, theme, tab }) {
  "use memo"

  // const visibleTodos = useMemo(
  //   () => filterTodos(todos, tab),
  //   [todos, tab]
  // );

  // uncomment above and comment the following line to see  
  // how it should actually work by default
  const visibleTodos = filterTodos(todos, tab);
  console.log("compiler check: todolist component rendered")

  return (
    <div className={theme}>
      <p><b>Note: <code>filterTodos</code> is artificially slowed down!</b></p>
      <ul>
        {visibleTodos.map(todo => {
          return (
          <li key={todo.id}>
            {todo.completed ?
              <s>{todo.text}</s> :
              todo.text
            }
          </li>
        )})}
      </ul>
    </div>
  );
}

```

*This might be a because of the violation of the Rules of React or a lacking in the compiler itself.  your feedback on this is much appreciated.*

This is just scratching the surface. You can visit the React Compiler playground to really see how its working or compiling your code. 

We can expect even more enhancements to the compiler in the future as we continue to prioritize preserving the declarative nature of React coding. Such as: re-render optimizations on context values updates and many more. 

Thanks for sticking around until the end! Stay tuned for more updates by keeping in sync. Your support and feedback means a lot. Until next time! 😁

## References

1. [React Compiler Discussions] (https://github.com/reactwg/react-compiler/discussions/)
2. [React Compiler Playground] (https://playground.react.dev)
3. [React Conf 2024] (https://www.youtube.com/watch?v=T8TZQ6k4SLE) 
