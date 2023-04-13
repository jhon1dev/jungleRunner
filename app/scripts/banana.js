export class Banana{
    array = [45, 183, 325]
    index = Math.floor(Math.random() * (3 - 0) + 0);
    posX = this.array[this.index];
    posY = -100; 
    pontos = 150;
    velocity = 10;
    
    run(){
        if (this.pontos > 0){
            this.pontos -= 0.1;
        if (this.posY < 1000){
        this.posY += this.velocity;
        this.velocity += 0.001;
        } else {
        this.posY = -100;
        this.index = Math.floor(Math.random() * (3 - 0) + 0);
        this.posX = this.array[this.index];
        console.log(this.index);
        }
        }
        
    }
    
    colide(posiçãoX, posiçãoY, tamanho, points){
       //console.log("Posx " + posiçãoX + "Posy " + posiçãoY + "Tamanho " + tamanho + "points " + points)
       //console.log("PosX: "+ this.posX + "posY: " + this.posY)
       if (posiçãoX == this.index && posiçãoY > this.posY && posiçãoY < this.posY + 40){
            
            if (this.pontos > 0){
                this.pontos += 15; 
                this.posY = -100000;
                setTimeout(() => {
                    this.posY = -100;
                    this.index = Math.floor(Math.random() * (3 - 0) + 0);
                    this.posX = this.array[this.index];
                }, 500);
                
            } 
            if (this.pontos >= 150){
                this.pontos = 150;
                
            }
            console.log(points)
        } else {
        }
    }
    
    
}
    