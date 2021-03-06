function Cube() {

  this.pos = createVector(Math.random() * windowWidth, Math.random() * windowHeight); // single bar width
  this.acel = createVector(0, -Math.random()); // single bar width
  this.vel = createVector(0, 0); // single bar width
  this.lejos = Math.random()*5; // single bar width

  // this.imgCube = null;

  //el mismo reset
  this.imgCube = loadImage("assets/identidad/2017-2/sketches/index/cube.png");  // Load the image
  this.tam = 4 + Math.random() * 10;
  this.acel = createVector(0, -Math.random()); // single bar width


  this.move = function () {
    this.pos.add(this.vel);
    this.vel.limit(2 / this.tam);
    this.vel.add(this.acel);
  };

  this.display = function () {
    var m = map(mouseX, 0, windowWidth, this.tam*2, -this.tam*2);
    image(this.imgCube, this.pos.x + m, this.pos.y, this.imgCube.width/this.tam, this.imgCube.height/this.tam);
    fill(255);
    // rect(this.pos.x, this.pos.y, this.tam, this.tam);
    this.move();
    this.limites();
  };

  this.resize = function () {
    this.imgCube.resize(this.tam, this.tam);
  };

  this.limites = function () {
    if (this.pos.y < -this.tam) {
      this.pos.y = windowHeight + this.tam;
      this.pos.x = Math.random() * windowWidth;
      this.reset();
    }
  };

  this.reset = function () {
    this.imgCube = loadImage("assets/identidad/2017-2/sketches/index/cube.png");  // Load the image
    this.tam = 4 + Math.random() * 10;
  //  this.imgCube.resize(this.tam, this.tam);
    this.acel = createVector(0, -Math.random()); // single bar width
  };

}
