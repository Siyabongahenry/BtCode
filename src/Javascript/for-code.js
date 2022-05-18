import solveOps from "./operators.js";
import solveLogic from "./logic.js";
import solveBEntry from "./solve-bracket.js";
import findVariables from "./variables.js";
import {insertActualVars,sepValFromOper} from "./site.js";

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
export default function setForStatement()
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
	setTimeout(()=>{
		//set condition color
		condBlock.classList.add("curr-exec");
		//insert actual variables
		conditionArr = insertActualVars(conditionArr,variablesArr);
		condBlock.innerText = conditionArr.toString().replaceAll(","," ");
		let bracketIndex = conditionArr.indexOf("(");
		setTimeout(
			()=>{
				//solve bracket
				conditionArr = solveBEntry(conditionArr);
				condBlock.innerText = conditionArr.toString().replaceAll(","," ");
			  	setTimeout(()=>{
			  		conditionArr = solveOps(conditionArr);
					condBlock.innerText = conditionArr.toString().replaceAll(","," ");
			 		setTimeout(()=>{
			 			conditionArr = solveLogic(conditionArr);
						condBlock.innerText = conditionArr.toString().replaceAll(","," ");
						//print message if true

						if(conditionArr.toString() == "true"){
							wMsgIfT(outputMSG);
							document.querySelector(".for-loop-block .inner-code").classList.add("curr-exec");
							setTimeout(()=>{
								let lastCond = document.getElementById("last-cond");
					 		 	lastCond.classList.add("curr-exec");
					 		 	//restore condition
					 		 	condBlock.innerText = initialCond;
					 		 	condBlock.classList.remove("curr-exec");
					 		 	//restore inner code color
								document.querySelector(".for-loop-block .inner-code").classList.remove("curr-exec");
				 		 		//restart execution
					 		 	setTimeout(()=>{
					 		 		let value = document.getElementById("for-value");
					 		 		value.classList.add("curr-exec");
					 		 		value.innerText = parseInt(value.innerText)+1;
					 		 		//last condition
					 		 		lastCond.classList.remove("curr-exec");
					 		 		setTimeout(()=>{
					 		 			value.classList.remove("curr-exec");
					 		 			startExec();
					 		 		},2000);
					 		 	},2000);
				 		 },2000);
						}
						else{
							condBlock.style.color ="red";
							condBlock.classList.remove("curr-exec");
							setTimeout(()=>{
								forBtn.innerHTML ="<i class='fa fa-play'></i>";
								condBlock.style.color ="darkred";
								condBlock.innerText = initialCond;
								forBtn.disable = false;
							},2000)
						}
				 		 
			 		},2000);
			  },2000);
			},bracketIndex>=0?2000:0);//if no bracket set time to zero
	},1000);

}
//write message if true
function wMsgIfT(msg)
{
	var span = document.createElement("span");
	span.innerText = msg.replaceAll('"',"");
	screen.appendChild(span);
}