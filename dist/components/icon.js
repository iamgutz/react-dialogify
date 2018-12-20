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

var _constants = require("../constants");

var _helpers = require("../helpers");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 100% 100%;\n  width: 2.5rem;\n  height: 2.5rem;\n  position: absolute;\n  top: -1.25rem;\n  margin: auto;\n  left: 0;\n  right: 0;\n  border: 2px solid ", ";\n  background: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Icon = function Icon(_ref) {
  var status = _ref.status;
  var IconComponent = (0, _helpers.getIcon)(status);
  return IconComponent ? _react.default.createElement(Wrap, {
    status: status
  }, _react.default.createElement(IconComponent, {
    color: _constants.COLORS.WHITE
  })) : null;
};

Icon.propTypes = {
  status: _propTypes.default.oneOf(Object.values(_constants.STATUS))
};
Icon.defaultProps = {
  status: null
};
var _default = Icon;
exports.default = _default;

var Wrap = _styledComponents.default.div(_templateObject(), _constants.COLORS.WHITE, function (_ref2) {
  var status = _ref2.status;
  return (0, _helpers.getStatusColor)(status) || _constants.COLORS.WHITE;
});