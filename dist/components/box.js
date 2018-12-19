"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  background-color: #fff;\n  color: #000;\n  border-radius: 8px;\n  z-index: 1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Box = _styledComponents.default.div(_templateObject());

var _default = Box;
exports.default = _default;