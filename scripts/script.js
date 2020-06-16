let paused = true;
//219 seconds total
//32 second announcment
//2:28 woman scream - 148
let totalSeconds = 219;
tl = gsap.timeline({
   paused: true
 })
 .to("#overlay", { //#727272
  duration:1,
  background: "rgb(144,238,144,0.4)",
  ease: "sine.out",
},4)
.to("#overlay", { //#727272
 duration:2,
 background: "rgba(0,0,0,0)",
 ease: "sine.out"
},5)
.to("#overlay", { //#727272
 duration:0.5,
 background: "rgb(144,238,144,0.4)",
 ease: "sine.out",
},31.5)
.to("#overlay", { //#727272
duration:0.5,
background: "rgba(0,0,0,0)",
ease: "sine.out"
},32)
.to("#overlay", { //#727272
 duration:0.5,
 background: "rgb(144,238,144,0.4)",
 ease: "sine.out",
},55.5)
.to("#overlay", { //#727272
duration:0.5,
background: "rgba(0,0,0,0)",
ease: "sine.out"
},56)
.to("#overlay", {
  duration:0.4,
  background: "rgba(0,0,0,0.7)",
  ease: "steps(3)"
},104)
.to("#overlay", {
  duration:0.6,
  background: "rgba(0,0,0,0)",
  ease: "steps(3)"
},104.4)
.to("#overlay", {
  duration:0.4,
  background: "rgba(0,0,0,0.7)",
  ease: "steps(3)"
},105)
.to("#overlay", {
  duration:0.6,
  background: "rgba(0,0,0,0)",
  ease: "steps(3)"
},105.4)
.to(".mask1", {
  duration:2,
  top:"0px",
  ease: Bounce.easeOut
},108)
.to(".mask2", {
  duration:2,
  top:"0px",
  ease: Bounce.easeOut
},108)
.to("#overlay", { //fade to black
  duration:(205-148),
  background: "black",
  ease: "sine.out"
},148)
.to("#overlay", {
  backgroundImage:"linear-gradient(to right, #2500E0, #000, #E31E33)",
  yoyo: true,
  duration: 1,
  repeat: 7

},205)


var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#ccc',
    progressColor: '#343B3F',
    responsive: true
});

function turbulence(startTime,endTime,speed,angle) {
  let repeat = Math.round((endTime - startTime) / speed);
  let amountAdd = "+=" + angle;
  let amountSubtract = "-=" + angle;
  let startTime2 = startTime //+ speed;
  let srotate = "rotate(-" + angle + "deg);"
  console.log(startTime + " to " + endTime + " repeat " + repeat + " times for duration " + speed )
  tl.to("body", {
    duration: speed,
    yoyo: true,
    repeat: repeat,
    rotate: amountAdd,
    transformOrigin: '50% 20%',
    ease: Quad.easeInOut
  },startTime)
  .to("body", {
    duration: speed,
    yoyo: true,
    repeat: repeat,
    rotate: amountSubtract,
    transformOrigin: '50% 20%',
    ease: Quad.easeInOut
  },startTime2)
  .to(".mask1", {
    duration:speed,
    yoyo: true,
    repeat: repeat,
    rotate: amountSubtract,
    transformOrigin: '50% 0%',
    ease: Quad.easeInOut
  },startTime)
  .to(".mask1", {
    duration:speed,
    yoyo: true,
    repeat: repeat,
    rotate: amountAdd,
    transformOrigin: '50% 0%',
    ease: Quad.easeInOut
  },startTime2)
  .to(".mask2", {
    duration:speed,
    yoyo: true,
    repeat: repeat,
    rotate: amountSubtract,
    transformOrigin: '50% 0%',
    ease: Quad.easeInOut
  },startTime)
  .to(".mask2", {
    duration:speed,
    yoyo: true,
    repeat: repeat,
    rotate: amountAdd,
    transformOrigin: '50% 0%',
    ease: Quad.easeInOut
  },startTime2)
}

turbulence(112,148,0.5,3);
turbulence(148,180,0.4,5);
turbulence(180,199,0.2,5);
wavesurfer.load('assets/final.mp3');
wavesurfer.on('pause', function () {
  tl.pause();
});

wavesurfer.on('seek', function () {
  let time = wavesurfer.getCurrentTime();
  tl.time(time)
});
// seek
wavesurfer.on('play', function () {
  tl.play()
});
wavesurfer.on('ready', function () {
  $('.playPauseButton').click(function(){
    paused = !paused;
    if(paused) {
      $(".playPauseButton").attr("src","assets/play.png");
    } else {
      $(".playPauseButton").attr("src","assets/pause.png");
    }
    wavesurfer.playPause();
  });

  $('body').keyup(function(e){
     if(e.keyCode == 32){
        paused = !paused;
        if(paused) {
            $(".playPauseButton").attr("src","assets/play.png");
          } else {
            $(".playPauseButton").attr("src","assets/pause.png");
          }
         wavesurfer.playPause();
     }
  });
});
