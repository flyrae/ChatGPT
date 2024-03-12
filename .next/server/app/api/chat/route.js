"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/chat/route";
exports.ids = ["app/api/chat/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.js&appDir=%2FUsers%2Fwhy%2FDocuments%2Fllm%2FChatGPT-Web%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fwhy%2FDocuments%2Fllm%2FChatGPT-Web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.js&appDir=%2FUsers%2Fwhy%2FDocuments%2Fllm%2FChatGPT-Web%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fwhy%2FDocuments%2Fllm%2FChatGPT-Web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_why_Documents_llm_ChatGPT_Web_src_app_api_chat_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/chat/route.js */ \"(rsc)/./src/app/api/chat/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/chat/route\",\n        pathname: \"/api/chat\",\n        filename: \"route\",\n        bundlePath: \"app/api/chat/route\"\n    },\n    resolvedPagePath: \"/Users/why/Documents/llm/ChatGPT-Web/src/app/api/chat/route.js\",\n    nextConfigOutput,\n    userland: _Users_why_Documents_llm_ChatGPT_Web_src_app_api_chat_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/chat/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjaGF0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjaGF0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY2hhdCUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRndoeSUyRkRvY3VtZW50cyUyRmxsbSUyRkNoYXRHUFQtV2ViJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRndoeSUyRkRvY3VtZW50cyUyRmxsbSUyRkNoYXRHUFQtV2ViJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2M7QUFDM0Y7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vPzUwZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3doeS9Eb2N1bWVudHMvbGxtL0NoYXRHUFQtV2ViL3NyYy9hcHAvYXBpL2NoYXQvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NoYXQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jaGF0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jaGF0L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3doeS9Eb2N1bWVudHMvbGxtL0NoYXRHUFQtV2ViL3NyYy9hcHAvYXBpL2NoYXQvcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvY2hhdC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.js&appDir=%2FUsers%2Fwhy%2FDocuments%2Fllm%2FChatGPT-Web%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fwhy%2FDocuments%2Fllm%2FChatGPT-Web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/chat/route.js":
/*!***********************************!*\
  !*** ./src/app/api/chat/route.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"(rsc)/./node_modules/openai/index.mjs\");\n\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    apiKey: process.env.OPENAI_API_KEY || \"\",\n    baseURL: \"http://fetch-gpt.com/\"\n});\nconst encoder = new TextEncoder();\nfunction iteratorToStream(iterator) {\n    return new ReadableStream({\n        async pull (controller) {\n            const { value, done } = await iterator.next();\n            if (done) {\n                controller.close();\n            } else {\n                controller.enqueue(value);\n            }\n        }\n    });\n}\nfunction sleep(time) {\n    return new Promise((resolve)=>{\n        setTimeout(resolve, time);\n    });\n}\nasync function* makeIterator() {\n    for await (const chunk of response){\n        const delta = chunk.choices[0].delta.content;\n        yield encoder.encode(delta);\n    }\n}\nasync function* chatMessages() {\n    yield encoder.encode(\"<p>Hello</p>\");\n    await sleep(1000);\n    yield encoder.encode(\"<p>World</p>\");\n    await sleep(1000);\n    yield encoder.encode(\"<p>!</p>\");\n}\nasync function GET() {\n    const iterator = chatMessages();\n    const stream = iteratorToStream(iterator);\n    return new Response(stream);\n}\nasync function POST(request) {\n    const { messages } = await request.json();\n    const response1 = await openai.chat.completions.create({\n        model: \"gpt-3.5-turbo\",\n        messages,\n        stream: true\n    });\n    return new Response(iteratorToStream(makeIterator(response1)));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jaGF0L3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUU1QixNQUFNQyxTQUFTLElBQUlELDhDQUFNQSxDQUFDO0lBQ3hCRSxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGNBQWMsSUFBSTtJQUN0Q0MsU0FBUTtBQUNWO0FBRUEsTUFBTUMsVUFBVSxJQUFJQztBQUdwQixTQUFTQyxpQkFBaUJDLFFBQVE7SUFDaEMsT0FBTyxJQUFJQyxlQUFlO1FBQ3hCLE1BQU1DLE1BQUtDLFVBQVU7WUFDbkIsTUFBTSxFQUFDQyxLQUFLLEVBQUVDLElBQUksRUFBQyxHQUFHLE1BQU1MLFNBQVNNLElBQUk7WUFDdkMsSUFBSUQsTUFBSztnQkFDUEYsV0FBV0ksS0FBSztZQUNsQixPQUFPO2dCQUNMSixXQUFXSyxPQUFPLENBQUNKO1lBQ3JCO1FBQ0o7SUFDRjtBQUNGO0FBRUEsU0FBU0ssTUFBTUMsSUFBSTtJQUNqQixPQUFPLElBQUlDLFFBQVEsQ0FBQ0M7UUFDbEJDLFdBQVdELFNBQVNGO0lBQ3RCO0FBQ0Y7QUFHQSxnQkFBZ0JJO0lBQ2QsV0FBVSxNQUFNQyxTQUFTQyxTQUFTO1FBQ2hDLE1BQU1DLFFBQVFGLE1BQU1HLE9BQU8sQ0FBQyxFQUFFLENBQUNELEtBQUssQ0FBQ0UsT0FBTztRQUM1QyxNQUFNdEIsUUFBUXVCLE1BQU0sQ0FBQ0g7SUFDdkI7QUFDRjtBQUVBLGdCQUFnQkk7SUFDZCxNQUFNeEIsUUFBUXVCLE1BQU0sQ0FBQztJQUNyQixNQUFNWCxNQUFNO0lBQ1osTUFBTVosUUFBUXVCLE1BQU0sQ0FBQztJQUNyQixNQUFNWCxNQUFNO0lBQ1osTUFBTVosUUFBUXVCLE1BQU0sQ0FBQztBQUN2QjtBQUVPLGVBQWVFO0lBQ3BCLE1BQU10QixXQUFXcUI7SUFDakIsTUFBTUUsU0FBU3hCLGlCQUFpQkM7SUFDaEMsT0FBTyxJQUFJd0IsU0FBU0Q7QUFDdEI7QUFFTyxlQUFlRSxLQUFLQyxPQUFPO0lBQ2hDLE1BQU0sRUFBQ0MsUUFBUSxFQUFDLEdBQUcsTUFBTUQsUUFBUUUsSUFBSTtJQUNyQyxNQUFNWixZQUFXLE1BQU16QixPQUFPc0MsSUFBSSxDQUFDQyxXQUFXLENBQUNDLE1BQU0sQ0FBQztRQUNwREMsT0FBTztRQUNQTDtRQUNBSixRQUFPO0lBQ1Q7SUFDQSxPQUFPLElBQUlDLFNBQVN6QixpQkFBaUJlLGFBQWFFO0FBQ3BEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcGkvY2hhdC9yb3V0ZS5qcz9jYjIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPcGVuQUkgZnJvbSAnb3BlbmFpJztcclxuXHJcbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUkoe1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVkgfHwgJycsXHJcbiAgYmFzZVVSTDpcImh0dHA6Ly9mZXRjaC1ncHQuY29tL1wiXHJcbn0pXHJcblxyXG5jb25zdCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XHJcblxyXG5cclxuZnVuY3Rpb24gaXRlcmF0b3JUb1N0cmVhbShpdGVyYXRvcil7XHJcbiAgcmV0dXJuIG5ldyBSZWFkYWJsZVN0cmVhbSh7XHJcbiAgICBhc3luYyBwdWxsKGNvbnRyb2xsZXIpe1xyXG4gICAgICBjb25zdCB7dmFsdWUsIGRvbmV9ID0gYXdhaXQgaXRlcmF0b3IubmV4dCgpO1xyXG4gICAgICAgIGlmIChkb25lKXtcclxuICAgICAgICAgIGNvbnRyb2xsZXIuY2xvc2UoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29udHJvbGxlci5lbnF1ZXVlKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNsZWVwKHRpbWUpe1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcclxuICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSlcclxuICB9KVxyXG59XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24qIG1ha2VJdGVyYXRvcigpe1xyXG4gIGZvciBhd2FpdChjb25zdCBjaHVuayBvZiByZXNwb25zZSl7XHJcbiAgICBjb25zdCBkZWx0YSA9IGNodW5rLmNob2ljZXNbMF0uZGVsdGEuY29udGVudFxyXG4gICAgeWllbGQgZW5jb2Rlci5lbmNvZGUoZGVsdGEpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24qIGNoYXRNZXNzYWdlcygpe1xyXG4gIHlpZWxkIGVuY29kZXIuZW5jb2RlKCc8cD5IZWxsbzwvcD4nKTtcclxuICBhd2FpdCBzbGVlcCgxMDAwKTtcclxuICB5aWVsZCBlbmNvZGVyLmVuY29kZSgnPHA+V29ybGQ8L3A+Jyk7XHJcbiAgYXdhaXQgc2xlZXAoMTAwMCk7XHJcbiAgeWllbGQgZW5jb2Rlci5lbmNvZGUoJzxwPiE8L3A+Jyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKXtcclxuICBjb25zdCBpdGVyYXRvciA9IGNoYXRNZXNzYWdlcygpO1xyXG4gIGNvbnN0IHN0cmVhbSA9IGl0ZXJhdG9yVG9TdHJlYW0oaXRlcmF0b3IpO1xyXG4gIHJldHVybiBuZXcgUmVzcG9uc2Uoc3RyZWFtKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdCl7XHJcbiAgY29uc3Qge21lc3NhZ2VzfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgb3BlbmFpLmNoYXQuY29tcGxldGlvbnMuY3JlYXRlKHtcclxuICAgIG1vZGVsOiAnZ3B0LTMuNS10dXJibycsXHJcbiAgICBtZXNzYWdlcyxcclxuICAgIHN0cmVhbTp0cnVlXHJcbiAgfSlcclxuICByZXR1cm4gbmV3IFJlc3BvbnNlKGl0ZXJhdG9yVG9TdHJlYW0obWFrZUl0ZXJhdG9yKHJlc3BvbnNlKSkpO1xyXG59Il0sIm5hbWVzIjpbIk9wZW5BSSIsIm9wZW5haSIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsImJhc2VVUkwiLCJlbmNvZGVyIiwiVGV4dEVuY29kZXIiLCJpdGVyYXRvclRvU3RyZWFtIiwiaXRlcmF0b3IiLCJSZWFkYWJsZVN0cmVhbSIsInB1bGwiLCJjb250cm9sbGVyIiwidmFsdWUiLCJkb25lIiwibmV4dCIsImNsb3NlIiwiZW5xdWV1ZSIsInNsZWVwIiwidGltZSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIm1ha2VJdGVyYXRvciIsImNodW5rIiwicmVzcG9uc2UiLCJkZWx0YSIsImNob2ljZXMiLCJjb250ZW50IiwiZW5jb2RlIiwiY2hhdE1lc3NhZ2VzIiwiR0VUIiwic3RyZWFtIiwiUmVzcG9uc2UiLCJQT1NUIiwicmVxdWVzdCIsIm1lc3NhZ2VzIiwianNvbiIsImNoYXQiLCJjb21wbGV0aW9ucyIsImNyZWF0ZSIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/chat/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/formdata-node","vendor-chunks/openai","vendor-chunks/form-data-encoder","vendor-chunks/whatwg-url","vendor-chunks/agentkeepalive","vendor-chunks/tr46","vendor-chunks/node-fetch","vendor-chunks/webidl-conversions","vendor-chunks/web-streams-polyfill","vendor-chunks/ms","vendor-chunks/humanize-ms","vendor-chunks/event-target-shim","vendor-chunks/abort-controller"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.js&appDir=%2FUsers%2Fwhy%2FDocuments%2Fllm%2FChatGPT-Web%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fwhy%2FDocuments%2Fllm%2FChatGPT-Web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();