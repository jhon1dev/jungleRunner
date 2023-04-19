export class Player {
  constructor() {
    this.posX = 200;
    this.posY = 400;
    this.width = 50;
    this.height = 50;
    this.frameE = 0;
    this.frameA = 0;
    this.alive = true;
    this.score = 0;
    this.maxScore = 0;
    this.playerImg = new Image();
  }

  setCharacter(option) {
    if (option === 0) {
      this.playerImg.src = "src/entities/adventureRunner.gif";
    } else if (option === 1) {
      this.playerImg.src = "src/entities/runnerClassic.png";
    }
  }

  playerAnim() {
    let interval = setInterval(() => {
      if (this.alive) {
        this.frameE = 80;
        this.frameA = 80;

        setTimeout(() => {
          this.frameE = 0;
          this.frameA = 80;
        }, 200);
        setTimeout(() => {
          this.frameE = 80;
          this.frameA = 0;
        }, 400);
        setTimeout(() => {
          this.frameE = 0;
          this.frameA = 0;
        }, 600);
      } 
      else if(alive == false){
        setInterval(() => {
          this.frameE = 80;
          this.frameA = 160;
          setTimeout(() => {
            this.frameA = 248;
          }, 200);
        }, 500);
      }
      else {
        clearInterval(intervalo);
        this.frameE = 80;
        this.frameA = 160;
      }
    }, 800);
}
}
