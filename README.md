# cardcaptor

## What it is

Simple list/card manager built in Vue.

> Pretty barebones at the moment. Current functionality allows users to:

- Add/remove lists
- Add/remove cards
- move cards between lists
- Sync state to localstorage ([Vuex-persist](https://championswimmer.in/vuex-persist/))

> Future functionality:

- Due dates using [Moment](https://momentjs.com)
  - Including UI for showing overdue, due soon etc
- Ability to rename cards + lists
- Ability to add descriptions/notes to cards
- Ability to drag and drop cards
  - potentially using [vue-smooth-dnd](https://github.com/kutlugsahin/vue-smooth-dnd)
- Actually put effort into making the UI nice to use
- Add more comprehensive test, including testing the currently untested store

## How it's built

- Application
  - [Vue](https://vuejs.org)
    - Frontend framework
  - [Vuex](https://vuex.vuejs.org/)
    - State manager
  - [Vue CLI](https://cli.vuejs.org/)
    - Build tool
  - [Bulma](https://bulma.io)
    - CSS library

- Testing
  - [Vue Test Utils](https://vue-test-utils.vuejs.org/)
    - Helper library for testing Vue components
  - [Chai](http://chaijs.com)
    - Assertion library
  - [Mocha](https://mochajs.org/)
    - Testrunner

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

## Folder Structure

```
├── README.md
├── babel.config.js
├── package.json
├── postcss.config.js
├── public - files which don't need transformation
├── src
│   ├── App.vue - Vue entrypoint
│   ├── assets
│   │   └── css
│   │       └── cardcaptor.scss - 'Global' scss stylesheets
│   ├── components
│   │   └── [component].vue
│   ├── main.js - JS entrypoint
│   └── store
│       ├── actions.js - store actions (none currently)
│       ├── mutations.js - store mutations 
│       └── store.js - main store, configures the initial state
├── tests
│   ├── store.config.js
│   └── unit
│       └── [component].spec.js
```
