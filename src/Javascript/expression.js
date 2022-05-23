export default class Expression{
	constructor(val1,operator,val2,varsArr)
	{
		this.val1 =val1;
		this.operator = operator;
		this.val2 = val2;
		this.varsArr = varsArr;
	}
	insertValues()
	{
		this.val1 = this.insertValue(this.val1);
		this.val2 = this.insertValue(this.val2);
	}
	insertValue(_varname){
		let tempVal = this.varsArr.find(({name})=> name == _varname);
		if(tempVal != undefined)
		{
			_varname = tempVal.value;
		}
		else{
			if(!isNaN(_varname))
			{
				_varname = parseFloat(_varname);
			}
			else if(_varname == "true" || _varname == "false")
			{
				_varname = _varname == "true"?true:false;
			}
		}
		return _varname;
	}
	solution()
	{
		this.insertValues();
		return solveOperator(this.val1,this.operator,this.val2);
	}
	toString(){
		return this.val1 +" "+this.operator+" "+this.val2;
	}
	
}

function solveOperator(val1,operator,val2)
{
	let value = null;
		switch(operator)
		{
			case '==':
				value = val1 == val2;
			break;
			case '!=':
				value = val1 != val2;
			break;
			case '<':
				value = val1 < val2;
			break;
			case '<=':
				value = val1 <= val2;
			break;
			case '>':
				value = val1 > val2;
			break;
			case '>=':
				value = val1 >= val2;
			break;
		}
		return value;
}