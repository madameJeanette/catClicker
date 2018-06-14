class GameObject {
    public x: number
    public y: number
    public div: HTMLElement


    constructor(el: any, x: number, y: number) {
        //number, xpos:number, ypos:number,screenW:number, screenH:number,randomNumW:number,randomNumH:number
        this.x = x
        this.y = y
        this.div = document.createElement(el)
        document.body.appendChild(this.div)


    }

    update() {
        // this.div.style.transform = `translate(${this.x}px, ${this.y}px`

        // this.cdiv.style.transform = `translate(${this.xpos}px, ${this.ypos}px`

    }


}