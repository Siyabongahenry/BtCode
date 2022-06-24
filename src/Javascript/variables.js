var varsContAsStr="";
var varsArr=[];
export default function findVariables(_varsContAsStr){
	//clear array
	varsArr=[];
	varsContAsStr = _varsContAsStr;

	findStrings();

	findNumbers();

	findBool();

	return varsArr;
}
function findStrings(){
	//pattern to find string variables
	let patternStrings = / +[a-zA-Z_]\w*\s*=\s*('.*'|".*")\s*/i;

	let findString = varsContAsStr.match(patternStrings);

	if(findString != null){
		let variable = findString[0].toString();
		varsContAsStr = varsContAsStr.replaceAll(variable,"");

		let varArr = variable.split("=");
		//remove spaces from a variables
		varArr[0] = varArr[0].replaceAll(" ","");
		let varObj = {
			"name":varArr[0],
			"value":varArr[1]
		}
		varsArr.push(varObj);
		findStrings();
	}

}
function findNumbers(){
	//pattern to find numbers variables
	let patternNo = / +[a-zA-Z_]\w*\s*=\s*-?(\d{1,}\.\d{1,}|\d{1,})/;
	let findNo = varsContAsStr.match(patternNo);
    
	if(findNo != null){
		
		let variable = findNo[0].toString();
		varsContAsStr = varsContAsStr.replaceAll(variable,"");
		variable = variable.replaceAll(" ","");
		//variable as array
		let varArr = variable.split("=");
		//variable value
		varArr[1] = parseFloat(varArr[1]);
		let varObj = {
			"name":varArr[0],
			"value":varArr[1]
		}
		varsArr.push(varObj);
		findNumbers();
	}
}
function findBool(){
	//pattern to find bool variables from a string
	let patternBool = / +[a-zA-Z_]\w*\s*=\s*(true|false)/i;
	let findBool = varsContAsStr.match(patternBool);

	if(findBool != null){
		let variable = findBool[0].toString();
		varsContAsStr = varsContAsStr.replaceAll(variable,"");
		variable = variable.replaceAll(" ","");
		//variable as array
		let varArr = variable.split("=");
		//variable value
		varArr[1] = varArr[1] == "true"?true:false;
		let varObj = {
			"name":varArr[0],
			"value":varArr[1]
		}
		varsArr.push(varObj);
		findBool();
	}
	
}
