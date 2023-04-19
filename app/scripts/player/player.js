import { Running } from "../player/playerStates.js";
export class Player {
  constructor() {
    this.posX = 160;
    this.posY = 600;
    this.width = 74;
    this.height = 68;
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 0;
    this.speed = 5;
    this.maxSpeed = 140;
    this.alive = true;
    this.score = 0;
    this.maxScore = 0;
    this.fps = 60;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;
    this.image = new Image();
    this.states = [new Running(this)];
    this.currentState = this.states[0];
    this.currentState.enter();
    this.movendo = false; // utilizado para verificar se o player está efetuando alguma transição de movimento.
  }

  update(input, deltaTime) {
    // deltatime = tempo final - tempo inicial, utilizado para medir os frames por segundo ( FPS ).
    this.currentState.handleInput(input);
    // horizontal movement
    if (input.includes("ArrowRight"))
      for (let i = 0; i <= maxSpeed; i++) this.speed += i;
    else if (input.includes("ArrowLeft"))
      for (let i = 0; i <= maxSpeed; i++) this.speed -= i;
    else this.speed = 0;
    if (this.posX <= 20) this.x = 20;
    if (this.posX >= 300) this.posX = 300;
    // sprite animation
    if (this.frameTimer > this.frameInterval) {
      this.frameTimer = 0;
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
    } else {
      this.frameTimer += deltaTime;
    }
  }

  isMoving(input) {
    if (input.includes("ArrowLeft" || input.includes("ArrowRight"))) {
      this.movendo = true;
    }
  }

  draw(context) {
    context.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.posX,
      this.posY,
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
