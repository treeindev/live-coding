# React Hooks

- Functions that let you “hook into” React state and lifecycle features from function components. 
- Hooks facilitate the access and management of React’s: state, props, context and lifecycles. 
- An API to React’s features that is easy to access.


## Hooks Rules

- React Hooks have to be called at a top level. That means before any data manipulation, function declaration or early return.
- React Hooks can only be used in a React function. Trying to call React Hooks from a plain JavaScript function will result in errors. React Hooks must be called within a react functional component or a custom Hook.


## Basic Hooks
### useState
- Allows functional component to set a local state. 
- State will be preserved between component renders.
- The value can be accessed from component's functions or JSX template.
- Hook accepts a single default parameter. 
- The return of the useState Hook is pair: state reference and a function to update.
- Difference between class components: When updating state, useState Hook does not override the full state of a component. It only affects individual properties of the state.
- There can be multiple useState hooks in a component.
- The hook works perfectly with the destructuring assignment syntax. 

```javascript
const [active, setActive] = useState(true);
const [name, setName] = useState("user");
...
setActive(false);
```


### useEffect
- Run logic after the component has rendered: handling external API calls, data fetching, subscriptions or DOM modifications after the initial load.
- React treads these executions as effects and exposes the Effect Hook to manage it.
- They have access to the component’s state and props. 
- When a component re-renders, React will run any Effect Hook defined within it.
- Effects can be set a scope to limit the callback execution.
- Return functions are exposed to manage unsubscriptions and data clean up.
- There can be multiple Effect Hooks inside a component.


```javascript
useEffect( () => {
   // Perform action when active value changes.
}, [active]);
```



# Running the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).