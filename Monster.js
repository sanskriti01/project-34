class Monster{
    constructor(x, y,width, height){
        var options = {
            isStatic:true,
            restitituion: 0.5,
            friction: 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();

    }
}