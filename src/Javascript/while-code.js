import findVariables from "./variables.js";
import {sepValFromOper} from "./site.js";
import {condCollectorSL,solveCondition} from "./solve-cond.js"

var whileBtn = document.getElementById("while-btn");
//execution time
var exec_time = 2000;
//variables outside for loop
var varsBlock;
//output screen
var screen;
//message
var outputMSG
//initial consition
var initialCond;
let currentCond;
var condCollector =[];
//condition block
var condBlock;
var variablesArr =[];
var conditionArr =[];
export default function setWhileLoop()
{
	whileBtn.addEventListener("click",function(){
		this.innerHTML ="<i class='fa fa-pause'></i>";
		this.disable = true;
		//clear out put screen
		screen = document.querySelector(".while-loop-block .output-screen");
		screen.innerHTML ="";
		//message to be outputed in the screen container
		outputMSG = document.getElementById("while-output-msg").innerText;
		//
		condBlock = document.getElementById("while-cond");
		//store initial condition to return to it
		initialCond = condBlock.innerText;
		currentCond = initialCond;
		//start execution
		
		startExec();
	});
}
function startExec(){
	variablesArr =[];
	conditionArr =[];
	condCollector = [];

	varsBlock = document.getElementById("while-vars");
	variablesArr =findVariables(varsBlock.innerText).flat();

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
			if(cond == "true")
			{
				execInnerC();
				let innercode1 = document.querySelector(".while-loop-block .inner-code-1");
				innercode1.classList.add("curr-exec");
				setTimeout(()=>{
					innercode1.classList.remove("curr-exec");
					let innercode2 = document.querySelector(".while-loop-block .inner-code-2");
					innercode2.classList.add("curr-exec");
					let inc = document.getElementById("while-inc");
					inc.classList.add("curr-exec");
					inc.innerText = parseFloat(inc.innerText)+1;
					setTimeout(()=>{
						innercode2.classList.remove("curr-exec");
						inc.classList.remove("curr-exec");
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
	whileBtn.innerHTML ="<i class='fa fa-play'></i>";
	whileBtn.disabled = false;
}

