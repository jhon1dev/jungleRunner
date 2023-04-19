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
        console.log(this.index);
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
