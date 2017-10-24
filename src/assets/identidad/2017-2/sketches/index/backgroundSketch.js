let tamanoooW;
let tamanoooH;

const sketch = function (p) {
  let canvas = null;
  let cubes = []; // array of Jitter objects
  let tamanin;
  let cubinoImg;

  p.preload = function () {
  cubinoImg = p.loadImage('assets/identidad/2017-2/sketches/index/cube.png');
  };
  p.setup = function () {

    canvas = p.createCanvas(tamanoooW, tamanoooH,[p.P2D]);
  //  console.log("window",p.windowWidth,p.windowHeight);
  //  console.log("display",p.displayWidth, p.displayHeight);
  //  canvas.parent('sketch-main');
 //   canvas.style('z-index', '-1');
    canvas.position(0, 0);
    p.background(14, 6, 51);
    createCubes();
  };


  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    tamanoooW = p.windowWidth;
    tamanoooH = p.windowHeight;
  //  console.log("window",p.windowWidth,p.windowWidth);
    onresize();
  };


  function onresize() {
    canvas.position(0, 0);
   // canvas.style('z-index', '-1');
  }

  function createCubes() {
    const cantidad = tamanoooW / 150;
    // imgCube = loadImage("assets/identidad/2017-1/sketches/index/cube_fondo.gif");  // Load the image
    for (let i = 0; i < cantidad; i++) {
      cubes.push(new Cube(cubinoImg));
    }
  }

  function Cube(imgCubi) {

    this.pos = p.createVector(Math.random() * p.windowWidth, Math.random() * p.windowHeight); // single bar width
    this.vel = p.createVector(0, 0); // single bar width
    this.lejos = Math.random() * 5; // single bar width

    // this.imgCube = null;

    // el mismo reset
    this.imgCube =  imgCubi;// Load the image
    this.tam = 4 + Math.random() * 10;
    this.acel = p.createVector(0, -Math.random()); // single bar width


    this.move = function () {
      this.pos.add(this.vel);
      this.vel.limit(2 / this.tam);
      this.vel.add(this.acel);
    };

    this.display = function () {
      const m = p.map(p.mouseX, 0, p.windowWidth, this.tam * 2, -this.tam * 2);
      p.image(this.imgCube, this.pos.x + m, this.pos.y, this.imgCube.width / this.tam, this.imgCube.height / this.tam);
      // p.fill(255);
      // rect(this.pos.x, this.pos.y, this.tam, this.tam);
      this.move();
      this.limites();
    };


    this.limites = function () {
      if (this.pos.y < -50) {
        this.pos.y = tamanoooH + this.tam;
        this.pos.x = Math.random() * tamanoooW;
        this.reset();
      }
    };

    this.reset = function () {
      // this.imgCube = p.loadImage('assets/identidad/2017-2/sketches/index/cube.png');  // Load the image
      this.tam = 4 + Math.random() * 10;
      //  this.imgCube.resize(this.tam, this.tam);
      this.acel = p.createVector(0, -Math.random()); // single bar width
  //    p.resizeCanvas(p.windowWidth, p.windowHeight);
    };

  }


  function drawCubes() {
    for (let i = 0; i < cubes.length; i++) {

      cubes[i].display();
    }
  }

  p.draw = function () {
    p.background(14, 6, 51);
    drawCubes();
  };
};



function getSketck(jeje, jijiji) {
  tamanoooW = jeje;
  tamanoooH = jijiji;
  return sketch;
}


//const sketchInsta =  new p5(sketch);


