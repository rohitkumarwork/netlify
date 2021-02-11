webpackHotUpdate_N_E("pages/gta-new-townhomes",{

/***/ "./components/precon/preconCityMap.js":
/*!********************************************!*\
  !*** ./components/precon/preconCityMap.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_tedkomputer_Documents_netlify_new_netlify_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _precon_assets_projectPic1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./precon-assets/projectPic1.jpg */ \"./components/precon/precon-assets/projectPic1.jpg\");\n/* harmony import */ var _precon_assets_projectPic1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_precon_assets_projectPic1_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-map-gl */ \"./node_modules/react-map-gl/dist/esm/index.js\");\n/* harmony import */ var deck_gl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! deck.gl */ \"./node_modules/deck.gl/dist/esm/index.js\");\n/* harmony import */ var _deck_gl_layers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @deck.gl/layers */ \"./node_modules/@deck.gl/layers/dist/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/tedkomputer/Documents/netlify-new/netlify/components/precon/preconCityMap.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar MAPBOX_TOKEN = \"pk.eyJ1Ijoicm9oaXRrdW1hcjEiLCJhIjoiY2tkbzJheWxpMW5zazJybGNwYXVxMWo1aSJ9.xIbmejDwM0vDos0zZfB6DA\";\n\nvar PreconCityMap = function PreconCityMap(_ref) {\n  _s();\n\n  var _ScatterplotLayer;\n\n  var viewState = _ref.viewState,\n      setViewState = _ref.setViewState,\n      selectedHome = _ref.selectedHome,\n      setOpenProjectsModal = _ref.setOpenProjectsModal,\n      setSelectedCityData = _ref.setSelectedCityData;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      layers = _useState[0],\n      setLayers = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      popup = _useState2[0],\n      setPopup = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      projects = _useState3[0],\n      setProjects = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      hoveredRegion = _useState4[0],\n      setHoveredRegion = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      latitude = _useState5[0],\n      setLatitude = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      longitude = _useState6[0],\n      setLongitude = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      x = _useState7[0],\n      setX = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      y = _useState8[0],\n      setY = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      xAxis = _useState9[0],\n      setXAxis = _useState9[1];\n\n  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      yAxis = _useState10[0],\n      setYAxis = _useState10[1];\n\n  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isSelected = _useState11[0],\n      setIsSelected = _useState11[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setLayers([selectedCityScatterplot]);\n  }, []);\n\n  var handleProjectModal = function handleProjectModal(selectedData) {\n    setOpenProjectsModal(true);\n    setSelectedCityData(selectedData);\n  };\n\n  var selectedCityScatterplot = new _deck_gl_layers__WEBPACK_IMPORTED_MODULE_5__[\"ScatterplotLayer\"]((_ScatterplotLayer = {\n    id: \"scatterplot-layer4\",\n    data: selectedHome,\n    pickable: true,\n    getPosition: function getPosition(d) {\n      return [d.coordinates[0], d.coordinates[1]];\n    }\n  }, Object(_Users_tedkomputer_Documents_netlify_new_netlify_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ScatterplotLayer, \"pickable\", true), Object(_Users_tedkomputer_Documents_netlify_new_netlify_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ScatterplotLayer, \"opacity\", 1), Object(_Users_tedkomputer_Documents_netlify_new_netlify_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ScatterplotLayer, \"stroked\", true), Object(_Users_tedkomputer_Documents_netlify_new_netlify_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ScatterplotLayer, \"filled\", true), Object(_Users_tedkomputer_Documents_netlify_new_netlify_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ScatterplotLayer, \"radiusScale\", 7), Object(_Users_tedkomputer_Documents_netlify_new_netlify_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ScatterplotLayer, \"radiusMinPixels\", 8), Object(_Users_tedkomputer_Documents_netlify_new_netlify_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ScatterplotLayer, \"radiusMaxPixels\", 100), Object(_Users_tedkomputer_Documents_netlify_new_netlify_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ScatterplotLayer, \"lineWidthMinPixels\", 2), Object(_Users_tedkomputer_Documents_netlify_new_netlify_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ScatterplotLayer, \"getPosition\", function getPosition(d) {\n    return d.coordinates;\n  }), Object(_Users_tedkomputer_Documents_netlify_new_netlify_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ScatterplotLayer, \"getRadius\", 10), Object(_Users_tedkomputer_Documents_netlify_new_netlify_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ScatterplotLayer, \"getFillColor\", function getFillColor(d) {\n    return [248, 158, 55];\n  }), Object(_Users_tedkomputer_Documents_netlify_new_netlify_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ScatterplotLayer, \"getLineColor\", function getLineColor(d) {\n    return [248, 158, 55];\n  }), Object(_Users_tedkomputer_Documents_netlify_new_netlify_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ScatterplotLayer, \"onHover\", function onHover(info) {\n    if (info.object) {\n      setPopup(true);\n      setLatitude(info.coordinate[1]);\n      setLongitude(info.coordinate[0]);\n      setProjects(info.object);\n      setX(info.x);\n      setY(info.y);\n    }\n  }), _ScatterplotLayer));\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 5\n    }\n  }, __jsx(deck_gl__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    viewState: viewState,\n    onViewStateChange: function onViewStateChange(_ref2) {\n      var viewState = _ref2.viewState;\n      setViewState(viewState);\n    },\n    controller: true,\n    layers: [layers],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }, __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_3__[\"default\"] //   ref={setmapComponent}\n  , {\n    reuseMaps: true,\n    mapStyle: \"mapbox://styles/rohitkumar1/ckdo3fykp4n3t1ilibsish1cd\",\n    preventStyleDiffing: true,\n    mapboxApiAccessToken: MAPBOX_TOKEN,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  })), popup === true ? __jsx(\"div\", {\n    className: \"tooltip1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"tooltipContent\",\n    style: {\n      top: y,\n      left: x\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 11\n    }\n  }, projects && projects.cityData && __jsx(\"div\", {\n    className: \"projectCard\",\n    onClick: function onClick() {\n      return handleProjectModal(projects.cityData);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"projectImg\",\n    style: {\n      background: \"url(\".concat(_precon_assets_projectPic1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, \")\")\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 21\n    }\n  }), __jsx(\"div\", {\n    \"class\": \"headTitle\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    \"class\": \"projectName\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 23\n    }\n  }, projects.cityData.Community), __jsx(\"div\", {\n    \"class\": \"stage\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 23\n    }\n  }, \"VIP Launch\")), __jsx(\"div\", {\n    className: \"price\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 21\n    }\n  }, \"$ \", projects.cityData.Starting_From_Price), __jsx(\"div\", {\n    \"class\": \"area\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 21\n    }\n  }, projects.cityData.Address)))) : null);\n};\n\n_s(PreconCityMap, \"w4I6WPBOkYul9zp6Rg67F1jmc+w=\");\n\n_c = PreconCityMap;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PreconCityMap);\n\nvar _c;\n\n$RefreshReg$(_c, \"PreconCityMap\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcmVjb24vcHJlY29uQ2l0eU1hcC5qcz8yZTZkIl0sIm5hbWVzIjpbIk1BUEJPWF9UT0tFTiIsIlByZWNvbkNpdHlNYXAiLCJ2aWV3U3RhdGUiLCJzZXRWaWV3U3RhdGUiLCJzZWxlY3RlZEhvbWUiLCJzZXRPcGVuUHJvamVjdHNNb2RhbCIsInNldFNlbGVjdGVkQ2l0eURhdGEiLCJ1c2VTdGF0ZSIsImxheWVycyIsInNldExheWVycyIsInBvcHVwIiwic2V0UG9wdXAiLCJwcm9qZWN0cyIsInNldFByb2plY3RzIiwiaG92ZXJlZFJlZ2lvbiIsInNldEhvdmVyZWRSZWdpb24iLCJsYXRpdHVkZSIsInNldExhdGl0dWRlIiwibG9uZ2l0dWRlIiwic2V0TG9uZ2l0dWRlIiwieCIsInNldFgiLCJ5Iiwic2V0WSIsInhBeGlzIiwic2V0WEF4aXMiLCJ5QXhpcyIsInNldFlBeGlzIiwiaXNTZWxlY3RlZCIsInNldElzU2VsZWN0ZWQiLCJ1c2VFZmZlY3QiLCJzZWxlY3RlZENpdHlTY2F0dGVycGxvdCIsImhhbmRsZVByb2plY3RNb2RhbCIsInNlbGVjdGVkRGF0YSIsIlNjYXR0ZXJwbG90TGF5ZXIiLCJpZCIsImRhdGEiLCJwaWNrYWJsZSIsImdldFBvc2l0aW9uIiwiZCIsImNvb3JkaW5hdGVzIiwiaW5mbyIsIm9iamVjdCIsImNvb3JkaW5hdGUiLCJ0b3AiLCJsZWZ0IiwiY2l0eURhdGEiLCJiYWNrZ3JvdW5kIiwiUHJvamVjdHBpYzEiLCJDb21tdW5pdHkiLCJTdGFydGluZ19Gcm9tX1ByaWNlIiwiQWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQ2hCLGdHQURGOztBQUlBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FNaEI7QUFBQTs7QUFBQTs7QUFBQSxNQUxKQyxTQUtJLFFBTEpBLFNBS0k7QUFB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QUFBQSxLQUlRO0FBQ0UsYUFBUyxFQUFDLFlBRFo7QUFFRSxTQUFLLEVBQUU7QUFBRUMsZ0JBQVUsZ0JBQVNDLHFFQUFUO0FBQVosS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSlIsRUFRUTtBQUFLLGFBQU0sV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFNLGFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEwQnBDLFFBQVEsQ0FBQ2tDLFFBQVQsQ0FBa0JHLFNBQTVDLENBREYsRUFFRTtBQUFLLGFBQU0sT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLENBUlIsRUFZUTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBMEJyQyxRQUFRLENBQUNrQyxRQUFULENBQWtCSSxtQkFBNUMsQ0FaUixFQWFRO0FBQUssYUFBTSxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUJ0QyxRQUFRLENBQUNrQyxRQUFULENBQWtCSyxPQUFyQyxDQWJSLENBUkYsQ0FERixDQURELEdBNEJHLElBN0NOLENBREY7QUFpREQsQ0EvR0Q7O0dBQU1sRCxhOztLQUFBQSxhO0FBaUhTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcHJlY29uL3ByZWNvbkNpdHlNYXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb2plY3RwaWMxIGZyb20gXCIuL3ByZWNvbi1hc3NldHMvcHJvamVjdFBpYzEuanBnXCI7XG4gXG5pbXBvcnQgU3RhdGljTWFwLCB7IFBvcHVwIH0gZnJvbSBcInJlYWN0LW1hcC1nbFwiO1xuaW1wb3J0IERlY2tHTCBmcm9tIFwiZGVjay5nbFwiO1xuaW1wb3J0IHsgU2NhdHRlcnBsb3RMYXllciB9IGZyb20gXCJAZGVjay5nbC9sYXllcnNcIjtcblxuY29uc3QgTUFQQk9YX1RPS0VOID1cbiAgXCJway5leUoxSWpvaWNtOW9hWFJyZFcxaGNqRWlMQ0poSWpvaVkydGtiekpoZVd4cE1XNXphekp5YkdOd1lYVnhNV28xYVNKOS54SWJtZWpEd00wdkRvczB6WmZCNkRBXCI7XG5cblxuY29uc3QgUHJlY29uQ2l0eU1hcCA9ICh7XG4gIHZpZXdTdGF0ZSxcbiAgc2V0Vmlld1N0YXRlLFxuICBzZWxlY3RlZEhvbWUsXG4gIHNldE9wZW5Qcm9qZWN0c01vZGFsLFxuICBzZXRTZWxlY3RlZENpdHlEYXRhXG59KSA9PiB7XG4gIGNvbnN0IFtsYXllcnMsIHNldExheWVyc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtwb3B1cCwgc2V0UG9wdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcHJvamVjdHMsIHNldFByb2plY3RzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtob3ZlcmVkUmVnaW9uLCBzZXRIb3ZlcmVkUmVnaW9uXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtsYXRpdHVkZSwgc2V0TGF0aXR1ZGVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2xvbmdpdHVkZSwgc2V0TG9uZ2l0dWRlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt4LCBzZXRYXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt5LCBzZXRZXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt4QXhpcywgc2V0WEF4aXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3lBeGlzLCBzZXRZQXhpc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbaXNTZWxlY3RlZCwgc2V0SXNTZWxlY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHNldExheWVycyhbc2VsZWN0ZWRDaXR5U2NhdHRlcnBsb3RdKTtcbiAgfSxbXSlcblxuICBjb25zdCBoYW5kbGVQcm9qZWN0TW9kYWwgPSAoc2VsZWN0ZWREYXRhKSA9PiB7XG4gICAgc2V0T3BlblByb2plY3RzTW9kYWwodHJ1ZSk7XG4gICAgc2V0U2VsZWN0ZWRDaXR5RGF0YShzZWxlY3RlZERhdGEpO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdGVkQ2l0eVNjYXR0ZXJwbG90ID0gbmV3IFNjYXR0ZXJwbG90TGF5ZXIoe1xuICAgIGlkOiBcInNjYXR0ZXJwbG90LWxheWVyNFwiLFxuICAgIGRhdGE6IHNlbGVjdGVkSG9tZSxcbiAgICBwaWNrYWJsZTogdHJ1ZSxcbiAgICBnZXRQb3NpdGlvbjogKGQpID0+IFtkLmNvb3JkaW5hdGVzWzBdLCBkLmNvb3JkaW5hdGVzWzFdXSxcbiAgICBwaWNrYWJsZTogdHJ1ZSxcbiAgICBvcGFjaXR5OiAxLFxuICAgIHN0cm9rZWQ6IHRydWUsXG4gICAgZmlsbGVkOiB0cnVlLFxuICAgIHJhZGl1c1NjYWxlOiA3LFxuICAgIHJhZGl1c01pblBpeGVsczogOCxcbiAgICByYWRpdXNNYXhQaXhlbHM6IDEwMCxcbiAgICBsaW5lV2lkdGhNaW5QaXhlbHM6IDIsXG4gICAgZ2V0UG9zaXRpb246IChkKSA9PiBkLmNvb3JkaW5hdGVzLFxuICAgIGdldFJhZGl1czogMTAsXG4gICAgZ2V0RmlsbENvbG9yOiAoZCkgPT4gWzI0OCwgMTU4LCA1NV0sXG4gICAgZ2V0TGluZUNvbG9yOiAoZCkgPT4gWzI0OCwgMTU4LCA1NV0sXG4gICAgLy8gb25DbGljazogKGluZm8sIGV2ZW50KSA9PiB7XG4gICAgLy8gICBzZXRFYXN0UmVnaW9uKFtpbmZvLm9iamVjdF0pO1xuICAgIC8vICAgc2V0U2VsZWN0ZWRDaXR5RGF0YShbaW5mby5vYmplY3RdKTtcbiAgICAvLyAgIHNldE9wZW5Qcm9qZWN0c01vZGFsKHRydWUpXG4gICAgLy8gfSxcbiAgICBvbkhvdmVyOiAoaW5mbykgPT4ge1xuICAgICAgaWYgKGluZm8ub2JqZWN0KSB7XG4gICAgICAgIHNldFBvcHVwKHRydWUpO1xuICAgICAgICBzZXRMYXRpdHVkZShpbmZvLmNvb3JkaW5hdGVbMV0pO1xuICAgICAgICBzZXRMb25naXR1ZGUoaW5mby5jb29yZGluYXRlWzBdKTtcbiAgICAgICAgc2V0UHJvamVjdHMoaW5mby5vYmplY3QpO1xuICAgICAgICBzZXRYKGluZm8ueCk7XG4gICAgICAgIHNldFkoaW5mby55KTtcbiAgICAgIH1cbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8RGVja0dMXG4gICAgICAgIHZpZXdTdGF0ZT17dmlld1N0YXRlfVxuICAgICAgICBvblZpZXdTdGF0ZUNoYW5nZT17KHsgdmlld1N0YXRlIH0pID0+IHtcbiAgICAgICAgICBzZXRWaWV3U3RhdGUodmlld1N0YXRlKTtcbiAgICAgICAgfX1cbiAgICAgICAgY29udHJvbGxlcj17dHJ1ZX1cbiAgICAgICAgbGF5ZXJzPXtbbGF5ZXJzXX1cbiAgICAgID5cbiAgICAgICAgPFN0YXRpY01hcFxuICAgICAgICAgIC8vICAgcmVmPXtzZXRtYXBDb21wb25lbnR9XG4gICAgICAgICAgcmV1c2VNYXBzXG4gICAgICAgICAgbWFwU3R5bGU9e1wibWFwYm94Oi8vc3R5bGVzL3JvaGl0a3VtYXIxL2NrZG8zZnlrcDRuM3QxaWxpYnNpc2gxY2RcIn1cbiAgICAgICAgICBwcmV2ZW50U3R5bGVEaWZmaW5nPXt0cnVlfVxuICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXtNQVBCT1hfVE9LRU59XG4gICAgICAgIC8+XG4gICAgICA8L0RlY2tHTD5cbiAgICAgIHtwb3B1cCA9PT0gdHJ1ZSA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sdGlwMVwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvb2x0aXBDb250ZW50XCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHRvcDogeSxcbiAgICAgICAgICAgICAgbGVmdDogeCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgIHtwcm9qZWN0cyAmJiBwcm9qZWN0cy5jaXR5RGF0YSAmJlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9qZWN0Q2FyZFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByb2plY3RNb2RhbChwcm9qZWN0cy5jaXR5RGF0YSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9qZWN0SW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBgdXJsKCR7UHJvamVjdHBpYzF9KWAgfX1cbiAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZFRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3ROYW1lXCI+e3Byb2plY3RzLmNpdHlEYXRhLkNvbW11bml0eX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhZ2VcIj5WSVAgTGF1bmNoPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+JCB7cHJvamVjdHMuY2l0eURhdGEuU3RhcnRpbmdfRnJvbV9QcmljZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFyZWFcIj57cHJvamVjdHMuY2l0eURhdGEuQWRkcmVzc308L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByZWNvbkNpdHlNYXA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/precon/preconCityMap.js\n");

/***/ })

})