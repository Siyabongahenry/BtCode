var conditionArr = [];
export default function solveLogic(_conditionArr) {
	conditionArr =_conditionArr;
	solveInverter();

	solveAND();
 	
	solveOR();
	
 	return conditionArr;
}

function solveInverter(){
	let index = conditionArr.indexOf("!");
	if(index > 0){
 		conditionArr[index]=!conditionArr[index+1];
 		conditionArr.splice(index+1,1);
 		solveInverter();
	}
}

function solveAND(){
	let index = conditionArr.indexOf("&&");
	if(index > 0){
 		conditionArr[index-1]=conditionArr[index-1] && conditionArr[index+1];
 	    conditionArr.splice(index,2);
 		solveAND();
	}
}

function solveOR(){
	let index = conditionArr.indexOf("||");
	if(index > 0){
 		conditionArr[index-1]=conditionArr[index-1] || conditionArr[index+1];
 		conditionArr.splice(index,2);
 		solveOR();
	}
}
