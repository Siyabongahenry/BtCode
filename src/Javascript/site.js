import "./menu";
import "./home.js";
import "./error-handling.js";
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
/*hide or show content*/
addEventsToContentViewBtns();
function addEventsToContentViewBtns()
{
	const contentViewBtn = document.getElementsByClassName("btn-hidden-content");
	for(let i=0;i < contentViewBtn.length;i++){
		contentViewBtn[i].addEventListener("click",function(){
			expandContent(this,this.innerText,this.getAttribute("data-content-id"));
		});
	}
}
function expandContent(btn,newText,contentId){
	var content = document.getElementById(contentId);
	if(!content.classList.contains("d-none"))
	{
		content.classList.add("d-none");
		btn.innerHTML = newText + " <i class='fa fa-caret-down'></i>";
	}
	else
	{
		content.classList.remove("d-none");
		btn.innerHTML = newText + " <i class='fa fa-caret-up'></i>";
	}
}

//remove element
var removeElemBtns = document.getElementsByClassName("remove-elem-btn");
addEventsToRemElemBtns();
function addEventsToRemElemBtns()
{
	for(let i=0;i < removeElemBtns.length;i++)
	{
		removeElemBtns[i].addEventListener("click",()=>{
			let elem = document.querySelector(removeElemBtns[i].getAttribute("data-element"));
			elem.classList.add("d-none");
		});
	}

}

//list select
var listSelectCollection = document.getElementsByClassName("list-select");
var listSelectBtns = document.getElementsByClassName("list-select-btn");
addEventToListSelectBtns();
addEventsToListSelect();
function addEventToListSelectBtns()
{
	for(let i=0;i < listSelectBtns.length;i++)
	{
		listSelectBtns[i].addEventListener("click",()=>{
			let listSelect = document.querySelector(listSelectBtns[i].getAttribute("data-select-list"));
			if(listSelect.classList.contains("d-none"))
			{
				listSelect.classList.remove("d-none");
			}
			else{
				listSelect.classList.add("d-none");
			}
		});
	}
}
function addEventsToListSelect()
{
	for(let i=0;i<listSelectCollection.length;i++)
	{
		let options=listSelectCollection[i].getElementsByClassName("option");
		for(let j=0;j< options.length;j++)
		{
			options[j].addEventListener("click",()=>{
				var ouputTo = document.querySelector(listSelectCollection[i].getAttribute("data-output-to"));
				ouputTo.innerText = options[j].innerText;
				setTimeout(()=>{
					listSelectCollection[i].classList.add("d-none");
				},300);
			});
		}
	}
}