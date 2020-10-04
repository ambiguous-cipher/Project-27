class Roof {
    constructor(x, y, width) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x, y, width, 10, options);
      World.add(world, this.body);
      this.width = width;
      this.height = 10
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };