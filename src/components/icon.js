import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TYPES, COLORS } from '../constants';
import { getIcon, getTypeColor } from '../helpers';

const Icon = ({ type }) => {
  const IconComponent = getIcon(type);
  return IconComponent
    ? (<Wrap type={type}><IconComponent color={COLORS.WHITE} /></Wrap>)
    : null;
};

Icon.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPES)),
};

Icon.defaultProps = {
  type: null,
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
  background: ${({ type }) => getTypeColor(type) || COLORS.WHITE};
`;
