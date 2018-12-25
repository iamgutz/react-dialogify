# React Dialogify
[![Version](https://img.shields.io/npm/v/react-dialogify.svg?style=for-the-badge&logo=appveyor)]()
[![React](https://img.shields.io/npm/dependency-version/react-dialogify/react.svg?style=for-the-badge&logo=appveyor)]()
[![Downloads](https://img.shields.io/npm/dw/react-dialogify.svg?style=for-the-badge&logo=appveyor)]()
[![License](https://img.shields.io/github/license/iamgutz/react-dialogify.svg?style=for-the-badge&logo=appveyor)]()

React-Dialogify allows you to add dialogs to your app, fast and easy.

## Features
* Super fast setup - Plug & Play.
* Customizable - Use with predefined styles or use your own.
* Programmatically controlled - With a couple of functions you can make it show/hide from anywhere in your app.
* No Redux/State required - Don't need to set Actions or States in your App to control it.

## Installation
```
$ yarn add react-dialogify
or
$ npm install --save react-dialogify
```

## Usage

Add the `DialogContainer` at the root level of your App, or as children of any specific container in your App. But remember to **add it only once in your App**.

```
import React, { Component } from 'react';
import { DialogContainer, dialog } from 'react-dialogify';

class App extends Component {
  showDialog = () => {
    dialog.show({
        title: 'Hello World!'
        text: 'This is your text in the dialog'
    });
  }

  render() {
    return (
        <div>
          <button onClick={this.showDialog}> Show Dialog </button>
          <DialogContainer />
        </div>
    );
  }
}
```
