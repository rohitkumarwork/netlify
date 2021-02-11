webpackHotUpdate_N_E("pages/gta-new-townhomes",{

/***/ "./components/precon/regions/index.js":
/*!********************************************!*\
  !*** ./components/precon/regions/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _precon_assets_stat_small_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../precon-assets/stat-small-1.png */ \"./components/precon/precon-assets/stat-small-1.png\");\n/* harmony import */ var _precon_assets_stat_small_1_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_precon_assets_stat_small_1_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _precon_assets_stat_small_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../precon-assets/stat-small-2.png */ \"./components/precon/precon-assets/stat-small-2.png\");\n/* harmony import */ var _precon_assets_stat_small_2_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_precon_assets_stat_small_2_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _precon_assets_stat_small_3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../precon-assets/stat-small-3.png */ \"./components/precon/precon-assets/stat-small-3.png\");\n/* harmony import */ var _precon_assets_stat_small_3_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_precon_assets_stat_small_3_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loader-spinner */ \"./node_modules/react-loader-spinner/index.js\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/tedkomputer/Documents/netlify-new/netlify/components/precon/regions/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Region = function Region(props) {\n  _s();\n\n  console.log(\"props\", props);\n  var regionName = props.regionName,\n      regionData = props.regionData,\n      mainHeading = props.mainHeading,\n      heading1 = props.heading1,\n      heading2 = props.heading2,\n      heading3 = props.heading3,\n      vipText = props.vipText,\n      registrations = props.registrations,\n      commingSoonText = props.commingSoonText,\n      soldText = props.soldText,\n      color = props.color;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      loading = _useState[0],\n      setLoader = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (regionData && regionData.length > 0) {\n      setLoader(false);\n    }\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"cityBox\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"regionsBox\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: regionName === \"Central\" ? \"markTitle central\" : regionName === \"West\" ? \"markTitle West\" : regionName === \"East\" ? \"markTitle East\" : regionName === \"North\" ? \"markTitle North\" : \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 21\n    }\n  }, regionName), loading === true ? __jsx(\"div\", {\n    className: \"loader-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 41\n    }\n  }, __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    type: \"ThreeDots\",\n    color: \"#f89e37\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 72\n    }\n  })) : regionData.map(function (value) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n      className: \"cityNameTitle\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 33\n      }\n    }, __jsx(\"div\", {\n      className: \"cityName\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 37\n      }\n    }, value.city), __jsx(\"div\", {\n      className: \"totalProject\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 37\n      }\n    }, \"Total Project \", __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 55\n      }\n    }, value.cityData && value.cityData.length))), __jsx(\"div\", {\n      className: \"cityDiscriptions\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 33\n      }\n    }, value.city, \" is one of the GTA's largest suburbs and therefore there is constant migration and growth, demanding new home sales and inventory.\"), __jsx(\"div\", {\n      className: \"cityStats\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 33\n      }\n    }, __jsx(\"div\", {\n      className: \"heading\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 37\n      }\n    }, mainHeading), __jsx(\"ul\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 37\n      }\n    }, __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 41\n      }\n    }, __jsx(\"div\", {\n      className: \"statBox\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 45\n      }\n    }, __jsx(\"img\", {\n      src: _precon_assets_stat_small_1_png__WEBPACK_IMPORTED_MODULE_1___default.a,\n      alt: \"image\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 49\n      }\n    }), __jsx(\"div\", {\n      className: \"statTitle\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 49\n      }\n    }, heading1, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 53\n      }\n    }, \"$N/A\")))), __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 41\n      }\n    }, __jsx(\"div\", {\n      \"class\": \"statBox\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 45\n      }\n    }, __jsx(\"img\", {\n      src: _precon_assets_stat_small_2_png__WEBPACK_IMPORTED_MODULE_2___default.a,\n      alt: \"\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 49\n      }\n    }), __jsx(\"div\", {\n      \"class\": \"statTitle\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 49\n      }\n    }, heading2, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 53\n      }\n    }, \"N/A\")))), __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 41\n      }\n    }, __jsx(\"div\", {\n      \"class\": \"statBox\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 45\n      }\n    }, __jsx(\"img\", {\n      src: _precon_assets_stat_small_3_png__WEBPACK_IMPORTED_MODULE_3___default.a,\n      alt: \"image3\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 49\n      }\n    }), __jsx(\"div\", {\n      \"class\": \"statTitle\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 49\n      }\n    }, heading3, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 53\n      }\n    }, \"N/A\")))))), __jsx(\"div\", {\n      className: \"stagesProject\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 33\n      }\n    }, __jsx(\"ul\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 37\n      }\n    }, __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 41\n      }\n    }, __jsx(\"a\", {\n      href: \"#\",\n      className: \"purple\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 45\n      }\n    }, vipText, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 58\n      }\n    }, \"5\"))), __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 41\n      }\n    }, __jsx(\"a\", {\n      href: \"#\",\n      className: \"blue\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 45\n      }\n    }, registrations, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 64\n      }\n    }, \"5\"))), __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 41\n      }\n    }, __jsx(\"a\", {\n      href: \"#\",\n      className: \"skyblue\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 45\n      }\n    }, commingSoonText, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 66\n      }\n    }, \"5\"))), __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 41\n      }\n    }, __jsx(\"a\", {\n      href: \"#\",\n      className: \"pink\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 45\n      }\n    }, soldText, \" \", __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 60\n      }\n    }, \"5\"))))));\n  }))));\n};\n\n_s(Region, \"kcEonAfwb/KKsKO8LKHnr1/wU0Y=\");\n\n_c = Region;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Region);\n\nvar _c;\n\n$RefreshReg$(_c, \"Region\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcmVjb24vcmVnaW9ucy9pbmRleC5qcz9hYjVhIl0sIm5hbWVzIjpbIlJlZ2lvbiIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInJlZ2lvbk5hbWUiLCJyZWdpb25EYXRhIiwibWFpbkhlYWRpbmciLCJoZWFkaW5nMSIsImhlYWRpbmcyIiwiaGVhZGluZzMiLCJ2aXBUZXh0IiwicmVnaXN0cmF0aW9ucyIsImNvbW1pbmdTb29uVGV4dCIsInNvbGRUZXh0IiwiY29sb3IiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkZXIiLCJ1c2VFZmZlY3QiLCJsZW5ndGgiLCJtYXAiLCJ2YWx1ZSIsImNpdHkiLCJjaXR5RGF0YSIsImltYWdlMSIsImltYWdlMiIsImltYWdlMyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3RCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQW9CRixLQUFwQjtBQURzQixNQUVkRyxVQUZjLEdBR2tDSCxLQUhsQyxDQUVkRyxVQUZjO0FBQUEsTUFFRkMsVUFGRSxHQUdrQ0osS0FIbEMsQ0FFRkksVUFGRTtBQUFBLE1BRVVDLFdBRlYsR0FHa0NMLEtBSGxDLENBRVVLLFdBRlY7QUFBQSxNQUV1QkMsUUFGdkIsR0FHa0NOLEtBSGxDLENBRXVCTSxRQUZ2QjtBQUFBLE1BRWdDQyxRQUZoQyxHQUdrQ1AsS0FIbEMsQ0FFZ0NPLFFBRmhDO0FBQUEsTUFFMENDLFFBRjFDLEdBR2tDUixLQUhsQyxDQUUwQ1EsUUFGMUM7QUFBQSxNQUVvREMsT0FGcEQsR0FHa0NULEtBSGxDLENBRW9EUyxPQUZwRDtBQUFBLE1BR2xCQyxhQUhrQixHQUdrQ1YsS0FIbEMsQ0FHbEJVLGFBSGtCO0FBQUEsTUFHSEMsZUFIRyxHQUdrQ1gsS0FIbEMs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RGIsQ0FESixDQURKLEVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUcsVUFBSSxFQUFDLEdBQVI7QUFBWSxlQUFTLEVBQUMsTUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLQyxhQURMLEVBQ21CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEbkIsQ0FESixDQU5KLEVBV0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUcsVUFBSSxFQUFDLEdBQVI7QUFBWSxlQUFTLEVBQUMsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLQyxlQURMLEVBQ3FCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEckIsQ0FESixDQVhKLEVBZ0JJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFHLFVBQUksRUFBQyxHQUFSO0FBQVksZUFBUyxFQUFDLE1BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS0MsUUFETCxPQUNlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEZixDQURKLENBaEJKLENBREosQ0FoREosQ0FESjtBQTJFSCxHQTVFQSxDQVBMLENBREosQ0FESixDQURKO0FBMkZILENBeEdEOztHQUFNYixNOztLQUFBQSxNO0FBMEdTQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcHJlY29uL3JlZ2lvbnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSAgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgaW1hZ2UxIGZyb20gXCIuLi9wcmVjb24tYXNzZXRzL3N0YXQtc21hbGwtMS5wbmdcIjtcbmltcG9ydCBpbWFnZTIgZnJvbSBcIi4uL3ByZWNvbi1hc3NldHMvc3RhdC1zbWFsbC0yLnBuZ1wiO1xuaW1wb3J0IGltYWdlMyBmcm9tIFwiLi4vcHJlY29uLWFzc2V0cy9zdGF0LXNtYWxsLTMucG5nXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xuXG5jb25zdCBSZWdpb24gPSAocHJvcHMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInByb3BzXCIscHJvcHMpXG4gICAgY29uc3QgeyByZWdpb25OYW1lLCByZWdpb25EYXRhLCBtYWluSGVhZGluZywgaGVhZGluZzEsaGVhZGluZzIsIGhlYWRpbmczLCB2aXBUZXh0LCBcbiAgICAgICAgcmVnaXN0cmF0aW9ucywgY29tbWluZ1Nvb25UZXh0LCBzb2xkVGV4dCwgY29sb3IgfSA9IHByb3BzO1xuXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKHJlZ2lvbkRhdGEgJiYgcmVnaW9uRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZXRMb2FkZXIoZmFsc2UpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2l0eUJveFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaW9uc0JveFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cmVnaW9uTmFtZSA9PT0gXCJDZW50cmFsXCIgPyBcIm1hcmtUaXRsZSBjZW50cmFsXCIgOiByZWdpb25OYW1lID09PSBcIldlc3RcIiA/XG4gICAgICAgICAgICAgICAgICAgIFwibWFya1RpdGxlIFdlc3RcIiA6IHJlZ2lvbk5hbWUgPT09IFwiRWFzdFwiID8gXCJtYXJrVGl0bGUgRWFzdFwiIDogcmVnaW9uTmFtZSA9PT0gXCJOb3J0aFwiID9cbiAgICAgICAgICAgICAgICAgICAgXCJtYXJrVGl0bGUgTm9ydGhcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3JlZ2lvbk5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA9PT0gdHJ1ZSA/IDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLWNlbnRlclwiPjxMb2FkZXIgdHlwZT1cIlRocmVlRG90c1wiIGNvbG9yPVwiI2Y4OWUzN1wiIC8+PC9kaXY+IDogXG4gICAgICAgICAgICAgICAgICAgICByZWdpb25EYXRhLm1hcCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXR5TmFtZVRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpdHlOYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlLmNpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG90YWxQcm9qZWN0XCI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsIFByb2plY3QgPHNwYW4+e3ZhbHVlLmNpdHlEYXRhICYmIHZhbHVlLmNpdHlEYXRhLmxlbmd0aH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2l0eURpc2NyaXB0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlLmNpdHl9IGlzIG9uZSBvZiB0aGUgR1RBJ3MgbGFyZ2VzdCBzdWJ1cmJzIGFuZCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZXJlZm9yZSB0aGVyZSBpcyBjb25zdGFudCBtaWdyYXRpb24gYW5kIGdyb3d0aCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZW1hbmRpbmcgbmV3IGhvbWUgc2FsZXMgYW5kIGludmVudG9yeS4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpdHlTdGF0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21haW5IZWFkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRCb3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZTF9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdFRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRpbmcxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiROL0E8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0Qm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2UyfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkaW5nMn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5OL0E8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0Qm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2UzfSBhbHQ9XCJpbWFnZTNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkaW5nM31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5OL0E8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YWdlc1Byb2plY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwicHVycGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmlwVGV4dH08c3Bhbj41PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlZ2lzdHJhdGlvbnN9PHNwYW4+NTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNreWJsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb21taW5nU29vblRleHR9PHNwYW4+NTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInBpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzb2xkVGV4dH0gPHNwYW4+NTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpb247Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/precon/regions/index.js\n");

/***/ })

})