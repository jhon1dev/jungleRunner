/* TESTE PROVISORIO */

// VARIÁVEIS

// changeRock() {
//   setTimeout(() => {
//     passou15segundos = true;
//   }, 15000);
//   setTimeout(() => {
//     passoumais15segundos = true;
//   }, 34000);
// }
// buscar outra solução para o passoutantossegundos
//150 = dead
// context.drawImage(
//   this.banana.bananaSprite,
//   this.banana.posX,
//   this.banana.posY
// );
// if (passou15segundos) {
//   context.drawImage(rockSprite, rock2.posX, rock2.posY);
//   if (banana.pontos > 0) {
//     rock2.run();
//   }
//   colidirComOutraPedra = rock2.colide(index, player.posY, 80, banana.pontos);
// }
// if (passoumais15segundos) {
//   context.drawImage(rockSprite, rock3.posX, rock3.posY);
//   if (banana.pontos > 0) {
//     rock3.run();
//   }
//   colidirComOutraPedra2 = rock3.colide(index, player.posY, 80, banana.pontos);
// }
// if (colidirComPedra || colidirComOutraPedra || colidirComOutraPedra2) {
//   banana.pontos -= 5;
//   energy.style.backgroundColor = "rgb(190, 31, 31)";
// } else {
//   energy.style.backgroundColor = "#ffbd00";
// }
//   this.banana.run();
//   if (this.banana.points > 0) {
//     this.rock.run();
//   }

//   this.banana.colide(this.index, this.player.posY, 80, this.banana.points);

//   this.colidirComPedra = this.rock.colide(
//     this.index,
//     this.player.posY,
//     80,
//     this.banana.points
//   );

// FUNÇÃO DE DESENHO

    // updatePosition() {
    //   if (this.player.posX > this.arrayPosition[this.index]) {
    //     this.player.posX -= 10;
    //     //console.log(this.player.posX);
    //     if (this.player.posX > this.arrayPosition[this.index]) {
    //       this.player.posX -= 10;
    //       //console.log(this.player.posX);
    //       if (this.player.posX > this.arrayPosition[this.index]) {
    //         this.player.posX -= 10;
    //         //console.log(this.player.posX);
    //       }
    //     }
    //   }
    //   if (this.player.posX <= this.arrayPosition[this.index]) {
    //     this.player.posX += 10;
    //     console.log(this.player.posX);
    //     if (this.player.posX <= this.arrayPosition[this.index]) {
    //       this.player.posX += 10;
    //       console.log(this.player.posX);
    //       if (this.player.posX <= this.arrayPosition[this.index]) {
    //         this.player.posX += 10;
    //         console.log(this.player.posX);
    //       }
    //     }
    //   }

    //   // if (this.banana.pontos < 80) {
    //   //   setTimeout(() => {
    //   //     if (this.banana.pontos > 0) {
    //   //       crocoBoss.style.visibility = "visible";
    //   //       crocoBoss.style.top = "550px";
    //   //       if (index == 1) {
    //   //         crocoBoss.style.left = "100px";
    //   //       } else if (index == 0) {
    //   //         crocoBoss.style.left = "-40px";
    //   //       } else if (index == 2) {
    //   //         crocoBoss.style.left = "240px";
    //   //       }
    //   //     } else {
    //   //       crocoBoss.style.transition = "10s all linear";
    //   //       crocoBoss.style.top = "-2000px";
    //   //       setTimeout(() => {
    //   //         morto = true;
    //   //         player.frameE = 260;
    //   //       }, 800);
    //   //       setTimeout(() => {
    //   //         document.getElementById("gameOver").style.opacity = 1;
    //   //       }, 1400);
    //   //     }
    //   //   }, 1000);
    //   // } else {
    //   //   crocoBoss.style.top = "1000px";
    //   //   crocoBoss.style.visibility = "hidden";
    //   // }
    // }
    // FUNÇÃO QUE ATUALIZA A POSIÇÃO DO BROTHER