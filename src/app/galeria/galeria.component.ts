import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {GeneralServices} from '../services/services.service';
import {Subscription} from 'rxjs/Subscription';


declare const jQuery: any;

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit, OnDestroy {

  @ViewChild('containerScrollGaleria', {read: ElementRef}) scroll: ElementRef;
  diferenceMaxScroll: number;
  galeriaDataSus: Subscription;
  galeriaData: any[];

  constructor(private services: GeneralServices) { }

  ngOnInit() {
    this.galeriaDataSus =  this.services.getGaleriaInfo().subscribe(data => {
      this.galeriaData = data;
      console.log(this.galeriaData);
    });

    this.diferenceMaxScroll = this.scroll.nativeElement.scrollWidth - this.scroll.nativeElement.clientWidth;
  }

  ngOnDestroy(): void {
    this.galeriaDataSus.unsubscribe();
  }


  moverScroll(direccion: string) {
    this.diferenceMaxScroll = this.scroll.nativeElement.scrollWidth - this.scroll.nativeElement.clientWidth;
    console.log(this.diferenceMaxScroll);
    console.log(this.scroll.nativeElement.scrollLeft);
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