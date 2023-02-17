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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Play:wght@700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  font-family: \\\"Play\\\", sans-serif;\\n  background-color: rgb(227, 244, 254);\\n}\\n\\nimg {\\n  position: fixed;\\n  height: 40em;\\n  z-index: -2;\\n}\\n\\n@media screen and (min-width: 768px) {\\n  img {\\n    position: fixed;\\n    width: 100vw;\\n    height: 150vh;\\n    margin-top: -65vh;\\n  }\\n}\\n.window {\\n  margin-top: 1em;\\n  font-size: 3.5rem;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  margin-left: -3.5em;\\n}\\n.window .menubutton {\\n  position: absolute;\\n  background: none;\\n  border: none;\\n  font-size: 2rem;\\n  color: white;\\n  margin-top: -0.8em;\\n  margin-left: 16em;\\n  color: rgb(0, 0, 0);\\n  text-shadow: 0px 0px 0px #ffffff, 0px 0px 4px #ffffff;\\n}\\n.window .temperatureMain {\\n  font-size: 5rem;\\n  margin-left: 2.5em;\\n  color: rgb(0, 0, 0);\\n  text-shadow: 0px 0px 0px #ffffff, 0px 0px 4px #ffffff;\\n}\\n.window .feels {\\n  font-size: 2rem;\\n  margin-left: 5em;\\n  color: rgb(255, 255, 255);\\n  text-shadow: 0px 0px 0px #000000, 0px 0px 5px #000000;\\n}\\n.window .city {\\n  margin-top: 5em;\\n  margin-left: 2em;\\n  color: rgb(255, 255, 255);\\n  text-shadow: 0px 0px 0px #000000, 0px 0px 5px #000000;\\n}\\n\\n.background {\\n  z-index: -1;\\n  width: 100vw;\\n  margin-top: -10em;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #1C9CF6, #1C9CF6, #1C9CF6, #1C9CF6, #1C9CF6, #1C9CF6, #1C9CF6, #1C9CF6, #1C9CF6, #1C9CF6, #1C9CF6, #1C9CF6, #1C9CF6, #1C9CF6, #1C9CF6, #1C9CF6, #1C9CF6, #1C9CF6, #1C9CF6, #1C9CF6, #1C9CF6);\\n  margin-top: -1.8em;\\n  height: 90vh;\\n}\\n.background .weather {\\n  margin-top: 4em;\\n  margin-bottom: -2em;\\n  font-size: 1.6rem;\\n  margin-left: 1em;\\n  color: rgb(255, 255, 255);\\n  text-shadow: 0px 0px 0px #000000, 0px 0px 5px #000000;\\n}\\n\\n.citymenudiv {\\n  color: white;\\n}\\n.citymenudiv .subcity {\\n  margin-top: 1em;\\n  max-height: 3em;\\n  min-width: 10em;\\n  font-size: 2rem;\\n  padding-top: 1em;\\n  padding-left: 1em;\\n  padding-bottom: 1em;\\n  border: solid 10px #1C9CF6;\\n  background-color: #1D71F2;\\n  text-shadow: 0px 0px 0px #000000, 0px 0px 5px #000000;\\n  border-radius: 2em;\\n  display: flex;\\n  flex-direction: row;\\n  box-shadow: 0px 0px 0px #000000, 1px 1px 20px #000000;\\n}\\n.citymenudiv .subcity .temperaturemenu {\\n  position: absolute;\\n  margin-left: 7em;\\n}\\n\\n.submitB {\\n  margin: 3em;\\n  background-color: none;\\n  padding: 0.5em;\\n}\\n\\n.search {\\n  margin-top: 1em;\\n}\\n\\ninput {\\n  padding: 10px;\\n  border-radius: 5px;\\n  border: none;\\n  background-color: #f8f8f8;\\n  color: #444;\\n  font-weight: 800;\\n  font-size: 1.1rem;\\n}\\ninput:hover {\\n  background-color: #f1f1f1;\\n}\\ninput:focus {\\n  outline: none;\\n  box-shadow: 0 0 3px 2px #f4a261;\\n}\\ninput.startup {\\n  background-color: #f4a261;\\n  color: white;\\n  font-weight: bold;\\n  text-transform: uppercase;\\n  transition: background-color 0.2s ease;\\n}\\ninput.startup:hover {\\n  background-color: #264653;\\n}\\ninput.startup:focus {\\n  box-shadow: 0 0 3px 2px #264653;\\n}\\n\\n.newele {\\n  margin-top: 10em;\\n  margin-bottom: 10em;\\n  border: solid red;\\n}\\n\\nbutton {\\n  padding: 10px 20px;\\n  border-radius: 5px;\\n  border: none;\\n  background-color: #f8f8f8;\\n  font-family: \\\"Play\\\" sans-serif;\\n  font-weight: 900;\\n  font-size: 1.2rem;\\n  color: #444;\\n  cursor: pointer;\\n}\\nbutton:hover {\\n  background-color: #f1f1f1;\\n}\\nbutton:focus {\\n  outline: none;\\n  box-shadow: 0 0 3px 2px #f4a261;\\n}\\nbutton.startup {\\n  background-color: #f4a261;\\n  color: white;\\n  font-weight: bold;\\n  text-transform: uppercase;\\n  transition: background-color 0.2s ease;\\n}\\nbutton.startup:hover {\\n  background-color: #264653;\\n}\\nbutton.startup:focus {\\n  box-shadow: 0 0 3px 2px #264653;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCityTemperature\": () => (/* binding */ getCityTemperature),\n/* harmony export */   \"getTemperature\": () => (/* binding */ getTemperature)\n/* harmony export */ });\nasync  function getTemperature(city){\n    \n    \n    let lat_long_array=getCoordinate(city);\n    \n    let weather_array=[];\n    weather_array=await getTempApi(lat_long_array[0],lat_long_array[1]);\n    console.log(\"hlo\",);\n    \n    return weather_array;\n}\n\nasync function getTempApi(lat, long){\n    const current_weather=true;\n    const untitled =\"363097f69ad994cd0202332bce224c0a\";\n    //I know that it it exposed, but there is nothing I can do with my current knowladge\n    \n    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${untitled}`,{mode: 'cors'});\n    const data= await response.json();\n    console.log(data);\n    \n    return data;\n}\nfunction getCoordinate(city){\n\n    //create the city object property for every item in that array that you know that is\n\n    const city_latlong={\n        \"Lisbon\":[38.722252,-9.139337,\"./images/aayush-gupta-lisbon.jpg\"],\n        \"Alcochete\":[38.756031,-8.961030,\"./images/alcochete-clear.png\"],\n        \"Faro\":[40.707428,-73.922844,\"./images/kobu-agency-faro.jpg\"],\n        \"Paris\":[48.856613,2.352222,\"./images/earth-Paris.jpg\"],\n        \"Brasilia\":[-15.826691,-47.921822,\"./images/ckturistando-Brasilia.jpg\"],\n        \"New York\":[40.730610,-73.935242,\"./images/earth-Paris.jpg\"]\n    }\n\n    city.image=city_latlong[city.name][2];\n    console.log(getCityTemperature(\"London\"));\n    return city_latlong[city.name];\n    \n}\n\nasync function getCityTemperature(name){\n    let untitled=\"363097f69ad994cd0202332bce224c0a\";\n    console.log(\"what is wrong with this?\");\n    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=${1}&appid=${untitled}`);\n    const data= await response.json();\n    const city_info={\n        \"name\":data[0].name,\n        \"lat\":data[0].lat,\n        \"lon\":data[0].lon\n    }\n\n    \n    const temperatures=await getSubTemperatur(city_info);\n    console.log(\"afda\",temperatures,\"dadfafdfds\");\n    return await temperatures;\n}\nasync function getSubTemperatur(city_object){\n    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city_object.lat}&lon=${city_object.lon}&appid=${\"363097f69ad994cd0202332bce224c0a\"}`);\n    const data= await response.json();\n    \n    return data;\n\n}\n\n\n\n//# sourceURL=webpack://weather/./src/api.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMain\": () => (/* binding */ loadMain)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n\n\nfunction loadMain(weather_array,city){\n    const body= document.querySelector(\"body\");\n    const window =document.createElement(\"div\");\n    const image_city=document.createElement(\"img\");\n    const temperature_label=document.createElement(\"p\");\n    const background= document.createElement(\"div\");\n    const weather_info_label=document.createElement(\"p\");\n    const city_label=document.createElement(\"p\");\n    const feels_like_label=document.createElement(\"p\");\n    const cloud_label=document.createElement(\"p\");\n    const menu_button=document.createElement(\"button\");\n    const github_button=document.createElement(\"a\");\n    const sunset_label=document.createElement(\"p\");\n\n    \n    \n\n    \n    const temperature_object={\n        \"temperature\":`${Math.round(weather_array.main.temp-272.15)}°`,\n        \"temperatureMin\":`${Math.round(weather_array.main.temp_min-272.15)}°`,\n        \"temperatureMax\":`${Math.round(weather_array.main.temp_max-272.15)}°`,\n        \"feelsLike\":`${Math.round(weather_array.main.feels_like-272.15)}°`,\n        \"windSpeed\":Math.round(weather_array.wind.speed),\n        \"clouds\":weather_array.weather[0].description,\n        \"sunset\":new Date(weather_array.sys.sunset*1000)\n    }\n    body.innerHTML=\"\";\n    city_label.innerText=city.name;\n    image_city.src=city.image;\n    menu_button.innerText=\"☰\";\n    sunset_label.innerText=`🌇 Sunset today: ${sunsetTime(temperature_object.sunset)}`;\n\n\n    \n    menu_button.setAttribute(\"class\",\"menubutton\");\n    background.setAttribute(\"class\",\"background\");\n    temperature_label.setAttribute(\"class\",\"temperatureMain\");\n    city_label.setAttribute(\"class\",\"city\");\n    window.setAttribute(\"class\",\"window\");\n    weather_info_label.setAttribute(\"class\",\"weather\");\n    sunset_label.setAttribute(\"class\",\"weather\");\n    feels_like_label.setAttribute(\"class\",\"feels\");\n    cloud_label.setAttribute(\"class\",\"feels\");\n    \n    \n    menu_button.addEventListener(\"click\",()=>{\n        //body.style.transition = \"height 3s ease-in\";\n        \n        setTimeout(function(){\n            loadMenu();\n        },100);\n    })\n    \n    let wind_condition;\n    temperature_object.windSpeed<5?wind_condition=\"Light\":\"Strong\";\n    console.log(temperature_object.windSpeed);\n    weather_info_label.innerText=`Today has ${temperature_object.clouds}, with temperatures reaching up to ${temperature_object.temperatureMax}. Winds will be ${wind_condition}. `;\n    cloud_label.innerText=`${temperature_object.clouds}`;\n    feels_like_label.innerText=`H:${temperature_object.temperatureMax}   L:${temperature_object.temperatureMin}`;\n    temperature_label.innerText=temperature_object.temperature;\n\n    window.appendChild(menu_button);\n    window.appendChild(temperature_label);\n    window.appendChild(cloud_label);\n    window.appendChild(feels_like_label);\n    window.appendChild(city_label);\n\n    background.appendChild(weather_info_label);\n    background.appendChild(sunset_label);\n    \n\n    body.appendChild(window);\n    body.appendChild(image_city);\n    body.appendChild(background);\n}\n\nasync function loadMenu(){\n    const body = document.querySelector(\"body\");\n    const cities_div=document.createElement(\"div\");\n    const search_bar=document.createElement(\"input\");\n    const submit=document.createElement(\"button\");\n\n\n\n\n    let city_info;\n\n    let cities=[\"Alcochete\",\"Paris\",\"Brasilia\"];\n    body.innerHTML=\"\";\n    submit.innerText=\"Search\";\n    cities.forEach(async city_name => {\n        console.log(city_name, \"hello \");\n        const city_label=document.createElement(\"div\");\n        const city_name_label=document.createElement(\"p\");\n        const city_temperature_label=document.createElement(\"p\");\n        const background=document.createElement(\"img\");\n\n\n        let city={\n            \"name\":city_name,\n            \"image\":\"\"\n        }\n        city_name_label.innerText=city_name;\n        let weather_array=await (0,_api__WEBPACK_IMPORTED_MODULE_0__.getTemperature)(city);\n        city_temperature_label.innerText=`${Math.round(weather_array.main.temp-272.15)}°`;\n        city_label.addEventListener(\"click\", ()=>{\n            loadMain(weather_array,city);\n        })\n\n        \n\n        city_label.setAttribute(\"class\",\"subcity\");\n        city_temperature_label.setAttribute(\"class\",\"temperaturemenu\");\n        city_label.appendChild(city_name_label);\n        city_label.appendChild(city_temperature_label);\n        cities_div.appendChild(city_label)\n    });\n    cities_div.setAttribute(\"class\",\"citymenudiv\");\n    submit.setAttribute(\"class\",\"submitB\");\n    search_bar.setAttribute(\"class\",\"search\");\n\n    //when client clicks on the search button inside the menu\n    submit.addEventListener(\"click\", async()=>{\n        console.log(search_bar.value,cities, \"search bar value\");\n        search_bar.value!= ( false || \"\") && isSameCity(cities,search_bar.value)?onSubmit(search_bar,submit,city_info,cities_div,cities):{};\n        });\n    body.appendChild(search_bar);\n    body.appendChild(submit);\n    body.appendChild(cities_div);\n}\n\nfunction sunsetTime(date){\n    let hours = date.getHours();\n    let minutes = date.getMinutes().toString().padStart(2, '0');\n    let formattedTime = hours + \":\" + minutes;\n    return formattedTime;\n\n}\n\nasync function onSubmit(search_bar,submit,city_info,cities_div,cities){\n    city_info= await (0,_api__WEBPACK_IMPORTED_MODULE_0__.getCityTemperature)(search_bar.value);\n    const new_city=document.createElement(\"div\");\n    const new_city_name=document.createElement(\"p\");\n    const new_city_temperature=document.createElement(\"p\");\n\n\n    new_city_name.innerText=search_bar.value;\n\n    console.log(city_info,search_bar.value);\n    new_city_temperature.innerText=`${Math.round(city_info.main.temp-272.15)}°`;\n\n    new_city.setAttribute(\"class\",\"subcity\");\n    new_city_temperature.setAttribute(\"class\",\"temperaturemenu\");\n\n    new_city.addEventListener(\"click\", ()=>{\n        let city={\n            \"name\":search_bar.value,\n            \"image\":\"\"\n        }\n        city.image=\"./images/ryo-yoshitake-city-unsplash.jpg\";\n        loadMain(city_info,city);\n    });\n    cities.push(search_bar.value.charAt(0).toUpperCase() + search_bar.value.slice(1).toLowerCase());\n    new_city.appendChild(new_city_name);\n    console.log(new_city_temperature,new_city_name,new_city);\n    new_city.appendChild(new_city_temperature);\n    cities_div.appendChild(new_city);\n}\n\nfunction isSameCity(cities,value){\n    let condition=true;\n    let city_name=value;\n    city_name = city_name.charAt(0).toUpperCase() + city_name.slice(1).toLowerCase();\n    cities.forEach((item)=>{\n        if(item==city_name){\n            condition=false;\n        }\n    })\n    return condition;\n}\n\n//# sourceURL=webpack://weather/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\n\n\nasync function main(){\n    let city={\n        \"name\":\"Alcochete\",\n        \"image\":\"\"\n    }\n    let weather_array=await (0,_api__WEBPACK_IMPORTED_MODULE_0__.getTemperature)(city);\n    (0,_app__WEBPACK_IMPORTED_MODULE_1__.loadMain)(weather_array,city)\n    console.log(\"working\");\n}\nmain();\n\n\n\n//# sourceURL=webpack://weather/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;