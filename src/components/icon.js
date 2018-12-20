import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { STATUS, COLORS } from '../constants';
import { getIcon, getStatusColor } from '../helpers';

const Icon = ({ status }) => {
  const IconComponent = getIcon(status);
  return IconComponent
    ? (<Wrap status={status}><IconComponent color={COLORS.WHITE} /></Wrap>)
    : null;
};

Icon.propTypes = {
  status: PropTypes.oneOf(Object.values(STATUS)),
};

Icon.defaultProps = {
  status: null,
};

export default Icon;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100% 100%;
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  top: -1.25rem;
  margin: auto;
  left: 0;
  right: 0;
  border: 2px solid ${COLORS.WHITE};
  background: ${({ status }) => getStatusColor(status) || COLORS.WHITE};
`;
