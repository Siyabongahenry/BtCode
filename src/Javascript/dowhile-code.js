import findVariables from "./variables.js";
import {sepValFromOper} from "./site.js";
import {condCollectorSL,solveCondition} from "./solve-cond.js"

var do_whileBtn = document.getElementById("do-while-btn");
//execution time
const exec_time = 2000;
//variables outside for loop
var varsBlock;
//output screen
var screen;
//message
var outputMSG
//initial consition
var initialCond;
var currentCond;
//condition block
var condBlock;
var variablesArr =[];
var conditionArr =[];
var condCollector =[];
export default function setDoWhileLoop()
{
	do_whileBtn.addEventListener("click",function(){
		this.innerHTML ="<i class='fa fa-pause'></i>";
		this.disable = true;
		//clear out put screen
		screen = document.querySelector(".do-while-block .output-screen");
		screen.innerHTML ="";
		//message to be outputed in the screen container
		outputMSG = document.getElementById("do-output-msg").innerText;
		//
		condBlock = document.getElementById("do-while-cond");
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

	varsBlock = document.getElementById("do-vars");
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
function showSteps(count,_condBlock,isNext = true){
	if(isNext)
	{
		setTimeout(()=>{

			execInnerC();
			let innercode1 = document.querySelector(".do-while-block .inner-code-1");
			innercode1.classList.add("curr-exec");
			setTimeout(()=>{
				innercode1.classList.remove("curr-exec");
				let innercode2 = document.querySelector(".do-while-block .inner-code-2");
				innercode2.classList.add("curr-exec");
				let inc = document.getElementById("do-inc");
				inc.classList.add("curr-exec");
				inc.innerText = parseFloat(inc.innerText)+1;
				showSteps(count+1,_condBlock,false);
				setTimeout(()=>{
					innercode2.classList.remove("curr-exec");
					inc.classList.remove("curr-exec");
				},2000);
			},2000);
			
		},2000);

	}
	else {
		let cond = condCollector[count].toString().replaceAll(","," ");
		_condBlock.innerText = cond;
		_condBlock.classList.add("curr-exec");
		let nextStep = condCollector[count].toString().replaceAll(","," ")==true;
		setTimeout(()=>{
			if(nextStep)
			{
				_condBlock.classList.remove("curr-exec");
				startExec();
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


