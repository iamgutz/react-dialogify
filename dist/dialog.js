"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _fbemitter = require("fbemitter");

var _constants = require("./constants");

var Dialog =
/*#__PURE__*/
function () {
  function Dialog() {
    (0, _classCallCheck2.default)(this, Dialog);
    this.eventEmitter = new _fbemitter.EventEmitter();
  }

  (0, _createClass2.default)(Dialog, [{
    key: "on",
    value: function on(eventName) {
      var _this$eventEmitter;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      (_this$eventEmitter = this.eventEmitter).addListener.apply(_this$eventEmitter, [eventName].concat(args));
    }
  }, {
    key: "remove",
    value: function remove() {
      this.eventEmitter.removeAllListeners();
    }
  }, {
    key: "show",
    value: function show(options, templateComponent) {
      this.eventEmitter.emit(_constants.ACTIONS.SHOW, options, templateComponent);
    }
  }, {
    key: "close",
    value: function close() {
      this.eventEmitter.emit(_constants.ACTIONS.HIDE, null);
    }
  }]);
  return Dialog;
}();

var _default = Dialog;
exports.default = _default;