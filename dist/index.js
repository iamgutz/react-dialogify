"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dialog = exports.DialogContainer = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _modal = _interopRequireDefault(require("./components/modal"));

var _dialog = _interopRequireDefault(require("./dialog"));

var _constants = require("./constants");

var _helpers = require("./helpers");

var dialog = new _dialog.default();
exports.dialog = dialog;

var DialogContainer =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(DialogContainer, _Component);

  function DialogContainer(props) {
    var _this;

    (0, _classCallCheck2.default)(this, DialogContainer);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DialogContainer).call(this, props));
    _this.state = {
      options: null,
      DialogComponent: (0, _helpers.getTemplate)(props.template)
    };
    _this.addDialog = _this.addDialog.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.removeDialog = _this.removeDialog.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  (0, _createClass2.default)(DialogContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      dialog.on(_constants.ACTIONS.SHOW, this.addDialog);
      dialog.on(_constants.ACTIONS.HIDE, this.removeDialog);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      dialog.remove();
    }
  }, {
    key: "addDialog",
    value: function addDialog(options, templateArg) {
      var template = this.props.template;
      var DialogComponent = this.state.DialogComponent;
      var newTemplate = templateArg || template;
      this.setState({
        options: options,
        DialogComponent: (0, _helpers.getTemplate)(newTemplate, DialogComponent)
      });
    }
  }, {
    key: "removeDialog",
    value: function removeDialog() {
      this.setState({
        options: null,
        DialogComponent: null
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          options = _this$state.options,
          DialogComponent = _this$state.DialogComponent;
      return _react.default.createElement(_react.Fragment, null, options && _react.default.createElement(_modal.default, null, _react.default.createElement(DialogComponent, options)));
    }
  }]);
  return DialogContainer;
}(_react.Component);

exports.DialogContainer = DialogContainer;
DialogContainer.propTypes = {
  template: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string, _propTypes.default.node, _propTypes.default.element])
};
DialogContainer.defaultProps = {
  template: null
};