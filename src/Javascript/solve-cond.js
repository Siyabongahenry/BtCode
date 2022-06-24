import solveLogic from "./logic.js";
import Expression from "./expression.js";
export{condCollector as condCollectorSL,solveCondition}
let condCollector =[];

function solveCondition(_condArr,_varsArr){
	condCollector =[];
	_condArr = setExpressions(_condArr,_varsArr);
	_condArr =solveCon(0,_condArr);
	//remove bracket expressions
	
	return _condArr;
	
}

function setExpressions(_condArr,_varsArr)
{
	let opPattern = ["==","!=","<","<=",">",">="];
	for(let i=0;i<_condArr.length;i++)
	{
		for(let j=0;j<opPattern.length;j++)
		{
			if(_condArr[i] == opPattern[j])
			{
				let val1 = _condArr[i-1];
				let val2 = _condArr[i+1]
				let op = _condArr[i];
				_condArr[i-1]=new Expression(val1,op,val2,_varsArr);
				_condArr.splice(i,2);
			}
		}
	}
	return _condArr;
}

function solveCon(count,_condArr)
{
	let isComplete = count >= _condArr.length && (_condArr[count-1] != true &&  _condArr[count-1] != false);
	if(isComplete)
	{
		return _condArr;
	}

	if(isLogic(_condArr[count]) )
	{
		let isOrTrueLeft = _condArr[count] == "||" && _condArr[count-1] == true;
		let isAndFalseLeft = _condArr[count] == "&&" && _condArr[count-1] == false;

		if(isOrTrueLeft || isAndFalseLeft)
		{
			_condArr = solveLogic(_condArr,_condArr[count],count);
			condCollector.push([...getCondArr(_condArr)]);

			//iterate
			if(_condArr.length > 1)
			{
				count=0;
				_condArr = solveCon(count,_condArr);
			}
			else{
				return _condArr;
			}
		}
		else{
			count++;
			//iterate
			_condArr = solveCon(count,_condArr);
		}
		
	}
	else if(_condArr[count] != true && _condArr[count] != false){
		_condArr[count] = _condArr[count].solution();
		condCollector.push([...getCondArr(_condArr)]);
	}

	if(isLogic(_condArr[count-1]))
	{
		if(_condArr[count-1] == "(") 
		{
			//closing index
			condCollector.push("**solving-bracket**");
			let clsIndex =findClsBIndex(_condArr,count);
			let brac = _condArr.splice(count,clsIndex - count+1);
			_condArr[count-1] = solveBracket(brac)[0]==true;
		}
		else
		{
			_condArr = solveLogic(_condArr,_condArr[count-1],count-1);
		}
		condCollector.push([...getCondArr(_condArr)]);
		count=0;
		//iterate
		_condArr = solveCon(count,_condArr);
	}
	else if(_condArr.length > 1){
		count++;
		//iterate
		_condArr = solveCon(count,_condArr);
	}
		
	return _condArr;
}

function getCondArr(_condArr)
{
	let condArr = [..._condArr.map((x)=>{
				if(x != true && x != false)
				{
					return x.toString();
				}
				return x;
			})];
	return condArr;
}
function isLogic(_logic){
	let opPattern = ["!","&&","||","("];
	
	for(let j = 0;j < opPattern.length;j++){
		if(_logic ==opPattern[j]){
			return true;
		}
	}
	
	return false;
}

function solveBracket(_condArr)
{
	_condArr.pop();
	return solveCon(0,_condArr);
}
function findClsBIndex(_arr,startIndex)
{
	let jump =0;
	let count = startIndex;
	while(count < _arr.length)
	{
		if(_arr[count] == "(")
		{
			jump++;
		}
		else if(_arr[count] ==")")
		{
			jump--;
			if(jump < 0)
			{
				break;
			}
		}
		count++;
	}
	return count;
}

