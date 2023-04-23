import { Player } from "../player/player.js";
import { Banana } from "../main/scene.js";
import { Rock } from "../main/scene.js";
import { Score } from "../gui/score.js";
import { KeyboardInputHandler } from "./inputHandler.js";

window.addEventListener("load", function () {
  const canvas = document.getElementById("mycanvas");
  const context = canvas.getContext("2d");

  class Game {
    constructor() {
      this.characterChosen = false;
      this.canStart = false;
      this.jungleTitle = document.getElementById("jungle");
      this.runnerTitle = document.getElementById("runner");
      this.colidirComPedra = null;
      this.botao = document.getElementById("botão");
      this.botaoPlay = document.getElementById("play");
      this.imagens = Array.from(document.getElementsByTagName("img"));
      this.score = new Score();
      this.crocoBoss = document.getElementById("crocoBoss");
      this.player = new Player();
      this.banana = new Banana();
      this.rock = new Rock();
      this.morto = false;
      this.energyLess = document.getElementById("energyLess");
      this.energy = document.getElementById("energy");
      this.startX;
      this.movendo = false;
      this.adventurerSuit = document.getElementById("adventureSuit");
      this.junglerSuit = document.getElementById("junglerSuit");
      this.input = new KeyboardInputHandler();
      this.fps = 60;
      this.fps_rate = 0;
    }

    setChoice() {
      // O jogador seleciona o personagem que ele vai usar.
      this.adventurerSuit.addEventListener("click", () => {
        this.player.setCharacter(0);
        this.characterChosen = true;
        this.playButton(this.characterChosen);
      });

      this.junglerSuit.addEventListener("click", () => {
        this.player.setCharacter(1);
        this.characterChosen = true;
        this.playButton(this.characterChosen);
      });
    }

    playButton(isChosen) {
      if (isChosen) {
        this.botaoPlay.addEventListener("click", () => {
          this.canStart = true;
          this.displayManagement();
        });
      }
    }
    startGame() {
      return this.canStart;
    }
    update(deltaTime) {
      this.player.update(this.input.keys, deltaTime);
    }

    draw(deltaTime, context) {
      this.player.draw(1000 / deltaTime, context);

      context.drawImage(this.rock.rockSprite, this.rock.posX, this.rock.posY);
    }

    displayManagement() {
      this.imagens.forEach(function (img) {
        img.style.display = "block";
      });
      this.botao.style.display = "none";
      this.botaoPlay.style.top = "-100000px";
      this.energy.style.display = "block";
      this.energyLess.style.display = "block";
      document.body.style.overflow = "hidden";
      this.junglerSuit.style.display = "none";
      this.adventurerSuit.style.display = "none";
      this.botaoPlay.style.display = "none";
      this.jungleTitle.style.display = "none";
      this.runnerTitle.style.display = "none";
    }
  }

  const game = new Game();
  let cycleCount = 0;

  function gameLoop(currentTime) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    cycleCount++;
    if (cycleCount >= 60) cycleCount = 0;
    let lastTime = 0;
    currentTime = Date.now();
    let deltaTime = currentTime - lastTime;
    lastTime = currentTime;
    if (cycleCount % 60 == 0) game.fps_rate = Math.floor(1000 / deltaTime);
    game.setChoice();
    if (game.startGame() && Math.floor(deltaTime > 1000 / game.fps)) {
      window.scrollTo(0, 0);
      game.update(deltaTime);
      game.draw(deltaTime, context);
      // game.score.setScore();
    }
    requestAnimationFrame(gameLoop);
  }
  gameLoop(10);
});
