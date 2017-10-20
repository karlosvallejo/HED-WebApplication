import {AfterViewInit, Component, OnInit} from '@angular/core';
import {GeneralServices} from './services/services.service';
import {routerTransition} from './animations/router.animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition],
  providers: [GeneralServices]
})
export class AppComponent implements OnInit, AfterViewInit {
  canvasito: any;
  identidad_data: {};
  general_info: {};
  // variables para las animaciones del router
  secciones: string[];
  indexActual: number;
  estadoFuturo: string;

  constructor(private services: GeneralServices) {
    this.indexActual = 0;

  }

  ngOnInit(): void {
    this.services.getGeneral_Info().subscribe(data => this.general_info = data);
    this.services.getIdentidad().subscribe(data => this.identidad_data = data);
    this.secciones = ['home', 'ponentes', 'agenda', 'about', 'galeria'];

  }

  ngAfterViewInit(): void {

    const sketch = function (p) {
      let canvas = null;
      let cubes = []; // array of Jitter objects

      p.setup = function () {
        canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.parent('sketch-main');
        canvas.style('z-index', '-1');
        canvas.position(0, 0);
        p.background(14, 6, 51);
        createCubes();
      };


      p.windowResized = function() {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        onresize();
      };


      function onresize() {
        canvas.position(0, 0);
        canvas.style('z-index', '-1');
      }

      function createCubes() {
        const cantidad = p.windowWidth / 150;
        cubes = [];
        // imgCube = loadImage("assets/identidad/2017-1/sketches/index/cube_fondo.gif");  // Load the image

        for (let i = 0; i < cantidad; i++) {
          cubes.push(new Cube(p));

        }

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

    function Cube(p) {

      this.pos = p.createVector(Math.random() * p.windowWidth, Math.random() * p.windowHeight); // single bar width
      this.vel = p.createVector(0, 0); // single bar width
      this.lejos = Math.random() * 5; // single bar width

      // this.imgCube = null;

      // el mismo reset
      this.imgCube = p.loadImage('assets/identidad/2017-2/sketches/index/cube.png');  // Load the image
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
        p.fill(255);
        // rect(this.pos.x, this.pos.y, this.tam, this.tam);
        this.move();
        this.limites();
      };

      this.resize = function () {
        this.imgCube.resize(this.tam, this.tam);
      };

      this.limites = function () {
        if (this.pos.y < -this.tam) {
          this.pos.y = p.windowHeight + this.tam;
          this.pos.x = Math.random() * p.windowWidth;
          this.reset();
        }
      };

      this.reset = function () {
        this.imgCube = p.loadImage('assets/identidad/2017-2/sketches/index/cube.png');  // Load the image
        this.tam = 4 + Math.random() * 10;
        //  this.imgCube.resize(this.tam, this.tam);
        this.acel = p.createVector(0, -Math.random()); // single bar width
      };

    }


    this.canvasito =  new p5(sketch);
  }

  getState(outlet): string {
      return outlet.activatedRouteData.state;
  }

  direction(estado: string): string {
      if (this.indexActual < this.secciones.indexOf(estado)) {
        this.estadoFuturo = estado;
        return 'derecha';
      } else if (this.indexActual > this.secciones.indexOf(estado)) {
        this.estadoFuturo = estado;
        return 'izquierda';
      }
  }

  animationDone(): void {
    this.indexActual = this.secciones.indexOf(this.estadoFuturo);
  }




}
