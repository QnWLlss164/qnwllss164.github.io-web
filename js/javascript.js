document.onscroll = function(){
    changeHeader()
}
function changeHeader(){
    let mainHeader = document.getElementById("main-header")
    if(document.documentElement.scrollTop>0){
        if(!mainHeader.classList.contains("fixed")){
            mainHeader.classList.add("fixed");
        }
    }
    else {
        mainHeader.classList.remove("fixed")
    }
}
    
