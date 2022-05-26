import findVariables from "./variables.js";
import {sepValFromOper} from "./site.js";
import {condCollectorSL,solveCondition} from "./solve-cond.js"

var condBlock;
var screen;
var outputMSG;
var else_outputMSG;
var variablesArr =[];
var conditionArr =[];
//condition collector
var condCollector =[];
var initialCond;
let currentCond;

var ifBtn = document.querySelector(".if-block .start-btn");
var varsBlock =document.querySelector(".if-block .vars-container ");
var innerCode = document.querySelector(".if-block .inner-code"); 
var btnElse = document.querySelector(".if-block .else-btn");
var elseBlock = document.querySelector(".if-block .else");

export default function setIfStatement()
{
	ifBtn.addEventListener("click",function(){
		//reset 
		variablesArr =[];
		conditionArr =[];
		condCollector = [];

		this.innerHTML ="<i class='fa fa-pause'></i> stop";
		this.disabled = true;

		//message to be outputed in the screen container
		outputMSG = document.querySelector(".if-block .output-msg").innerText;
		else_outputMSG = document.querySelector(".if-block .else .output-msg").innerText;
		//clear out put screen
		screen = document.querySelector(".if-block .display-screen");
		screen.innerText="";
		//get variables from container
		variablesArr =findVariables(varsBlock.innerText).flat();

		condBlock = document.querySelector(".if-block .cond");
		initialCond = condBlock.innerText;
		currentCond = initialCond;
		startExec();	
	});
	btnElse.addEventListener("click",function(){
		if(elseBlock.style.display == "none")
		{
			elseBlock.style.display = "initial";
			this.innerHTML ="<i class='fa fa-minus'></i> else"
		}
		else{
			elseBlock.style.display = "none";
			this.innerHTML ="<i class='fa fa-plus'></i> else"
		}
	});
}

function startExec(){
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

//show steps
function showSteps(count,_condBlock){
	if(count < condCollector.length)
	{
		setTimeout(()=>{
			let cond = condCollector[count].toString().replaceAll(","," ");
			_condBlock.innerText = cond;
			showSteps(count+1,_condBlock);
		},2000);

	}
	else{
		let cond = condCollector[count-1].toString().replaceAll(","," ");
		execInnerC(cond=="true");
		setTimeout(()=>{
			resetBtn();
			_condBlock.innerText = condCollector[0].toString().replaceAll(","," ");
		},2000);	
	}
}
//execute inner code
function execInnerC(isExec){
	if(isExec){
		screen.innerText = outputMSG;
	}
	else{
		if(elseBlock.style.display !="none"){
			screen.innerText = else_outputMSG;
		}
	}
}
function resetBtn(){
	ifBtn.innerHTML ="<i class='fa fa-play'></i> start";
	ifBtn.disabled = false;
}


