import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
declare const getSketck: any;
declare const p5: any;

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit, AfterViewInit, AfterContentInit {



  canvasito: any;
  constructor() {

  }

  ngOnInit() {

  }
  ngAfterContentInit(): void {
    this.canvasito =  new p5(getSketck());
  }

  ngAfterViewInit(): void {
    this.canvasito.resizeCanvas(this.canvasito.windowWidth, this.canvasito.windowHeight);
  }

}
