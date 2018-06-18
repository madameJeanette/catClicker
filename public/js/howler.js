var sound = new Howl({
    src: ["audio/funkyBackgroundMusic.wav"],
    autoplay: true,
    loop: true,
    volume: 0.5,
    onend: function() {
      console.log("Finished!");
    }
  });
  
  sound.on("load", function() {
    var startButton = document.getElementsByTagName("music")[0];
    startButton.addEventListener("click", function() {
      if (sound.playing()) {
        sound.pause();
      } else {
        sound.play();
      }
    });
  });