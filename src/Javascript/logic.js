var conditionArr = [];
export default function solveLogic(_conditionArr,logic,index) {
	conditionArr =_conditionArr;
	switch(logic){
		
		case '!':
			solveInverter(index);
		break;
		case '&&':
			solveAND(index);
		break;
		
		case '||':
			solveOR(index);
		break;
	}
	
 	return conditionArr;
}
function solveInverter(index)
{
	if(conditionArr[index] != "!")
	{
		return;
	}
	if( conditionArr[index+1] == true || conditionArr[index+1] ==false)
	{
		conditionArr[index] = !conditionArr[index+1]; 
		conditionArr.splice(index+1,1);

		return;
	}
	
	return;

}
function solveAND(index){
	if( conditionArr[index-1] == false || conditionArr[index+1] ==false)
	{
		conditionArr[index-1] = false;
		//check if || exist
		let orIndex =conditionArr.indexOf("||"); 
		conditionArr.splice(index,orIndex > 0 && orIndex > index?orIndex-index:conditionArr.length);
		return;
	}
	
	if ( conditionArr[index-1] == true && conditionArr[index+1] == true) {
		conditionArr[index-1]=true;
	    conditionArr.splice(index,2);
	    return;
	}

	return;
}

function solveOR(index){
	if( conditionArr[index-1] == true || conditionArr[index+1] == true){
		conditionArr =[];
		conditionArr[0] =true;
		return;
	}
	
	if( conditionArr[index-1] == false && conditionArr[index+1] == false)
	{
		conditionArr[index-1]=false;
		conditionArr.splice(index,2);
		return;
	}
	
	return;
}
