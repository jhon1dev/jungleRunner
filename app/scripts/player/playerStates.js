const states = {
  RUNNING: 0,
  SLIDING: 1,
};

class State {
  constructor(state) {
    this.state = state;
    this.gameFrame = 0;
    this.frameTime = 50;
  }
}

export class Running extends State {
  constructor(player) {
    super("RUNNING");
    this.player = player;
  }
  enter() {
    this.player.frameX = 0;
    this.player.frameY = 0;

    if (this.gameFrame % this.frameTime == 0) this.player.maxFrame = 4;
    else this.player.maxFrame = 0;
  }

  handleInput(input) {
    if (input.includes("ArrowDown")) {
      this.player.setState(states.RUNNING, 0);
    } else if (input.includes("ArrowUp")) {
      this.player.setState(states.RUNNING, 1);
    }
  }
}

// export class Scrolling extends State {
//     constructor(player){
//         super('SCROLLING')
//         this.player = player;
//     }
//     enter(){
//         this.player.frameX = 0;
//         this.player.frameY = 2;
//         this.player.maxFrame = 6;
//     }
//     handleInput(input){
//         if(this.player.onGround()){
//             this.player.setState(states.RUNNING, 1);
//         }
//     }
// }
