let span = document.querySelector(".counter")
window.onscroll = function(){
    console.log(window.scrollY)
    if(window.scrollY >= 840){
        span.style.position = "fixed"
    } else{
        span.style.position =  "relative";

    }
}