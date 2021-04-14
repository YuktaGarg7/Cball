class Box  {
    constructor(x,y,width,height)   {
        var options = {
            isStatic:true
        }
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
     this.height = height;
     
     this.image = loadImage("images/dustbingreen.png");
   
     World.add(world,this.body);
    }

    display()   {
      push();
        var pos2= this.body.position;
        translate(pos2.x,pos2.y);
        imageMode(CENTER);
        image(this.image,200,200,70,70);
        Pop();
    }
}