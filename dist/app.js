/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --muted-color: #e1e1e1;\\n    --border-radius: 4px;\\n}\\n\\n.black {\\n    color: black;\\n}\\n\\n.table-end {\\n    border-bottom-left-radius: 10px;\\n    border-bottom-right-radius: 10px;\\n}\\n\\n.logo-img {\\n    height: 46px;\\n}\\n\\n.login-body {\\n    margin-top: 2rem;\\n}\\n\\n#header .logged-in-user {\\n    display: block !important;\\n}\\n\\n.footer {\\n    display: none;\\n}\\n\\n.input-extension {\\n    display: flex;\\n    width: 100%;\\n    align-items: stretch;\\n    border-radius: var(--border-radius);\\n    margin: 5px 0 5px 0;\\n    border: 1px solid var(--muted-color);\\n}\\n\\n.input-extension > input {\\n    border: none;\\n    width: 100%;\\n    margin: 0;\\n    border-radius: 0;\\n    z-index: 1;\\n}\\n\\n.input-extension > :not(input) {\\n    padding: 0 10px 0 10px;\\n    font-size: 12px;\\n    display: flex;\\n    align-items: center;\\n    background: var(--muted-color);\\n}\\n\\n.input-extension > :first-child {\\n    border-top-left-radius: var(--border-radius);\\n    border-bottom-left-radius: var(--border-radius);\\n}\\n\\n.input-extension > :last-child {\\n    border-top-right-radius: var(--border-radius);\\n    border-bottom-right-radius: var(--border-radius);\\n}\\n\\n.line {\\n    display: flex;\\n    align-items: center;\\n}\\n\\ninput[type=\\\"checkbox\\\"] {\\n    -webkit-appearance: checkbox;\\n    height: 1.5rem;\\n    width: 1.5rem;\\n}\\n\\ninput[type=\\\"checkbox\\\"] + label {\\n    margin-left: .5rem;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ed-super/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://ed-super/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://ed-super/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://ed-super/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ed-super/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://ed-super/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://ed-super/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://ed-super/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://ed-super/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://ed-super/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Average\": () => (/* binding */ Average)\n/* harmony export */ });\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar Average = /** @class */ (function () {\n    function Average() {\n    }\n    Average.calculate = function (numbers) {\n        var sum = numbers.reduce(function (partialSum, x) { return partialSum + x; }, 0);\n        return sum / numbers.length;\n    };\n    Average.format = function (average) {\n        return average.toFixed(2);\n    };\n    Average.formatInt = function (average) {\n        return Math.round(average);\n    };\n    Average.color = function (average) {\n        var color = (average - 1) * 30;\n        return \"hsl(\".concat(color, \", 71%, 90%)\");\n    };\n    Average.colored = function (element, average) {\n        element.setAttribute(\"style\", \"background: \".concat(Average.color(average), \";\"));\n    };\n    Average.prototype.showAverage = function (grades, gradesTable, extraDivs) {\n        if (extraDivs === void 0) { extraDivs = 0; }\n        var average = Average.calculate(grades);\n        var row = document.createElement(\"div\");\n        var rowClasses = [\"flex-table\", \"row\", \"table-end\"];\n        for (var i = 0; i < rowClasses.length; i++) {\n            row.classList.add(rowClasses[i]);\n        }\n        ;\n        Average.colored(row, average);\n        for (var i = 0; i < extraDivs; i++) {\n            var column = document.createElement(\"div\");\n            column.classList.add(\"flex-row\");\n            row.appendChild(column);\n        }\n        ;\n        var titleColumn = document.createElement(\"div\");\n        titleColumn.classList.add(\"flex-row\");\n        titleColumn.classList.add(\"first\");\n        var titleColumnText = document.createTextNode(\"Prosjek ocjena\");\n        titleColumn.appendChild(titleColumnText);\n        var valueColumn = document.createElement(\"div\");\n        var valueColumnClasses = [\"flex-row\", \"head\", \"table-end\"];\n        for (var i = 0; i < valueColumnClasses.length; i++) {\n            valueColumn.classList.add(valueColumnClasses[i]);\n        }\n        ;\n        var valueColumnText = document.createTextNode(Average.format(average));\n        valueColumn.appendChild(valueColumnText);\n        row.appendChild(titleColumn);\n        row.appendChild(valueColumn);\n        gradesTable.appendChild(row);\n    };\n    return Average;\n}());\n\nvar SubjectAverage = /** @class */ (function (_super) {\n    __extends(SubjectAverage, _super);\n    function SubjectAverage() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    SubjectAverage.prototype.getGrades = function () {\n        var grades = document.getElementsByClassName(\"grade\");\n        var gradeList = [];\n        for (var i = 0; i < grades.length; i++) {\n            var gradeNumbers = grades[i].children;\n            for (var j = 0; j < gradeNumbers.length; j++) {\n                var gradeFianl = gradeNumbers[j].children;\n                for (var k = 0; k < gradeFianl.length; k++) {\n                    var grade = gradeFianl[k];\n                    gradeList.push(parseInt(grade.innerHTML));\n                }\n            }\n        }\n        return gradeList;\n    };\n    SubjectAverage.prototype.show = function () {\n        var gradesTable = document.getElementsByClassName(\"grades-table\")[0];\n        var grades = this.getGrades();\n        _super.prototype.showAverage.call(this, grades, gradesTable);\n    };\n    return SubjectAverage;\n}(Average));\nvar AllSubjectsAverage = /** @class */ (function (_super) {\n    __extends(AllSubjectsAverage, _super);\n    function AllSubjectsAverage() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    AllSubjectsAverage.prototype.getSubjects = function () {\n        return document.querySelectorAll(\".new-grades-table\");\n    };\n    AllSubjectsAverage.prototype.getNotes = function (subject) {\n        return subject.querySelectorAll(\".row\");\n    };\n    AllSubjectsAverage.prototype.getGrade = function (note) {\n        var gradeContainer = note.querySelectorAll(\"div\")[3];\n        if (gradeContainer.children.length > 0) {\n            return parseInt(gradeContainer.querySelector(\"span\").innerHTML);\n        }\n        else {\n            return null;\n        }\n    };\n    AllSubjectsAverage.prototype.getGrades = function (subject) {\n        var notes = this.getNotes(subject);\n        var gradeList = [];\n        for (var i = 0; i < notes.length; i++) {\n            var note = notes[i];\n            var grade = this.getGrade(note);\n            if (grade != null) {\n                gradeList.push(grade);\n            }\n        }\n        return gradeList;\n    };\n    AllSubjectsAverage.prototype.calculateSubjectAverage = function (subject) {\n        var gradeList = this.getGrades(subject);\n        if (gradeList.length === 0)\n            return null;\n        _super.prototype.showAverage.call(this, gradeList, subject, 2);\n        return Average.calculate(gradeList);\n    };\n    AllSubjectsAverage.prototype.calculateOverallSuccess = function (menu, title, button, finalGrades) {\n        var overallSuccess = Average.calculate(finalGrades);\n        var color = Average.color(overallSuccess);\n        Average.colored(menu, overallSuccess);\n        title.classList.add(\"black\");\n        button.onclick = null;\n        button.textContent = Average.format(overallSuccess);\n    };\n    // TODO: What if class is finished?\n    AllSubjectsAverage.prototype.showOverallSuccess = function (finalGrades) {\n        var _this = this;\n        var menu = document.querySelector(\".dropdown-menu-wrapper\");\n        menu.classList.remove(\"js-dropdown-menu\");\n        menu.querySelector(\".dropdown-content\").remove();\n        menu.querySelector(\".icon-angle-down\").remove();\n        var title = menu.querySelector(\".dropdown-title span\");\n        title.textContent = \"OPĆI USPJEH:\";\n        var button = document.createElement(\"span\");\n        button.textContent = \"Izračunaj\";\n        button.onclick = function () {\n            _this.calculateOverallSuccess(menu, title, button, finalGrades);\n        };\n        menu.appendChild(button);\n    };\n    AllSubjectsAverage.prototype.show = function () {\n        var finalGrades = [];\n        var subjects = this.getSubjects();\n        for (var i = 0; i < subjects.length; i++) {\n            var subject = subjects[i];\n            var subjectAverage = this.calculateSubjectAverage(subject);\n            if (subjectAverage === null)\n                continue;\n            finalGrades.push(Average.formatInt(subjectAverage));\n        }\n        this.showOverallSuccess(finalGrades);\n    };\n    return AllSubjectsAverage;\n}(Average));\nvar Login = /** @class */ (function () {\n    function Login() {\n    }\n    Login.login = function (username, password) {\n        var loginForm = this.getLoginForm();\n        this.getUsername(loginForm).value = username;\n        this.getPassword(loginForm).value = password;\n        loginForm.requestSubmit();\n    };\n    Login.handleAccountSaving = function () {\n        // @ts-ignore\n        var tmp = app.readTmp();\n        if (tmp === \"\")\n            return;\n        var tmpSplit = tmp.split(\";\");\n        var username = tmpSplit[0];\n        var password = tmpSplit[1];\n        var fullname = this.getFullName();\n        // @ts-ignore\n        app.addAccount(username, password, fullname);\n        // @ts-ignore\n        app.writeTmp(\"\");\n    };\n    Login.getFullName = function () {\n        return document.querySelector(\".user-name\").children[0].textContent;\n    };\n    Login.getLoginForm = function () {\n        return document.querySelector(\".form-login\");\n    };\n    Login.getUsername = function (loginForm) {\n        return loginForm.querySelector('input[name=\"username\"]');\n    };\n    Login.getPassword = function (loginForm) {\n        return loginForm.querySelector('input[name=\"password\"]');\n    };\n    Login.getRememberMe = function (loginForm) {\n        return loginForm.querySelector('#remember-me');\n    };\n    Login.getSubmit = function (loginForm) {\n        return loginForm.querySelector('input[type=\"submit\"]');\n    };\n    Login.prototype.onLogin = function (loginForm) {\n        var _this = this;\n        loginForm.onsubmit = function (event) {\n            _this.demoLogin(loginForm, event);\n            _this.handleRememberMe(loginForm);\n        };\n    };\n    Login.prototype.demoLogin = function (loginForm, event) {\n        var username = Login.getUsername(loginForm);\n        if (username.value !== \"super\")\n            return;\n        var password = Login.getPassword(loginForm);\n        if (password.value !== \"man\")\n            return;\n        event.preventDefault();\n        alert(\"Ovo je testno okruženje! Upozoravamo da neke funkcije možda neće raditi.\");\n        location.replace(\"https://pisoj.github.io/ed-super/demo/class.html\");\n    };\n    Login.prototype.handleRememberMe = function (loginForm) {\n        if (!Login.getRememberMe(loginForm).checked)\n            return;\n        // @ts-ignore\n        app.writeTmp(\"\".concat(Login.getUsername(loginForm).value, \";\").concat(Login.getPassword(loginForm).value));\n    };\n    Login.prototype.addRememberMe = function (loginForm) {\n        var container = document.createElement(\"div\");\n        container.classList.add(\"line\");\n        var checkbox = document.createElement(\"input\");\n        checkbox.setAttribute(\"type\", \"checkbox\");\n        checkbox.setAttribute(\"id\", \"remember-me\");\n        checkbox.checked = true;\n        var label = document.createElement(\"label\");\n        label.setAttribute(\"for\", \"remember-me\");\n        label.textContent = \"Zapamti me\";\n        container.appendChild(checkbox);\n        container.appendChild(label);\n        Login.getSubmit(loginForm).before(container);\n        this.handleRememberMe(loginForm);\n    };\n    Login.prototype.addUsernameExtension = function (loginForm) {\n        var username = Login.getUsername(loginForm);\n        document.querySelector(\".login-header\").remove();\n        var usernameField = document.createElement(\"div\");\n        usernameField.classList.add(\"input-extension\");\n        usernameField.appendChild(username.cloneNode(true));\n        var usernameExtension = document.createElement(\"span\");\n        usernameExtension.textContent = \"@skole.hr\";\n        usernameField.appendChild(usernameExtension);\n        username.replaceWith(usernameField);\n    };\n    Login.prototype.show = function () {\n        var loginForm = Login.getLoginForm();\n        this.onLogin(loginForm);\n        this.addRememberMe(loginForm);\n        // @ts-ignore\n        if (typeof app !== \"undefined\") {\n            // @ts-ignore\n            window.Login = Login;\n            // @ts-ignore\n            app.selectAccount();\n        }\n        this.addUsernameExtension(loginForm);\n    };\n    return Login;\n}());\nfunction choseFeature() {\n    if (location.pathname.indexOf(\"login\") !== -1) {\n        var login = new Login;\n        login.show();\n        return;\n    }\n    customLogo();\n    if (location.pathname.indexOf(\"class\") !== -1) {\n        Login.handleAccountSaving();\n        return;\n    }\n    if (location.pathname.indexOf(\"grade\") !== -1 && location.pathname.indexOf(\"all\") !== -1) {\n        var allSubjectsAverage = new AllSubjectsAverage;\n        allSubjectsAverage.show();\n        return;\n    }\n    if (location.pathname.indexOf(\"grade\") !== -1) {\n        var subjectAverage = new SubjectAverage;\n        subjectAverage.show();\n        return;\n    }\n}\nfunction customLogo() {\n    var logoContainer = document.getElementsByClassName(\"logo\")[0];\n    logoContainer.innerHTML = \"\";\n    var superLogo = document.createElement(\"a\");\n    superLogo.classList.add(\"logo-link\");\n    superLogo.setAttribute(\"href\", \"/\");\n    var superLogoImg = document.createElement(\"img\");\n    superLogoImg.classList.add(\"logo-img\");\n    superLogoImg.setAttribute(\"src\", \"https://pisoj.github.io/ed-super/img/logo-256.webp\");\n    superLogoImg.setAttribute(\"alt\", \"eD Super\");\n    superLogo.appendChild(superLogoImg);\n    logoContainer.appendChild(superLogo);\n}\nif (typeof document !== 'undefined') {\n    choseFeature();\n}\n\n\n//# sourceURL=webpack://ed-super/./src/app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/style.css");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;