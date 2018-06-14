class Game {
    screen: any
    constructor() {
        this.screen = new StartMenu(this)
        this.gameLoop()
    }
    gameLoop() {

        this.screen.update()

        requestAnimationFrame(() => this.gameLoop())
    }
    emptyScreen() {

        document.body.innerHTML = ""
    }
    showPlayScreen(screen: PlayScreen) { //Het speel scherm
        this.screen = screen
        this.screen.update();
    }

    showGameOver(screen: GameOver) {  //game over scherm
        this.screen = screen
        this.screen.update();
    }

    showStartMenu(screen: StartMenu) {  //start scherm
        this.screen = screen
        this.screen.update();
    }
}
window.addEventListener("load", () => new Game())



