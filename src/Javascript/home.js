var span = document.querySelectorAll("#home-page .anim-screen span");
setAnim();
setInterval(()=>{
    setAnim();
},4000);
function setAnim()
{
    for(let i=0;i<span.length;i++){
        setTimeout(()=>{
            span[i].classList.add("curr-anim");
            setTimeout(()=>{
                span[i].classList.remove("curr-anim");
            },1000);
        },1000*i)
    }
}