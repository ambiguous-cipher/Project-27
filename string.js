class String {
    constructor(object1, object2, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options ={
            bodyA: object1,
            bodyB: object2,
            stiffness: 0.1,
            length: 200,
            pointB: {x:this.offsetX, y:this.offsetY}
        }
        this.string = Matter.Constraint.create(options);
        World.add (world, this.string);
    }

    display(){
        var pointA = this.string.bodyA.position;
        var pointB = this.string.bodyB.position;

        strokeWeight(2);
        stroke(255);

        var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y;
        
        var Anchor2X = pointB.x+this.offsetX;
        var Anchor2Y = pointB.y+this.offsetY;

        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
    }


}