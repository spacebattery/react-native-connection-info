# react-native-connection-info

[![travis build](https://img.shields.io/travis/zaromev/react-native-connection-info.svg?style=flat)](https://travis-ci.org/zaromev/react-native-connection-info)
[![version](https://img.shields.io/npm/v/react-native-connection-info.svg?style=flat)](https://www.npmjs.com/package/react-native-connection-info)
[![downloads](https://img.shields.io/npm/dm/react-native-connection-info.svg?style=flat)](https://npm-stat.com/charts.html?package=react-native-connection-info&from=2016-08-22)
[![MIT license](https://img.shields.io/npm/l/react-native-connection-info.svg?style=flat)](http://opensource.org/licenses/MIT)
[![github](https://img.shields.io/github/stars/zaromev/react-native-connection-info.svg?style=social&label=Star)](https://github.com/zaromev/react-native-connection-info)

Higher order component for React Native to detect network connection state.

Use `withConnection` to inject the `connection` object which _currently_ has the [`isConnected`](https://facebook.github.io/react-native/docs/netinfo.html#isconnected) property.
This is a boolean value that indicates internet connectivity status (see the `NetInfo` [documentation](https://facebook.github.io/react-native/docs/netinfo.html#isconnected) on `isConnected`).

## Usage

### Installation

```
npm install --save react-native-connection-info
```

#### Android
Make sure to also [include permissions](https://facebook.github.io/react-native/docs/netinfo.html#android) on Android. Add the following line to your `AndroidManifest.xml`

```
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

### Examples

```
import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { withConnection, connectionShape } from 'react-native-connection-info';

const MyComponent = ({ connection }) => (
  <View>
    <Text
      style={{ color: connection.isConnected ? 'lightskyblue' : 'lightcoral' }}
    >
      {connection.isConnected ? 'Connected' : 'Offline'}
    </Text>
  </View>
)

MyComponent.propTypes = {
  connection: connectionShape,
};

export default withConnection(MyComponent);
```

### Redux Wrapped Instance

Usage with redux is supported by default. 

This section is **only** used if you need to reference the wrapped instance using [`getWrappedInstance()`](https://github.com/reactjs/react-redux/blob/master/docs/api.md#getwrappedinstance-reactcomponent) when using `react-redux`'s `connect()`. This component uses `{ withRef: true }`.

#### Usage

```
// instead of importing from 'react-native-connection-info'
// import { withConnection, connectionShape } from 'react-native-connection-info';
// just add /redux
import { withConnection, connectionShape } from 'react-native-connection-info/redux';
```

The rest is the same as in the first [example](#examples).
