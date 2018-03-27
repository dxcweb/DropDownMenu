webpackJsonp([1],{

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(39);


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pano_loading__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pano_loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pano_loading__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Demo = function (_React$Component) {
  _inherits(Demo, _React$Component);

  function Demo() {
    var _temp, _this, _ret;

    _classCallCheck(this, Demo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      loading: false,
      progress: 0
    }, _this.handleOpen = function () {
      var loading = _this.state.loading;

      _this.setState({ loading: true });
      _this.progress(0);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Demo.prototype.progress = function progress(_progress) {
    var _this2 = this;

    if (_progress > 100) {
      this.setState({ loading: false });
    } else {
      this.setState({ progress: _progress });
      setTimeout(function () {
        _this2.progress(_progress + 1);
      }, 50);
    }
  };

  Demo.prototype.render = function render() {
    var _state = this.state,
        loading = _state.loading,
        progress = _state.progress;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { style: { margin: 50 } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_pano_loading___default.a, { overlay: true, visible: loading, content: progress + " %" }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        {
          onClick: this.handleOpen,
          style: {
            width: 80,
            border: "1px solid #000",
            borderRadius: 4,
            textAlign: "center"
          }
        },
        "\u6253\u5F00"
      )
    );
  };

  return Demo;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Demo, null), document.getElementById("__react-content"));

/***/ })

},[38]);
//# sourceMappingURL=2-overlay.js.map