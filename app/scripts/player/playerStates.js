const states = {
    RUNNING: 0,
    SLIDING: 1,
}

class State{
    constructor(state){
        this.state = state;
        this.gameFrame = 0;
        const tempoFrame = 0;
    }
}

export class Running extends State {
    constructor(player){
        super('RUNNING')
        this.player = player;
    }
    enter(){
        this.player.frameX = 0;
        this.player.frameY = 0;
        this.player.maxFrame = 4;
    }
    handleInput(input){
        if(input.keys.includes('ArrowDown')){
            this.player.setState(states.RUNNING, 0);
        }
        else if(input.keys.includes('ArrowUp')){
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