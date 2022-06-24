var prog_lang ="c#";

var dataTypeCollec = document.getElementsByClassName("data-type");
var printMethods = document.getElementsByClassName("print-method");
var varValues = document.getElementsByClassName("var-value");

var langListCollec = document.getElementsByClassName("prog-lang-list");
setLangOnInput();
function setLangOnInput()
{
    //set language for the whole program
    for(let i=0;i<langListCollec.length;i++){
        langListCollec[i].addEventListener("input",()=>{
            prog_lang =langListCollec[i].value;
            setLangInstruc(prog_lang);
            for(let j=0;j<langListCollec.length;j++)
            {
                langListCollec[j].value=prog_lang;
            }
        });
    }
}

//set langauge instructions
function setLangInstruc(lang)
{
    switch(lang)
    {
        case 'c#':
            setDataType("int");
            setPrintMethod("Console.WriteLine")
            break;
        case 'java':
            setDataType("int");
            setPrintMethod("System.Print");
            break;
        case 'javascript':
            setDataType("let");
            setPrintMethod("console.log");
            break;

    }
}

function setDataType(datatype)
{
    for(let i=0;i<dataTypeCollec.length;i++)
    {  
        dataTypeCollec[i].innerText =datatype;
    }
}
function setPrintMethod(method)
{
    for(let i=0;i < printMethods.length;i++)
    {
        printMethods[i].innerText =method;
    }
}