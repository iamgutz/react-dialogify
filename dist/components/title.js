"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("../constants");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: ", ";\n  font-family: Verdana;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Title = _styledComponents.default.h2(_templateObject(), _constants.FONT_SIZES.LARGE, _constants.COLORS.DARK_GREY);

var _default = Title;
exports.default = _default;