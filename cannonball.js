class Cannonball {
    constructor(x, y, w, h) {
      var cannonball_features = {
        isStatic: true,
      };
      this.cannonball = Bodies.rectangle(x, y, w, h, cannonball_features);
      World.add(world, this.cannonball);
      this.w = w;
      this.h = h;
      this.cannonballimg = loadImage("images/cannonball.png");
    }
    display() {
      push();
      translate(this.cannonball.position.x, this.cannonball.position.y);
      rotate(this.cannonball.angle);
      imageMode(CENTER);
      image(this.cannonballimg, 0, 0, this.w, this.h);
      pop();
      
    }
    launch(){
var velocity=p5.Vector.fromAngle(cannon.angle)
velocity.mult(20)
Matter .Body .setStatic(this.cannonball,false)
Matter .Body .setVelocity(this.cannonball,{x:velocity.x,y:velocity.y})

    }
  }
  
  