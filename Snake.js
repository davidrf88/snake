class Snake {

    constructor(){
    this.chunkSize = 20;
    this.size =1;
    this.x = 0;
    this.y = 0;
    this.speed = this.chunkSize;
    this.vel ={x:this.speed,y:0};
    this.renderframes = 1;
    this.framecounter = 0;
    this.tail = [];
    this.tail[0]= {x: this.x, y:this.y}
    this.dirty = true;
    this.color = '#fff';


        
    }

    Render()
    {
        this.framecounter++;
         if(this.framecounter  <= this.renderframes )
        {
           
            
            this.TrackHistory();
            this.x += this.vel.x;
            this.y += this.vel.y;
            this.skipper = fr;
            this.dirty = false;
            
        }
        else
        {
            this.framecounter = 0;
        }
        
        //head
        fill(this.color)
        for(let chunk of this.tail)
        {
            rect(chunk.x,chunk.y,this.chunkSize,this.chunkSize);
            
        }
        
        this.checkCollision();

        




    }
    HandleKeys(keycode)
    {

        if(keycode == RIGHT_ARROW && this.vel.x ==0 && !this.dirty )
       {
           this.vel.x=this.speed;
           this.vel.y = 0;
           this.dirty = true;
       }

       if(keycode == DOWN_ARROW && this.vel.y ==0 && !this.dirty)
       {
           this.vel.x=0;
           this.vel.y = this.speed;
           this.dirty = true;
       }
       if(keycode ==  UP_ARROW && this.vel.y ==0 && !this.dirty)
       {
           this.vel.x=0;
           this.vel.y = this.speed* -1;
           this.dirty = true;
       }

       if(keycode == LEFT_ARROW && this.vel.x ==0 && !this.dirty)
       {
           this.vel.x= this.speed * -1;
           this.vel.y = 0;
           this.dirty = true;
       }

    }

    TrackHistory()
    {

        if(this.size != 1)
        {

            for(let i = this.size ; i > 1 ; i-- )
            {

                this.tail[i-1] = this.tail[i-2];

            }
            

        }
        this.tail[0] = {x:this.x, y: this.y};
       


    }
    checkCollision()
    {
        let head = this.tail[0];
        for(let i = 1 ; i< this.tail.length; i++)
        {   
            if(head.x == this.tail[i].x && head.y == this.tail[i].y)
            {

                this.size = 1;
                this.tail = [];
                this.vel.x = this.speed;
                this.vel.y = 0;
                this.x = 0;
                this.y = 0;
                fr = originalFr;

            }

        }
        
            
    }

    Eat(){
            if(food.x == this.x && food.y == this.y)
            {
                console.log('eat');
                return true;
            }
        


    }



}


    