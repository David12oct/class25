class Tower {
  constructor(x, y, w, h) {
    var tower_features = {
      isStatic: true,
    };
    this.tower = Bodies.rectangle(x, y, w, h, tower_features);
    World.add(world, this.tower);
    this.w = w;
    this.h = h;
    this.towerimg = loadImage("images/tower.png");
  }
  display() {
    push();
    translate(this.tower.position.x, this.tower.position.y);
    rotate(this.tower.angle);
    imageMode(CENTER);
    image(this.towerimg, 0, 0, this.w, this.h);
    pop();
  }
}
