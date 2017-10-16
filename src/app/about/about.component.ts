import {Component, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
declare const jQuery: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {
  @ViewChild('containerSelector', {read: ElementRef})
  containerSelector: ElementRef;

infoQUE: string;
infoQUIEN: string;
subtitulo: string;
maxScrollLeft: number;
selectedSection: string;
seletedInfo: string;


  constructor() {
    this.selectedSection = 'QUE';

    this.infoQUE = 'QUE Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
      'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea' +
      ' commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    this.infoQUIEN = 'QUien Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
      'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea' +
      ' commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';


    this.seletedInfo = this.infoQUE;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.maxScrollLeft = this.containerSelector.nativeElement.scrollWidth - this.containerSelector.nativeElement.clientWidth;
  }


  public asignarInfo(selected: string) {
    switch (selected) {
      case 'QUE':
        this.selectedSection = 'QUE';
        this.seletedInfo = this.infoQUE;
        this.subtitulo = '';
        break;

      case 'QUIEN':
        this.selectedSection = 'QUIEN';
        this.seletedInfo = this.infoQUIEN;
        this.subtitulo = 'INTEGRANTES DEL EQUIPO 2017-2';
        break;

      case 'DONDE':
        this.selectedSection = 'DONDE';
        this.seletedInfo = '';
        this.subtitulo = '';
        break;
      case 'CUANDO':
        this.selectedSection = 'CUANDO';
        this.seletedInfo = '';
        this.subtitulo = '';
        break;
    }
  }

  public calcularFinalScroll(): number {
    this.maxScrollLeft = this.containerSelector.nativeElement.scrollWidth - this.containerSelector.nativeElement.clientWidth;
    return this.maxScrollLeft;
  }

  public onNextSearchPosition(objetivo: number): void {

    if (this.containerSelector.nativeElement.scrollLeft < objetivo) {
      jQuery(this.containerSelector.nativeElement).animate({
        scrollLeft: '+=' + objetivo
      }, 1500, 'easeInOutCubic');
    } else if (this.containerSelector.nativeElement.scrollLeft > objetivo) {
      jQuery(this.containerSelector.nativeElement).animate({
        scrollLeft: '-=' + this.containerSelector.nativeElement.scrollLeft
      }, 1500, 'easeInOutCubic');
    }

    /*
    this.maxScrollLeft = this.containerSelector.nativeElement.scrollWidth - this.containerSelector.nativeElement.clientWidth;
    if (this.containerSelector.nativeElement.scrollLeft < objetivo) {
      let i = this.containerSelector.nativeElement.scrollLeft;
      const init = setInterval(() => {
        this.containerSelector.nativeElement.scrollTo(i, 0);
        i += 20;
        if (i >= this.maxScrollLeft) {
          clearInterval(init);
        }
      }, 15);
    } else if (this.containerSelector.nativeElement.scrollLeft > objetivo) {
      let i = this.containerSelector.nativeElement.scrollLeft;
      const init = setInterval(() => {
        this.containerSelector.nativeElement.scrollTo(i, 0);
        i -= 20;
        if (i <= objetivo) {
          clearInterval(init);
        }
      }, 15);
    }
    console.log(this.containerSelector.nativeElement.scrollLeft + ' Scroll total: ' + this.maxScrollLeft);
  //  this.containerSelector.nativeElement.scrollLeft = 350;

   // this.containerSelector.nativeElement.scrollTo(350, 0);
   */
  }


}
