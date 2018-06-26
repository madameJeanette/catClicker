# catClicker
Become the greatest crazy cat lady!
Maak zo veel mogelijk magische katten.
Maar pas op, als je er te veel maakt zullen de consequenties heel naar zijn....


Het project maakt gebruik van deze OOP principes.

• Classes
------------------------------------------------------------------------------------------------------------------------------------
Waar is het toegepast, en waarom is het op die plek toegepast:

"Classes inherit functionality and objects are built from these classes"

De Class witch wordt in de playscreen.ts aangeroepen en wordt daar een x en y coordinaat mee gegeven.
Hierdoor kun je meerdere witches aanroepen met andere x en y coordinaten in de playscreen.ts zonder this.div.style.transform te gebruiken. Omdat de witch class deze al doorgeeft aan de playscreen.ts.

------------------------------------------------------------------------------------------------------------------------------------
code voorbeelden: Witch.ts:

```class Witch extends GameObject {
    constructor(el: any, x: number, y: number) {
        super(el, x, y);
        this.update()
    }
    public update() {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px`
    }
}
```

Playscreen.ts:
------------------------------------------------------------------------------------------------------------------------------------

```class PlayScreen {
  public game: Game;
  public witch: Witch

constructor(g: Game) {
  this.game = g;
  //create witch
  this.witch = new Witch("witch", 500, 337)
 
```
• Encapsulation
------------------------------------------------------------------------------------------------------------------------------------

Waar is het toegepast, en waarom is het op die plek toegepast:
Ik heb encapsulation toegepast in de playscreen.ts. Alle objecten die ik alleen in de playscreen.ts gebruik staan op private, zodat andere classes ze niet aan kunnen roepen. Wanneer ik onderdelen van classes door andere classes aan wil roepen, zoals de witch class onderdelen in de playscreen, dan gebruik ik public.

Encapsulation betekent zoveel als inkapseling. In OO is elk object afgeschermd. Objecten kunnen elkaar niet 'zien'. Ze kunnen wel allerlei dingen uitwisselen, alsof ze via een luikje met elkaar in verbinding staan.
code voorbeelden:

private - Only the current class will have access to the field or method.

protected - Only the current class and subclasses (and sometimes also same-package classes) of this class will have access to the field or method.

public - Any class can refer to the field or call the method.
```
class PlayScreen {
  public game: Game
  public witch: Witch
  public cat: Cat
  public count: Counter
  private tooMuchCats: number = 25
  public background: Background
  private ypos: number
  private xpos: number
  private screenW: number
  private screenH: number
  private randomNumW: number
  private randomNumH: number
  
  constructor(g: Game) {
    this.screenW = window.innerWidth - 320
    this.screenH = window.innerHeight - 296
    this.randomNumW = Math.random()
    this.randomNumH = Math.random()
    this.xpos = (this.screenW * this.randomNumW)
    this.ypos = (this.screenH * this.randomNumH)
    this.game = g

    //----------------------------->create background

   this.background = new Background("background", 0, 0)
   this.witch = new Witch("witch", 500, 337)
   this.witch.div.addEventListener("click", () => this.counter())
   this.count = new Counter("counter", this.screenW/2, 100)```

   //create empty cat
   
   this.cat = new Cat("empty", 0,0)

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
```

• Composition 
------------------------------------------------------------------------------------------------------------------------------------
uitleg: waar is het toegepast, en waarom is het op die plek toegepast:

Ik heb een witch, counter en cat class die ik aanroep in de playscreen.ts. 

```class PlayScreen {
public game: Game

  public witch: Witch
  public cat: Cat
  public count: Counter
  private tooMuchCats: number = 25
  public background: Background
  ```
  

Hierdoor kan ik de variabelen samen in een functie gebruiken in de playscreen.ts


```counter() {

   this.randomNumW = Math.random()
   this.randomNumH = Math.random()
   this.xpos = (this.screenW * this.randomNumW)
   this.ypos = (this.screenH * this.randomNumH)
   this.cat = new Cat("cat", this.xpos, this.ypos)
   this.cat.div.addEventListener("click", () => this.deleteCat())  
   this.count.num++   
   console.log("1up")
   this.count.div.innerHTML = ("You have " + this.count.num + " cats");//add text 2 counter

  }
  deleteCat() {
    this.count.num--;
    this.count.div.innerHTML = ("You have " + this.count.num + " cats");//add text 2 counter
   
  }

  clickedSoMuch() {  //if cat  > then 25 = game Over
    this.game.emptyScreen();
    this.game.showGameOver(new GameOver(this.game))
  }
  ```

• Inheritance 
------------------------------------------------------------------------------------------------------------------------------------
Waar is het toegepast, en waarom is het op die plek toegepast:
Ik heb een gameobject gemaakt die met inheritance  variabelen en functies doorgeeft aan de witch, de counter en de background.ts
Hierdoor kun je meerdere objecten divs maken met verschilende x en y coordinaten in de playscreen.ts zonder voor elke class een aparte div te creeren en x en y coordinaat te verklaren, omdat deze al doorgegeven wordt door de gameobject.ts.

code voorbeelden:

gameobject.ts
------------------------------------------------------------------------------------------------------------------------------------
```class GameObject {
    public x: number
    public y: number
    public div: HTMLElement

   constructor(el: any, x: number, y: number) {
        this.x = x
        this.y = y
        this.div = document.createElement(el)
        document.body.appendChild(this.div)
        
```
witch.ts:
------------------------------------------------------------------------------------------------------------------------------------
```class Witch extends GameObject {
    constructor(el: any, x: number, y: number) {
        super(el, x, y);
        this.update()
    }
    public update() {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px`
    }
}

```
Playscreen.ts:
------------------------------------------------------------------------------------------------------------------------------------
```class PlayScreen {
  public game: Game;
  public witch: Witch
 
  constructor(g: Game) {

  this.game = g
  this.witch = new Witch("witch", 500, 337)
 ```
------------------------------------------------------------------------------------------------------------------------------------

 • Klassendiagram van de game
 ------------------------------
https://github.com/madameJeanette/catClicker/blob/master/Class%20Diagram%20cat%20Clicker.png
 
 
 •  Link naar de peer review die in week 6 is gedaan.
 -----------
 https://github.com/madameJeanette/fluffyGameWork/issues/2

 •Link naar de peer review die ik bij Brainilio heb gedaan in week 6:
 -------------
 https://github.com/Brainilio/ThanosRunner/issues/1
 
 • Een link naar online versie
 -----------------
 https://stud.hosted.hr.nl/0872675/websites/catClicker/public/
 
 
 Extra uitdaging uitleg:
 -----------------------
 Als extra opdracht mocht je een externe library toevoegen. Een van de libraries die werd aangeboden in de modulewijzer was howler.js.
 Deze zorgt voor de achtergrond muziek.

```
 var sound = new Howl({
    src: ["audio/funkyBackgroundMusic.wav"],
    autoplay: true,
    loop: true,
    volume: 0.5,
    onend: function() {
      console.log("Finished!");
    }
  });
  
  sound.on("load", function() {
    var startButton = document.getElementsByTagName("music")[0];
    startButton.addEventListener("click", function() {
      if (sound.playing()) {
        sound.pause();
      } else {
        sound.play();
      }
    });
  });
  ```
 
 
 
