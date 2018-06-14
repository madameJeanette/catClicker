///<reference path="gameobjects.ts"/>
class Counter extends GameObject {
    public num: number = 0;
    constructor(el: any, x: number, y: number) {
        super(el, x, y);
        this.update()

    }
    public update() {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px`
    }
}
