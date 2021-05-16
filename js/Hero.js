class Hero{
    constructor(x, y, width, height){
        var options = {
            isStatic: false,
            restitition: 0,
            friction: 1,
            density: 1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y)
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
    }
}