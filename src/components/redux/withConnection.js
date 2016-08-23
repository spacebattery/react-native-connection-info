import React from 'react';
import { NetInfo } from 'react-native';
import { connect } from 'react-redux';
import { connectionShape } from '../../shapes';

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
      'change',
      this.handleIsConnected
    );
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      'change',
      this.handleIsConnected
    );
  }

  getWrappedInstance() {
    return this.wrappedInstance;
  }

  handleIsConnected(isConnected) {
    this.setState({ isConnected });
  }

  render() {
    return (
      <ComposedComponent
        ref={c => { this.wrappedInstance = c; }}
        {...this.props}
        connection={{ ...this.state }}
      />
    );
  }
};

withConnection.propTypes = {
  connection: connectionShape,
};

export default ComposedComponent => connect(
  null, null, null, { withRef: true },
)(withConnection(ComposedComponent));
