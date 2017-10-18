import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';


declare const jQuery: any;

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit, AfterViewInit {

  @ViewChild('containerScrollGaleria', {read: ElementRef}) scroll: ElementRef;
  diferenceMaxScroll: number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.diferenceMaxScroll = this.scroll.nativeElement.scrollWidth - this.scroll.nativeElement.clientWidth;
  }

  moverScroll(direccion: string) {
    this.diferenceMaxScroll = this.scroll.nativeElement.scrollWidth - this.scroll.nativeElement.clientWidth;
    switch (direccion) {
      case 'derecha':
          if (this.scroll.nativeElement.clientWidth > this.diferenceMaxScroll) {
            jQuery(this.scroll.nativeElement).animate({
              scrollLeft: '+=' + this.diferenceMaxScroll
            }, 1500, 'easeInOutCubic');
          } else {
            jQuery(this.scroll.nativeElement).animate({
              scrollLeft: '+=' + this.scroll.nativeElement.clientWidth
            }, 1500, 'easeInOutCubic');
          }
      break;

      case 'izquierda':
        if (this.scroll.nativeElement.clientWidth > this.diferenceMaxScroll) {
          jQuery(this.scroll.nativeElement).animate({
            scrollLeft: '-=' + this.diferenceMaxScroll
          }, 1500, 'easeInOutCubic');
        } else {
          jQuery(this.scroll.nativeElement).animate({
            scrollLeft: '-=' + this.scroll.nativeElement.clientWidth
          }, 1500, 'easeInOutCubic');
        }
      break;
    }

  }



}
