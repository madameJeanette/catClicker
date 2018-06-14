///<reference path="gameobjects.ts"/>
class Cat extends GameObject {
  constructor(el: any, x: number, y: number) {
    super(el, x, y);
    this.div.addEventListener("click", () => this.deleteCat())
    this.update()

  }
  deleteCat() {
    this.div.remove();
  }

  public update() {
    this.div.style.transform = `translate(${this.x}px, ${this.y}px`
  }
}