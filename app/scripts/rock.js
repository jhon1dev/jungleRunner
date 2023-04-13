export class Rock{
    array = [38, 176, 318]
    index = Math.floor(Math.random() * (3 - 0) + 0);
    posX = this.array[this.index];
    posY = 0; 
    pontos = 150;
    velocity = 9;
    correndo = false;
    constructor(posY){

        this.posY = posY; 
        
    }
    run(){
        this.correndo = true;
        if (this.pontos > 0){
        if (this.posY < 1000){
        this.posY += this.velocity;
        } else {
        this.posY = -100;
        this.index = Math.floor(Math.random() * (3 - 0) + 0);
        this.posX = this.array[this.index];
        console.log(this.index);
        }
        }
        if (this.correndo){
            setTimeout(() => {
                this.velocity = 11;
            }, 15000);
        }
    }
   
    colide(posiçãoX, posiçãoY, tamanho, poits){
        //console.log("Posx " + posiçãoX + "Posy " + posiçãoY + "Tamanho " + tamanho + "poits " + poits)
        //console.log("PosX: "+ this.posX + "posY: " + this.posY)
        if (posiçãoX == this.index && posiçãoY > this.posY && posiçãoY < this.posY + 40){
             
             if (poits > 0){
                 return true;
             } 
             if (poits >= 150){
                 return false; 
                 
             }
         } else {
         }
     }
}