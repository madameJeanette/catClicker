///<reference path="gameobjects.ts"/>
class Music extends GameObject{

    constructor(el: any, x: number, y: number) {
      super(el, x, y);
      

      
      //<audio controls autoplay id="muziek">
      //<source src="audio/funkyBackgroundMusic.wav" type="audio/mpeg">
      //</audio>
    }
  
    public update() {
      this.div.style.transform = `translate(${this.x}px, ${this.y}px`
    }
  }