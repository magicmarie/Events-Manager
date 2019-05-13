[![Maintainability](https://api.codeclimate.com/v1/badges/9212a76b62515c68fdd8/maintainability)](https://codeclimate.com/github/magicmarie/Events-Manager/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/9212a76b62515c68fdd8/test_coverage)](https://codeclimate.com/github/magicmarie/Events-Manager/test_coverage)

# Events Manager

An applcaiton that allows you to create, plan, organise and execute your events once approved by the admin.
This project acts as my learning program for front-end application using React and Redux, along with several other tools and technologies.



##### What's Being Used?

* [React](http://facebook.github.io/react/) for managing the presentation logic of your application.
* [Redux](http://redux.js.org/) for generating and managing your state model.
* [Babel](https://babeljs.io/) for compiling ES2015+ down to ES5 compatible code.
* [WebPack](https://webpack.js.org/) for bundling code down to a single file and enabling hot module reloading.
* [Jest](https://jestjs.io/) + [Enzyme](https://airbnb.io/enzyme/) for testing.


## Getting Started
In order to get started, you'll need to do a few things first.

1. Install all of the `node_modules` required for the package. Depending on your computer's configuration, you may need to prefix this command with a `sudo`.
```
npm install
```
or
```
sudo npm install
```

2. Run the start command to get the project off the ground. This command will build the JS files using the Webpack `dev-server`.

```
npm start
```

3. Head over to [http://localhost:8080](http://localhost:8080) to see the app live!

4. Run the test command to run the project's tests.

```
npm test
```


# File Structure

## src/

The client folder houses the client application for this project.  This is where the client-side Javascript components (and their directly accompanying styles) live.

### Components/

### Containers/

### styles/

### js/

##### Reducers

The Redux reducers that will generate the state model.

##### Store

This is a state container for JavaScript apps, often called a Redux store. It stores the whole state of the app in an immutable object tree.

## tests/

The unit and integration tests for components and reducers.


