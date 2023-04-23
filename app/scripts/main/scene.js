export class Floor {
  constructor() {
    this.paths = [20, 160, 300];
  }
}

export class Rock {
  constructor() {
    this.array = [38, 176, 318];
    this.index = Math.floor(Math.random() * (3 - 0) + 0);
    this.posX = this.array[this.index];
    this.posY = 0;
    this.pontos = 150;
    this.velocity = 9;
    this.correndo = false;
    this.posY = 0;
    this.rockSprite = new Image();
  }

  run() {
    this.correndo = true;
    if (this.pontos > 0) {
      if (this.posY < 1000) {
        this.posY += this.velocity;
      } else {
        this.posY = -100;
        this.index = Math.floor(Math.random() * (3 - 0) + 0);
        this.posX = this.array[this.index];
      }
    }
    if (this.correndo) {
      setTimeout(() => {
        this.velocity = 11;
      }, 15000);
    }
  }

  colide(posiçãoX, posiçãoY, points) {
    if (
      posiçãoX == this.index &&
      posiçãoY > this.posY &&
      posiçãoY < this.posY + 40
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
    this.posX = this.array[this.index];
    this.posY = -100;
    this.points = 150;
    this.velocity = 10;
    this.bananaSprite = new Image();
    this.bananaSprite.src = "src/obstacles/bananaImg.png";
  }

  run() {
    if (this.pontos > 0) {
      this.pontos -= 0.1;
      if (this.posY < 1000) {
        this.posY += this.velocity;
        this.velocity += 0.001;
      } else {
        this.posY = -100;
        this.index = Math.floor(Math.random() * (3 - 0) + 0);
        this.posX = this.array[this.index];
      }
    }
  }

  colide(posiçãoX, posiçãoY, tamanho, points) {
    if (
      posiçãoX == this.index &&
      posiçãoY > this.posY &&
      posiçãoY < this.posY + 40
    ) {
      if (this.pontos > 0) {
        this.pontos += 15;
        this.posY = -100000;
        setTimeout(() => {
          this.posY = -100;
          this.index = Math.floor(Math.random() * (3 - 0) + 0);
          this.posX = this.array[this.index];
        }, 500);
      }
      if (this.pontos >= 150) {
        this.pontos = 150;
      }
    } else {
    }
  }
}
