class Dog{
    constructor(x,y,width,height){
       var ops={
           isStatic:true
       }
       this.y = y;
       this.x = x;
       this.width = width;
       this.height = height;
       this.body = Bodies.rectangle(x,y,width,height,ops);
       this.image = loadImage("images/dogImg.png");
       World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}