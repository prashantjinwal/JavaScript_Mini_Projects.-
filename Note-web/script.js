const box = document.getElementById("box")
const btnCreate = document.getElementById("btn-cre")
let note = document.getElementsByClassName("input-box")
// box.style.display = "none";

function ShowNote (){
    box.innerHTML = localStorage.getItem("note")
}

function UpdateStorage(){
    localStorage.setItem("note", box.innerHTML);
}

btnCreate.addEventListener("click", () => {
    let content = document.createElement("p");
    let img = document.createElement("img")
    content.className = "input-box"
    content.setAttribute("contenteditable", "true")
    img.src = "notes-app-img/images/delete.png"
    // inputbox.appendChild(content).appendChild(img)
    content.appendChild(img); // Append the img to the content
    box.appendChild(content); 
    
    
})

box.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        UpdateStorage();
    }
    else if( e.target.tagName === "P"){
        note = document.querySelectorAll(".input-box");
        note.forEach(nt => {
            nt.onkeyup = function(){
                UpdateStorage();
            }
        });

    }

})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    } 
})



ShowNote();