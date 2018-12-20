"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStatusColor = exports.STATUS_COLORS = exports.getIcon = exports.ICONS = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _isString2 = _interopRequireDefault(require("lodash/isString"));

var _check = _interopRequireDefault(require("react-feather/dist/icons/check"));

var _x = _interopRequireDefault(require("react-feather/dist/icons/x"));

var _clock = _interopRequireDefault(require("react-feather/dist/icons/clock"));

var _heart = _interopRequireDefault(require("react-feather/dist/icons/heart"));

var _constants = require("./constants");

var _ICONS, _STATUS_COLORS;

var ICONS = (_ICONS = {}, (0, _defineProperty2.default)(_ICONS, _constants.STATUS.success, _check.default), (0, _defineProperty2.default)(_ICONS, _constants.STATUS.error, _x.default), (0, _defineProperty2.default)(_ICONS, _constants.STATUS.pending, _clock.default), (0, _defineProperty2.default)(_ICONS, "default", _heart.default), _ICONS);
exports.ICONS = ICONS;

var getIcon = function getIcon(status) {
  if ((0, _isString2.default)(status)) {
    return ICONS[status] || ICONS.default;
  }

  return null;
};

exports.getIcon = getIcon;
var STATUS_COLORS = (_STATUS_COLORS = {}, (0, _defineProperty2.default)(_STATUS_COLORS, _constants.STATUS.success, _constants.COLORS.GREEN), (0, _defineProperty2.default)(_STATUS_COLORS, _constants.STATUS.error, _constants.COLORS.RED), (0, _defineProperty2.default)(_STATUS_COLORS, _constants.STATUS.pending, _constants.COLORS.GOLD), (0, _defineProperty2.default)(_STATUS_COLORS, "default", _constants.COLORS.PINK), _STATUS_COLORS);
exports.STATUS_COLORS = STATUS_COLORS;

var getStatusColor = function getStatusColor(status) {
  if ((0, _isString2.default)(status)) {
    return STATUS_COLORS[status] || STATUS_COLORS.default;
  }

  return null;
};

exports.getStatusColor = getStatusColor;