class Food {

    constructor(){
    this.size =20;
    
     this.CreateFood();

    }

    CreateFood()
    {
        let insnake = true;

        while(insnake)
        {
        let gridx = cwidth/this.size;
        let gridy = cheight/this.size;

        this.x = floor(random(0,gridx-1)) * this.size;
        this.y = floor(random(0,gridy-1)) * this.size;

            console.log(snake.tail);

            for(let chunk of snake.tail)
            {
                if(chunk.x == this.x && chunk.y == this.y)
                {
                    insnake = true;
                    continue;
                }
                else{
                    insnake = false;
                }

            }

        }
        console.log('x: ' + this.x + ' y:'+ this.y );

    }

    Render()
    {
        fill('red');
        rect(this.x,this.y,this.size,this.size);
    }


}