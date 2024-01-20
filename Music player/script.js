let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let forward = document.getElementById("forwardb")
let backward = document.getElementById("backwardb")

song.onloadedmetadata = function (){
    progress.max = song.duration;
    progress.value = song.currentTime; 
}
function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");

    }else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500)
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
}

function forwards(){
    song.currentTime += 5;
    
}
function backwards(){
    song.currentTime -= 5;
    
}
