

tl = gsap.timeline({
   paused: true
 }).to(".plane", {
  duration:28,
  x:"25vw",
  ease: "sine.out"
},"start").to("body", { //#727272
  duration:28,
  background: "#727272",
  ease: "sine.out"
},"start").to(".plane", {
  duration:10,
  rotation: -30,
  x:"50vw",
  bottom:"45vh",
  ease: "sine.out"
},"takeoff").to("body", { //#727272
  duration:10,
  background: "#000000",
  ease: "sine.out"
},"takeoff").to(".plane", {
  duration:7,
  rotation: 0,
  bottom:"50vh",
  x:"80vw",
  ease: "sine.out"
})

var aud = document.getElementById("audio");

function Update() {
  var currentTime = aud.currentTime;
  var duration = aud.duration;
  tl.time(currentTime)
}

var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#ccc',
    progressColor: '#343B3F'
});
wavesurfer.load('assets/plane.mp3');

wavesurfer.on('ready', function () {

});

aud.ontimeupdate = function(){
    Update()
};

aud.onplay = function() {
  tl.play()
};
aud.onpause = function() {
  tl.pause();
};
