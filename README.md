# react-native-connection-info
Higher order component for React Native to detect network connection state.

Use `withConnection` to inject the `connection` object which _currently_ has the [`isConnected`](https://facebook.github.io/react-native/docs/netinfo.html#isconnected) property.
This is a boolean value that indicates internet connectivity status (see the `NetInfo` [documentation](https://facebook.github.io/react-native/docs/netinfo.html#isconnected) on `isConnected`).

## Usage

### Installation

```
npm install --save react-native-connection-info
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
