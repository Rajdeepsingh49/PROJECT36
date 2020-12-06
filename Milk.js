class Milk{
    constructor(x,y,width,height){
       var ops={
           isStatic:true
       }
       this.body = Bodies.rectangle(x,y,width,height,ops);
       this.image = loadImage("images/Milk.png");
       World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        
    }
}