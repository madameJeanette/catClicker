class GameOver {
    private element: HTMLElement
    private game: Game
    public background:Background

    constructor(g: Game) {
        this.game = g
        this.background = new Background("gameOverBack", (window.innerWidth/2)-657, -8)
        this.element = document.createElement("START")
        document.body.appendChild(this.element)
        this.element.addEventListener("click", () => this.clicked())
        this.element.innerHTML = "Game Over<br>" + "You made to many cats!<br>" + "The shelter picked them all up :'("
   
    }
    public update() {
    }

    private clicked() {
        this.game.emptyScreen();
        this.game.showStartMenu(new StartMenu(this.game))

    }

}