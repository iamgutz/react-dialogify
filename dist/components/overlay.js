"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  flex-direction: row;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  align-items: center;\n  justify-content: center;\n  &:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: ", ";\n    opacity: ", ";\n    z-index: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Overlay = _styledComponents.default.div(_templateObject(), function (_ref) {
  var bgColor = _ref.bgColor;
  return bgColor || '#fff';
}, function (_ref2) {
  var opacity = _ref2.opacity;
  return opacity || '0.5';
});

var _default = Overlay;
exports.default = _default;