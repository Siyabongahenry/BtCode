/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fortawesome/fontawesome-free/css/all.css":
/*!****************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/css/all.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://code/./node_modules/@fortawesome/fontawesome-free/css/all.css?");

/***/ }),

/***/ "./src/sass/webstyles.scss":
/*!*********************************!*\
  !*** ./src/sass/webstyles.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://code/./src/sass/webstyles.scss?");

/***/ }),

/***/ "./src/Javascript/for-code.js":
/*!************************************!*\
  !*** ./src/Javascript/for-code.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setForStatement)\n/* harmony export */ });\n/* harmony import */ var _operators_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operators.js */ \"./src/Javascript/operators.js\");\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic.js */ \"./src/Javascript/logic.js\");\n/* harmony import */ var _solve_bracket_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solve-bracket.js */ \"./src/Javascript/solve-bracket.js\");\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables.js */ \"./src/Javascript/variables.js\");\n/* harmony import */ var _site_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./site.js */ \"./src/Javascript/site.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nvar forBtn = document.getElementById(\"for-btn\");\r\n//variables outside for loop\r\nvar varsBlock;\r\n//variables inside for loop\r\nvar innerVarBlock;\r\nvar screen;\r\n//message\r\nvar outputMSG\r\n//initial consition\r\nvar initialCond;\r\n//condition block\r\nvar condBlock;\r\nvar variablesArr =[];\r\nvar conditionArr =[];\r\nfunction setForStatement()\r\n{\r\n\tforBtn.addEventListener(\"click\",function(){\r\n\t\tthis.innerHTML =\"<i class='fa fa-pause'></i>\";\r\n\t\tthis.disable = true;\r\n\t\t//clear out put screen\r\n\t\tscreen = document.querySelector(\".for-loop-block .output-screen\");\r\n\t\tscreen.innerHTML =\"\";\r\n\t\t//message to be outputed in the screen container\r\n\t\toutputMSG = document.getElementById(\"if-output-msg\").innerText;\r\n\t\t//\r\n\t\tcondBlock = document.getElementById(\"for-cond\");\r\n\t\t//store initial condition to return to it\r\n\t\tinitialCond = condBlock.innerText;\r\n\t\t//start execution\r\n\t\tstartExec();\r\n\t});\r\n}\r\n//\r\nfunction startExec(){\r\n\t\tgetAllRBlocks()\r\n\t\t//reset \r\n\t\tvariablesArr =[];\r\n\t\tconditionArr =[];\r\n\r\n\t\t//get variables from container\r\n\t\tvariablesArr =(0,_variables_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(varsBlock.innerText+\" \"+innerVarBlock.innerText);\r\n\t\t\r\n\t\t//conndition to be tested\r\n\t\tlet currentCond = initialCond;\r\n\r\n\t\tcurrentCond = currentCond.replaceAll(\" \",\"\");\r\n\t\t//separate values from operations\r\n\t\tconditionArr = (0,_site_js__WEBPACK_IMPORTED_MODULE_4__.sepValFromOper)(conditionArr,currentCond);\r\n\t\t//solve expresssion\r\n\t\tsolveExp();\r\n}\r\n//set all required blocks\r\nfunction getAllRBlocks(){\r\n\tvarsBlock =document.querySelector(\".for-loop-block .vars-container\");\r\n\tinnerVarBlock = document.getElementById(\"for-var\");\r\n}\r\n//solve expression\r\nfunction solveExp(){\r\n\tsetTimeout(()=>{\r\n\t\t//set condition color\r\n\t\tcondBlock.classList.add(\"curr-exec\");\r\n\t\t//insert actual variables\r\n\t\tconditionArr = (0,_site_js__WEBPACK_IMPORTED_MODULE_4__.insertActualVars)(conditionArr,variablesArr);\r\n\t\tcondBlock.innerText = conditionArr.toString().replaceAll(\",\",\" \");\r\n\t\tlet bracketIndex = conditionArr.indexOf(\"(\");\r\n\t\tsetTimeout(\r\n\t\t\t()=>{\r\n\t\t\t\t//solve bracket\r\n\t\t\t\tconditionArr = (0,_solve_bracket_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(conditionArr);\r\n\t\t\t\tcondBlock.innerText = conditionArr.toString().replaceAll(\",\",\" \");\r\n\t\t\t  \tsetTimeout(()=>{\r\n\t\t\t  \t\tconditionArr = (0,_operators_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(conditionArr);\r\n\t\t\t\t\tcondBlock.innerText = conditionArr.toString().replaceAll(\",\",\" \");\r\n\t\t\t \t\tsetTimeout(()=>{\r\n\t\t\t \t\t\tconditionArr = (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(conditionArr);\r\n\t\t\t\t\t\tcondBlock.innerText = conditionArr.toString().replaceAll(\",\",\" \");\r\n\t\t\t\t\t\t//print message if true\r\n\r\n\t\t\t\t\t\tif(conditionArr.toString() == \"true\"){\r\n\t\t\t\t\t\t\twMsgIfT(outputMSG);\r\n\t\t\t\t\t\t\tdocument.querySelector(\".for-loop-block .inner-code\").classList.add(\"curr-exec\");\r\n\t\t\t\t\t\t\tsetTimeout(()=>{\r\n\t\t\t\t\t\t\t\tlet lastCond = document.getElementById(\"last-cond\");\r\n\t\t\t\t\t \t\t \tlastCond.classList.add(\"curr-exec\");\r\n\t\t\t\t\t \t\t \t//restore condition\r\n\t\t\t\t\t \t\t \tcondBlock.innerText = initialCond;\r\n\t\t\t\t\t \t\t \tcondBlock.classList.remove(\"curr-exec\");\r\n\t\t\t\t\t \t\t \t//restore inner code color\r\n\t\t\t\t\t\t\t\tdocument.querySelector(\".for-loop-block .inner-code\").classList.remove(\"curr-exec\");\r\n\t\t\t\t \t\t \t\t//restart execution\r\n\t\t\t\t\t \t\t \tsetTimeout(()=>{\r\n\t\t\t\t\t \t\t \t\tlet value = document.getElementById(\"for-value\");\r\n\t\t\t\t\t \t\t \t\tvalue.classList.add(\"curr-exec\");\r\n\t\t\t\t\t \t\t \t\tvalue.innerText = parseInt(value.innerText)+1;\r\n\t\t\t\t\t \t\t \t\t//last condition\r\n\t\t\t\t\t \t\t \t\tlastCond.classList.remove(\"curr-exec\");\r\n\t\t\t\t\t \t\t \t\tsetTimeout(()=>{\r\n\t\t\t\t\t \t\t \t\t\tvalue.classList.remove(\"curr-exec\");\r\n\t\t\t\t\t \t\t \t\t\tstartExec();\r\n\t\t\t\t\t \t\t \t\t},2000);\r\n\t\t\t\t\t \t\t \t},2000);\r\n\t\t\t\t \t\t },2000);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\telse{\r\n\t\t\t\t\t\t\tcondBlock.style.color =\"red\";\r\n\t\t\t\t\t\t\tcondBlock.classList.remove(\"curr-exec\");\r\n\t\t\t\t\t\t\tsetTimeout(()=>{\r\n\t\t\t\t\t\t\t\tforBtn.innerHTML =\"<i class='fa fa-play'></i>\";\r\n\t\t\t\t\t\t\t\tcondBlock.style.color =\"darkred\";\r\n\t\t\t\t\t\t\t\tcondBlock.innerText = initialCond;\r\n\t\t\t\t\t\t\t\tforBtn.disable = false;\r\n\t\t\t\t\t\t\t},2000)\r\n\t\t\t\t\t\t}\r\n\t\t\t\t \t\t \r\n\t\t\t \t\t},2000);\r\n\t\t\t  },2000);\r\n\t\t\t},bracketIndex>=0?2000:0);//if no bracket set time to zero\r\n\t},1000);\r\n\r\n}\r\n//write message if true\r\nfunction wMsgIfT(msg)\r\n{\r\n\tvar span = document.createElement(\"span\");\r\n\tspan.innerText = msg.replaceAll('\"',\"\");\r\n\tscreen.appendChild(span);\r\n}\n\n//# sourceURL=webpack://code/./src/Javascript/for-code.js?");

/***/ }),

/***/ "./src/Javascript/if-code.js":
/*!***********************************!*\
  !*** ./src/Javascript/if-code.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setIfStatement)\n/* harmony export */ });\n/* harmony import */ var _operators_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operators.js */ \"./src/Javascript/operators.js\");\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic.js */ \"./src/Javascript/logic.js\");\n/* harmony import */ var _solve_bracket_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solve-bracket.js */ \"./src/Javascript/solve-bracket.js\");\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables.js */ \"./src/Javascript/variables.js\");\n/* harmony import */ var _site_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./site.js */ \"./src/Javascript/site.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nvar ifBtn = document.getElementById(\"if-btn\");\r\nvar varsBlock =document.getElementById(\"if-vars\");\r\nvar innerCode = document.getElementById(\"if-inner-code\"); \r\nlet condBlock;\r\nlet outPutScreenMSG;\r\nlet outputMSG;\r\nvar variablesArr =[];\r\nvar conditionArr =[];\r\nfunction setIfStatement()\r\n{\r\n\tifBtn.addEventListener(\"click\",function(){\r\n\t\t//reset \r\n\t\tvariablesArr =[];\r\n\t\tconditionArr =[];\r\n\r\n\t\tthis.innerHTML =\"<i class='fa fa-pause'></i>\";\r\n\t\tthis.disable = true;\r\n\r\n\t\t//message to be outputed in the screen container\r\n\t\toutputMSG = document.getElementById(\"if-output-msg\");\r\n\r\n\t\t//clear out put screen\r\n\t\toutPutScreenMSG = document.getElementById(\"if-screen-msg\");\r\n\t\toutPutScreenMSG.innerText=\"\";\r\n\t\t//get variables from container\r\n\t\tvariablesArr =(0,_variables_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(varsBlock.innerText);\r\n\r\n\t\tcondBlock = document.getElementById(\"if-cond\");\r\n\t\t\r\n\r\n\t\tstartExec();\t\r\n\t});\r\n}\r\n\r\nfunction startExec(){\r\n\t//store initial condition to return to it\r\n\tlet initialCond = condBlock.innerText;\r\n\tlet currentCond = initialCond;\r\n\tcurrentCond = currentCond.replaceAll(\" \",\"\");\r\n\t//separate values from operations\r\n\tconditionArr = (0,_site_js__WEBPACK_IMPORTED_MODULE_4__.sepValFromOper)(conditionArr,currentCond);\r\n\tsetTimeout(()=>{\r\n\t\tconditionArr = (0,_site_js__WEBPACK_IMPORTED_MODULE_4__.insertActualVars)(conditionArr,variablesArr);\r\n\t\tcondBlock.innerText = conditionArr.toString().replaceAll(\",\",\" \");\r\n\t\tcondBlock.classList.add(\"curr-exec\");\r\n\t\t//solve bracket\r\n\t\tlet bracketIndex = conditionArr.indexOf(\"(\");\r\n\t\tsetTimeout(()=>{\r\n\t\t\tconditionArr = (0,_solve_bracket_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(conditionArr);\r\n\t\t\tcondBlock.innerText = conditionArr.toString().replaceAll(\",\",\" \");\r\n\t\t\t//solve operators\r\n\t\t\tsetTimeout(()=>{\r\n\t\t\t\tconditionArr = (0,_operators_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(conditionArr);\r\n\t\t\t\tcondBlock.innerText = conditionArr.toString().replaceAll(\",\",\" \");\r\n\t\t\t\t//solve logic\r\n\t\t\t\tsetTimeout(()=>{\r\n\t\t\t\t\tconditionArr = (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(conditionArr);\r\n\t\t\t\t\tcondBlock.innerText = conditionArr.toString().replaceAll(\",\",\" \");\r\n\t\t\t\t\tif(condBlock.innerText.replaceAll(\" \",\"\")==\"true\"){\r\n\t\t\t\t\t\tcondBlock.classList.remove(\"curr-exec\");\r\n\t\t\t\t\t\tinnerCode.classList.add(\"curr-exec\");\r\n\t\t\t\t\t\tsetTimeout(()=>{\r\n\t\t\t\t\t\t\tcondBlock.innerText = initialCond;\r\n\t\t\t\t\t\t\tinnerCode.classList.remove(\"curr-exec\");\r\n\t\t\t\t\t\t\toutPutScreenMSG.innerText =outputMSG.innerText.replaceAll('\"',\"\").replaceAll(\"'\",\"\");\r\n\t\t\t\t\t\t\tsetTimeout(()=>{\t\r\n\t\t\t\t\t\t\t\tresetBtn();\r\n\t\t\t\t\t\t\t},2000);\r\n\t\t\t\t\t\t},3000);\r\n\t\t\t\t\t}\r\n\t\t\t\t\telse{\r\n\t\t\t\t\t\tcondBlock.style.color = \"red\";\t\r\n\t\t\t\t\t\tsetTimeout(()=>{\r\n\t\t\t\t\t\t\tresetBtn();\r\n\t\t\t\t\t\t\tcondBlock.style.color = \"darkred\";\r\n\t\t\t\t\t\t},2000)\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t},2000);\r\n\t\t\t\r\n\t\t\t},2000);\r\n\t\t\r\n\t\t},bracketIndex >=0 ?2000:0);//if bracket exist set 2s\r\n\t},2000);\r\n}\r\n\t\t\r\nfunction resetBtn(){\r\n\tifBtn.innerHTML =\"<i class='fa fa-play'></i>\";\r\n\tifBtn.disable = false;\r\n}\n\n//# sourceURL=webpack://code/./src/Javascript/if-code.js?");

/***/ }),

/***/ "./src/Javascript/logic.js":
/*!*********************************!*\
  !*** ./src/Javascript/logic.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ solveLogic)\n/* harmony export */ });\nvar conditionArr = [];\r\nfunction solveLogic(_conditionArr) {\r\n\tconditionArr =_conditionArr;\r\n\tsolveInverter();\r\n\r\n\tsolveAND();\r\n \t\r\n\tsolveOR();\r\n\t\r\n \treturn conditionArr;\r\n}\r\n\r\nfunction solveInverter(){\r\n\tlet index = conditionArr.indexOf(\"!\");\r\n\tif(index > 0){\r\n \t\tconditionArr[index]=!conditionArr[index+1];\r\n \t\tconditionArr.splice(index+1,1);\r\n \t\tsolveInverter();\r\n\t}\r\n}\r\n\r\nfunction solveAND(){\r\n\tlet index = conditionArr.indexOf(\"&&\");\r\n\tif(index > 0){\r\n \t\tconditionArr[index-1]=conditionArr[index-1] && conditionArr[index+1];\r\n \t    conditionArr.splice(index,2);\r\n \t\tsolveAND();\r\n\t}\r\n}\r\n\r\nfunction solveOR(){\r\n\tlet index = conditionArr.indexOf(\"||\");\r\n\tif(index > 0){\r\n \t\tconditionArr[index-1]=conditionArr[index-1] || conditionArr[index+1];\r\n \t\tconditionArr.splice(index,2);\r\n \t\tsolveOR();\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://code/./src/Javascript/logic.js?");

/***/ }),

/***/ "./src/Javascript/menu.js":
/*!********************************!*\
  !*** ./src/Javascript/menu.js ***!
  \********************************/
/***/ (() => {

eval("//Expansion of side menu\r\nvar sideMenuBtn = document.getElementById(\"btn-side-menu\");\r\nsideMenuBtn.addEventListener(\"click\",function(){\r\n\tresizeMenu(this,this.getAttribute(\"data-menu-id\"));\r\n});\r\nfunction resizeMenu(btn,menuId){\r\n\tbtn.style.animation=\"none\";\r\n \tvar menu = document.getElementById(menuId);\r\n\tif(menu.classList.contains(\"side-menu-ml\")){\r\n\t\tmenu.classList.remove(\"side-menu-ml\");\r\n\t\tbtn.innerHTML=\"<i class='fa fa-angle-left'></i>\";\r\n\t}\r\n\telse{\r\n\t\tmenu.classList.add(\"side-menu-ml\");\r\n\t\tbtn.innerHTML=\"<i class='fa fa-bars'></i>\";\r\n\t}\r\n}\r\n//Close Menu On When a Link Is Clicked\r\ncloseOnLinkClick();\r\nfunction closeOnLinkClick(){\r\n\tvar links = document.querySelectorAll(\".side-menu a\");\r\n\tfor(let i=0;i<links.length;i++){\r\n\t\tlinks[i].addEventListener(\"click\",function(){\r\n\t\t\tresizeMenu(sideMenuBtn,sideMenuBtn.getAttribute(\"data-menu-id\"));\r\n\t\t});\r\n\t}\r\n}\n\n//# sourceURL=webpack://code/./src/Javascript/menu.js?");

/***/ }),

/***/ "./src/Javascript/operators.js":
/*!*************************************!*\
  !*** ./src/Javascript/operators.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ solveOps)\n/* harmony export */ });\nvar conditionArr = [];\r\nfunction solveOps(_conditionArr){\r\n\tconditionArr =_conditionArr;\r\n\t//==\r\n\tsolveEE();\r\n\t//!=\r\n\tsolveNE();\r\n\t//>\r\n\tsolveGT();\r\n\t//>=\r\n\tsolveGE();\r\n\t//<\r\n\tsolveLT();\r\n\t//<=\r\n\tsolveLE();\r\n \treturn conditionArr;\r\n}\r\n\r\nfunction solveEE(){\r\n\tlet index = conditionArr.indexOf(\"==\");\r\n \tif(index > 0){\r\n \t\tconditionArr[index-1]=conditionArr[index-1]==conditionArr[index+1];\r\n \t\tconditionArr.splice(index,2);\r\n \t\tsolveEE();\r\n \t}\r\n}\r\nfunction solveNE(){\r\n\tlet index = conditionArr.indexOf(\"!=\");\r\n \tif(index > 0){\r\n \t\tconditionArr[index-1]=conditionArr[index-1]!=conditionArr[index+1];\r\n \t\tconditionArr.splice(index,2);\r\n \t\tsolveNE();\r\n \t}\r\n}\r\nfunction solveGT(){\r\n\tlet index = conditionArr.indexOf(\">\");\r\n \tif(index > 0){\r\n \t\tconditionArr[index-1]=conditionArr[index-1] > conditionArr[index+1];\r\n \t\tconditionArr.splice(index,2);\r\n \t\tsolveGT();\r\n \t}\r\n}\r\nfunction solveGE(){\r\n\tlet index = conditionArr.indexOf(\">=\");\r\n \tif(index > 0){\r\n \t\tconditionArr[index-1]=conditionArr[index-1] >= conditionArr[index+1];\r\n \t\tconditionArr.splice(index,2);\r\n \t\tsolveGE();\r\n \t}\r\n}\r\nfunction solveLT(){\r\n\tlet index = conditionArr.indexOf(\"<\");\r\n \tif(index > 0){\r\n \t\tconditionArr[index-1]=conditionArr[index-1] < conditionArr[index+1];\r\n \t\tconditionArr.splice(index,2);\r\n \t\tsolveGT();\r\n \t}\r\n}\r\nfunction solveLE(){\r\n\tlet index = conditionArr.indexOf(\"<=\");\r\n \tif(index > 0){\r\n \t\tconditionArr[index-1]=conditionArr[index-1] <= conditionArr[index+1];\r\n \t\tconditionArr.splice(index,2);\r\n \t\tsolveGT();\r\n \t}\r\n}\r\n\r\n\n\n//# sourceURL=webpack://code/./src/Javascript/operators.js?");

/***/ }),

/***/ "./src/Javascript/site.js":
/*!********************************!*\
  !*** ./src/Javascript/site.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"insertActualVars\": () => (/* binding */ insertActualVars),\n/* harmony export */   \"sepValFromOper\": () => (/* binding */ sepValFromOper)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/Javascript/menu.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slide */ \"./src/Javascript/slide.js\");\n/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slide__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _if_code_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./if-code.js */ \"./src/Javascript/if-code.js\");\n/* harmony import */ var _for_code_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./for-code.js */ \"./src/Javascript/for-code.js\");\n\r\n\r\n\r\n\r\n\r\n//if statement events\r\n(0,_if_code_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n//for loop\r\n(0,_for_code_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n//separate values from operators\r\nfunction sepValFromOper(conditionArr,input){\r\n\t//matches operators in the string\r\n\tlet pattern = /(>={0,1}|<={0,1}|!={0,1}|==|&&|\\|{2}|\\(|\\))/i;\r\n\tlet operator = input.match(pattern);\r\n\tlet tempArr =[];\r\n\tif(operator != null){\r\n\t\toperator = operator[0];\r\n\t\t//replace operator with a space for safe splitting\r\n\t\t//the space represent the first operator found \r\n\t\tinput = input.replace(operator,\" \");\r\n\t\ttempArr = input.split(\" \");\r\n\t\t//insert the string before condition to array\r\n\t\tconditionArr.push(tempArr[0]);\r\n\t\tconditionArr.push(operator);\r\n\t\t//do operator search for the string after the found operator to find other operators\t\r\n\t\tsepValFromOper(conditionArr,tempArr.pop());\r\n\t}\r\n\telse{\r\n\t\t//push the last element to the array \r\n\t\tconditionArr.push(input);\r\n\t\tconditionArr = conditionArr.filter(x => x != \"\");\r\n\t} \r\n\treturn conditionArr;\r\n}\r\n\r\n//replace variables symbols with actual values\r\nfunction insertActualVars(conditionArr,vars){\r\n\tvars = vars.flat();\r\n\tlet patternWord =/^[a-zA-Z_]\\w*$/;\r\n\tconditionArr=conditionArr.map((x)=>{\r\n\t\tif(x.match(patternWord) != null){\r\n\t\t\tfor(let i=0;i< vars.length-1;i++){\r\n\t\t\t\tlet vari = vars[i].replaceAll(\" \",\"\");\r\n\t\t\t\tif(vari==x){\r\n\t\t\t\t\treturn vars[i+1].replaceAll(\" \",\"\");\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn x;\r\n\t});\r\n\tconditionArr = convStrToNumber(conditionArr);\r\n\treturn conditionArr;\r\n}\r\n//convert strings to numbers from the array\r\nfunction convStrToNumber(conditionArr){\r\n \tconditionArr = conditionArr.map((x)=>{\r\n \t\tif(!isNaN(parseFloat(x))){\r\n \t\t\treturn parseFloat(x);\r\n \t\t}\r\n \t\treturn x;\r\n \t});\r\n \treturn conditionArr;\r\n }\r\n\r\n//buttons hide content\r\nvar btnsHide = document.getElementsByClassName(\"btn-hidden-content\");\r\naddEventsToBtnHide();\r\nfunction addEventsToBtnHide(){\r\n\r\n\tfor(let i=0;i < btnsHide.length;i++){\r\n\t\tbtnsHide[i].addEventListener(\"click\",function(){\r\n\r\n\t\t\tlet content = document.getElementById(this.getAttribute(\"data-notes-id\"));\r\n\t\t\tif(content.style.display == \"none\"){\r\n\t\t\t\tcontent.style.display = \"initial\";\r\n\t\t\t\tthis.innerHTML = \"close notes <i class='fa fa-caret-up'></i>\";\r\n\t\t\t}\r\n\t\t\telse{\r\n\t\t\t\tcontent.style.display = \"none\";\r\n\t\t\t\tthis.innerHTML = \"see notes <i class='fa fa-caret-down'></i>\";\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://code/./src/Javascript/site.js?");

/***/ }),

/***/ "./src/Javascript/slide.js":
/*!*********************************!*\
  !*** ./src/Javascript/slide.js ***!
  \*********************************/
/***/ (() => {

eval("/*pre for previous*/\r\nvar slideContainers = document.getElementsByClassName(\"slide-container\");\r\nvar pauseFirstSlide =[]\r\naddEventsToSlideBtns();\r\naddEventListenerToPauseBtns();\r\nfunction addEventsToSlideBtns(){\r\n\tvar prevBtnsCollection = document.getElementsByClassName(\"btn-prev-slide\");\r\n\tvar nextBtnsCollection = document.getElementsByClassName(\"btn-next-slide\");\r\n\tfor(let i=0;i< prevBtnsCollection.length;i++){\r\n\t\tprevBtnsCollection[i].addEventListener(\"click\",function(){\r\n\t\t\t/*Get first slide only*/\t\r\n\t\t\tprevSlide(i);\r\n\t\t});\r\n\t\tnextBtnsCollection[i].addEventListener(\"click\",function(){\r\n\t\t\t/*Get all the slides to find length*/\r\n\t\t\tnextSlide(i);\r\n\t\t});\t\t\r\n\t}\r\n}\r\nfunction addEventListenerToPauseBtns(){\r\n\tvar pauseBtnsCollection = document.getElementsByClassName(\"btn-pause-slide\");\r\n\tif(pauseBtnsCollection != null)\r\n\t{\r\n\t\tfor(let i=0;i<pauseBtnsCollection.length;i++)\r\n\t\t{\r\n\t\t\tpauseBtnsCollection[i].addEventListener(\"click\",function(){\r\n\t\t\t\tvar progressCollection = slideContainers[i].getElementsByClassName(\"progress\");\r\n\t\t\t\t/*Get all the slides to find length*/\r\n\t\t\t\tif(pauseFirstSlide[i]==undefined || pauseFirstSlide[i] ==false)\r\n\t\t\t\t{\r\n\t\t\t\t\tpauseFirstSlide[i]=true;\r\n\t\t\t\t\tthis.innerHTML =\"<i class='fa fa fa-play-circle'></i>\"\r\n\t\t\t\t}\r\n\t\t\t\telse{\r\n\t\t\t\t\tpauseFirstSlide[i]=false;\r\n\t\t\t\t\tthis.innerHTML =\"<i class='fa fa-pause-circle'></i>\"\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t}\t\r\n\t}\r\n}\r\nfunction prevSlide(slideContainerNo){\r\n\t/*increment margin of first slide to move to previous slide*/\r\n\tvar slideCollection =slideContainers[slideContainerNo].getElementsByClassName (\"slide-element\");\r\n\tvar progressCollection = slideContainers[slideContainerNo].getElementsByClassName(\"progress\");\r\n\tvar pageNoElement = slideContainers[slideContainerNo].querySelector(\".page-number\");\r\n\tclearProgressAnim(progressCollection);\r\n\tif(slideCollection[0].style.marginLeft !=\"\")\r\n\t{\r\n\t\tvar slideML = parseInt((slideCollection[0].style.marginLeft).replace(\"%\",\"\"));\r\n\t\tif(slideML < 0)\r\n\t\t{\r\n\t\t\tslideML += 100;\r\n\t\t\tslideCollection[0].style.marginLeft = slideML +\"%\";\r\n\t\t\tlet mL =  parseInt((slideCollection[0].style.marginLeft).replace(\"%\",\"\"));\r\n\t\t\taddProgressAnim(progressCollection,-1*slideML/100);\r\n\t\t\tif(pageNoElement != null){\r\n\t\t\t\tpageNoElement.innerText =(-1*slideML/100)+1;\r\n\t\t\t}\r\n\t\t}\r\n\t\telse{\r\n\t\t\taddProgressAnim(progressCollection,0);\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\nfunction nextSlide(slideContainerNo){\r\n\tvar slideCollection =slideContainers[slideContainerNo].getElementsByClassName (\"slide-element\");\r\n\tvar progressCollection = slideContainers[slideContainerNo].getElementsByClassName(\"progress\");\r\n\tvar pageNoElement = slideContainers[slideContainerNo].querySelector(\".page-number\");\r\n\tclearProgressAnim(progressCollection);\r\n\t/*decrement margin of first slide to move to next slide*/\r\n\tif(slideCollection[0].style.marginLeft ==\"\" || slideCollection[0].style.marginLeft ==\"0%\"){\r\n\t\tslideCollection[0].style.marginLeft =\"-100%\";\r\n\t\taddProgressAnim(progressCollection,1);\r\n\t\tif(pageNoElement != null)\r\n\t\t{\r\n\t\t\tpageNoElement.innerText = 2;\r\n\t\t}\r\n\t\treturn true;\r\n\t}\r\n\telse{\r\n\t\tvar slideML = parseInt((slideCollection[0].style.marginLeft).replace(\"%\",\"\"));\r\n\t\tif(slideML > (-1 * slideCollection.length*100 + 100))\r\n\t\t{\r\n\r\n\t\t\tslideML -= 100;\r\n\t\t\tslideCollection[0].style.marginLeft = slideML +\"%\";\r\n\t\t\taddProgressAnim(progressCollection,-1*slideML/100);\r\n\t\t\tif(pageNoElement != null)\r\n\t\t\t{\r\n\t\t\t\tpageNoElement.innerText = (-1*slideML/100)+1;\r\n\t\t\t}\r\n\t\t\treturn true;\r\n\t\t}\r\n\t\telse{\r\n\t\t\taddProgressAnim(progressCollection,-1*slideML/100);\r\n\t\t\treturn false;\r\n\t\t}\r\n\t}\r\n}\r\nfunction addProgressAnim(progressCollection,progressIndex){\r\n\tif(progressCollection.length > 0 && !progressCollection[progressIndex].classList.contains(\"progress-anim\")){\r\n\t\tprogressCollection[progressIndex].classList.add(\"progress-anim\");\r\n\t}\r\n}\r\nfunction clearProgressAnim(progressCollection){\r\n\tif(progressCollection.length > 0){\r\n\t\tfor(let i=0;i<progressCollection.length;i++){\r\n\t\t\tif(progressCollection[i].classList.contains(\"progress-anim\"))\r\n\t\t\t{\r\n\t\t\t\tprogressCollection[i].classList.remove(\"progress-anim\");\r\n\t\t\t\tif(progressCollection[i].classList.contains(\"width\"))\r\n\t\t\t\t{\r\n\t\t\t\t\tprogressCollection[i].style.width =\"0%\";\r\n\t\t\t\t}\r\n\t\t\t\telse if(progressCollection[i].classList.contains(\"height\")){\r\n\t\t\t\t\tprogressCollection[i].style.height =\"0%\";\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n\n\n//# sourceURL=webpack://code/./src/Javascript/slide.js?");

/***/ }),

/***/ "./src/Javascript/solve-bracket.js":
/*!*****************************************!*\
  !*** ./src/Javascript/solve-bracket.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ solveBEntry)\n/* harmony export */ });\n/* harmony import */ var _operators_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operators.js */ \"./src/Javascript/operators.js\");\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic.js */ \"./src/Javascript/logic.js\");\n\r\n\r\nvar conditionArr = [];\r\nfunction solveBEntry(_conditionArr){\r\n\tconditionArr =[..._conditionArr];\r\n\tsolveB();\r\n\tconditionArr = conditionArr.flat();\r\n\treturn conditionArr;\r\n}\r\nfunction doCalculations(arr)\r\n{\r\n\tlet innerBArr = [...arr];\r\n\tinnerBArr = (0,_operators_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(innerBArr);\r\n\r\n\tinnerBArr = (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(innerBArr);\r\n\r\n\treturn innerBArr;\r\n}\r\n//solve bracket\r\nfunction solveB(){\r\n\t//open bracket index\r\n\tlet obIndex = conditionArr.indexOf(\"(\");\r\n\t//close bracket index\r\n\tlet cbIndex = conditionArr.indexOf(\")\");\r\n\tlet tempArr =[];\r\n\tif(obIndex >=0 && cbIndex > 0){\r\n\t\ttempArr = conditionArr.slice(obIndex,cbIndex+1);\r\n\t\tsolveInnerB(tempArr,obIndex,cbIndex);\r\n\t\tsolveB();\r\n\t}\r\n\telse{\r\n\t\tif(cbIndex > 0){\r\n\t\t\tconditionArr = conditionArr.filter(x => x != \")\");\r\n\t\t}\r\n\t}\r\n\r\n}\r\n//start with inner bracket\r\nfunction solveInnerB(innerBArr,currOBIndex,cbIndex)\r\n{\r\n\t//remove first bracket\r\n\tinnerBArr.shift();\r\n\tlet obIndex = innerBArr.indexOf(\"(\");\r\n\tif(obIndex >= 0 && obIndex < cbIndex){\r\n\t\tsolveInnerB(innerBArr.slice(obIndex,cbIndex+1),currOBIndex+obIndex+1,cbIndex);\r\n\t}\r\n\telse{\r\n\t\t//remove closing bracket\r\n\t\tinnerBArr.pop();\r\n\t\tconditionArr[currOBIndex] = doCalculations(innerBArr);\r\n\t\tconditionArr = conditionArr.flat();\r\n\t\tconditionArr.splice(currOBIndex+1,innerBArr.length+1);\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://code/./src/Javascript/solve-bracket.js?");

/***/ }),

/***/ "./src/Javascript/variables.js":
/*!*************************************!*\
  !*** ./src/Javascript/variables.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ findVariables)\n/* harmony export */ });\nvar varsContAsStr=\"\";\r\nvar varsArr=[];\r\nfunction findVariables(_varsContAsStr){\r\n\t//clear array\r\n\tvarsArr=[];\r\n\tvarsContAsStr = _varsContAsStr;\r\n\r\n\tfindStrings();\r\n\r\n\tfindNumbers();\r\n\r\n\tfindBool();\r\n\r\n\treturn varsArr.flat();\r\n}\r\nfunction findStrings(){\r\n\t//pattern to find string variables\r\n\tlet patternStrings = /\\s+[a-zA-Z_]\\w*\\s*=\\s*('.*'|\".*\")\\s*/i;\r\n\r\n\tlet findString = varsContAsStr.match(patternStrings);\r\n\r\n\tif(findString != null){\r\n\t\tlet variable = findString[0].toString();\r\n\t\tvarsArr.push(variable.split(\"=\"));\r\n\t\tvarsContAsStr = varsContAsStr.replaceAll(variable,\"\");\r\n\t\tfindStrings();\r\n\t}\r\n\r\n}\r\nfunction findNumbers(){\r\n\t//pattern to find numbers variables\r\n\tlet patternNo = /\\s+[a-zA-Z_]\\w*\\s*=\\s*(\\d{1,}\\.\\d{1,}|\\d{1,})/i;\r\n\tlet findNo = varsContAsStr.match(patternNo);\r\n\r\n\tif(findNo != null){\r\n\t\tlet variable = findNo[0].toString();\r\n\t\tvarsArr.push(variable.split(\"=\"));\r\n\t\tvarsContAsStr = varsContAsStr.replaceAll(variable,\"\");\r\n\t\tfindNumbers();\r\n\t}\r\n}\r\nfunction findBool(){\r\n\t//pattern to find bool variables from a string\r\n\tlet patternBool = /\\s+[a-zA-Z_]\\w*\\s*=\\s*(true|false)/i;\r\n\tlet findBool = varsContAsStr.match(patternBool);\r\n\r\n\tif(findBool != null){\r\n\t\tlet variable = findBool[0].toString();\r\n\t\tvarsArr.push(variable.split(\"=\"));\r\n\t\tvarsContAsStr = varsContAsStr.replaceAll(variable,\"\");\r\n\t\tfindBool();\r\n\t}\r\n\t\r\n}\r\n\n\n//# sourceURL=webpack://code/./src/Javascript/variables.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_webstyles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/webstyles.scss */ \"./src/sass/webstyles.scss\");\n/* harmony import */ var _node_modules_fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@fortawesome/fontawesome-free/css/all.css */ \"./node_modules/@fortawesome/fontawesome-free/css/all.css\");\n/* harmony import */ var _Javascript_site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Javascript/site */ \"./src/Javascript/site.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://code/./src/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;