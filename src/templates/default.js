import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../components/icon';
import Button from '../components/button';
import Text from '../components/text';
import Title from '../components/title';
import { TYPES } from '../constants';

const DefaultTemplate = ({
  type, title, text, btnText, btnOnClick,
}) => (
  <TemplateBase>
    <Icon type={type} />
    {title &&
      <Title>{title}</Title>
    }
    {text &&
      <Text>
        {text}
      </Text>
    }
    {btnText && btnOnClick &&
      <Button status={type} onClick={btnOnClick} type="button">
        {btnText}
      </Button>
    }
  </TemplateBase>
);

DefaultTemplate.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPES)),
  title: PropTypes.string,
  text: PropTypes.string,
  btnText: PropTypes.string,
  btnOnClick: PropTypes.func,
};

DefaultTemplate.defaultProps = {
  type: null,
  title: null,
  text: null,
  btnText: null,
  btnOnClick: null,
};

export default DefaultTemplate;

const TemplateBase = styled.div`
  position: relative;
  padding: 1rem;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
