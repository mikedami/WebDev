var video = document.getElementById("video");
var btn = document.getElementById("btn");

function myFunction(){
    if(video.paused){
        video.play();
        btn.innerHTML="Pause";
    } else{
        video.pause();
        btn.innerHTML="Play";
    }
}