/**
 * @format
 */

import 'expo-dev-client';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
console.log(appName);

AppRegistry.registerComponent('main', () => App);
