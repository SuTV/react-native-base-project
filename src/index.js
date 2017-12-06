import React, { Component } from 'react'
import { setJSExceptionHandler } from 'react-native-exception-handler';
import { setNativeExceptionHandler } from 'react-native-exception-handler/index';
import { Provider } from 'react-redux'
import { AppRegistry, Alert, BackAndroid } from 'react-native'
import RNRestart from 'react-native-restart';
import store from '@store'
import Navigator from '@navigation/App'

const errorHandler = (error, isFatal) => {
  // This is your custom global error handler
  // You do stuff like show an error dialog
  // or hit google analytics to track crashes
  // or hit a custom api to inform the dev team.

  if (isFatal) {
    Alert.alert(
        'Unexpected error occurred',
        `Fatal: ${error.name} ${error.message}\n\nWe have reported this to our team. Please close the app and start again!`, // We will need to restart the app.
      [{
        text: 'Restart',
        onPress: () => {
          RNRestart.Restart();
        }
      }, {
        text: 'Close',
        onPress: () => {
          BackAndroid.exitApp();
        }
      }],
      { cancelable: false }
    );
  } else {
    console.log(error); // So that we can see it in the ADB logs in case of Android if needed
  }
};

//Second argument is a boolean with a default value of false if unspecified.
//If set to true the handler to be called in place of RED screen
//in development mode also.
setJSExceptionHandler(errorHandler, false);

setNativeExceptionHandler(true, (exceptionString) => {
  // This is your custom global error handler
  // You do stuff likehit google analytics to track crashes.
  // or hit a custom api to inform the dev team.
  //NOTE: alert or showing any UI change via JS
  //WILL NOT WORK in case of NATIVE ERRORS.
});

export class App extends Component {
  render() {
    return (
      <Provider store={store()}>
        <Navigator />
      </Provider>
    )
  }
}

export default () => {
  AppRegistry.registerComponent('socialStalker', () => App)
}
