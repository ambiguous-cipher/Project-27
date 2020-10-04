class Bob{
    constructor(x, y){
        var options ={
            isStatic: false,
            restituition: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.body = Bodies.circle(x, y, 25, options);
        World.add(world, this.body);
    }

    display(r, g, b){
        var pos = this.body.position;

        ellipseMode(RADIUS);
        fill(r, g, b);

        ellipse(pos.x, pos.y, 25, 25);
    }
}