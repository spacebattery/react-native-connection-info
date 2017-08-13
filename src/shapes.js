import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const connectionShape = PropTypes.shape({
  isConnected: PropTypes.bool.isRequired,
});
