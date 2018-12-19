"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTemplate = exports.TEMPLATES = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _isString2 = _interopRequireDefault(require("lodash/isString"));

var _default = _interopRequireDefault(require("./templates/default"));

var _constants = require("./constants");

var TEMPLATES = (0, _defineProperty2.default)({}, _constants.TEMPLATE_NAMES.default, _default.default);
exports.TEMPLATES = TEMPLATES;

var getTemplate = function getTemplate(template, currentTemplate) {
  if ((0, _isString2.default)(template)) {
    return TEMPLATES[template] || TEMPLATES[_constants.TEMPLATE_NAMES.default];
  }

  if (template && _react.default.isValidElement(_react.default.createElement("template", null))) {
    return template;
  }

  return currentTemplate || TEMPLATES[_constants.TEMPLATE_NAMES.default];
};

exports.getTemplate = getTemplate;