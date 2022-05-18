import solveOps from "./operators.js";
import solveLogic from "./logic.js";
import solveBEntry from "./solve-bracket.js";
import findVariables from "./variables.js";
import {insertActualVars,sepValFromOper} from "./site.js";

var ifBtn = document.getElementById("if-btn");
var varsBlock =document.getElementById("if-vars");
var innerCode = document.getElementById("if-inner-code"); 
let condBlock;
let outPutScreenMSG;
let outputMSG;
var variablesArr =[];
var conditionArr =[];
export default function setIfStatement()
{
	ifBtn.addEventListener("click",function(){
		//reset 
		variablesArr =[];
		conditionArr =[];

		this.innerHTML ="<i class='fa fa-pause'></i>";
		this.disable = true;

		//message to be outputed in the screen container
		outputMSG = document.getElementById("if-output-msg");

		//clear out put screen
		outPutScreenMSG = document.getElementById("if-screen-msg");
		outPutScreenMSG.innerText="";
		//get variables from container
		variablesArr =findVariables(varsBlock.innerText);

		condBlock = document.getElementById("if-cond");
		

		startExec();	
	});
}

function startExec(){
	//store initial condition to return to it
	let initialCond = condBlock.innerText;
	let currentCond = initialCond;
	currentCond = currentCond.replaceAll(" ","");
	//separate values from operations
	conditionArr = sepValFromOper(conditionArr,currentCond);
	setTimeout(()=>{
		conditionArr = insertActualVars(conditionArr,variablesArr);
		condBlock.innerText = conditionArr.toString().replaceAll(","," ");
		condBlock.classList.add("curr-exec");
		//solve bracket
		let bracketIndex = conditionArr.indexOf("(");
		setTimeout(()=>{
			conditionArr = solveBEntry(conditionArr);
			condBlock.innerText = conditionArr.toString().replaceAll(","," ");
			//solve operators
			setTimeout(()=>{
				conditionArr = solveOps(conditionArr);
				condBlock.innerText = conditionArr.toString().replaceAll(","," ");
				//solve logic
				setTimeout(()=>{
					conditionArr = solveLogic(conditionArr);
					condBlock.innerText = conditionArr.toString().replaceAll(","," ");
					if(condBlock.innerText.replaceAll(" ","")=="true"){
						condBlock.classList.remove("curr-exec");
						innerCode.classList.add("curr-exec");
						setTimeout(()=>{
							condBlock.innerText = initialCond;
							innerCode.classList.remove("curr-exec");
							outPutScreenMSG.innerText =outputMSG.innerText.replaceAll('"',"").replaceAll("'","");
							setTimeout(()=>{	
								resetBtn();
							},2000);
						},3000);
					}
					else{
						condBlock.style.color = "red";	
						setTimeout(()=>{
							resetBtn();
							condBlock.style.color = "darkred";
						},2000)
						
					}
					
				},2000);
			
			},2000);
		
		},bracketIndex >=0 ?2000:0);//if bracket exist set 2s
	},2000);
}
		
function resetBtn(){
	ifBtn.innerHTML ="<i class='fa fa-play'></i>";
	ifBtn.disable = false;
}