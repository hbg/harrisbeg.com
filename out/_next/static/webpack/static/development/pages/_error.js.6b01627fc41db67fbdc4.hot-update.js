webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fharrisbeg%2FDesktop%2FDevelopment%2Fhbgw%2Fpages%2F_error.js!./":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fharrisbeg%2FDesktop%2FDevelopment%2Fhbgw%2Fpages%2F_error.js ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_error", function() {
      var mod = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js")
      if(true) {
        module.hot.accept(/*! ./pages/_error.js */ "./pages/_error.js", function() {
          if(!next.router.components["/_error"]) return
          var updatedPage = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js")
          next.router.update("/_error", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./pages/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _error_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.scss */ "./pages/error.scss");
/* harmony import */ var _error_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_error_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _partials_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/head */ "./partials/head.js");
/* harmony import */ var _partials_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../partials/components */ "./partials/components.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;






function Error(_ref) {
  var statusCode = _ref.statusCode;
  return __jsx("div", null, __jsx(_partials_head__WEBPACK_IMPORTED_MODULE_2__["default"], {
    page_name: statusCode + " Error"
  }), __jsx(_partials_components__WEBPACK_IMPORTED_MODULE_3__["GlobalNavbar"], null), __jsx("div", {
    className: "error-wrapper"
  }, __jsx("p", {
    className: "prefix"
  }, "May the"), __jsx("h1", {
    className: "error-large-text"
  }, statusCode), __jsx("p", {
    className: "prefix"
  }, "be with you.")), __jsx(_partials_components__WEBPACK_IMPORTED_MODULE_3__["GlobalFooter"], null));
}

Error.getInitialProps = function (_ref2) {
  var res = _ref2.res,
      err = _ref2.err;
  var statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ 3:
/*!**********************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Fharrisbeg%2FDesktop%2FDevelopment%2Fhbgw%2Fpages%2F_error.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Fharrisbeg%2FDesktop%2FDevelopment%2Fhbgw%2Fpages%2F_error.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fharrisbeg%2FDesktop%2FDevelopment%2Fhbgw%2Fpages%2F_error.js!./");


/***/ })

})
//# sourceMappingURL=_error.js.6b01627fc41db67fbdc4.hot-update.js.map