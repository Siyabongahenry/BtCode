var conditionArr = [];
export default function solveOps(_conditionArr){
	conditionArr =_conditionArr;
	//==
	solveEE();
	//!=
	solveNE();
	//>
	solveGT();
	//>=
	solveGE();
	//<
	solveLT();
	//<=
	solveLE();
 	return conditionArr;
}

function solveEE(){
	let index = conditionArr.indexOf("==");
 	if(index > 0){
 		conditionArr[index-1]=conditionArr[index-1]==conditionArr[index+1];
 		conditionArr.splice(index,2);
 		solveEE();
 	}
}
function solveNE(){
	let index = conditionArr.indexOf("!=");
 	if(index > 0){
 		conditionArr[index-1]=conditionArr[index-1]!=conditionArr[index+1];
 		conditionArr.splice(index,2);
 		solveNE();
 	}
}
function solveGT(){
	let index = conditionArr.indexOf(">");
 	if(index > 0){
 		conditionArr[index-1]=conditionArr[index-1] > conditionArr[index+1];
 		conditionArr.splice(index,2);
 		solveGT();
 	}
}
function solveGE(){
	let index = conditionArr.indexOf(">=");
 	if(index > 0){
 		conditionArr[index-1]=conditionArr[index-1] >= conditionArr[index+1];
 		conditionArr.splice(index,2);
 		solveGE();
 	}
}
function solveLT(){
	let index = conditionArr.indexOf("<");
 	if(index > 0){
 		conditionArr[index-1]=conditionArr[index-1] < conditionArr[index+1];
 		conditionArr.splice(index,2);
 		solveGT();
 	}
}
function solveLE(){
	let index = conditionArr.indexOf("<=");
 	if(index > 0){
 		conditionArr[index-1]=conditionArr[index-1] <= conditionArr[index+1];
 		conditionArr.splice(index,2);
 		solveGT();
 	}
}

