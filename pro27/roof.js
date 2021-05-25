class roof {

    constructor(x,y,width,height){ 
  
     var opt = {
         restitution : 0,
         isStatic : true
     }
  
    this.body = Bodies.rectangle(x,y,width,height,opt);
    this.width = width;
    this.height = height;
  
    World.add(world,this.body);
  
    }
  
    display(){
    
    var pos = this.body.position;
  
    rectMode(CENTER);
    fill("red");
    rect(pos.x,pos.y,this.width,this.height)
  
    }
  
  }