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

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://code/./node_modules/bootstrap/dist/css/bootstrap.min.css?");

/***/ }),

/***/ "./src/sass/webstyles.scss":
/*!*********************************!*\
  !*** ./src/sass/webstyles.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://code/./src/sass/webstyles.scss?");

/***/ }),

/***/ "./src/Javascript/dowhile-code.js":
/*!****************************************!*\
  !*** ./src/Javascript/dowhile-code.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setDoWhileLoop)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/Javascript/variables.js\");\n/* harmony import */ var _getcond_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getcond.js */ \"./src/Javascript/getcond.js\");\n/* harmony import */ var _solve_cond_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solve-cond.js */ \"./src/Javascript/solve-cond.js\");\n\r\n\r\n\r\n\r\n//execution time\r\nconst exec_time = 2000;\r\n//variables outside for loop\r\nvar varsBlock;\r\n//output screen\r\nvar screen;\r\n//message\r\nvar outputMSG\r\n//initial consition\r\nvar initialCond;\r\nvar currentCond;\r\n//condition block\r\nvar condBlock;\r\nvar variablesArr =[];\r\nvar conditionArr =[];\r\nvar condCollector =[];\r\n\r\nvar do_whileBtn = document.getElementById(\"do-while-btn\");\r\nvar condListBtn = document.getElementById(\"do-while-cond-list-btn\");\r\n\r\nvar onExecIndicator = document.querySelector(\"#do-while-block .on-execute-indicator\");\r\nfunction setDoWhileLoop()\r\n{\r\n\tdo_whileBtn.addEventListener(\"click\",function(){\r\n\t\t//start anim\r\n\t\tonExecIndicator.classList.add(\"on-exec-anim\");\r\n\r\n\t\tcondListBtn.classList.add(\"d-none\");\r\n\r\n\t\tthis.innerHTML =\"<i class='fa fa-pause'></i> stop\";\r\n\t\tthis.disabled = true;\r\n\t\t//clear out put screen\r\n\t\tscreen = document.querySelector(\"#do-while-block .display-screen\");\r\n\t\tscreen.innerHTML =\"\";\r\n\t\t//message to be outputed in the screen container\r\n\t\toutputMSG = document.querySelector(\"#do-while-block .output-msg\").innerText;\r\n\t\t//\r\n\t\tcondBlock = document.querySelector(\"#do-while-block .cond\");\r\n\t\t//store initial condition to return to it\r\n\t\tinitialCond = condBlock.innerText;\r\n\t\tcurrentCond = initialCond;\r\n\t\t//start execution\r\n\t\tstartExec();\r\n\t});\r\n}\r\nfunction startExec(){\r\n\tvariablesArr =[];\r\n\tconditionArr =[];\r\n\tcondCollector = [];\r\n\tshowSteps(0,condBlock);\r\n}\r\nfunction prepareCond()\r\n{\r\n\tvarsBlock = document.querySelector(\"#do-while-block .vars-container\");\r\n\tvariablesArr =(0,_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(varsBlock.innerText).flat();\r\n\r\n\tcurrentCond = currentCond.replaceAll(\" \",\"\");\r\n\t//separate values from operations\r\n\tconditionArr = (0,_getcond_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(conditionArr,currentCond);\r\n\t//push first condition to array\r\n\tcondCollector.push([...conditionArr]);\r\n\r\n\tconditionArr = (0,_solve_cond_js__WEBPACK_IMPORTED_MODULE_2__.solveCondition)(conditionArr,variablesArr);\r\n\r\n\tcondCollector.push(..._solve_cond_js__WEBPACK_IMPORTED_MODULE_2__.condCollectorSL);\r\n}\r\nfunction showSteps(){\r\n\t\r\n\tsetTimeout(()=>{\r\n\r\n\t\texecInnerC();\r\n\t\tlet innercode1 = document.querySelector(\"#do-while-block .inner-code-1\");\r\n\t\tinnercode1.classList.add(\"curr-exec\");\r\n\t\tsetTimeout(()=>{\r\n\t\t\tinnercode1.classList.remove(\"curr-exec\");\r\n\t\t\tlet innercode2 = document.querySelector(\"#do-while-block .inner-code-2\");\r\n\t\t\tinnercode2.classList.add(\"curr-exec\");\r\n\t\t\tlet inc = document.getElementById(\"do-inc\");\r\n\t\t\tinc.classList.add(\"curr-exec\");\r\n\t\t\tinc.innerText = parseFloat(inc.innerText)+1;\r\n\t\t\tsetTimeout(()=>{\r\n\t\t\t\tinnercode2.classList.remove(\"curr-exec\");\r\n\t\t\t\tinc.classList.remove(\"curr-exec\");\r\n\t\t\t\tprepareCond();\r\n\t\t\t\tsetTimeout(()=>{\r\n\t\t\t\t\tcondBlock.classList.add(\"curr-exec\");\r\n\t\t\t\t\tshowCondSteps(0,condBlock);\r\n\t\t\t\t},2000);\r\n\t\t\t},2000);\r\n\t\t},2000);\r\n\t\t\r\n\t},2000);\r\n\r\n\t\r\n}\r\nfunction showCondSteps(count,_condBlock)\r\n{\r\n\tif(count < condCollector.length)\r\n\t{\r\n\t\tsetTimeout(()=>{\r\n\t\t\tlet cond = condCollector[count].toString().replaceAll(\",\",\" \");\r\n\t\t\t_condBlock.innerText = cond;\r\n\t\t\tshowCondSteps(count+1,_condBlock);\r\n\t\t},2000);\r\n\r\n\t}\r\n\telse{\r\n\t\tlet cond = condCollector[count-1].toString().replaceAll(\",\",\" \");\r\n\t\t\r\n\t\tsetTimeout(()=>{\r\n\t\t\t_condBlock.innerText = initialCond;\r\n\t\t\tif(cond == \"true\")\r\n\t\t\t{\r\n\t\t\t\tstartExec();\r\n\t\t\t}\r\n\t\t\telse{\r\n\t\t\t\tresetBtn();\r\n\t\t\t}\r\n\t\t\tcondBlock.classList.remove(\"curr-exec\");\r\n\t\t},2000);\t\r\n\t}\r\n}\r\n//execute inner code\r\nfunction execInnerC(){\r\n\t\r\n\tscreen.innerHTML += \"<span>\"+outputMSG+\"</span>\";\r\n\r\n}\r\nfunction resetBtn(){\r\n\tdo_whileBtn.innerHTML =\"<i class='fa fa-play'></i> start\";\r\n\tdo_whileBtn.disabled = false;\r\n\tcondListBtn.classList.remove(\"d-none\");\r\n\r\n\tonExecIndicator.classList.remove(\"on-exec-anim\");\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://code/./src/Javascript/dowhile-code.js?");

/***/ }),

/***/ "./src/Javascript/error-handling.js":
/*!******************************************!*\
  !*** ./src/Javascript/error-handling.js ***!
  \******************************************/
/***/ (() => {

eval("var varsCollection = document.getElementsByClassName(\"variable\");\r\ncheckValidity();\r\nfunction checkValidity(){\r\n    for(let i=0;i < varsCollection.length;i++)\r\n    {\r\n        let dataType = varsCollection[i].querySelector(\".data-type\").innerText.replaceAll(\" \",\"\");\r\n        let errorBox = varsCollection[i].querySelector(\".var-error\");\r\n        let valueBox = varsCollection[i].querySelector(\".var-value\");\r\n        valueBox.addEventListener(\"input\",function(){\r\n            if(dataType == \"int\" && !isValidInt(valueBox.innerText.replaceAll(\" \",\"\")))\r\n            {\r\n                errorBox.innerText =\"for the sake of this program, please use integers/numbers with no decimal only.\";\r\n            }\r\n            else if(dataType == \"int\"){ \r\n                errorBox.innerText =\"\";\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\nfunction isValidInt(value)\r\n{\r\n    if(value.search(/^-?\\d{1,}$/) >= 0)\r\n    {\r\n        return true;\r\n    }\r\n    return false;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://code/./src/Javascript/error-handling.js?");

/***/ }),

/***/ "./src/Javascript/expression.js":
/*!**************************************!*\
  !*** ./src/Javascript/expression.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Expression)\n/* harmony export */ });\nclass Expression{\r\n\tconstructor(val1,operator,val2,varsArr)\r\n\t{\r\n\t\tthis.val1 =val1;\r\n\t\tthis.operator = operator;\r\n\t\tthis.val2 = val2;\r\n\t\tthis.varsArr = varsArr;\r\n\t}\r\n\tinsertValues()\r\n\t{\r\n\t\tthis.val1 = this.insertValue(this.val1);\r\n\t\tthis.val2 = this.insertValue(this.val2);\r\n\t}\r\n\tinsertValue(_varname){\r\n\t\tlet tempVal = this.varsArr.find(({name})=> name == _varname);\r\n\t\tif(tempVal != undefined)\r\n\t\t{\r\n\t\t\t_varname = tempVal.value;\r\n\t\t}\r\n\t\telse{\r\n\t\t\tif(!isNaN(_varname))\r\n\t\t\t{\r\n\t\t\t\t_varname = parseFloat(_varname);\r\n\t\t\t}\r\n\t\t\telse if(_varname == \"true\" || _varname == \"false\")\r\n\t\t\t{\r\n\t\t\t\t_varname = _varname == \"true\"?true:false;\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn _varname;\r\n\t}\r\n\tsolution()\r\n\t{\r\n\t\tthis.insertValues();\r\n\t\treturn solveOperator(this.val1,this.operator,this.val2);\r\n\t}\r\n\ttoString(){\r\n\t\treturn this.val1 +\" \"+this.operator+\" \"+this.val2;\r\n\t}\r\n\t\r\n}\r\n\r\nfunction solveOperator(val1,operator,val2)\r\n{\r\n\tlet value = null;\r\n\t\tswitch(operator)\r\n\t\t{\r\n\t\t\tcase '==':\r\n\t\t\t\tvalue = val1 == val2;\r\n\t\t\tbreak;\r\n\t\t\tcase '!=':\r\n\t\t\t\tvalue = val1 != val2;\r\n\t\t\tbreak;\r\n\t\t\tcase '<':\r\n\t\t\t\tvalue = val1 < val2;\r\n\t\t\tbreak;\r\n\t\t\tcase '<=':\r\n\t\t\t\tvalue = val1 <= val2;\r\n\t\t\tbreak;\r\n\t\t\tcase '>':\r\n\t\t\t\tvalue = val1 > val2;\r\n\t\t\tbreak;\r\n\t\t\tcase '>=':\r\n\t\t\t\tvalue = val1 >= val2;\r\n\t\t\tbreak;\r\n\t\t}\r\n\t\treturn value;\r\n}\n\n//# sourceURL=webpack://code/./src/Javascript/expression.js?");

/***/ }),

/***/ "./src/Javascript/for-code.js":
/*!************************************!*\
  !*** ./src/Javascript/for-code.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setForLoop)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/Javascript/variables.js\");\n/* harmony import */ var _getcond_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getcond.js */ \"./src/Javascript/getcond.js\");\n/* harmony import */ var _solve_cond_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solve-cond.js */ \"./src/Javascript/solve-cond.js\");\n\r\n\r\n\r\n\r\nvar forBtn = document.getElementById(\"for-btn\");\r\n//variables outside for loop\r\nvar varsBlock;\r\n//variables inside for loop\r\nvar innerVarBlock;\r\nvar screen;\r\n//message\r\nvar outputMSG\r\n//initial consition\r\nvar initialCond;\r\nvar currentCond;\r\nvar lastCond;\r\n//condition block\r\nvar condBlock;\r\nvar variablesArr =[];\r\nvar conditionArr =[];\r\nvar condCollector;\r\n\r\nvar onExecIndicator = document.querySelector(\"#for-loop-block .on-execute-indicator\");\r\nfunction setForLoop()\r\n{\r\n\tforBtn.addEventListener(\"click\",function(){\r\n\t\t//start anim\r\n\t\tonExecIndicator.classList.add(\"on-exec-anim\");\r\n\r\n\t\tthis.innerHTML =\"<i class='fa fa-pause'></i> stop\";\r\n\t\tthis.disable = true;\r\n\t\t//clear out put screen\r\n\t\tscreen = document.querySelector(\"#for-loop-block .display-screen\");\r\n\t\tscreen.innerHTML =\"\";\r\n\t\t//message to be outputed in the screen container\r\n\t\toutputMSG = document.querySelector(\"#for-loop-block .output-msg\").innerText;\r\n\t\t//\r\n\t\tcondBlock = document.querySelector(\"#for-loop-block #for-cond\");\r\n\t\t//store initial condition to return to it\r\n\t\tinitialCond = condBlock.innerText;\r\n\t\tcurrentCond = initialCond;\r\n\r\n\t\tlastCond = document.querySelector(\"#for-loop-block #last-cond\");\r\n\r\n\t\t//start execution\r\n\t\tstartExec();\r\n\t});\r\n}\r\n//\r\nfunction startExec(){\r\n\tvariablesArr =[];\r\n\tconditionArr =[];\r\n\tcondCollector = [];\r\n\r\n\tvarsBlock = document.querySelector(\"#for-loop-block #for-var\");\r\n\tvariablesArr =(0,_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(varsBlock.innerText).flat();\r\n\r\n\tcurrentCond = currentCond.replaceAll(\" \",\"\");\r\n\t//separate values from operations\r\n\tconditionArr = (0,_getcond_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(conditionArr,currentCond);\r\n\t//push first condition to array\r\n\tcondCollector.push([...conditionArr]);\r\n\r\n\tconditionArr = (0,_solve_cond_js__WEBPACK_IMPORTED_MODULE_2__.solveCondition)(conditionArr,variablesArr);\r\n\r\n\tcondCollector.push(..._solve_cond_js__WEBPACK_IMPORTED_MODULE_2__.condCollectorSL);\r\n\r\n\tshowSteps(0,condBlock);\r\n}\r\n\r\nfunction showSteps(count,_condBlock){\r\n\tif(count < condCollector.length)\r\n\t{\r\n\t\tsetTimeout(()=>{\r\n\t\t\tlet cond = condCollector[count].toString().replaceAll(\",\",\" \");\r\n\t\t\t_condBlock.innerText = cond;\r\n\t\t\t_condBlock.classList.add(\"curr-exec\");\r\n\t\t\tshowSteps(count+1,_condBlock);\r\n\t\t},2000);\r\n\r\n\t}\r\n\telse{\r\n\t\tlet cond = condCollector[count-1].toString().replaceAll(\",\",\" \");\r\n\t\t_condBlock.classList.remove(\"curr-exec\");\r\n\t\tsetTimeout(()=>{\r\n\t\t\t_condBlock.innerText = initialCond;\r\n\t\t\tif(cond == \"true\")\r\n\t\t\t{\r\n\t\t\t\texecInnerC();\r\n\t\t\t\tlet innercode = document.querySelector(\"#for-loop-block .inner-code\");\r\n\t\t\t\tinnercode.classList.add(\"curr-exec\");\r\n\t\t\t\tsetTimeout(()=>{\r\n\t\t\t\t\tinnercode.classList.remove(\"curr-exec\");\r\n\t\t\t\t\tlastCond.classList.add(\"curr-exec\");\r\n\r\n\t\t\t\t\tlet forValue = document.getElementById(\"for-value\");\r\n\t\t\t\t\tforValue.classList.add(\"curr-exec\");\r\n\t\t\t\t\tforValue.innerText = parseFloat(forValue.innerText)+1;\r\n\t\t\t\t\tsetTimeout(()=>{\r\n\t\t\t\t\t\tlastCond.classList.remove(\"curr-exec\");\r\n\t\t\t\t\t\tforValue.classList.remove(\"curr-exec\");\r\n\t\t\t\t\t\tstartExec();\r\n\t\t\t\t\t},2000);\r\n\t\t\t\t},2000);\r\n\t\t\t}\r\n\t\t\telse\r\n\t\t\t{\r\n\t\t\t\tresetBtn();\r\n\t\t\t\t_condBlock.innerText = condCollector[0].toString().replaceAll(\",\",\" \");\r\n\t\t\t}\r\n\t\t},2000);\t\r\n\t}\r\n}\r\n//execute inner code\r\nfunction execInnerC(){\r\n\t\r\n\tscreen.innerHTML += \"<span>\"+outputMSG+\"</span>\";\r\n\r\n}\r\nfunction resetBtn(){\r\n\tforBtn.innerHTML =\"<i class='fa fa-play'></i> start\";\r\n\tforBtn.disabled = false;\r\n\r\n\tonExecIndicator.classList.remove(\"on-exec-anim\");\r\n}\r\n\r\n\n\n//# sourceURL=webpack://code/./src/Javascript/for-code.js?");

/***/ }),

/***/ "./src/Javascript/getcond.js":
/*!***********************************!*\
  !*** ./src/Javascript/getcond.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sepValFromOper)\n/* harmony export */ });\nfunction sepValFromOper(conditionArr,input){\r\n\t//matches operators in the string\r\n\tlet pattern = /(>=?|<=?|==|!=?|&&|\\|{2}|\\(|\\))/i;\r\n\tlet operator = input.match(pattern);\r\n\tlet tempArr =[];\r\n\tif(operator != null){\r\n\t\toperator = operator[0];\r\n\t\t//replace operator with a space for safe splitting\r\n\t\t//the space represent the first operator found \r\n\t\tinput = input.replace(operator,\" \");\r\n\t\ttempArr = input.split(\" \");\r\n\t\t//insert the string before condition to array\r\n\t\tif(tempArr[0] != '')\r\n\t\t{\r\n\t\t\tconditionArr.push(tempArr[0]);\r\n\t\t}\r\n\t\tconditionArr.push(operator);\r\n\t\t//do operator search for the string after the found operator to find other operators\r\n\r\n\t\tlet lastString = tempArr.pop();\r\n\t\tif(lastString != \"\")\r\n\t\t{\r\n\t\t\tsepValFromOper(conditionArr,lastString);\r\n\t\t}\r\n\t}\r\n\telse{\r\n\t\t//push the last element to the array \r\n\t\tconditionArr.push(input);\r\n\t\tconditionArr = conditionArr.filter(x => x != \"\");\r\n\t\tconditionArr = conditionArr.map((x)=>{\r\n\t\t\tif(x == \"true\" || x == \"false\")\r\n\t\t\t{\r\n\t\t\t\treturn x==\"true\";\r\n\t\t\t}\r\n\t\t\treturn x;\r\n\t\t});\r\n\t} \r\n\treturn conditionArr;\r\n}\r\n\n\n//# sourceURL=webpack://code/./src/Javascript/getcond.js?");

/***/ }),

/***/ "./src/Javascript/home.js":
/*!********************************!*\
  !*** ./src/Javascript/home.js ***!
  \********************************/
/***/ (() => {

eval("var span = document.querySelectorAll(\"#home-page .anim-screen span\");\r\nsetAnim();\r\nsetInterval(()=>{\r\n    setAnim();\r\n},4000);\r\nfunction setAnim()\r\n{\r\n    for(let i=0;i<span.length;i++){\r\n        setTimeout(()=>{\r\n            span[i].classList.add(\"curr-anim\");\r\n            setTimeout(()=>{\r\n                span[i].classList.remove(\"curr-anim\");\r\n            },1000);\r\n        },1000*i)\r\n    }\r\n}\n\n//# sourceURL=webpack://code/./src/Javascript/home.js?");

/***/ }),

/***/ "./src/Javascript/if-code.js":
/*!***********************************!*\
  !*** ./src/Javascript/if-code.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setIfStatement)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/Javascript/variables.js\");\n/* harmony import */ var _getcond_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getcond.js */ \"./src/Javascript/getcond.js\");\n/* harmony import */ var _solve_cond_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solve-cond.js */ \"./src/Javascript/solve-cond.js\");\n\r\n\r\n\r\n\r\nvar screen;\r\nvar outputMSG;\r\nvar else_outputMSG;\r\nvar variablesArr =[];\r\nvar conditionArr =[];\r\n//condition collector\r\nvar condCollector =[];\r\nvar initialCond;\r\nlet currentCond;\r\n\r\nvar ifBtn = document.querySelector(\"#if-block .start-btn\");\r\nvar varsBlock =document.querySelector(\"#if-block .variables-container \");\r\nvar condBlock = document.querySelector(\"#if-block .cond\");\r\nvar innerCode = document.querySelector(\"#if-block .inner-code\"); \r\nvar btnElse = document.querySelector(\"#if-block .else-btn\");\r\nvar elseBlock = document.querySelector(\"#if-block .else\");\r\nvar condStepsBlock = document.getElementById(\"if-cond-steps\");\r\n\r\nvar condListBtn = document.getElementById(\"if-cond-list-btn\");\r\n\r\nvar onExecIndicator = document.querySelector(\"#if-block .on-execute-indicator\");\r\n\r\nfunction setIfStatement()\r\n{\r\n\tifBtn.addEventListener(\"click\",function(){\r\n\t\t//start anim\r\n\t\tonExecIndicator.classList.add(\"on-exec-anim\");\r\n\t\t//remove cond list button\r\n\t\tcondListBtn.classList.add(\"d-none\");\r\n\t\t//reset \r\n\t\tvariablesArr =[];\r\n\t\tconditionArr =[];\r\n\t\tcondCollector = [];\r\n\r\n\t\tthis.innerHTML =\"<i class='fa fa-pause'></i> stop\";\r\n\t\tthis.disabled = true;\r\n\r\n\t\t//message to be outputed in the screen container\r\n\t\toutputMSG = document.querySelector(\"#if-block .output-msg\").innerText;\r\n\t\telse_outputMSG = document.querySelector(\"#if-block .else .output-msg\").innerText;\r\n\t\t//clear out put screen\r\n\t\tscreen = document.querySelector(\"#if-block .display-screen\");\r\n\t\tscreen.innerText=\"\";\r\n\t\t//get variables from container\r\n\t\tvariablesArr =(0,_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(varsBlock.innerText).flat();\r\n\r\n\t\tinitialCond = condBlock.innerHTML;\r\n\t\tcurrentCond = condBlock.innerText;\r\n\r\n\t\t//clear if cond steps block\r\n\t\tcondStepsBlock.innerHTML=\"\";\r\n\t\tstartExec();\t\r\n\t});\r\n\tbtnElse.addEventListener(\"click\",function(){\r\n\t\tif(elseBlock.style.display == \"none\")\r\n\t\t{\r\n\t\t\telseBlock.style.display = \"initial\";\r\n\t\t\tthis.innerHTML =\"<i class='fa fa-minus'></i> else\"\r\n\t\t}\r\n\t\telse{\r\n\t\t\telseBlock.style.display = \"none\";\r\n\t\t\tthis.innerHTML =\"<i class='fa fa-plus'></i> else\"\r\n\t\t}\r\n\t});\r\n}\r\n\r\nfunction startExec(){\r\n\tcurrentCond = currentCond.replaceAll(\" \",\"\");\r\n\t//separate values from operations\r\n\tconditionArr = (0,_getcond_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(conditionArr,currentCond);\r\n\t//push first condition to array\r\n\tcondCollector.push([...conditionArr]);\r\n\r\n\tconditionArr = (0,_solve_cond_js__WEBPACK_IMPORTED_MODULE_2__.solveCondition)(conditionArr,variablesArr);\r\n\r\n\tcondCollector.push(..._solve_cond_js__WEBPACK_IMPORTED_MODULE_2__.condCollectorSL);\r\n\r\n\tshowSteps(0,condBlock);\r\n}\r\n\r\n//show steps\r\nfunction showSteps(count,_condBlock){\r\n\tif(count < condCollector.length)\r\n\t{\r\n\t\tsetTimeout(()=>{\r\n\t\t\tlet cond = condCollector[count].toString().replaceAll(\",\",\" \");\r\n\t\t\t_condBlock.innerText = cond;\r\n\t\t\tcondStepsBlock.innerHTML+=\"<span class='d-block'>\"+cond+\"</span>\";\r\n\t\t\tif(!_condBlock.classList.contains(\"curr-exec\"))\r\n\t\t\t{\r\n\t\t\t\t_condBlock.classList.add(\"curr-exec\");\r\n\t\t\t}\r\n\t\t\tshowSteps(count+1,_condBlock);\r\n\t\t},2000);\r\n\r\n\t}\r\n\telse{\r\n\t\t_condBlock.classList.remove(\"curr-exec\");\r\n\t\t\r\n\t\tlet cond = condCollector[count-1].toString().replaceAll(\",\",\" \");\r\n\t\tif(cond == \"true\")\r\n\t\t{\r\n\t\t\tlet innerCode = document.querySelector(\".if .inner-code\");\r\n\t\t\tinnerCode.classList.add(\"curr-exec\");\r\n\t\t\tscreen.innerText = outputMSG;\r\n\t\t\tsetTimeout(()=>{\r\n\t\t\t\tresetBtn();\r\n\t\t\t\tinnerCode.classList.remove(\"curr-exec\");\r\n\t\t\t\t_condBlock.innerHTML=initialCond;\r\n\t\t\t},2000);\t\r\n\t\t}\r\n\t\telse{\r\n\t\t\tlet innerCode = document.querySelector(\".else .inner-code\");\r\n\t\t\tif(elseBlock.style.display !=\"none\"){\r\n\t\t\t\tscreen.innerText = else_outputMSG;\r\n\t\t\t\tinnerCode.classList.add(\"curr-exec\");\r\n\t\t\t}\r\n\t\t\tsetTimeout(()=>{\r\n\t\t\t\tresetBtn();\r\n\t\t\t\tif(innerCode.classList.contains(\"curr-exec\"))\r\n\t\t\t\t{\r\n\t\t\t\t\tinnerCode.classList.remove(\"curr-exec\");\r\n\t\t\t\t}\r\n\t\t\t\t_condBlock.innerHTML=initialCond;\r\n\t\t\t},2000);\t\r\n\t\t}\r\n\t\r\n\t}\r\n}\r\nfunction resetBtn(){\r\n\tifBtn.innerHTML =\"<i class='fa fa-play'></i> start\";\r\n\tifBtn.disabled = false;\r\n\tcondListBtn.classList.remove(\"d-none\");\r\n\tonExecIndicator.classList.remove(\"on-exec-anim\");\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://code/./src/Javascript/if-code.js?");

/***/ }),

/***/ "./src/Javascript/langauge-setting.js":
/*!********************************************!*\
  !*** ./src/Javascript/langauge-setting.js ***!
  \********************************************/
/***/ (() => {

eval("var prog_lang =\"c#\";\r\n\r\nvar dataTypeCollec = document.getElementsByClassName(\"data-type\");\r\nvar printMethods = document.getElementsByClassName(\"print-method\");\r\nvar varValues = document.getElementsByClassName(\"var-value\");\r\n\r\nvar langListCollec = document.getElementsByClassName(\"prog-lang-list\");\r\nsetLangOnInput();\r\nfunction setLangOnInput()\r\n{\r\n    //set language for the whole program\r\n    for(let i=0;i<langListCollec.length;i++){\r\n        langListCollec[i].addEventListener(\"input\",()=>{\r\n            prog_lang =langListCollec[i].value;\r\n            setLangInstruc(prog_lang);\r\n            for(let j=0;j<langListCollec.length;j++)\r\n            {\r\n                langListCollec[j].value=prog_lang;\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\n//set langauge instructions\r\nfunction setLangInstruc(lang)\r\n{\r\n    switch(lang)\r\n    {\r\n        case 'c#':\r\n            setDataType(\"int\");\r\n            setPrintMethod(\"Console.WriteLine\")\r\n            break;\r\n        case 'java':\r\n            setDataType(\"int\");\r\n            setPrintMethod(\"System.Print\");\r\n            break;\r\n        case 'javascript':\r\n            setDataType(\"let\");\r\n            setPrintMethod(\"console.log\");\r\n            break;\r\n\r\n    }\r\n}\r\n\r\nfunction setDataType(datatype)\r\n{\r\n    for(let i=0;i<dataTypeCollec.length;i++)\r\n    {  \r\n        dataTypeCollec[i].innerText =datatype;\r\n    }\r\n}\r\nfunction setPrintMethod(method)\r\n{\r\n    for(let i=0;i < printMethods.length;i++)\r\n    {\r\n        printMethods[i].innerText =method;\r\n    }\r\n}\n\n//# sourceURL=webpack://code/./src/Javascript/langauge-setting.js?");

/***/ }),

/***/ "./src/Javascript/logic.js":
/*!*********************************!*\
  !*** ./src/Javascript/logic.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ solveLogic)\n/* harmony export */ });\nvar conditionArr = [];\r\nfunction solveLogic(_conditionArr,logic,index) {\r\n\tconditionArr =_conditionArr;\r\n\tswitch(logic){\r\n\t\t\r\n\t\tcase '!':\r\n\t\t\tsolveInverter(index);\r\n\t\tbreak;\r\n\t\tcase '&&':\r\n\t\t\tsolveAND(index);\r\n\t\tbreak;\r\n\t\t\r\n\t\tcase '||':\r\n\t\t\tsolveOR(index);\r\n\t\tbreak;\r\n\t}\r\n\t\r\n \treturn conditionArr;\r\n}\r\nfunction solveInverter(index)\r\n{\r\n\tif(conditionArr[index] != \"!\")\r\n\t{\r\n\t\treturn;\r\n\t}\r\n\tif( conditionArr[index+1] == true || conditionArr[index+1] ==false)\r\n\t{\r\n\t\tconditionArr[index] = !conditionArr[index+1]; \r\n\t\tconditionArr.splice(index+1,1);\r\n\r\n\t\treturn;\r\n\t}\r\n\t\r\n\treturn;\r\n\r\n}\r\nfunction solveAND(index){\r\n\tif( conditionArr[index-1] == false || conditionArr[index+1] ==false)\r\n\t{\r\n\t\tconditionArr[index-1] = false;\r\n\t\t//check if || exist\r\n\t\tlet orIndex =conditionArr.indexOf(\"||\"); \r\n\t\tconditionArr.splice(index,orIndex > 0 && orIndex > index?orIndex-index:conditionArr.length);\r\n\t\treturn;\r\n\t}\r\n\t\r\n\tif ( conditionArr[index-1] == true && conditionArr[index+1] == true) {\r\n\t\tconditionArr[index-1]=true;\r\n\t    conditionArr.splice(index,2);\r\n\t    return;\r\n\t}\r\n\r\n\treturn;\r\n}\r\n\r\nfunction solveOR(index){\r\n\tif( conditionArr[index-1] == true || conditionArr[index+1] == true){\r\n\t\tconditionArr =[];\r\n\t\tconditionArr[0] =true;\r\n\t\treturn;\r\n\t}\r\n\t\r\n\tif( conditionArr[index-1] == false && conditionArr[index+1] == false)\r\n\t{\r\n\t\tconditionArr[index-1]=false;\r\n\t\tconditionArr.splice(index,2);\r\n\t\treturn;\r\n\t}\r\n\t\r\n\treturn;\r\n}\r\n\n\n//# sourceURL=webpack://code/./src/Javascript/logic.js?");

/***/ }),

/***/ "./src/Javascript/menu.js":
/*!********************************!*\
  !*** ./src/Javascript/menu.js ***!
  \********************************/
/***/ (() => {

eval("//Expansion of side menu\r\nvar sideMenuBtn = document.getElementById(\"btn-side-menu\");\r\nsideMenuBtn.addEventListener(\"click\",function(){\r\n\tresizeMenu(this,this.getAttribute(\"data-menu-id\"));\r\n});\r\nfunction resizeMenu(btn,menuId){\r\n\tbtn.style.animation=\"none\";\r\n \tvar menu = document.getElementById(menuId);\r\n\tif(menu.classList.contains(\"side-menu-ml\")){\r\n\t\tmenu.classList.remove(\"side-menu-ml\");\r\n\t\tbtn.innerHTML=\"<i class='fa fa-angle-left'></i>\";\r\n\t}\r\n\telse{\r\n\t\tmenu.classList.add(\"side-menu-ml\");\r\n\t\tbtn.innerHTML=\"<i class='fa fa-bars'></i>\";\r\n\t}\r\n}\r\n//Close Menu On When a Link Is Clicked\r\ncloseOnLinkClick();\r\nfunction closeOnLinkClick(){\r\n\tvar links = document.querySelectorAll(\".side-menu a\");\r\n\tfor(let i=0;i<links.length;i++){\r\n\t\tlinks[i].addEventListener(\"click\",function(){\r\n\t\t\tresizeMenu(sideMenuBtn,sideMenuBtn.getAttribute(\"data-menu-id\"));\r\n\t\t});\r\n\t}\r\n}\r\n//\r\nvar pages = document.getElementsByClassName(\"page\");\r\nvar pageBtns = document.getElementsByClassName(\"nav-btn\");\r\naddHideEventsToPageBtns();\r\nfunction addHideEventsToPageBtns()\r\n{\r\n\tfor(let i=0;i<pageBtns.length;i++){\r\n\t\tpageBtns[i].addEventListener(\"click\",()=>{\r\n\r\n\t\t\tlet pageId = pageBtns[i].getAttribute(\"data-page-id\");\r\n\t\t\thideAllPages();\r\n\t\t\tdocument.getElementById(pageId).classList.remove(\"d-none\");\r\n\r\n\t\t});\r\n\t}\r\n}\r\nfunction hideAllPages()\r\n{\r\n\tfor(let i=0;i < pages.length;i++)\r\n\t{\r\n\t\tif(!pages[i].classList.contains(\"d-none\"))\r\n\t\t{\r\n\t\t\tpages[i].classList.add(\"d-none\");\r\n\t\t}\r\n\t}\r\n}\n\n//# sourceURL=webpack://code/./src/Javascript/menu.js?");

/***/ }),

/***/ "./src/Javascript/site.js":
/*!********************************!*\
  !*** ./src/Javascript/site.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/Javascript/menu.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/Javascript/home.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _error_handling_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-handling.js */ \"./src/Javascript/error-handling.js\");\n/* harmony import */ var _error_handling_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_error_handling_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _if_code_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./if-code.js */ \"./src/Javascript/if-code.js\");\n/* harmony import */ var _while_code_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./while-code.js */ \"./src/Javascript/while-code.js\");\n/* harmony import */ var _dowhile_code_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dowhile-code.js */ \"./src/Javascript/dowhile-code.js\");\n/* harmony import */ var _for_code_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./for-code.js */ \"./src/Javascript/for-code.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//if statement events\r\n(0,_if_code_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n//while loop\r\n(0,_while_code_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n//do while\r\n(0,_dowhile_code_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n//for loop\r\n(0,_for_code_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n/*hide or show content*/\r\naddEventsToContentViewBtns();\r\nfunction addEventsToContentViewBtns()\r\n{\r\n\tconst contentViewBtn = document.getElementsByClassName(\"btn-hidden-content\");\r\n\tfor(let i=0;i < contentViewBtn.length;i++){\r\n\t\tcontentViewBtn[i].addEventListener(\"click\",function(){\r\n\t\t\texpandContent(this,this.innerText,this.getAttribute(\"data-content-id\"));\r\n\t\t});\r\n\t}\r\n}\r\nfunction expandContent(btn,newText,contentId){\r\n\tvar content = document.getElementById(contentId);\r\n\tif(!content.classList.contains(\"d-none\"))\r\n\t{\r\n\t\tcontent.classList.add(\"d-none\");\r\n\t\tbtn.innerHTML = newText + \" <i class='fa fa-caret-down'></i>\";\r\n\t}\r\n\telse\r\n\t{\r\n\t\tcontent.classList.remove(\"d-none\");\r\n\t\tbtn.innerHTML = newText + \" <i class='fa fa-caret-up'></i>\";\r\n\t}\r\n}\r\n\r\n//remove element\r\nvar removeElemBtns = document.getElementsByClassName(\"remove-elem-btn\");\r\naddEventsToRemElemBtns();\r\nfunction addEventsToRemElemBtns()\r\n{\r\n\tfor(let i=0;i < removeElemBtns.length;i++)\r\n\t{\r\n\t\tremoveElemBtns[i].addEventListener(\"click\",()=>{\r\n\t\t\tlet elem = document.querySelector(removeElemBtns[i].getAttribute(\"data-element\"));\r\n\t\t\telem.classList.add(\"d-none\");\r\n\t\t});\r\n\t}\r\n\r\n}\r\n\r\n//list select\r\nvar listSelectCollection = document.getElementsByClassName(\"list-select\");\r\nvar listSelectBtns = document.getElementsByClassName(\"list-select-btn\");\r\naddEventToListSelectBtns();\r\naddEventsToListSelect();\r\nfunction addEventToListSelectBtns()\r\n{\r\n\tfor(let i=0;i < listSelectBtns.length;i++)\r\n\t{\r\n\t\tlistSelectBtns[i].addEventListener(\"click\",()=>{\r\n\t\t\tlet listSelect = document.querySelector(listSelectBtns[i].getAttribute(\"data-select-list\"));\r\n\t\t\tif(listSelect.classList.contains(\"d-none\"))\r\n\t\t\t{\r\n\t\t\t\tlistSelect.classList.remove(\"d-none\");\r\n\t\t\t}\r\n\t\t\telse{\r\n\t\t\t\tlistSelect.classList.add(\"d-none\");\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n}\r\nfunction addEventsToListSelect()\r\n{\r\n\tfor(let i=0;i<listSelectCollection.length;i++)\r\n\t{\r\n\t\tlet options=listSelectCollection[i].getElementsByClassName(\"option\");\r\n\t\tfor(let j=0;j< options.length;j++)\r\n\t\t{\r\n\t\t\toptions[j].addEventListener(\"click\",()=>{\r\n\t\t\t\tvar ouputTo = document.querySelector(listSelectCollection[i].getAttribute(\"data-output-to\"));\r\n\t\t\t\touputTo.innerText = options[j].innerText;\r\n\t\t\t\tsetTimeout(()=>{\r\n\t\t\t\t\tlistSelectCollection[i].classList.add(\"d-none\");\r\n\t\t\t\t},300);\r\n\t\t\t});\r\n\t\t}\r\n\t}\r\n}\n\n//# sourceURL=webpack://code/./src/Javascript/site.js?");

/***/ }),

/***/ "./src/Javascript/solve-cond.js":
/*!**************************************!*\
  !*** ./src/Javascript/solve-cond.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"condCollectorSL\": () => (/* binding */ condCollector),\n/* harmony export */   \"solveCondition\": () => (/* binding */ solveCondition)\n/* harmony export */ });\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ \"./src/Javascript/logic.js\");\n/* harmony import */ var _expression_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expression.js */ \"./src/Javascript/expression.js\");\n\r\n\r\n\r\nlet condCollector =[];\r\n\r\nfunction solveCondition(_condArr,_varsArr){\r\n\tcondCollector =[];\r\n\t_condArr = setExpressions(_condArr,_varsArr);\r\n\t_condArr =solveCon(0,_condArr);\r\n\t//remove bracket expressions\r\n\t\r\n\treturn _condArr;\r\n\t\r\n}\r\n\r\nfunction setExpressions(_condArr,_varsArr)\r\n{\r\n\tlet opPattern = [\"==\",\"!=\",\"<\",\"<=\",\">\",\">=\"];\r\n\tfor(let i=0;i<_condArr.length;i++)\r\n\t{\r\n\t\tfor(let j=0;j<opPattern.length;j++)\r\n\t\t{\r\n\t\t\tif(_condArr[i] == opPattern[j])\r\n\t\t\t{\r\n\t\t\t\tlet val1 = _condArr[i-1];\r\n\t\t\t\tlet val2 = _condArr[i+1]\r\n\t\t\t\tlet op = _condArr[i];\r\n\t\t\t\t_condArr[i-1]=new _expression_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](val1,op,val2,_varsArr);\r\n\t\t\t\t_condArr.splice(i,2);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\treturn _condArr;\r\n}\r\n\r\nfunction solveCon(count,_condArr)\r\n{\r\n\tlet isComplete = count >= _condArr.length && (_condArr[count-1] != true &&  _condArr[count-1] != false);\r\n\tif(isComplete)\r\n\t{\r\n\t\treturn _condArr;\r\n\t}\r\n\r\n\tif(isLogic(_condArr[count]) )\r\n\t{\r\n\t\tlet isOrTrueLeft = _condArr[count] == \"||\" && _condArr[count-1] == true;\r\n\t\tlet isAndFalseLeft = _condArr[count] == \"&&\" && _condArr[count-1] == false;\r\n\r\n\t\tif(isOrTrueLeft || isAndFalseLeft)\r\n\t\t{\r\n\t\t\t_condArr = (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_condArr,_condArr[count],count);\r\n\t\t\tcondCollector.push([...getCondArr(_condArr)]);\r\n\r\n\t\t\t//iterate\r\n\t\t\tif(_condArr.length > 1)\r\n\t\t\t{\r\n\t\t\t\tcount=0;\r\n\t\t\t\t_condArr = solveCon(count,_condArr);\r\n\t\t\t}\r\n\t\t\telse{\r\n\t\t\t\treturn _condArr;\r\n\t\t\t}\r\n\t\t}\r\n\t\telse{\r\n\t\t\tcount++;\r\n\t\t\t//iterate\r\n\t\t\t_condArr = solveCon(count,_condArr);\r\n\t\t}\r\n\t\t\r\n\t}\r\n\telse if(_condArr[count] != true && _condArr[count] != false){\r\n\t\t_condArr[count] = _condArr[count].solution();\r\n\t\tcondCollector.push([...getCondArr(_condArr)]);\r\n\t}\r\n\r\n\tif(isLogic(_condArr[count-1]))\r\n\t{\r\n\t\tif(_condArr[count-1] == \"(\") \r\n\t\t{\r\n\t\t\t//closing index\r\n\t\t\tcondCollector.push(\"**solving-bracket**\");\r\n\t\t\tlet clsIndex =findClsBIndex(_condArr,count);\r\n\t\t\tlet brac = _condArr.splice(count,clsIndex - count+1);\r\n\t\t\t_condArr[count-1] = solveBracket(brac)[0]==true;\r\n\t\t}\r\n\t\telse\r\n\t\t{\r\n\t\t\t_condArr = (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_condArr,_condArr[count-1],count-1);\r\n\t\t}\r\n\t\tcondCollector.push([...getCondArr(_condArr)]);\r\n\t\tcount=0;\r\n\t\t//iterate\r\n\t\t_condArr = solveCon(count,_condArr);\r\n\t}\r\n\telse if(_condArr.length > 1){\r\n\t\tcount++;\r\n\t\t//iterate\r\n\t\t_condArr = solveCon(count,_condArr);\r\n\t}\r\n\t\t\r\n\treturn _condArr;\r\n}\r\n\r\nfunction getCondArr(_condArr)\r\n{\r\n\tlet condArr = [..._condArr.map((x)=>{\r\n\t\t\t\tif(x != true && x != false)\r\n\t\t\t\t{\r\n\t\t\t\t\treturn x.toString();\r\n\t\t\t\t}\r\n\t\t\t\treturn x;\r\n\t\t\t})];\r\n\treturn condArr;\r\n}\r\nfunction isLogic(_logic){\r\n\tlet opPattern = [\"!\",\"&&\",\"||\",\"(\"];\r\n\t\r\n\tfor(let j = 0;j < opPattern.length;j++){\r\n\t\tif(_logic ==opPattern[j]){\r\n\t\t\treturn true;\r\n\t\t}\r\n\t}\r\n\t\r\n\treturn false;\r\n}\r\n\r\nfunction solveBracket(_condArr)\r\n{\r\n\t_condArr.pop();\r\n\treturn solveCon(0,_condArr);\r\n}\r\nfunction findClsBIndex(_arr,startIndex)\r\n{\r\n\tlet jump =0;\r\n\tlet count = startIndex;\r\n\twhile(count < _arr.length)\r\n\t{\r\n\t\tif(_arr[count] == \"(\")\r\n\t\t{\r\n\t\t\tjump++;\r\n\t\t}\r\n\t\telse if(_arr[count] ==\")\")\r\n\t\t{\r\n\t\t\tjump--;\r\n\t\t\tif(jump < 0)\r\n\t\t\t{\r\n\t\t\t\tbreak;\r\n\t\t\t}\r\n\t\t}\r\n\t\tcount++;\r\n\t}\r\n\treturn count;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://code/./src/Javascript/solve-cond.js?");

/***/ }),

/***/ "./src/Javascript/variables.js":
/*!*************************************!*\
  !*** ./src/Javascript/variables.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ findVariables)\n/* harmony export */ });\nvar varsContAsStr=\"\";\r\nvar varsArr=[];\r\nfunction findVariables(_varsContAsStr){\r\n\t//clear array\r\n\tvarsArr=[];\r\n\tvarsContAsStr = _varsContAsStr;\r\n\r\n\tfindStrings();\r\n\r\n\tfindNumbers();\r\n\r\n\tfindBool();\r\n\r\n\treturn varsArr;\r\n}\r\nfunction findStrings(){\r\n\t//pattern to find string variables\r\n\tlet patternStrings = / +[a-zA-Z_]\\w*\\s*=\\s*('.*'|\".*\")\\s*/i;\r\n\r\n\tlet findString = varsContAsStr.match(patternStrings);\r\n\r\n\tif(findString != null){\r\n\t\tlet variable = findString[0].toString();\r\n\t\tvarsContAsStr = varsContAsStr.replaceAll(variable,\"\");\r\n\r\n\t\tlet varArr = variable.split(\"=\");\r\n\t\t//remove spaces from a variables\r\n\t\tvarArr[0] = varArr[0].replaceAll(\" \",\"\");\r\n\t\tlet varObj = {\r\n\t\t\t\"name\":varArr[0],\r\n\t\t\t\"value\":varArr[1]\r\n\t\t}\r\n\t\tvarsArr.push(varObj);\r\n\t\tfindStrings();\r\n\t}\r\n\r\n}\r\nfunction findNumbers(){\r\n\t//pattern to find numbers variables\r\n\tlet patternNo = / +[a-zA-Z_]\\w*\\s*=\\s*-?(\\d{1,}\\.\\d{1,}|\\d{1,})/;\r\n\tlet findNo = varsContAsStr.match(patternNo);\r\n    \r\n\tif(findNo != null){\r\n\t\t\r\n\t\tlet variable = findNo[0].toString();\r\n\t\tvarsContAsStr = varsContAsStr.replaceAll(variable,\"\");\r\n\t\tvariable = variable.replaceAll(\" \",\"\");\r\n\t\t//variable as array\r\n\t\tlet varArr = variable.split(\"=\");\r\n\t\t//variable value\r\n\t\tvarArr[1] = parseFloat(varArr[1]);\r\n\t\tlet varObj = {\r\n\t\t\t\"name\":varArr[0],\r\n\t\t\t\"value\":varArr[1]\r\n\t\t}\r\n\t\tvarsArr.push(varObj);\r\n\t\tfindNumbers();\r\n\t}\r\n}\r\nfunction findBool(){\r\n\t//pattern to find bool variables from a string\r\n\tlet patternBool = / +[a-zA-Z_]\\w*\\s*=\\s*(true|false)/i;\r\n\tlet findBool = varsContAsStr.match(patternBool);\r\n\r\n\tif(findBool != null){\r\n\t\tlet variable = findBool[0].toString();\r\n\t\tvarsContAsStr = varsContAsStr.replaceAll(variable,\"\");\r\n\t\tvariable = variable.replaceAll(\" \",\"\");\r\n\t\t//variable as array\r\n\t\tlet varArr = variable.split(\"=\");\r\n\t\t//variable value\r\n\t\tvarArr[1] = varArr[1] == \"true\"?true:false;\r\n\t\tlet varObj = {\r\n\t\t\t\"name\":varArr[0],\r\n\t\t\t\"value\":varArr[1]\r\n\t\t}\r\n\t\tvarsArr.push(varObj);\r\n\t\tfindBool();\r\n\t}\r\n\t\r\n}\r\n\n\n//# sourceURL=webpack://code/./src/Javascript/variables.js?");

/***/ }),

/***/ "./src/Javascript/while-code.js":
/*!**************************************!*\
  !*** ./src/Javascript/while-code.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setWhileLoop)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/Javascript/variables.js\");\n/* harmony import */ var _getcond_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getcond.js */ \"./src/Javascript/getcond.js\");\n/* harmony import */ var _solve_cond_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solve-cond.js */ \"./src/Javascript/solve-cond.js\");\n\r\n\r\n\r\n\r\n//execution time\r\nvar exec_time = 2000;\r\n//variables outside for loop\r\nvar varsBlock;\r\n//output screen\r\nvar screen;\r\n//message\r\nvar outputMSG\r\n//initial consition\r\nvar initialCond;\r\nvar currentCond;\r\nvar condCollector =[];\r\n//condition block\r\nvar condBlock;\r\nvar variablesArr =[];\r\nvar conditionArr =[];\r\n\r\nvar whileBtn = document.querySelector(\"#while-block .start-btn\");\r\n\r\nvar whileCondListBtn = document.getElementById(\"while-cond-list-btn\");\r\n\r\nvar onExecIndicator = document.querySelector(\"#while-block .on-execute-indicator\");\r\nfunction setWhileLoop()\r\n{\r\n\twhileBtn.addEventListener(\"click\",function(){\r\n\t\t//start anim\r\n\t\tonExecIndicator.classList.add(\"on-exec-anim\");\r\n\t\t//cond list btn\r\n\t\twhileCondListBtn.classList.add(\"d-none\");\r\n\r\n\t\tthis.innerHTML =\"<i class='fa fa-pause'></i> stop\";\r\n\t\tthis.disabled = true;\r\n\t\t//clear out put screen\r\n\t\tscreen = document.querySelector(\"#while-block .display-screen\");\r\n\t\tscreen.innerHTML =\"\";\r\n\t\t//message to be outputed in the screen container\r\n\t\toutputMSG = document.querySelector(\"#while-block .output-msg\").innerText;\r\n\t\t//\r\n\t\tcondBlock = document.querySelector(\"#while-block .cond\");\r\n\t\t//store initial condition to return to it\r\n\t\tinitialCond = condBlock.innerText;\r\n\t\tcurrentCond = initialCond;\r\n\t\t//start execution\r\n\t\t\r\n\t\tstartExec();\r\n\t});\r\n}\r\nfunction startExec(){\r\n\tvariablesArr =[];\r\n\tconditionArr =[];\r\n\tcondCollector = [];\r\n\r\n\tvarsBlock = document.querySelector(\"#while-block .vars-container\");\r\n\tvariablesArr =(0,_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(varsBlock.innerText).flat();\r\n\tcurrentCond = currentCond.replaceAll(\" \",\"\");\r\n\t//separate values from operations\r\n\tconditionArr = (0,_getcond_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(conditionArr,currentCond);\r\n\t//push first condition to array\r\n\tcondCollector.push([...conditionArr]);\r\n\r\n\tconditionArr = (0,_solve_cond_js__WEBPACK_IMPORTED_MODULE_2__.solveCondition)(conditionArr,variablesArr);\r\n\r\n\tcondCollector.push(..._solve_cond_js__WEBPACK_IMPORTED_MODULE_2__.condCollectorSL);\r\n\t\r\n\tshowSteps(0,condBlock);\r\n}\r\n\t\r\nfunction showSteps(count,_condBlock){\r\n\tif(count < condCollector.length)\r\n\t{\r\n\t\tsetTimeout(()=>{\r\n\t\t\tlet cond = condCollector[count].toString().replaceAll(\",\",\" \");\r\n\t\t\t_condBlock.innerText = cond;\r\n\t\t\t_condBlock.classList.add(\"curr-exec\");\r\n\t\t\tshowSteps(count+1,_condBlock);\r\n\t\t},2000);\r\n\r\n\t}\r\n\telse{\r\n\t\tlet cond = condCollector[count-1].toString().replaceAll(\",\",\" \");\r\n\t\t_condBlock.innerText = cond;\r\n\t\t_condBlock.classList.remove(\"curr-exec\");\t\r\n\t\tif(cond == \"true\")\r\n\t\t{\r\n\t\t\tlet innercode1 = document.querySelector(\"#while-block .inner-code-1\");\r\n\t\t\tinnercode1.classList.add(\"curr-exec\");\r\n\t\t\texecInnerC();\r\n\t\t\tsetTimeout(()=>{\r\n\t\t\t\tinnercode1.classList.remove(\"curr-exec\");\r\n\t\t\t\tlet innercode2 = document.querySelector(\"#while-block .inner-code-2\");\r\n\t\t\t\tinnercode2.classList.add(\"curr-exec\");\r\n\t\t\t\tlet inc = document.getElementById(\"while-inc\");\r\n\t\t\t\tinc.classList.add(\"curr-exec\");\r\n\t\t\t\tinc.innerText = parseFloat(inc.innerText)+1;\r\n\t\t\t\tsetTimeout(()=>{\r\n\t\t\t\t\tinnercode2.classList.remove(\"curr-exec\");\r\n\t\t\t\t\tinc.classList.remove(\"curr-exec\");\r\n\t\t\t\t\tstartExec();\r\n\t\t\t\t},2000);\r\n\t\t\t},2000);\r\n\t\t}\r\n\t\telse\r\n\t\t{\r\n\t\t\tsetTimeout(()=>{\r\n\t\t\t\tresetBtn();\r\n\t\t\t\t_condBlock.innerText = condCollector[0].toString().replaceAll(\",\",\" \");\r\n\t\t\t},2000)\r\n\t\t}\r\n\t}\r\n}\r\n//execute inner code\r\nfunction execInnerC(){\r\n\tscreen.innerHTML += \"<span>\"+outputMSG+\"</span>\";\r\n}\r\nfunction resetBtn(){\r\n\twhileCondListBtn.classList.remove(\"d-none\");\r\n\r\n\twhileBtn.innerHTML =\"<i class='fa fa-play'></i> start\";\r\n\twhileBtn.disabled = false;\r\n\r\n\tonExecIndicator.classList.remove(\"on-exec-anim\");\r\n}\r\n\r\n\n\n//# sourceURL=webpack://code/./src/Javascript/while-code.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var _sass_webstyles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sass/webstyles.scss */ \"./src/sass/webstyles.scss\");\n/* harmony import */ var _node_modules_fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@fortawesome/fontawesome-free/css/all.css */ \"./node_modules/@fortawesome/fontawesome-free/css/all.css\");\n/* harmony import */ var _Javascript_site__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Javascript/site */ \"./src/Javascript/site.js\");\n/* harmony import */ var _Javascript_langauge_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Javascript/langauge-setting */ \"./src/Javascript/langauge-setting.js\");\n/* harmony import */ var _Javascript_langauge_setting__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Javascript_langauge_setting__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://code/./src/index.js?");

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