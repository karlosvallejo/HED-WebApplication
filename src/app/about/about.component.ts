import {Component, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {GeneralServices} from '../services/services.service';
import {Subscription} from "rxjs/Subscription";

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
cuando: string;
telefono: string;
subtitulo: string;
maxScrollLeft: number;
selectedSection: string;
seletedInfo: string;
urlFoto: string;
aboutDataSus: Subscription;
aboutData: any;


  constructor(private services: GeneralServices) {
    this.selectedSection = 'QUE';
    /*
    this.infoQUE = 'Hoy es Diseño es organizado por estudiantes de Diseño Industrial y Diseño de Medios Interactivos de ' +
      'la Universidad ICESI, que busca promover el diseño en la región. Durante el marco del evento se desarrollan conferencias,' +
      ' Talleres, foros y muestras de diseño (entre otros), en donde participan representantes nacionales e ' +
      'internacionales en el ámbito del diseño y todas sus ramas. <br> Está enfocado a la comunidad de diseño, sin embargo,' +
      ' es una importante ventana para que empresarios y personas de diferentes disciplinas amplíen su percepción y ' +
      'conocimiento del tema, para construir cultura de diseño.';
      */

    this.infoQUIEN = 'QUien Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
      'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea' +
      ' commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    this.urlFoto = '/assets/identidad/2017-2/identidad/logoHED2017-2.png';



  }

  ngOnInit() {
    this.aboutDataSus =  this.services.getAboutInfo().subscribe(data => {
      this.aboutData = data;
      this.selectedSection = 'QUE';
      this.infoQUE = this.aboutData.que;
      this.infoQUIEN = this.aboutData.quien;
      this.cuando = this.aboutData.cuando;
      this.telefono =this.aboutData.telefono;
      this.seletedInfo = this.infoQUE;
    });
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
        this.urlFoto = '/assets/identidad/2017-2/identidad/logoHED2017-2.png';
        break;

      case 'QUIEN':
        this.selectedSection = 'QUIEN';
        this.seletedInfo = this.infoQUIEN;
        this.subtitulo = 'INTEGRANTES DEL EQUIPO 2017-2';
        this.urlFoto = '/assets/identidad/2017-2/identidad/fotoGrupo.png';
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
      case 'CONTACTO':
        this.selectedSection = 'CONTACTO';
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
