export class Floor {
  constructor() {
    this.paths = [20, 160, 300];
  }
}

export class Rock {
  constructor() {
    this.array = [38, 176, 318];
    this.index = Math.floor(Math.random() * (3 - 0) + 0);
    this.positionX = this.array[this.index];
    this.positionY = 0;
    this.points = 150;
    this.velocity = 9;
    this.correndo = false;
    this.positionY = 0;
    this.image = new Image();
  }

  draw(context) {
    context.drawImage(
      this.image,
      this.positionX,
      this.positionY,
      this.width,
      this.height,
    );
  }

  update(context, deltaTime) {
    this.draw(context);
  
    if (this.frameTimer > this.frameInterval) {
      this.frameTimer = 0;
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
    } else {
      this.frameTimer += deltaTime;
    }
  }

  run() {
    this.correndo = true;
    if (this.points > 0) {
      if (this.positionY < 1000) {
        this.positionY += this.velocity;
      } else {
        this.positionY = -100;
        this.index = Math.floor(Math.random() * (3 - 0) + 0);
        this.positionX = this.array[this.index];
      }
    }
    if (this.correndo) {
      setTimeout(() => {
        this.velocity = 11;
      }, 15000);
    }
  }

  colide(positionX, positionY, points) {
    if (
      positionX == this.index &&
      positionY > this.positionY &&
      positionY < this.positionY + 40
    ) {
      if (points > 0) {
        return true;
      }
      if (points >= 150) {
        return false;
      }
    } else {
    }
  }
}

export class Banana {
  constructor() {
    this.array = [45, 183, 325];
    this.index = Math.floor(Math.random() * (3 - 0) + 0);
    this.positionX = this.array[this.index];
    this.positionY = -100;
    this.points = 150;
    this.velocity = 10;
    this.bananaSprite = new Image();
    this.bananaSprite.src = "src/obstacles/bananaImg.png";
  }

  run() {
    if (this.points > 0) {
      this.points -= 0.1;
      if (this.positionY < 1000) {
        this.positionY += this.velocity;
        this.velocity += 0.001;
      } else {
        this.positionY = -100;
        this.index = Math.floor(Math.random() * (3 - 0) + 0);
        this.positionX = this.array[this.index];
      }
    }
  }

  colide(positionX, positionY, tamanho, points) {
    if (
      positionX == this.index &&
      positionY > this.positionY &&
      positionY < this.positionY + 40
    ) {
      if (this.points > 0) {
        this.points += 15;
        this.positionY = -100000;
        setTimeout(() => {
          this.positionY = -100;
          this.index = Math.floor(Math.random() * (3 - 0) + 0);
          this.positionX = this.array[this.index];
        }, 500);
      }
      if (this.points >= 150) {
        this.points = 150;
      }
    } else {
    }
  }
}
