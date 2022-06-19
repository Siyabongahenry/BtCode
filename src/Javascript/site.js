import "./menu";
import "./home.js";
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
			elem.parentNode.removeChild(elem);
		});
	}

}



