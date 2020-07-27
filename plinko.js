class Plinko{
    constructor(x,y,radius){
        var options = {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
        }
        this.body = Bodies.circle(x, y, radius, options);
	World.add(world, this.body);
    }

    display(){
        this.radius = 10;
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0,0,this.radius, this.radius)
        pop();
    }
}