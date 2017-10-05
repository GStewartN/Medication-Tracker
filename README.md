# Medication Tracker

Epicodus-React, Independent Capstone Project, 10.05.2017

## Description

This app is a simple medication tracker. A user can enter medications to track when last dose was taken.

## Prerequisites

You will need the following properly installed on your computer.

* [Node.js](https://nodejs.org/) (with NPM)

## Configuration/Dependencies

* react
* react-dom
* react-bootstrap
* react-hot-loader
* react-redux
* react-redux-firebase
* react-router-dom
* webpack-dev-server
* webpack
* html-webpack-plugin
* babel-loader
* babel-core
* babel-preset-react
* babel-preset-es2015
* moment
* prop-types
* jest
* babel-jest
* css-loader
* style-loader


## Setup/Installation

* `$ git clone <repository-url>` this repository
* `$ cd <repository-name>`
* `$ npm install`

You will need to create an apiKeys.js file within your constants folder. Add the app to [Firebase](https://firebase.google.com/) and copy all the information between the config curly braces. In your apiKeys.js file, make a constant called firebaseCredentials, paste the firebase info between the curly braces, and export the file.

You should now be able to run the dev server without errors.

## Development Server

* `$ npm run start`

The app can be viewed in your browser at localhost:8080

## Testing

* `$ jest`

### License

MIT License

Copyright &copy; 2017 Nathan Stewart

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
