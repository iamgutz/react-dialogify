import styled from 'styled-components';
import { getStatusColor } from '../helpers';
import { COLORS, FONT_SIZES } from '../constants';

const Button = styled.button`
  background: ${({ status }) => getStatusColor(status) || COLORS.GREY};
  color: ${({ status }) => (status ? COLORS.WHITE : COLORS.DARK_GREY)};
  border: none;
  padding: 1rem;
  border-radius: 0.3rem;
  font-size: ${FONT_SIZES.MEDIUM};
  cursor: pointer;
  margin: 0.5rem;
  outline: none;
`;

export default Button;
