export class KeyboardInputHandler {
  constructor(deltaTime) {
    this.keys = [];
    this.timeOut = 0;
    window.addEventListener("keydown", (e) => {
      if (
        (e.key === "ArrowLeft" || e.key === "ArrowRight") &&
        this.keys.indexOf(e.key) === -1 &&
        this.timeOut == 0
      ) {
        this.keys.push(e.key);
        
        // console.log("Keydown: " + this.timeOut);
      }
      // console.log(e.key, this.keys);
    });
    window.addEventListener("keyup", (e) => {
      this.timeOut = 0;
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        this.keys.splice(this.keys.indexOf(e.key), 1);
        
        // console.log("Keyup: " + this.timeOut);
      }
    });
  }
}

export class MobileInputHandler {
  constructor() {
    this.touches = [];
    window.addEventListener("touchstart", (e) => {
      if (
        e.touches[0].clientX < window.innerWidth / 2 &&
        this.touches.indexOf("left") === -1
      ) {
        this.touches.push("left");
      } else if (
        e.touches[0].clientX > window.innerWidth / 2 &&
        this.touches.indexOf("right") === -1
      ) {
        this.touches.push("right");
      }
      // console.log(e.touches, this.touches);
    });
    window.addEventListener("touchend", (e) => {
      if (this.touches.indexOf("left") !== -1) {
        this.touches.splice(this.touches.indexOf("left"), 1);
      } else if (this.touches.indexOf("right") !== -1) {
        this.touches.splice(this.touches.indexOf("right"), 1);
      }
    });
  }
}
