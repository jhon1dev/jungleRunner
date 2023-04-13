export class Player {
  posX = 0;
  posY = 0;
  width = 50;
  height = 50;
  frameE = 0;
  playerImg = new Image();
  
  constructor(posX, posY, width, height, frameE) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.frameE = frameE;
  }
}
