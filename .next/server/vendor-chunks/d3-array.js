"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/d3-array";
exports.ids = ["vendor-chunks/d3-array"];
exports.modules = {

/***/ "(ssr)/./node_modules/d3-array/src/ascending.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/ascending.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ascending)\n/* harmony export */ });\nfunction ascending(a, b) {\n  return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL2FzY2VuZGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RyZXNzLWFuYWx5c2lzLy4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9hc2NlbmRpbmcuanM/YjU1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc2NlbmRpbmcoYSwgYikge1xuICByZXR1cm4gYSA9PSBudWxsIHx8IGIgPT0gbnVsbCA/IE5hTiA6IGEgPCBiID8gLTEgOiBhID4gYiA/IDEgOiBhID49IGIgPyAwIDogTmFOO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/d3-array/src/ascending.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/d3-array/src/bisect.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/bisect.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bisectCenter: () => (/* binding */ bisectCenter),\n/* harmony export */   bisectLeft: () => (/* binding */ bisectLeft),\n/* harmony export */   bisectRight: () => (/* binding */ bisectRight),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascending.js */ \"(ssr)/./node_modules/d3-array/src/ascending.js\");\n/* harmony import */ var _bisector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bisector.js */ \"(ssr)/./node_modules/d3-array/src/bisector.js\");\n/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number.js */ \"(ssr)/./node_modules/d3-array/src/number.js\");\n\n\n\n\nconst ascendingBisect = (0,_bisector_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ascending_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nconst bisectRight = ascendingBisect.right;\nconst bisectLeft = ascendingBisect.left;\nconst bisectCenter = (0,_bisector_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_number_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).center;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bisectRight);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL2Jpc2VjdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVDO0FBQ0Y7QUFDSjs7QUFFakMsd0JBQXdCLHdEQUFRLENBQUMscURBQVM7QUFDbkM7QUFDQTtBQUNBLHFCQUFxQix3REFBUSxDQUFDLGtEQUFNO0FBQzNDLGlFQUFlLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0cmVzcy1hbmFseXNpcy8uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvYmlzZWN0LmpzP2JkZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFzY2VuZGluZyBmcm9tIFwiLi9hc2NlbmRpbmcuanNcIjtcbmltcG9ydCBiaXNlY3RvciBmcm9tIFwiLi9iaXNlY3Rvci5qc1wiO1xuaW1wb3J0IG51bWJlciBmcm9tIFwiLi9udW1iZXIuanNcIjtcblxuY29uc3QgYXNjZW5kaW5nQmlzZWN0ID0gYmlzZWN0b3IoYXNjZW5kaW5nKTtcbmV4cG9ydCBjb25zdCBiaXNlY3RSaWdodCA9IGFzY2VuZGluZ0Jpc2VjdC5yaWdodDtcbmV4cG9ydCBjb25zdCBiaXNlY3RMZWZ0ID0gYXNjZW5kaW5nQmlzZWN0LmxlZnQ7XG5leHBvcnQgY29uc3QgYmlzZWN0Q2VudGVyID0gYmlzZWN0b3IobnVtYmVyKS5jZW50ZXI7XG5leHBvcnQgZGVmYXVsdCBiaXNlY3RSaWdodDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/d3-array/src/bisect.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/d3-array/src/bisector.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/bisector.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ bisector)\n/* harmony export */ });\n/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ \"(ssr)/./node_modules/d3-array/src/ascending.js\");\n/* harmony import */ var _descending_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./descending.js */ \"(ssr)/./node_modules/d3-array/src/descending.js\");\n\n\n\nfunction bisector(f) {\n  let compare1, compare2, delta;\n\n  // If an accessor is specified, promote it to a comparator. In this case we\n  // can test whether the search value is (self-) comparable. We can’t do this\n  // for a comparator (except for specific, known comparators) because we can’t\n  // tell if the comparator is symmetric, and an asymmetric comparator can’t be\n  // used to test whether a single value is comparable.\n  if (f.length !== 2) {\n    compare1 = _ascending_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    compare2 = (d, x) => (0,_ascending_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(f(d), x);\n    delta = (d, x) => f(d) - x;\n  } else {\n    compare1 = f === _ascending_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] || f === _descending_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] ? f : zero;\n    compare2 = f;\n    delta = f;\n  }\n\n  function left(a, x, lo = 0, hi = a.length) {\n    if (lo < hi) {\n      if (compare1(x, x) !== 0) return hi;\n      do {\n        const mid = (lo + hi) >>> 1;\n        if (compare2(a[mid], x) < 0) lo = mid + 1;\n        else hi = mid;\n      } while (lo < hi);\n    }\n    return lo;\n  }\n\n  function right(a, x, lo = 0, hi = a.length) {\n    if (lo < hi) {\n      if (compare1(x, x) !== 0) return hi;\n      do {\n        const mid = (lo + hi) >>> 1;\n        if (compare2(a[mid], x) <= 0) lo = mid + 1;\n        else hi = mid;\n      } while (lo < hi);\n    }\n    return lo;\n  }\n\n  function center(a, x, lo = 0, hi = a.length) {\n    const i = left(a, x, lo, hi - 1);\n    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;\n  }\n\n  return {left, center, right};\n}\n\nfunction zero() {\n  return 0;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL2Jpc2VjdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1QztBQUNFOztBQUUxQjtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscURBQVM7QUFDeEIseUJBQXlCLHlEQUFTO0FBQ2xDO0FBQ0EsSUFBSTtBQUNKLHFCQUFxQixxREFBUyxVQUFVLHNEQUFVO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJlc3MtYW5hbHlzaXMvLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL2Jpc2VjdG9yLmpzP2IzNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFzY2VuZGluZyBmcm9tIFwiLi9hc2NlbmRpbmcuanNcIjtcbmltcG9ydCBkZXNjZW5kaW5nIGZyb20gXCIuL2Rlc2NlbmRpbmcuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmlzZWN0b3IoZikge1xuICBsZXQgY29tcGFyZTEsIGNvbXBhcmUyLCBkZWx0YTtcblxuICAvLyBJZiBhbiBhY2Nlc3NvciBpcyBzcGVjaWZpZWQsIHByb21vdGUgaXQgdG8gYSBjb21wYXJhdG9yLiBJbiB0aGlzIGNhc2Ugd2VcbiAgLy8gY2FuIHRlc3Qgd2hldGhlciB0aGUgc2VhcmNoIHZhbHVlIGlzIChzZWxmLSkgY29tcGFyYWJsZS4gV2UgY2Fu4oCZdCBkbyB0aGlzXG4gIC8vIGZvciBhIGNvbXBhcmF0b3IgKGV4Y2VwdCBmb3Igc3BlY2lmaWMsIGtub3duIGNvbXBhcmF0b3JzKSBiZWNhdXNlIHdlIGNhbuKAmXRcbiAgLy8gdGVsbCBpZiB0aGUgY29tcGFyYXRvciBpcyBzeW1tZXRyaWMsIGFuZCBhbiBhc3ltbWV0cmljIGNvbXBhcmF0b3IgY2Fu4oCZdCBiZVxuICAvLyB1c2VkIHRvIHRlc3Qgd2hldGhlciBhIHNpbmdsZSB2YWx1ZSBpcyBjb21wYXJhYmxlLlxuICBpZiAoZi5sZW5ndGggIT09IDIpIHtcbiAgICBjb21wYXJlMSA9IGFzY2VuZGluZztcbiAgICBjb21wYXJlMiA9IChkLCB4KSA9PiBhc2NlbmRpbmcoZihkKSwgeCk7XG4gICAgZGVsdGEgPSAoZCwgeCkgPT4gZihkKSAtIHg7XG4gIH0gZWxzZSB7XG4gICAgY29tcGFyZTEgPSBmID09PSBhc2NlbmRpbmcgfHwgZiA9PT0gZGVzY2VuZGluZyA/IGYgOiB6ZXJvO1xuICAgIGNvbXBhcmUyID0gZjtcbiAgICBkZWx0YSA9IGY7XG4gIH1cblxuICBmdW5jdGlvbiBsZWZ0KGEsIHgsIGxvID0gMCwgaGkgPSBhLmxlbmd0aCkge1xuICAgIGlmIChsbyA8IGhpKSB7XG4gICAgICBpZiAoY29tcGFyZTEoeCwgeCkgIT09IDApIHJldHVybiBoaTtcbiAgICAgIGRvIHtcbiAgICAgICAgY29uc3QgbWlkID0gKGxvICsgaGkpID4+PiAxO1xuICAgICAgICBpZiAoY29tcGFyZTIoYVttaWRdLCB4KSA8IDApIGxvID0gbWlkICsgMTtcbiAgICAgICAgZWxzZSBoaSA9IG1pZDtcbiAgICAgIH0gd2hpbGUgKGxvIDwgaGkpO1xuICAgIH1cbiAgICByZXR1cm4gbG87XG4gIH1cblxuICBmdW5jdGlvbiByaWdodChhLCB4LCBsbyA9IDAsIGhpID0gYS5sZW5ndGgpIHtcbiAgICBpZiAobG8gPCBoaSkge1xuICAgICAgaWYgKGNvbXBhcmUxKHgsIHgpICE9PSAwKSByZXR1cm4gaGk7XG4gICAgICBkbyB7XG4gICAgICAgIGNvbnN0IG1pZCA9IChsbyArIGhpKSA+Pj4gMTtcbiAgICAgICAgaWYgKGNvbXBhcmUyKGFbbWlkXSwgeCkgPD0gMCkgbG8gPSBtaWQgKyAxO1xuICAgICAgICBlbHNlIGhpID0gbWlkO1xuICAgICAgfSB3aGlsZSAobG8gPCBoaSk7XG4gICAgfVxuICAgIHJldHVybiBsbztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNlbnRlcihhLCB4LCBsbyA9IDAsIGhpID0gYS5sZW5ndGgpIHtcbiAgICBjb25zdCBpID0gbGVmdChhLCB4LCBsbywgaGkgLSAxKTtcbiAgICByZXR1cm4gaSA+IGxvICYmIGRlbHRhKGFbaSAtIDFdLCB4KSA+IC1kZWx0YShhW2ldLCB4KSA/IGkgLSAxIDogaTtcbiAgfVxuXG4gIHJldHVybiB7bGVmdCwgY2VudGVyLCByaWdodH07XG59XG5cbmZ1bmN0aW9uIHplcm8oKSB7XG4gIHJldHVybiAwO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/d3-array/src/bisector.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/d3-array/src/descending.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-array/src/descending.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ descending)\n/* harmony export */ });\nfunction descending(a, b) {\n  return a == null || b == null ? NaN\n    : b < a ? -1\n    : b > a ? 1\n    : b >= a ? 0\n    : NaN;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL2Rlc2NlbmRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RyZXNzLWFuYWx5c2lzLy4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9kZXNjZW5kaW5nLmpzP2E0MTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVzY2VuZGluZyhhLCBiKSB7XG4gIHJldHVybiBhID09IG51bGwgfHwgYiA9PSBudWxsID8gTmFOXG4gICAgOiBiIDwgYSA/IC0xXG4gICAgOiBiID4gYSA/IDFcbiAgICA6IGIgPj0gYSA/IDBcbiAgICA6IE5hTjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/d3-array/src/descending.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/d3-array/src/number.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/number.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ number),\n/* harmony export */   numbers: () => (/* binding */ numbers)\n/* harmony export */ });\nfunction number(x) {\n  return x === null ? NaN : +x;\n}\n\nfunction* numbers(values, valueof) {\n  if (valueof === undefined) {\n    for (let value of values) {\n      if (value != null && (value = +value) >= value) {\n        yield value;\n      }\n    }\n  } else {\n    let index = -1;\n    for (let value of values) {\n      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {\n        yield value;\n      }\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL251bWJlci5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFlO0FBQ2Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RyZXNzLWFuYWx5c2lzLy4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9udW1iZXIuanM/YzE5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBudW1iZXIoeCkge1xuICByZXR1cm4geCA9PT0gbnVsbCA/IE5hTiA6ICt4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24qIG51bWJlcnModmFsdWVzLCB2YWx1ZW9mKSB7XG4gIGlmICh2YWx1ZW9mID09PSB1bmRlZmluZWQpIHtcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgIGlmICh2YWx1ZSAhPSBudWxsICYmICh2YWx1ZSA9ICt2YWx1ZSkgPj0gdmFsdWUpIHtcbiAgICAgICAgeWllbGQgdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGZvciAobGV0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgaWYgKCh2YWx1ZSA9IHZhbHVlb2YodmFsdWUsICsraW5kZXgsIHZhbHVlcykpICE9IG51bGwgJiYgKHZhbHVlID0gK3ZhbHVlKSA+PSB2YWx1ZSkge1xuICAgICAgICB5aWVsZCB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/d3-array/src/number.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/d3-array/src/range.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/range.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ range)\n/* harmony export */ });\nfunction range(start, stop, step) {\n  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;\n\n  var i = -1,\n      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,\n      range = new Array(n);\n\n  while (++i < n) {\n    range[i] = start + i * step;\n  }\n\n  return range;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3JhbmdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0cmVzcy1hbmFseXNpcy8uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvcmFuZ2UuanM/ODZmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBzdGFydCA9ICtzdGFydCwgc3RvcCA9ICtzdG9wLCBzdGVwID0gKG4gPSBhcmd1bWVudHMubGVuZ3RoKSA8IDIgPyAoc3RvcCA9IHN0YXJ0LCBzdGFydCA9IDAsIDEpIDogbiA8IDMgPyAxIDogK3N0ZXA7XG5cbiAgdmFyIGkgPSAtMSxcbiAgICAgIG4gPSBNYXRoLm1heCgwLCBNYXRoLmNlaWwoKHN0b3AgLSBzdGFydCkgLyBzdGVwKSkgfCAwLFxuICAgICAgcmFuZ2UgPSBuZXcgQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICByYW5nZVtpXSA9IHN0YXJ0ICsgaSAqIHN0ZXA7XG4gIH1cblxuICByZXR1cm4gcmFuZ2U7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/d3-array/src/range.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/d3-array/src/ticks.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/ticks.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ticks),\n/* harmony export */   tickIncrement: () => (/* binding */ tickIncrement),\n/* harmony export */   tickStep: () => (/* binding */ tickStep)\n/* harmony export */ });\nconst e10 = Math.sqrt(50),\n    e5 = Math.sqrt(10),\n    e2 = Math.sqrt(2);\n\nfunction tickSpec(start, stop, count) {\n  const step = (stop - start) / Math.max(0, count),\n      power = Math.floor(Math.log10(step)),\n      error = step / Math.pow(10, power),\n      factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;\n  let i1, i2, inc;\n  if (power < 0) {\n    inc = Math.pow(10, -power) / factor;\n    i1 = Math.round(start * inc);\n    i2 = Math.round(stop * inc);\n    if (i1 / inc < start) ++i1;\n    if (i2 / inc > stop) --i2;\n    inc = -inc;\n  } else {\n    inc = Math.pow(10, power) * factor;\n    i1 = Math.round(start / inc);\n    i2 = Math.round(stop / inc);\n    if (i1 * inc < start) ++i1;\n    if (i2 * inc > stop) --i2;\n  }\n  if (i2 < i1 && 0.5 <= count && count < 2) return tickSpec(start, stop, count * 2);\n  return [i1, i2, inc];\n}\n\nfunction ticks(start, stop, count) {\n  stop = +stop, start = +start, count = +count;\n  if (!(count > 0)) return [];\n  if (start === stop) return [start];\n  const reverse = stop < start, [i1, i2, inc] = reverse ? tickSpec(stop, start, count) : tickSpec(start, stop, count);\n  if (!(i2 >= i1)) return [];\n  const n = i2 - i1 + 1, ticks = new Array(n);\n  if (reverse) {\n    if (inc < 0) for (let i = 0; i < n; ++i) ticks[i] = (i2 - i) / -inc;\n    else for (let i = 0; i < n; ++i) ticks[i] = (i2 - i) * inc;\n  } else {\n    if (inc < 0) for (let i = 0; i < n; ++i) ticks[i] = (i1 + i) / -inc;\n    else for (let i = 0; i < n; ++i) ticks[i] = (i1 + i) * inc;\n  }\n  return ticks;\n}\n\nfunction tickIncrement(start, stop, count) {\n  stop = +stop, start = +start, count = +count;\n  return tickSpec(start, stop, count)[2];\n}\n\nfunction tickStep(start, stop, count) {\n  stop = +stop, start = +start, count = +count;\n  const reverse = stop < start, inc = reverse ? tickIncrement(stop, start, count) : tickIncrement(start, stop, count);\n  return (reverse ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3RpY2tzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxPQUFPO0FBQ3hDLHlCQUF5QixPQUFPO0FBQ2hDLElBQUk7QUFDSixpQ0FBaUMsT0FBTztBQUN4Qyx5QkFBeUIsT0FBTztBQUNoQztBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0cmVzcy1hbmFseXNpcy8uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvdGlja3MuanM/NTE4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlMTAgPSBNYXRoLnNxcnQoNTApLFxuICAgIGU1ID0gTWF0aC5zcXJ0KDEwKSxcbiAgICBlMiA9IE1hdGguc3FydCgyKTtcblxuZnVuY3Rpb24gdGlja1NwZWMoc3RhcnQsIHN0b3AsIGNvdW50KSB7XG4gIGNvbnN0IHN0ZXAgPSAoc3RvcCAtIHN0YXJ0KSAvIE1hdGgubWF4KDAsIGNvdW50KSxcbiAgICAgIHBvd2VyID0gTWF0aC5mbG9vcihNYXRoLmxvZzEwKHN0ZXApKSxcbiAgICAgIGVycm9yID0gc3RlcCAvIE1hdGgucG93KDEwLCBwb3dlciksXG4gICAgICBmYWN0b3IgPSBlcnJvciA+PSBlMTAgPyAxMCA6IGVycm9yID49IGU1ID8gNSA6IGVycm9yID49IGUyID8gMiA6IDE7XG4gIGxldCBpMSwgaTIsIGluYztcbiAgaWYgKHBvd2VyIDwgMCkge1xuICAgIGluYyA9IE1hdGgucG93KDEwLCAtcG93ZXIpIC8gZmFjdG9yO1xuICAgIGkxID0gTWF0aC5yb3VuZChzdGFydCAqIGluYyk7XG4gICAgaTIgPSBNYXRoLnJvdW5kKHN0b3AgKiBpbmMpO1xuICAgIGlmIChpMSAvIGluYyA8IHN0YXJ0KSArK2kxO1xuICAgIGlmIChpMiAvIGluYyA+IHN0b3ApIC0taTI7XG4gICAgaW5jID0gLWluYztcbiAgfSBlbHNlIHtcbiAgICBpbmMgPSBNYXRoLnBvdygxMCwgcG93ZXIpICogZmFjdG9yO1xuICAgIGkxID0gTWF0aC5yb3VuZChzdGFydCAvIGluYyk7XG4gICAgaTIgPSBNYXRoLnJvdW5kKHN0b3AgLyBpbmMpO1xuICAgIGlmIChpMSAqIGluYyA8IHN0YXJ0KSArK2kxO1xuICAgIGlmIChpMiAqIGluYyA+IHN0b3ApIC0taTI7XG4gIH1cbiAgaWYgKGkyIDwgaTEgJiYgMC41IDw9IGNvdW50ICYmIGNvdW50IDwgMikgcmV0dXJuIHRpY2tTcGVjKHN0YXJ0LCBzdG9wLCBjb3VudCAqIDIpO1xuICByZXR1cm4gW2kxLCBpMiwgaW5jXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGlja3Moc3RhcnQsIHN0b3AsIGNvdW50KSB7XG4gIHN0b3AgPSArc3RvcCwgc3RhcnQgPSArc3RhcnQsIGNvdW50ID0gK2NvdW50O1xuICBpZiAoIShjb3VudCA+IDApKSByZXR1cm4gW107XG4gIGlmIChzdGFydCA9PT0gc3RvcCkgcmV0dXJuIFtzdGFydF07XG4gIGNvbnN0IHJldmVyc2UgPSBzdG9wIDwgc3RhcnQsIFtpMSwgaTIsIGluY10gPSByZXZlcnNlID8gdGlja1NwZWMoc3RvcCwgc3RhcnQsIGNvdW50KSA6IHRpY2tTcGVjKHN0YXJ0LCBzdG9wLCBjb3VudCk7XG4gIGlmICghKGkyID49IGkxKSkgcmV0dXJuIFtdO1xuICBjb25zdCBuID0gaTIgLSBpMSArIDEsIHRpY2tzID0gbmV3IEFycmF5KG4pO1xuICBpZiAocmV2ZXJzZSkge1xuICAgIGlmIChpbmMgPCAwKSBmb3IgKGxldCBpID0gMDsgaSA8IG47ICsraSkgdGlja3NbaV0gPSAoaTIgLSBpKSAvIC1pbmM7XG4gICAgZWxzZSBmb3IgKGxldCBpID0gMDsgaSA8IG47ICsraSkgdGlja3NbaV0gPSAoaTIgLSBpKSAqIGluYztcbiAgfSBlbHNlIHtcbiAgICBpZiAoaW5jIDwgMCkgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpIHRpY2tzW2ldID0gKGkxICsgaSkgLyAtaW5jO1xuICAgIGVsc2UgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpIHRpY2tzW2ldID0gKGkxICsgaSkgKiBpbmM7XG4gIH1cbiAgcmV0dXJuIHRpY2tzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGlja0luY3JlbWVudChzdGFydCwgc3RvcCwgY291bnQpIHtcbiAgc3RvcCA9ICtzdG9wLCBzdGFydCA9ICtzdGFydCwgY291bnQgPSArY291bnQ7XG4gIHJldHVybiB0aWNrU3BlYyhzdGFydCwgc3RvcCwgY291bnQpWzJdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGlja1N0ZXAoc3RhcnQsIHN0b3AsIGNvdW50KSB7XG4gIHN0b3AgPSArc3RvcCwgc3RhcnQgPSArc3RhcnQsIGNvdW50ID0gK2NvdW50O1xuICBjb25zdCByZXZlcnNlID0gc3RvcCA8IHN0YXJ0LCBpbmMgPSByZXZlcnNlID8gdGlja0luY3JlbWVudChzdG9wLCBzdGFydCwgY291bnQpIDogdGlja0luY3JlbWVudChzdGFydCwgc3RvcCwgY291bnQpO1xuICByZXR1cm4gKHJldmVyc2UgPyAtMSA6IDEpICogKGluYyA8IDAgPyAxIC8gLWluYyA6IGluYyk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/d3-array/src/ticks.js\n");

/***/ })

};
;