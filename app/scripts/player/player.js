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
    this.speed = 0;
    this.maxSpeed = 5;
    this.fps = 25;
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
  }

  movement(input, deltaTime) {
    if (this.frameTimer < this.frameInterval) {
      if (this.floor.paths.includes(this.floor.paths[this.virtualPositionX])) {
        
        this.speed = 10
        
        this.finalPosition = this.floor.paths[this.virtualPositionX];
        if (this.positionX > this.finalPosition) {
          this.positionX -= this.speed;
        } else if (this.positionX < this.finalPosition) {
          this.positionX += this.speed;
        } else {
          this.speed = 0;
          console.log(this.speed);
        }
        if (input.keys.includes("ArrowRight") && input.timeOut == 0) {
          this.virtualPositionX += 1;
          input.timeOut = 1;
          console.log();
        } else if (input.keys.includes("ArrowLeft") && input.timeOut == 0) {
          this.virtualPositionX -= 1;
          input.timeOut = 1;
        }
      }    
    } 
    // sprite animation / animação das sprites.
    if (this.frameTimer > this.frameInterval) {
      this.frameTimer = 0;
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
    } 
    else {
      this.frameTimer += deltaTime;
    }
    if (this.virtualPositionX <= -1) this.virtualPositionX = 0;
    else if (this.virtualPositionX >= 3) this.virtualPositionX = 2;
  }

  draw(deltaTime, context) {

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
