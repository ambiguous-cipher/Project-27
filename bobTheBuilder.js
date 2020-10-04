class Bob{
    constructor(x){
        var options = {
            isStatic: false,
            restituition: 0.3,
            friction: 0.5,
            density: 1.2
        }
        
        this.body = Bodies.circle(x, 200, 50, options);
            World.add(world, this.body)
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill(255);
        strokeWeight(20);
        stroke(255);
        ellipse(pos.x, pos.y, 15, 15);
       
        
    }
}