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
var currentCond;
var lastCond;
//condition block
var condBlock;
var variablesArr =[];
var conditionArr =[];
var condCollector;

export default function setForLoop()
{
	forBtn.addEventListener("click",function(){
		this.innerHTML ="<i class='fa fa-pause'></i> stop";
		this.disable = true;
		//clear out put screen
		screen = document.querySelector(".for-loop-block .display-screen");
		screen.innerHTML ="";
		//message to be outputed in the screen container
		outputMSG = document.querySelector(".for-loop-block .output-msg").innerText;
		//
		condBlock = document.querySelector(".for-loop-block #for-cond");
		//store initial condition to return to it
		initialCond = condBlock.innerText;
		currentCond = initialCond;

		lastCond = document.querySelector(".for-loop-block #last-cond");

		//start execution
		startExec();
	});
}
//
function startExec(){
	variablesArr =[];
	conditionArr =[];
	condCollector = [];

	varsBlock = document.querySelector(".for-loop-block #for-var");
	variablesArr =findVariables(varsBlock.innerText).flat();
	console.log("Array: ");
 	console.log(varsBlock.innerText);
 	console.log(variablesArr);
	currentCond = currentCond.replaceAll(" ","");
	//separate values from operations
	conditionArr = sepValFromOper(conditionArr,currentCond);
	console.log(conditionArr);
	//push first condition to array
	condCollector.push([...conditionArr]);

	conditionArr = solveCondition(conditionArr,variablesArr);

	condCollector.push(...condCollectorSL);
	
	console.log(condCollector);
	showSteps(0,condBlock);
}

function showSteps(count,_condBlock){
	if(count < condCollector.length)
	{
		setTimeout(()=>{
			let cond = condCollector[count].toString().replaceAll(","," ");
			_condBlock.innerText = cond;
			_condBlock.classList.add("curr-exec");
			showSteps(count+1,_condBlock);
		},2000);

	}
	else{
		let cond = condCollector[count-1].toString().replaceAll(","," ");
		_condBlock.classList.remove("curr-exec");
		setTimeout(()=>{
			_condBlock.innerText = initialCond;
			if(cond == "true")
			{
				execInnerC();
				let innercode = document.querySelector(".for-loop-block .inner-code");
				innercode.classList.add("curr-exec");
				setTimeout(()=>{
					innercode.classList.remove("curr-exec");
					lastCond.classList.add("curr-exec");

					let forValue = document.getElementById("for-value");
					forValue.classList.add("curr-exec");
					forValue.innerText = parseFloat(forValue.innerText)+1;
					setTimeout(()=>{
						lastCond.classList.remove("curr-exec");
						forValue.classList.remove("curr-exec");
						startExec();
					},2000);
				},2000);
			}
			else
			{
				resetBtn();
				_condBlock.innerText = condCollector[0].toString().replaceAll(","," ");
			}
		},2000);	
	}
}
//execute inner code
function execInnerC(){
	
	screen.innerHTML += "<span>"+outputMSG+"</span>";

}
function resetBtn(){
	forBtn.innerHTML ="<i class='fa fa-play'></i> start";
	forBtn.disabled = false;
}

