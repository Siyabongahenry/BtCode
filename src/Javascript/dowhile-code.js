import findVariables from "./variables.js";
import sepValFromOper from "./getcond.js";
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
		this.innerHTML ="<i class='fa fa-pause'></i> stop";
		this.disabled = true;
		//clear out put screen
		screen = document.querySelector("#do-while-block .display-screen");
		screen.innerHTML ="";
		//message to be outputed in the screen container
		outputMSG = document.querySelector("#do-while-block .output-msg").innerText;
		//
		condBlock = document.querySelector("#do-while-block .cond");
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
	showSteps(0,condBlock);
}
function prepareCond()
{
	varsBlock = document.querySelector("#do-while-block .vars-container");
	variablesArr =findVariables(varsBlock.innerText).flat();

	currentCond = currentCond.replaceAll(" ","");
	//separate values from operations
	conditionArr = sepValFromOper(conditionArr,currentCond);
	console.log(conditionArr);
	//push first condition to array
	condCollector.push([...conditionArr]);

	conditionArr = solveCondition(conditionArr,variablesArr);

	condCollector.push(...condCollectorSL);
}
function showSteps(){
	
	setTimeout(()=>{

		execInnerC();
		let innercode1 = document.querySelector("#do-while-block .inner-code-1");
		innercode1.classList.add("curr-exec");
		setTimeout(()=>{
			innercode1.classList.remove("curr-exec");
			let innercode2 = document.querySelector("#do-while-block .inner-code-2");
			innercode2.classList.add("curr-exec");
			let inc = document.getElementById("do-inc");
			inc.classList.add("curr-exec");
			inc.innerText = parseFloat(inc.innerText)+1;
			setTimeout(()=>{
				innercode2.classList.remove("curr-exec");
				inc.classList.remove("curr-exec");
				prepareCond();
				setTimeout(()=>{
					condBlock.classList.add("curr-exec");
					showCondSteps(0,condBlock);
				},2000);
			},2000);
		},2000);
		
	},2000);

	
}
function showCondSteps(count,_condBlock)
{
	if(count < condCollector.length)
	{
		setTimeout(()=>{
			let cond = condCollector[count].toString().replaceAll(","," ");
			_condBlock.innerText = cond;
			showCondSteps(count+1,_condBlock);
		},2000);

	}
	else{
		let cond = condCollector[count-1].toString().replaceAll(","," ");
		
		setTimeout(()=>{
			_condBlock.innerText = initialCond;
			if(cond == "true")
			{
				startExec();
			}
			else{
				resetBtn();
			}
			condBlock.classList.remove("curr-exec");
		},2000);	
	}
}
//execute inner code
function execInnerC(){
	
	screen.innerHTML += "<span>"+outputMSG+"</span>";

}
function resetBtn(){
	do_whileBtn.innerHTML ="<i class='fa fa-play'></i> start";
	do_whileBtn.disabled = false;
}


