let paused = true;
//214 seconds total
//1:44 thunder - 104
let totalSeconds = 214;
tl = gsap.timeline({
   paused: true
 })
 .to("body", { //#727272
  duration:1,
  background: "#90EE90",
  ease: "sine.out",
},4)
.to("body", { //#727272
 duration:2,
 background: "white",
 ease: "sine.out"
},5)
.to("body", {
  duration:0.4,
  background: "black",
  ease: "steps(3)"
},104)
.to("body", {
  duration:0.6,
  background: "white",
  ease: "steps(3)"
},104.4)
.to("body", {
  duration:0.4,
  background: "black",
  ease: "steps(3)"
},105)
.to("body", {
  duration:0.6,
  background: "white",
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
.to("body", {
  duration:(totalSeconds-106),
  background: "black",
  ease: "sine.out"
},106)
.to("body", {
  duration:0.5,
  yoyo: true,
  repeat: 76,
  rotate: "+=3",
  ease: Quad.easeInOut
},112,"shake")
.to("body", {
  duration:0.5,
  yoyo: true,
  repeat: 76,
  rotate: "-=3",
  ease: Quad.easeInOut
},112,"shake")
.to("body", {
  duration:0.3,
  yoyo: true,
  repeat: 70,
  rotate: "+=5",
  ease: Quad.easeInOut
},150,"shake2")
.to("body", { //2:30 150
  duration:0.3,
  yoyo: true,
  repeat: 70,
  rotate: "-=5",
  ease: Quad.easeInOut
},150,"shake2")
.to("body", {
  duration:0.1,
  yoyo: true,
  repeat: 58,
  rotate: "+=5",
  ease: Quad.easeInOut
},185,"shake3")
.to("body", { //2:30 150
  duration:0.1,
  yoyo: true,
  repeat: 58,
  rotate: "-=5",
  ease: Quad.easeInOut
},185,"shake3")
var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#ccc',
    progressColor: '#343B3F',
    responsive: true
});
wavesurfer.load('assets/draft.mp3');
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

  function shake(element="body"){
  gsap.to(element, .1, {
    x: -7,
    ease: Quad.easeInOut
  });
  gsap.to(element, .1, {
    repeat: 10,
    x: 7,
    yoyo: true,
    delay: .1,
    ease: Quad.easeInOut
  });
  gsap.to(element, .1, {
    x: 0,
    delay: .1 * 11
  });
}
