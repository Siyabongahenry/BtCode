var varsContAsStr="";
var varsArr=[];
export default function findVariables(_varsContAsStr){
	//clear array
	varsArr=[];
	varsContAsStr = _varsContAsStr;

	findStrings();

	findNumbers();

	findBool();

	return varsArr.flat();
}
function findStrings(){
	//pattern to find string variables
	let patternStrings = /\s+[a-zA-Z_]\w*\s*=\s*('.*'|".*")\s*/i;

	let findString = varsContAsStr.match(patternStrings);

	if(findString != null){
		let variable = findString[0].toString();
		varsArr.push(variable.split("="));
		varsContAsStr = varsContAsStr.replaceAll(variable,"");
		findStrings();
	}

}
function findNumbers(){
	//pattern to find numbers variables
	let patternNo = /\s+[a-zA-Z_]\w*\s*=\s*(\d{1,}\.\d{1,}|\d{1,})/i;
	let findNo = varsContAsStr.match(patternNo);

	if(findNo != null){
		let variable = findNo[0].toString();
		varsArr.push(variable.split("="));
		varsContAsStr = varsContAsStr.replaceAll(variable,"");
		findNumbers();
	}
}
function findBool(){
	//pattern to find bool variables from a string
	let patternBool = /\s+[a-zA-Z_]\w*\s*=\s*(true|false)/i;
	let findBool = varsContAsStr.match(patternBool);

	if(findBool != null){
		let variable = findBool[0].toString();
		varsArr.push(variable.split("="));
		varsContAsStr = varsContAsStr.replaceAll(variable,"");
		findBool();
	}
	
}
