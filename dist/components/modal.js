"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _overlay = _interopRequireDefault(require("./overlay"));

var _box = _interopRequireDefault(require("./box"));

var Modal = function Modal(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_overlay.default, null, _react.default.createElement(_box.default, null, children));
};

Modal.propTypes = {
  children: _propTypes.default.node.isRequired
};
var _default = Modal;
exports.default = _default;