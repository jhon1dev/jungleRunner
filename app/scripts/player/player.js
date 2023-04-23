import { Running } from "../player/playerStates.js";
import { Floor } from "../main/scene.js";

export class Player {
  constructor() {
    this.width = 80;
    this.height = 76;
    this.virtualPositionX = 1;
    this.positionX = 160;
    this.positionY = 600;
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 0;
    this.speed = 0;
    this.maxSpeed = 5;
    this.alive = true;
    this.canMove = true;
    this.score = 0;
    this.maxScore = 0;
    this.fps = 1;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;
    this.image = new Image();
    this.states = [new Running(this)];
    this.currentState = this.states[0];
    this.currentState.enter();
    this.floor = new Floor();
  }

  update(input, deltaTime) {
    // deltatime = tempo final - tempo inicial, utilizado para medir os frames por segundo ( FPS ).
    this.currentState.handleInput(input);
    // horizontal movement / movimento horizontal
    this.movement(input, deltaTime);
    console.log(this.frameTimer, this.frameInterval);
    // sprite animation / animação das sprites.
    if (this.frameTimer > this.frameInterval) {
      this.frameTimer = 0;
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
    } else {
      this.frameTimer += deltaTime;
    }
  }

  movement(input, deltaTime) {
    if (this.frameTimer < this.frameInterval) {
      if (this.floor.paths.includes(this.floor.paths[this.virtualPositionX]) && this.canMove) {
        this.positionX = this.floor.paths[this.virtualPositionX];
        this.canMove = false;
        if (input.includes("ArrowRight")) {
          this.virtualPositionX += 1;
        } else if (input.includes("ArrowLeft")) {
          this.virtualPositionX -= 1;
        }
      }
    } else {
      this.frameTimer += deltaTime;
      this.canMove = true; // resetando a variável para permitir novo movimento
    }
    if (this.virtualPositionX <= -1) this.virtualPositionX = 0;
    else if (this.virtualPositionX >= 3) this.virtualPositionX = 2;
  }

  draw(deltaTime, context) {
    if (this.frameTimer < this.frameInterval) {
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
      this.frameTimer = 0;
    } else {
      this.frameTimer += deltaTime;
    }
    context.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.positionX,
      this.positionY,
      this.width,
      this.height
    );
  }

  setCharacter(option) {
    if (option === 0) {
      this.image.src = "src/entities/adventureRunner.png";
    } else if (option === 1) {
      this.image.src = "src/entities/classicRunner.png";
    }
  }
}
