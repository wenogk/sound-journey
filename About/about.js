function PlaySound(sound) {
    var audio=document.getElementById(sound);
    audio.play();
}

function StopSound(sound) {
    var audio=document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
}