import {AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
declare const getSketck: any;

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit, AfterViewInit, AfterContentInit {

  @ViewChild('sketchPlane', {read: ElementRef}) containerSketch: ElementRef;


  canvasito: any;
  constructor() {

  }

  ngOnInit() {

  }
  ngAfterContentInit(): void {

  }

  ngAfterViewInit(): void {
 //  console.log(this.containerSketch.nativeElement.offsetWidth, this.containerSketch.nativeElement.offsetHeight);
    this.canvasito =  new p5(getSketck(this.containerSketch.nativeElement.offsetWidth, this.containerSketch.nativeElement.offsetHeight), this.containerSketch.nativeElement);


  }

}
