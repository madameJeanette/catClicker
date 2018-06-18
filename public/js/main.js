"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameObject = (function () {
    function GameObject(el, x, y) {
        this.x = x;
        this.y = y;
        this.div = document.createElement(el);
        document.body.appendChild(this.div);
    }
    GameObject.prototype.update = function () {
    };
    return GameObject;
}());
var Background = (function (_super) {
    __extends(Background, _super);
    function Background(el, x, y) {
        var _this = _super.call(this, el, x, y) || this;
        _this.update();
        return _this;
    }
    Background.prototype.update = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px";
    };
    return Background;
}(GameObject));
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(el, x, y) {
        var _this = _super.call(this, el, x, y) || this;
        _this.div.addEventListener("click", function () { return _this.deleteCat(); });
        _this.update();
        return _this;
    }
    Cat.prototype.deleteCat = function () {
        this.div.remove();
    };
    Cat.prototype.update = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px";
    };
    return Cat;
}(GameObject));
var Counter = (function (_super) {
    __extends(Counter, _super);
    function Counter(el, x, y) {
        var _this = _super.call(this, el, x, y) || this;
        _this.num = 0;
        _this.update();
        return _this;
    }
    Counter.prototype.update = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px";
    };
    return Counter;
}(GameObject));
var Game = (function () {
    function Game() {
        this.screen = new StartMenu(this);
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.screen.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.emptyScreen = function () {
        document.body.innerHTML = "";
    };
    Game.prototype.showPlayScreen = function (screen) {
        this.screen = screen;
        this.screen.update();
    };
    Game.prototype.showGameOver = function (screen) {
        this.screen = screen;
        this.screen.update();
    };
    Game.prototype.showStartMenu = function (screen) {
        this.screen = screen;
        this.screen.update();
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var GameOver = (function () {
    function GameOver(g) {
        var _this = this;
        this.game = g;
        this.element = document.createElement("START");
        document.body.appendChild(this.element);
        this.element.addEventListener("click", function () { return _this.clicked(); });
        this.element.innerHTML = "Game Over<br>" + "You made to many cats!<br>" + "The shelter picked them all up :'(";
    }
    GameOver.prototype.update = function () {
    };
    GameOver.prototype.clicked = function () {
        this.game.emptyScreen();
        this.game.showStartMenu(new StartMenu(this.game));
    };
    return GameOver;
}());
var PlayScreen = (function () {
    function PlayScreen(g) {
        var _this = this;
        this.tooMuchCats = 25;
        this.screenW = window.innerWidth - 320;
        this.screenH = window.innerHeight - 296;
        this.randomNumW = Math.random();
        this.randomNumH = Math.random();
        this.xpos = (this.screenW * this.randomNumW);
        this.ypos = (this.screenH * this.randomNumH);
        this.game = g;
        this.background = new Background("background", -8, -8);
        this.witch = new Witch("witch", 500, 337);
        this.witch.div.addEventListener("click", function () { return _this.counter(); });
        this.count = new Counter("counter", this.screenW / 2, 100);
        this.cat = new Cat("empty", 0, 0);
    }
    PlayScreen.prototype.counter = function () {
        var _this = this;
        this.randomNumW = Math.random();
        this.randomNumH = Math.random();
        this.xpos = (this.screenW * this.randomNumW);
        this.ypos = (this.screenH * this.randomNumH);
        this.cat = new Cat("cat", this.xpos, this.ypos);
        this.cat.div.addEventListener("click", function () { return _this.deleteCat(); });
        this.count.num++;
        console.log("1up");
        this.count.div.innerHTML = ("You have " + this.count.num + " cats");
    };
    PlayScreen.prototype.deleteCat = function () {
        this.count.num--;
        this.count.div.innerHTML = ("You have " + this.count.num + " cats");
    };
    PlayScreen.prototype.clickedSoMuch = function () {
        this.game.emptyScreen();
        this.game.showGameOver(new GameOver(this.game));
    };
    PlayScreen.prototype.update = function () {
        if (this.count.num > this.tooMuchCats) {
            this.clickedSoMuch();
        }
        ;
    };
    return PlayScreen;
}());
var StartMenu = (function () {
    function StartMenu(g) {
        var _this = this;
        this.game = g;
        this.element = document.createElement("start");
        document.body.appendChild(this.element);
        this.element.addEventListener("click", function () { return _this.clicked(); });
        this.element.innerHTML = "Start creating your furry family!";
    }
    StartMenu.prototype.update = function () {
    };
    StartMenu.prototype.clicked = function () {
        this.game.emptyScreen();
        this.game.showPlayScreen(new PlayScreen(this.game));
        console.log("Playscreen started");
    };
    return StartMenu;
}());
var Witch = (function (_super) {
    __extends(Witch, _super);
    function Witch(el, x, y) {
        var _this = _super.call(this, el, x, y) || this;
        _this.update();
        return _this;
    }
    Witch.prototype.update = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px";
    };
    return Witch;
}(GameObject));
//# sourceMappingURL=main.js.map