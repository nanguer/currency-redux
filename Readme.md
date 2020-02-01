React Currency App
+++++++++++++++++++++

This app was bootstrapped using a self-developed Redux boilerplate.

It uses Redux to dispatch actions and handle the data that passes from one list to the other.

To launch the application:

- Clone the repository using \$ git clone https://github.com/nanguer/currency-redux.git

- Run \$ npm install to install all required dependencies.

- To run the Webpack development server, run \$ npm start, and go to localhost:3000.

- To run the tests suites, run \$ npm run test

P.S. If you have Redux Chrome extension installed, you can uncomment the 2 commented lines in the "store.js" file in the root, adding a comma after "applyMiddleware(thunk)", to make it work...
