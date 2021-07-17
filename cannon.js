class Cannon {
  constructor(x, y, w, h,angle) {
    var cannon_features = {
      isStatic: true,
    };
    this.cannon = Bodies.rectangle(x, y, w, h, cannon_features);
    World.add(world, this.cannon);
    this.w = w;
    this.h = h;
    this.angle=angle;
    this.cannonimg = loadImage("images/CANON.png");
  }
  display() {
      if(keyIsDown(RIGHT_ARROW)&&this.angle<0.35){
          this.angle+=0.02
      }
      if(keyIsDown(LEFT_ARROW)&&this.angle>-1.45){
        this.angle-=0.02
    }

    push();
    translate(this.cannon.position.x, this.cannon.position.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.cannonimg, 0, 0, this.w, this.h);
    pop();
    fill ("#676e6e")
    arc (125,240,130,230,PI,TWO_PI)
  }
}
