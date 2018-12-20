import styled from 'styled-components';

const Overlay = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({ bgColor }) => bgColor || '#000'};
    opacity: ${({ opacity }) => opacity || '0.7'};
    z-index: 0;
  }
`;

export default Overlay;
