class StartMenu {
    private element: HTMLElement
    private game: Game;
    public background:Background

    constructor(g: Game) {
        this.game = g
        this.background = new Background("playscreenBack", (window.innerWidth/2)-657, -8)
        this.element = document.createElement("start")
        document.body.appendChild(this.element)
        this.element.addEventListener("click", () => this.clicked())
        this.element.innerHTML = "Start creating your furry family!"
        
        // let logo = document.createElement("icon") 
        //document.body.appendChild(logo)

    }
    public update() {


    }

    private clicked() {
        this.game.emptyScreen();
        this.game.showPlayScreen(new PlayScreen(this.game));
        console.log("Playscreen started")
    }
}