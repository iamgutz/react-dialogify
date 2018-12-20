"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _icon = _interopRequireDefault(require("../components/icon"));

var _button = _interopRequireDefault(require("../components/button"));

var _text = _interopRequireDefault(require("../components/text"));

var _title = _interopRequireDefault(require("../components/title"));

var _constants = require("../constants");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  position: relative;\n  padding: 1rem;\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var DefaultTemplate = function DefaultTemplate(_ref) {
  var status = _ref.status,
      title = _ref.title,
      text = _ref.text,
      ctaText = _ref.ctaText,
      ctaOnClick = _ref.ctaOnClick;
  return _react.default.createElement(TemplateBase, null, _react.default.createElement(_icon.default, {
    status: status
  }), title && _react.default.createElement(_title.default, null, title), text && _react.default.createElement(_text.default, null, text), ctaText && ctaOnClick && _react.default.createElement(_button.default, {
    status: status,
    onClick: ctaOnClick,
    type: "button"
  }, ctaText));
};

DefaultTemplate.propTypes = {
  status: _propTypes.default.oneOf(Object.values(_constants.STATUS)),
  title: _propTypes.default.string,
  text: _propTypes.default.string,
  ctaText: _propTypes.default.string,
  ctaOnClick: _propTypes.default.func
};
DefaultTemplate.defaultProps = {
  status: null,
  title: null,
  text: null,
  ctaText: null,
  ctaOnClick: null
};
var _default = DefaultTemplate;
exports.default = _default;

var TemplateBase = _styledComponents.default.div(_templateObject());