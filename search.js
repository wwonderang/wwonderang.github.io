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

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _img_airplane_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/airplane.png */ \"./src/img/airplane.png\");\n\n\nlet key;\nlet countryList = 'https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json';\nfetch(countryList).then(response => {\n  if (response.ok) {\n    return response.json();\n  }\n\n  throw new Error('Network response was not ok.');\n}).then(dataCountry => {\n  for (key in dataCountry) {\n    let newCountry = document.createElement('option');\n    newCountry.value = key;\n    newCountry.innerHTML = key;\n    document.querySelector('#flights-countries').appendChild(newCountry);\n    document.querySelector('#countries').appendChild(newCountry.cloneNode(true));\n    document.querySelector('#car-countries').appendChild(newCountry.cloneNode(true));\n  }\n\n  document.querySelector('#flights-countries').addEventListener('change', function () {\n    let newCity = dataCountry[this.value];\n\n    for (let iterator of newCity) {\n      let cityOption = document.createElement('option');\n      let flightsCities = document.getElementById('flights-cities');\n      let cities = document.getElementById('cities');\n      let carCities = document.getElementById('car-cities');\n      cityOption.innerHTML = iterator;\n      flightsCities.appendChild(cityOption);\n      cities.appendChild(cityOption.cloneNode(true));\n      carCities.appendChild(cityOption.cloneNode(true));\n    }\n  });\n});\nlet date = new Date();\nlet tdate = date.getDate();\n\nif (tdate < 10) {\n  tdate = '0' + tdate;\n}\n\nlet month = date.getMonth() + 1;\n\nif (month < 10) {\n  month = '0' + month;\n}\n\nlet year = date.getUTCFullYear();\nlet minDate = year + '-' + month + '-' + tdate;\nlet endDate = date.getDate() + 1;\n\nif (endDate < 10) {\n  endDate = '0' + endDate;\n}\n\nlet minEndDate = year + '-' + month + '-' + endDate;\nconsole.log(minEndDate);\ndocument.querySelector('#startDateFlights').setAttribute('min', minDate);\ndocument.querySelector('#endDateFlights').setAttribute('min', minEndDate);\ndocument.querySelector('#startDateHotels').setAttribute('min', minDate);\ndocument.querySelector('#endDateHotels').setAttribute('min', minEndDate);\ndocument.querySelector('#startDateCars').setAttribute('min', minDate);\ndocument.querySelector('#endDateCars').setAttribute('min', minEndDate);\n\n//# sourceURL=webpack://first-project/./src/search.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://first-project/./src/style.scss?");

/***/ }),

/***/ "./src/img/airplane.png":
/*!******************************!*\
  !*** ./src/img/airplane.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"275d0a23bbb712865519.png\";\n\n//# sourceURL=webpack://first-project/./src/img/airplane.png?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/search.js");
/******/ 	
/******/ })()
;