"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var DefaultTemplate = function DefaultTemplate(_ref) {
  var title = _ref.title,
      text = _ref.text,
      ctaText = _ref.ctaText,
      ctaOnClick = _ref.ctaOnClick;
  return _react.default.createElement("div", null, _react.default.createElement("div", null, title), _react.default.createElement("div", null, text && _react.default.createElement("div", null, _react.default.createElement("div", null, text)), ctaText && ctaOnClick && _react.default.createElement("button", {
    onClick: ctaOnClick,
    type: "button"
  }, ctaText)));
};

DefaultTemplate.propTypes = {
  title: _propTypes.default.string,
  text: _propTypes.default.string,
  ctaText: _propTypes.default.string,
  ctaOnClick: _propTypes.default.func
};
DefaultTemplate.defaultProps = {
  title: null,
  text: null,
  ctaText: null,
  ctaOnClick: null
};
var _default = DefaultTemplate;
exports.default = _default;