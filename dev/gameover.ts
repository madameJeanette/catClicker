class GameOver {
    private element: HTMLElement
    private game: Game
    

    constructor(g: Game) {
        this.game = g
       
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