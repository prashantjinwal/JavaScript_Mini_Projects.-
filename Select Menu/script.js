let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let options = document.getElementsByClassName("options");
let list = document.getElementById("list");
let arrow = document.getElementById("arrowIcon");



for(option of options){
    option.onclick = function(){
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrow.classList.toggle("rotate");
        
    }
}

selectField.onclick = function (){
    list.classList.toggle("hide");
    arrow.classList.toggle("rotate");
}
