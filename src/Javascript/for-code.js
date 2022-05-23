import findVariables from "./variables.js";
import {sepValFromOper} from "./site.js";
import {condCollectorSL,solveCondition} from "./solve-cond.js"

var forBtn = document.getElementById("for-btn");
//variables outside for loop
var varsBlock;
//variables inside for loop
var innerVarBlock;
var screen;
//message
var outputMSG
//initial consition
var initialCond;
//condition block
var condBlock;
var variablesArr =[];
var conditionArr =[];
export default function setForLoop()
{
	forBtn.addEventListener("click",function(){
		this.innerHTML ="<i class='fa fa-pause'></i>";
		this.disable = true;
		//clear out put screen
		screen = document.querySelector(".for-loop-block .output-screen");
		screen.innerHTML ="";
		//message to be outputed in the screen container
		outputMSG = document.getElementById("if-output-msg").innerText;
		//
		condBlock = document.getElementById("for-cond");
		//store initial condition to return to it
		initialCond = condBlock.innerText;
		//start execution
		startExec();
	});
}
//
function startExec(){
		getAllRBlocks()
		//reset 
		variablesArr =[];
		conditionArr =[];

		//get variables from container
		variablesArr =findVariables(varsBlock.innerText+" "+innerVarBlock.innerText);
		
		//conndition to be tested
		let currentCond = initialCond;

		currentCond = currentCond.replaceAll(" ","");
		//separate values from operations
		conditionArr = sepValFromOper(conditionArr,currentCond);
		//solve expresssion
		solveExp();
}
//set all required blocks
function getAllRBlocks(){
	varsBlock =document.querySelector(".for-loop-block .vars-container");
	innerVarBlock = document.getElementById("for-var");
}
//solve expression
function solveExp(){	

}
//write message if true
function wMsgIfT(msg)
{
	var span = document.createElement("span");
	span.innerText = msg;
	screen.appendChild(span);
}