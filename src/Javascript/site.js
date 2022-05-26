import "./menu";
import "./slide";
import setIfStatement from "./if-code.js";
import setWhileLoop from "./while-code.js";
import setDoWhileLoop from "./dowhile-code.js"
import setForLoop from "./for-code.js";

//if statement events
setIfStatement();
//while loop
setWhileLoop();
//do while
setDoWhileLoop();
//for loop
setForLoop();
//separate values from operators
export function sepValFromOper(conditionArr,input){
	//matches operators in the string
	let pattern = /(>=?|<=?|==|!=?|&&|\|{2}|\(|\))/i;
	let operator = input.match(pattern);
	let tempArr =[];
	if(operator != null){
		operator = operator[0];
		//replace operator with a space for safe splitting
		//the space represent the first operator found 
		input = input.replace(operator," ");
		tempArr = input.split(" ");
		//insert the string before condition to array
		if(tempArr[0] != '')
		{
			conditionArr.push(tempArr[0]);
		}
		conditionArr.push(operator);
		//do operator search for the string after the found operator to find other operators

		let lastString = tempArr.pop();
		if(lastString != "")
		{
			sepValFromOper(conditionArr,lastString);
		}
	}
	else{
		//push the last element to the array 
		conditionArr.push(input);
		conditionArr = conditionArr.filter(x => x != "");
		conditionArr = conditionArr.map((x)=>{
			if(x == "true" || x == "false")
			{
				return x=="true";
			}
			return x;
		});
	} 
	return conditionArr;
}


//buttons hide content
var btnsHide = document.getElementsByClassName("btn-hidden-content");
addEventsToBtnHide();
function addEventsToBtnHide(){

	for(let i=0;i < btnsHide.length;i++){
		btnsHide[i].addEventListener("click",function(){

			let content = document.querySelector(this.getAttribute("data-query"));
			if(content.style.display == "none"){
				content.style.display = "initial";
				this.innerHTML = "close notes <i class='fa fa-caret-up'></i>";
			}
			else{
				content.style.display = "none";
				this.innerHTML = "see notes <i class='fa fa-caret-down'></i>";
			}
		});
	}
}



