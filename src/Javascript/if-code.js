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
	//push first condition to array
	condCollector.push([...conditionArr]);

	conditionArr = solveCondition(conditionArr,variablesArr);

	condCollector.push(...condCollectorSL);

	showSteps(0,condBlock);
}

//show steps
function showSteps(count,_condBlock){
	if(count < condCollector.length)
	{
		setTimeout(()=>{
			let cond = condCollector[count].toString().replaceAll(","," ");
			_condBlock.innerText = cond;
			if(!_condBlock.classList.contains("curr-exec"))
			{
				_condBlock.classList.add("curr-exec");
			}
			showSteps(count+1,_condBlock);
		},2000);

	}
	else{
		_condBlock.classList.remove("curr-exec");
		
		let cond = condCollector[count-1].toString().replaceAll(","," ");
		if(cond == "true")
		{
			let innerCode = document.querySelector(".if .inner-code");
			innerCode.classList.add("curr-exec");
			screen.innerText = outputMSG;
			setTimeout(()=>{
				resetBtn();
				innerCode.classList.remove("curr-exec");
				_condBlock.innerText = condCollector[0].toString().replaceAll(","," ");
			},2000);	
		}
		else{
			let innerCode = document.querySelector(".else .inner-code");
			if(elseBlock.style.display !="none"){
				screen.innerText = else_outputMSG;
				innerCode.classList.add("curr-exec");
				screen.innerText = outputMSG;	
			}
			setTimeout(()=>{
				resetBtn();
				if(innerCode.classList.contains("curr-exec"))
				{
					innerCode.classList.remove("curr-exec");
				}
				_condBlock.innerText = condCollector[0].toString().replaceAll(","," ");
			},2000);	
		}
	
	}
}
function resetBtn(){
	ifBtn.innerHTML ="<i class='fa fa-play'></i> start";
	ifBtn.disabled = false;
}


