///<reference path="gameobjects.ts"/>
class Music extends GameObject{

    constructor(el: any, x: number, y: number) {
      super(el, x, y);
      

      
      
    }
  
    public update() {
      this.div.style.transform = `translate(${this.x}px, ${this.y}px`
    }
  }