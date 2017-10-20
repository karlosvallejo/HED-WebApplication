var canvas = null;
var cubes = []; // array of Jitter objects

var imgCube= null;

// TODO: MOVER EL SKETCH P5JS A UN COMPONENTE BACKGROUND

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-main');
  canvas.style('z-index', '-1');
  canvas.position(0, 0);
  background(14, 6, 51);
  createCubes();
}


// navbar = [];


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  onresize()
}


function onresize() {
  canvas.position(0, 0);
  canvas.style('z-index', '-1');


}

function createCubes() {
  var cantidad = windowWidth / 150;
  cubes = [];
 // imgCube = loadImage("assets/identidad/2017-1/sketches/index/cube_fondo.gif");  // Load the image

  for (var i = 0; i < cantidad; i++) {
    cubes.push(new Cube());

    // console.log("it works");
  }

}

function drawCubes() {
  for (var i = 0; i < cubes.length; i++) {

    cubes[i].display();
  }
}




function draw() {
  background(14, 6, 51);
  drawCubes();
}


