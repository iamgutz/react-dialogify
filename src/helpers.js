import React from 'react';
import _isString from 'lodash/isString';
import DefaultTemplate from './templates/default';
import { TEMPLATE_NAMES } from './constants';

export const TEMPLATES = {
  [TEMPLATE_NAMES.default]: DefaultTemplate,
};

export const getTemplate = (template, currentTemplate) => {
  if (_isString(template)) {
    return TEMPLATES[template] || TEMPLATES[TEMPLATE_NAMES.default];
  }
  if (template && React.isValidElement(<template />)) {
    return template;
  }
  return currentTemplate || TEMPLATES[TEMPLATE_NAMES.default];
};
