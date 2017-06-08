# README #
This repo is intended to be used as a template for developing ReactJS projects. This document will outline what technologies were used and why, as well as give directions on how to get started with the project.


## Basic Tech Stack ##
React is a JavaScript library for building user interfaces, this needs the react-dom package to enable working with the DOM, and the react-router package as a routing library for React.


### Webpack & Babel ###
This repo is implemented using webpack and babel. Webpack is a module bundler which takes modules with dependencies and generates static assets representing those modules. Babel is used to transpile ES6 code into readable vanilla ES5 with source maps

### Testing ###
Mocha is setup as the JavaScript testing framework for this repo, test files can be placed in the 'tests' folder, or placed in the relevant component folder as preferred. All test files with the extension .spec.js (for instance homepage.spec.js) are run automatically when ```npm start``` is run, and can also be run with the command ```npm test```.  

ES Linting is also implemented to reveal errors in JavaScript code and sure best practices. It may be useful to download an ESLint plugin for your IDE.


## Getting Started
Clone the ReactJS Template repo, replacing 'projectname' with your project name:
```git clone git@github.com:daraclare/react-node-template.git projectname```
```cd projectname```

Remove the existing GIT files:
```rm -rf .git```  // non-Windows
```rd .git /S/Q``` // windows

Initialise another GIT repo locally:
```git init```
```git add .```
```git commit -m "Initial commit"```

Now create a repo and connect this to your local files:
```git remote add origin <repo-address>```
```git push -u origin master```

Install all node modules in the package.json file:
```npm install```

Start the application, this will enable hot-reloading, linting and run tests:
```npm start```

For production, run the build to transpile code to 'dist' folder. This runs the app in localhost and ensure app is running correctly using the 'dist' folder files:
```npm run build```

## JSON Package File for NPM ##
Below is a list of each entry in the package.json file and the explanation for each entry:

### Scripts ###
Scripts are used to speed up the restarting of the application. By running 'npm start' the developer can start the lint watch to watch for errors in the 'src' folder, run the tests in the 'tests' folders, open the browser at localhost:{portnumber} and watch for changes, as well as enable hot-reloading. The instructions for express are loaded from the files in the 'tools' folder.

The production build is managed by the prebuild, build and postbuild scripts. Prebuild cleans out the existing code by deleting the 'dist' folder and making a new directory. The build command builds the HTML, creates the bundle.js file, and extracts the CSS into a separate files. These are all found in the 'dist' folder. Postbuild will run after and run the server file so the results can be viewed.

### Babel ###
Babel is used to transpile ES6 code into readable vanilla ES5 with source maps.  
**babel-cli:** Used to compile files from the command line.  
**babel-core:** The core of the Babel compiler  
**babel-loader:** This package allows transpiling JavaScript files using Babel and webpack.  
**babel-plugin-react-display-name:** Add displayName to React.createClass calls.  
**babel-polyfill:** Provides polyfills necessary for a full ES2015+ environment, such as Promises and Object.assign  
**babel-preset-es2015:** Babel preset for all es2015 plugins, for compiling ES2015(ES6) to ES5  
**babel-preset-react:** Babel preset for all React plugins.  
**babel-preset-react-hmre:** Babel preset for React HMR and Error Catching (A React Transform that enables hot reloading React classes using Hot Module Replacement API)   
**babel-register:** One of the ways you can use Babel is through the require hook. The require hook will bind itself to node’s require and automatically compile files on the fly.

### Remaining Entries ###
**compression:** Node.js compression middleware. Returns the compression middleware using the given options. The middleware will attempt to compress response bodies for all request that traverse through the middleware, based on the given options.  
**cross-env:** This micro-lib allows you to provide a script which sets an environment using unix style and have it work on windows too  
**css-loader:** css loader module for webpack  
**enzyme:** Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.  
**eslint:** ES Linting Core to reveal errors in JavaScript code and sure best practices  
**eslint-plugin-import:** This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names. All the goodness that the ES2015+ static module syntax intends to provide, marked up in your editor.  
**eslint-plugin-react:** React specific linting rules for ESLint  
**eslint-watch:** Run eslint with watch mode  
**eventsource-polyfill:** Polyfill for EventSource  
**expect:** improves assertions when testing  
**express:** a Node.js web server framework  
**extract-text-webpack-plugin:** Extract text from bundle into a file, makes it possible to generate a native css output file.  
**file-loader:** A file loader module for webpack  
**image-webpack-loader:** Image loader module for webpack  
**jsdom:** A JavaScript implementation of the DOM and HTML standards, jsdom will inject document, window and other DOM API into your Node.js environment. Useful for running, in Node.js, tests that are made for browsers.  
**mocha:** JavaScript Testing  
**nock:** Nock is an HTTP mocking and expectations library for Node.js, Nock can be used to test modules that perform HTTP requests in isolation.  
**npm-run-all:** A CLI tool to run multiple npm-scripts in parallel or sequential.  
**nsp:** Node Security Platform command-line tool which helps to identify known vulnerabilities in your project
**open:** open a file or url in the user's preferred application  
**react-addons-test-utils:** ReactTestUtils makes it easy to test React components in the testing framework of your choice.  
**react:** React is a JavaScript library for building user interfaces.  
**react-dom:** React package for working with the DOM.  
**react-router:** A complete routing library for React  
**rim-raf:** A cross platform way to remove folders forcefully, used in the building and destruction of the 'dist' folder  
**style-loader:** style loader module for webpack  
**url-loader:** The url loader works like the file loader, but can return a Data Url if the file is smaller than a limit.  
**webpack:** Webpack is a module bundler. Webpack takes modules with dependencies and generates static assets representing those modules.  
**webpack-dev-middleware:** It's a simple wrapper middleware for webpack. It serves the files emitted from webpack over a connect server.  
**webpack-hot-middleware:** Webpack hot reloading using only webpack-dev-middleware. This allows you to add hot reloading into an existing server without webpack-dev-server.
