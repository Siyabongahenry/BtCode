var varsCollection = document.getElementsByClassName("variable");
checkValidity();
function checkValidity(){
    for(let i=0;i < varsCollection.length;i++)
    {
        let dataType = varsCollection[i].querySelector(".data-type").innerText.replaceAll(" ","");
        let errorBox = varsCollection[i].querySelector(".var-error");
        let valueBox = varsCollection[i].querySelector(".var-value");
        valueBox.addEventListener("input",function(){
            if(dataType == "int" && !isValidInt(valueBox.innerText.replaceAll(" ","")))
            {
                errorBox.innerText ="for the sake of this program, please use integers/numbers with no decimal only.";
            }
            else if(dataType == "int"){ 
                errorBox.innerText ="";
            }
        });
    }
}

function isValidInt(value)
{
    if(value.search(/^-?\d{1,}$/) >= 0)
    {
        return true;
    }
    return false;
}


