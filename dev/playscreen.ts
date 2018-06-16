
class PlayScreen {
  public game: Game;

  public witch: Witch
  public cat: Cat
  public music: Music
  public count: Counter
  public tooMuchCats: number = 45;
  public background: Background


  private ypos: number;
  private xpos: number;
  private screenW: number;
  private screenH: number;
  private randomNumW: number;
  private randomNumH: number;


  constructor(g: Game) {
    this.screenW = window.innerWidth - 320;
    this.screenH = window.innerHeight - 296;
    this.randomNumW = Math.random();
    this.randomNumH = Math.random()
    this.xpos = (this.screenW * this.randomNumW);
    this.ypos = (this.screenH * this.randomNumH);
    this.game = g;

    //----------------------------->create background
    this.background = new Background("background", 0, 0)
    //----------------------------->sound
    this.music = new Music("music", 0, 0)


    //----------------------------->create witch
    this.witch = new Witch("witch", 500, 337)
    this.witch.div.addEventListener("click", () => this.counter())
    //---> add event listener witch

    this.count = new Counter("counter", this.screenW/2, 100)
    //----------------------------------->create counter
   //create empty cat
   this.cat = new Cat("empty", 0,0)
  }

  counter() {

    this.randomNumW = Math.random();
    this.randomNumH = Math.random()
    this.xpos = (this.screenW * this.randomNumW);
    this.ypos = (this.screenH * this.randomNumH);
    this.cat = new Cat("cat", this.xpos, this.ypos)
    this.cat.div.addEventListener("click", () => this.deleteCat())
    //----------------------------->create cat
    this.count.num++  // this.counter++; 
    console.log("1up")
    this.count.div.innerHTML = ("You have " + this.count.num + " cats");//add text 2 counter
    //add eventlistener delete cat



  }
  deleteCat() {
    this.count.num--;
    this.count.div.innerHTML = ("You have " + this.count.num + " cats");//add text 2 counter
   
  }

  clickedSoMuch() {  //if cat tag > then 45 = game Over;
    this.game.emptyScreen();
    this.game.showGameOver(new GameOver(this.game))
  }

  public update() {
   
    if (this.count.num > this.tooMuchCats) { this.clickedSoMuch() };


  }
}







