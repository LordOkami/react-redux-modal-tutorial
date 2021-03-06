# REACT REDUX MODAL TUTORIAL

- React 16
- Redux
- Sagas
- Webpack 4
- Babel
- React Router
- Redux DevTools
- Eslint
- Jest & Enzyme
- lint-staged
- Husky
- redux-saga-routines
- reselect

### Install depencencies

`yarn`

### Build the production build

`yarn build`

### Run the development server

`yarn start`

### Configure the development environment

The `dev.config.js` file can be used to override default configuration, for example to speed up development build and rebuild:

```javascript
module.exports = {
  devtool: "cheap-module-eval-source-map",
  devServer: {
    // ...
  }
};
```

See also Webpack configuration options for:

- [DevServer](https://webpack.js.org/configuration/dev-server/)
- [Devtool](https://webpack.js.org/configuration/devtool/)
