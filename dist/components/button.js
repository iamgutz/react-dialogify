"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _helpers = require("../helpers");

var _constants = require("../constants");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  background: ", ";\n  color: ", ";\n  border: none;\n  padding: 1rem;\n  border-radius: 0.3rem;\n  font-size: ", ";\n  cursor: pointer;\n  margin: 0.5rem;\n  outline: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Button = _styledComponents.default.button(_templateObject(), function (_ref) {
  var status = _ref.status;
  return (0, _helpers.getStatusColor)(status) || _constants.COLORS.GREY;
}, function (_ref2) {
  var status = _ref2.status;
  return status ? _constants.COLORS.WHITE : _constants.COLORS.DARK_GREY;
}, _constants.FONT_SIZES.MEDIUM);

var _default = Button;
exports.default = _default;