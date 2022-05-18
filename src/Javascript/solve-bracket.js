import solveOps from "./operators.js";
import solveLogic from "./logic.js";
var conditionArr = [];
export default function solveBEntry(_conditionArr){
	conditionArr =[..._conditionArr];
	solveB();
	conditionArr = conditionArr.flat();
	return conditionArr;
}
function doCalculations(arr)
{
	let innerBArr = [...arr];
	innerBArr = solveOps(innerBArr);

	innerBArr = solveLogic(innerBArr);

	return innerBArr;
}
//solve bracket
function solveB(){
	//open bracket index
	let obIndex = conditionArr.indexOf("(");
	//close bracket index
	let cbIndex = conditionArr.indexOf(")");
	let tempArr =[];
	if(obIndex >=0 && cbIndex > 0){
		tempArr = conditionArr.slice(obIndex,cbIndex+1);
		solveInnerB(tempArr,obIndex,cbIndex);
		solveB();
	}
	else{
		if(cbIndex > 0){
			conditionArr = conditionArr.filter(x => x != ")");
		}
	}

}
//start with inner bracket
function solveInnerB(innerBArr,currOBIndex,cbIndex)
{
	//remove first bracket
	innerBArr.shift();
	let obIndex = innerBArr.indexOf("(");
	if(obIndex >= 0 && obIndex < cbIndex){
		solveInnerB(innerBArr.slice(obIndex,cbIndex+1),currOBIndex+obIndex+1,cbIndex);
	}
	else{
		//remove closing bracket
		innerBArr.pop();
		conditionArr[currOBIndex] = doCalculations(innerBArr);
		conditionArr = conditionArr.flat();
		conditionArr.splice(currOBIndex+1,innerBArr.length+1);
	}
}
