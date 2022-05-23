import findVariables from "./variables.js";
import {sepValFromOper} from "./site.js";
import {condCollectorSL,solveCondition} from "./solve-cond.js"

var ifBtn = document.getElementById("if-btn");
var varsBlock =document.getElementById("if-vars");
var innerCode = document.getElementById("if-inner-code"); 
var btnElse = document.getElementById("btn-add-else");
var elseBlock = document.getElementById("else-statement");
var condBlock;
var outPutScreenMSG;
var outputMSG;
var else_outputMSG;
var variablesArr =[];
var conditionArr =[];
//condition collector
var condCollector =[];
var initialCond;
let currentCond;
export default function setIfStatement()
{
	ifBtn.addEventListener("click",function(){
		//reset 
		variablesArr =[];
		conditionArr =[];
		condCollector = [];

		this.innerHTML ="<i class='fa fa-pause'></i>";
		this.disabled = true;

		//message to be outputed in the screen container
		outputMSG = document.getElementById("if-output-msg").innerText;
		else_outputMSG = document.getElementById("else-output-msg").innerText;
		//clear out put screen
		outPutScreenMSG = document.getElementById("if-screen-msg");
		outPutScreenMSG.innerText="";
		//get variables from container
		variablesArr =findVariables(varsBlock.innerText).flat();

		condBlock = document.getElementById("if-cond");
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
		outPutScreenMSG.innerText = outputMSG;
	}
	else{
		if(elseBlock.style.display !="none"){
			outPutScreenMSG.innerText = else_outputMSG;
		}
	}
}
function resetBtn(){
	ifBtn.innerHTML ="<i class='fa fa-play'></i>";
	ifBtn.disabled = false;
}


