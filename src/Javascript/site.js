import "./menu";
import "./slide";
import setIfStatement from "./if-code.js";
import setForStatement from "./for-code.js"

//if statement events
setIfStatement();
//for loop
setForStatement();
//separate values from operators
export function sepValFromOper(conditionArr,input){
	//matches operators in the string
	let pattern = /(>={0,1}|<={0,1}|!={0,1}|==|&&|\|{2}|\(|\))/i;
	let operator = input.match(pattern);
	let tempArr =[];
	if(operator != null){
		operator = operator[0];
		//replace operator with a space for safe splitting
		//the space represent the first operator found 
		input = input.replace(operator," ");
		tempArr = input.split(" ");
		//insert the string before condition to array
		conditionArr.push(tempArr[0]);
		conditionArr.push(operator);
		//do operator search for the string after the found operator to find other operators	
		sepValFromOper(conditionArr,tempArr.pop());
	}
	else{
		//push the last element to the array 
		conditionArr.push(input);
		conditionArr = conditionArr.filter(x => x != "");
	} 
	return conditionArr;
}

//replace variables symbols with actual values
export function insertActualVars(conditionArr,vars){
	vars = vars.flat();
	let patternWord =/^[a-zA-Z_]\w*$/;
	conditionArr=conditionArr.map((x)=>{
		if(x.match(patternWord) != null){
			for(let i=0;i< vars.length-1;i++){
				let vari = vars[i].replaceAll(" ","");
				if(vari==x){
					return vars[i+1].replaceAll(" ","");
				}
			}
		}
		return x;
	});
	conditionArr = convStrToNumber(conditionArr);
	return conditionArr;
}
//convert strings to numbers from the array
function convStrToNumber(conditionArr){
 	conditionArr = conditionArr.map((x)=>{
 		if(!isNaN(parseFloat(x))){
 			return parseFloat(x);
 		}
 		return x;
 	});
 	return conditionArr;
 }

//buttons hide content
var btnsHide = document.getElementsByClassName("btn-hidden-content");
addEventsToBtnHide();
function addEventsToBtnHide(){

	for(let i=0;i < btnsHide.length;i++){
		btnsHide[i].addEventListener("click",function(){

			let content = document.getElementById(this.getAttribute("data-notes-id"));
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



