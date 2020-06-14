

tl = gsap.timeline({
   paused: true
 }).to(".plane", {
  duration:28,
  x:"25vw",
  ease: "sine.out"
}).to(".plane", {
  duration:10,
  rotation: -30,
  x:"50vw",
  bottom:"45vh",
  ease: "sine.out"
}).to(".plane", {
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

aud.ontimeupdate = function(){
    Update()
};

aud.onplay = function() {
  tl.play()
};
aud.onpause = function() {
  tl.pause();
};
