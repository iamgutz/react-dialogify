import React from 'react';
import PropTypes from 'prop-types';
import Overlay from './overlay';
import Box from './box';

const Modal = ({ children }) => (
  <Overlay>
    <Box>{children}</Box>
  </Overlay>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
