

tl = gsap.timeline({ paused: true })
.to(".plane", {duration:1, left:200, ease: "power2.out"})
.to(".plane", {duration:44, rotation: -30, left:700, bottom:500, ease: "power2.out"})

gsap.ticker.fps(30)

var aud = document.getElementById("audio");


function Update() {
  var currentTime = aud.currentTime;
  var duration = aud.duration;
  tl.time((currentTime));
}

aud.ontimeupdate = function(){
    Update()
};
/*
setInterval(() => { // animation move and resize the logo to the very left top
Update()
}, 100);

/*
aud.addEventListener("timeupdate", function() {
Update()
});
*/
aud.onplay = function() {
  Update()
};
aud.onpause = function() {
  Update()
};
