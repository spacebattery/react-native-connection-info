import React from 'react';
import { NetInfo } from 'react-native';
import { connectionShape } from '../shapes';

const withConnection = ComposedComponent => class extends React.Component {
  constructor() {
    super();
    this.state = {
      isConnected: false,
    };
    this.handleIsConnected = this.handleIsConnected.bind(this);
  }

  componentDidMount() {
    NetInfo.isConnected.fetch().then(isConnected => {
      this.handleIsConnected(isConnected);
    });
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      this.handleIsConnected
    );
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      this.handleIsConnected
    );
  }

  handleIsConnected(isConnected) {
    this.setState({ isConnected });
  }

  render() {
    return (
      <ComposedComponent {...this.props} connection={{ ...this.state }} />
    );
  }
};

withConnection.propTypes = {
  connection: connectionShape,
};

export default withConnection;
