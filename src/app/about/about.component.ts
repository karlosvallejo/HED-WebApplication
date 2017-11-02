import {Component, OnInit, ElementRef, ViewChild, AfterViewInit, OnDestroy} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {GeneralServices} from '../services/services.service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';

declare const jQuery: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit, OnDestroy {


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
estadoScroll: number;
patrocinadoresInfo: {titulo, descripcion, imgSrc, link}[];
patrocinadorTitulo: string;
patrocinadorDescripcion: string;
intervaloCambio: any;
indexActual: number;
noCambiar: boolean;
puedeMover: boolean;

  constructor(private services: GeneralServices, private route: ActivatedRoute) {
    /*
this.selectedSection = 'QUE';

this.infoQUE = 'Hoy es Diseño es organizado por estudiantes de Diseño Industrial y Diseño de Medios Interactivos de ' +
  'la Universidad ICESI, que busca promover el diseño en la región. Durante el marco del evento se desarrollan conferencias,' +
  ' Talleres, foros y muestras de diseño (entre otros), en donde participan representantes nacionales e ' +
  'internacionales en el ámbito del diseño y todas sus ramas. <br> Está enfocado a la comunidad de diseño, sin embargo,' +
  ' es una importante ventana para que empresarios y personas de diferentes disciplinas amplíen su percepción y ' +
  'conocimiento del tema, para construir cultura de diseño.';


this.infoQUIEN = 'QUien Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
  'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea' +
  ' commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

this.urlFoto = '/assets/identidad/2017-2/identidad/logoHED2017-2.png';
  */
    this.noCambiar = false;

    this.puedeMover = true;

    this.patrocinadoresInfo = [{'titulo': 'Centronet', 'descripcion': 'Centro Net SAS Es una empresa dedicada a la ' +
    'cartelería digital, Tótem interactivos, Video Wall, pantallas táctiles y todo lo relacionado con digital.',
      'imgSrc': '/assets/identidad/2017-2/patrocinadores/centronet.jpg', 'link': 'http://www.centronet.com.co/'} , {'titulo':
     'Belkot', 'descripcion': 'Intenta algo nuevo cada día junto a Belkot', 'imgSrc': '/assets/identidad/2017-2/pa' +
    'trocinadores/belkot.jpg', 'link':
      'https://www.facebook.com/Belkot.co/'}, {'titulo': 'Anthony Chef', 'descripcion': 'Anthony Chef Es uno de los mejores ' +
    'lugares para ir a comer dentro de la Universidad Icesi, ubicado en el segundo piso de la cafetería central.',
      'imgSrc': '/assets/identidad/2017-2/patrocinadores/antonio.jpg', 'link': 'https://www.facebook.com/AnthonychefCali/'},
      {'titulo': 'Barrio Records', 'descripcion': '¿Producción audiovisual?¿Publicidad y marketing?¿Influencers? ' +
      'Lo que necesite tu negocio lo puedes encontrar fácilmente con ' +
      'Barriorecords.sas', 'imgSrc': '/assets/identidad/2017-2/patrocinadores/barrio.jpg',
        'link': 'https://www.facebook.com/somosdebarriorecords/'}, {'titulo': 'Tortelli', 'descripcion': 'Tortelli, “Amor ' +
      'a la carta”. El Restaurante Tortelli es una empresa familiar, que desde el año 2000 ha consolidado una gran familia de ' +
      'personal de servicio, cocina y administración. Su equipo de profesionales de cocina y servicio altamente calificado' +
      ' hacen del restaurante un ambiente agradable e inolvidable para sus clientes, su fuerte es la pasta fresca y otras' +
      ' especialidades italianas, en el cual se conserva la tradición y recetas de la verdadera cocina italiana. Puedes' +
      ' visitarlos en sus sedes: El peñón, Ciudad Jardín y Centro Comercial Centenario.',
        'imgSrc': '/assets/identidad/2017-2/patrocinadores/tortelli.jpg', 'link': 'http://www.restaurantetortelli.com/'},
      {'titulo': 'Teva Publicidad', 'descripcion': 'Teva Publicidad te ofrece uno de los mejores servicios de publicidad' +
      ' al alcance de tu mano. ¿Necesitas detalles personalizados? ¿Materializar una gran idea? Teva tiene una solución única para ti.',
      'imgSrc': '/assets/identidad/2017-2/patrocinadores/teva.jpg', 'link': 'https://www.facebook.com/tevapublicidad/'},
      {'titulo': 'Levels RoofTop', 'descripcion': 'Levels RoofTop sabe que te gusta la "Rumba a otro nivel", así que te ' +
      'invitamos a vivirla en la mejor y única terraza con Zona Lounge y Discoteca en un sólo lugar, ¡ubicada en el oeste de Cali!',
      'imgSrc': '/assets/identidad/2017-2/patrocinadores/levels.jpg', 'link': 'https://www.facebook.com/levelsrooftop/'},
      {'titulo': 'Zona Creativa', 'descripcion': 'Si necesitas ideas innovadoras y diseños profesionales, Zona Creativa ' +
      'Agencia Gráfica tiene las mejores soluciones para ti.', 'imgSrc': '/assets/identidad/2017-2/patrocinadores/zona.jpg',
        'link': 'https://www.facebook.com/Zona-Creativa-Agencia-Gr%C3%A1fica-692375257550907/'}, {'titulo': 'Tinta Color',
      'descripcion': 'Agradecemos a uno de nuestros patrocinadores, Tinta Color Publicidad. Una de las mejores empresas ' +
      'en el sector de Publicidad.', 'imgSrc': '/assets/identidad/2017-2/patrocinadores/tinta.jpg',
        'link': 'https://www.facebook.com/tintacolor.p/'}, {'titulo': 'The Garden', 'descripcion': '¿Buscas un lugar' +
      ' tranquilo para descansar plenamente y comer bien? !The garden es el lugar ideal para ti!',
        'imgSrc': '/assets/identidad/2017-2/patrocinadores/garden.jpg',
        'link': 'https://www.facebook.com/thegardenhostalyrestaurante/'}, {'titulo': 'Crespitas', 'descripcion': '¡Las mejores ' +
      'crispetas de la Universidad Icesi son Crispetas Crespitas! ¡Pide las tuyas ya!',
        'imgSrc': '/assets/identidad/2017-2/patrocinadores/crespitas.jpg', 'link': 'https://www.facebook.com/CrispetasCrespitas/'},
      {'titulo': 'Karambolo', 'descripcion': '¿Buscas paz y relajación? ¡Entonces Karambolo Hostal es el lugar! Con sus cómodas ' +
      'habitaciones y excelente servicio, es seguro que tendrás una experiencia inolvidable.',
        'imgSrc': '/assets/identidad/2017-2/patrocinadores/karambolo.jpg', 'link': 'https://www.facebook.com/karambolohostal/'},
      {'titulo': 'Pettites', 'descripcion': 'Hoy es Diseño está encantado de contar con Pettites cómo patrocinador,' +
      ' ésta empresa caleña ofrece los mejores detalles para regalarle a esa persona especial o para celebrar un gran dìa',
      'imgSrc': '/assets/identidad/2017-2/patrocinadores/petite.jpg', 'link': 'https://www.facebook.com/pettites/'},
      {'titulo': 'Ninus', 'descripcion': '¡Descubre nuevas realidades con Ninus Design & Technology!',
        'imgSrc': '/assets/identidad/2017-2/patrocinadores/ninus.jpg', 'link': 'http://ninus.co/'},
      {'titulo': 'Karens Pizza', 'descripcion': '¡Si buscas ingredientes frescos y naturales, Karens Pizza es el lugar!',
      'imgSrc': '/assets/identidad/2017-2/patrocinadores/karens.jpg', 'link': 'https://www.facebook.com/KarensPizzaOficial/'},
      {'titulo': 'Crehana', 'descripcion': 'Somos una comunidad creativa donde personas aprenden habilidades creativas en ' +
      'cursos online enseñados por expertos.', 'imgSrc': '/assets/identidad/2017-2/patrocinadores/crehana.jpg',
        'link': 'https://www.facebook.com/Crehanacom/'}, {'titulo': 'Hebreítas', 'descripcion': 'Deliciosos pasteles de ' +
      'hojaldra, rellenos con ingredientes exquisitos ¡Un placer para tu paladar!',
        'imgSrc': '/assets/identidad/2017-2/patrocinadores/hebreitas.jpg', 'link': 'https://www.facebook.com/hebreitas/'},
      {'titulo': 'Tugó', 'descripcion': '¡Tugó tiene todo en muebles, accesorios para decorar el hogar y objetos para tu casa!',
      'imgSrc': '/assets/identidad/2017-2/patrocinadores/tugo.jpg', 'link': 'http://www.tugo.co/'},
      {'titulo': 'Los Hijos De Shirley', 'descripcion': '¡Imposible resistirse a algo tan delicioso! Para el mejor sabor, ' +
      'Los Hijos De Shirley', 'imgSrc': '/assets/identidad/2017-2/patrocinadores/shirley.jpg',
        'link': 'https://www.facebook.com/loshijosdeshirley'}];

    this.patrocinadorTitulo = this.patrocinadoresInfo[0].titulo;

    this.patrocinadorDescripcion = this.patrocinadoresInfo[0].descripcion;

    this.indexActual = 0;


  }

  ngOnInit() {

    if (this.route.snapshot.paramMap.get('seccion') === 'patrocinadores') {
      this.asignarInfo('PATROCINADORES');
    } else {
      this.selectedSection = 'QUE';
    }
    this.aboutDataSus =  this.services.getAboutInfo().subscribe(data => {
      this.aboutData = data;
      this.infoQUE = this.aboutData.que;
      this.infoQUIEN = this.aboutData.quien;
      this.cuando = this.aboutData.cuando;
      this.telefono = this.aboutData.telefono;
      this.seletedInfo = this.infoQUE;
      this.urlFoto = '/assets/identidad/2017-2/identidad/logoHED2017-2.png';
    });
  }

  ngOnDestroy(): void {
   this.aboutDataSus.unsubscribe();
   clearInterval(this.intervaloCambio);
  }

  ngAfterViewInit() {
    this.maxScrollLeft = this.containerSelector.nativeElement.scrollWidth - this.containerSelector.nativeElement.clientWidth;
    if (this.route.snapshot.paramMap.get('seccion') === 'patrocinadores') {
      this.onNextSearchPosition(this.calcularFaltante(), 'derecha', false);
    }
  }


  public asignarInfo(selected: string) {
    clearInterval(this.intervaloCambio);
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
      case 'PATROCINADORES':
        this.selectedSection = 'PATROCINADORES';
        this.intervaloCambio = setInterval( () => {
          if (this.noCambiar === false) {
          if (this.indexActual < this.patrocinadoresInfo.length - 1) {

            this.indexActual++;
          } else {
            this.indexActual = 0;
          }
          this.asignarInfoPatrocinio(this.patrocinadoresInfo[this.indexActual]);
        }
        }, 8000);
        break;
    }
  }

  public setNoCambiar(valor: boolean) {
    this.noCambiar = valor;
  }

  public asignarInfoPatrocinio(datos: {titulo, descripcion}): void {
    this.patrocinadorTitulo = datos.titulo;

    this.patrocinadorDescripcion = datos.descripcion;
  }

  public calcularFinalScroll(): number {
    this.maxScrollLeft = this.containerSelector.nativeElement.scrollWidth - this.containerSelector.nativeElement.clientWidth;
    return this.maxScrollLeft;
  }

  public calcularFaltante(): number {
  //  console.log('ScrollWidth', this.containerSelector.nativeElement.scrollWidth);
  //  console.log('ScrollLeft', this.containerSelector.nativeElement.scrollLeft);
  //  console.log('ScrollLeft+ClientWidth', this.containerSelector.nativeElement.scrollLeft + this.containerSelector.
    // nativeElement.clientWidth);
    const temporal = this.containerSelector.nativeElement.scrollWidth - (this.containerSelector.nativeElement.scrollLeft +
      this.containerSelector.nativeElement.clientWidth);
  //  console.log('LoQueFalt', temporal);
    return temporal;
}

public getScrollLeft(): number {
    return this.containerSelector.nativeElement.scrollLeft;
}

  public onNextSearchPosition(objetivo: number, dir: string, noMove: boolean): void {

    if (this.puedeMover) {


      if (this.containerSelector.nativeElement.scrollLeft === 0) {
        this.estadoScroll = 0;
      }
      if (this.containerSelector.nativeElement.scrollLeft > 0) {
        this.estadoScroll = 1;
      }
      if (this.calcularFaltante() === 0) {
        this.estadoScroll = 2;
      }

      switch (this.estadoScroll) {
        case 0:
          this.mover(objetivo, dir);
          break;
        case 1:
          if (!noMove) {
            this.mover(objetivo, dir);
          }

          break;
        case 2:
          if (noMove) {
            this.mover(this.containerSelector.nativeElement.scrollLeft * 0.25, 'izquierda');
          }

          break;
      }
    }

  }

  private mover(objetivo: number, dir: string): void {
    this.puedeMover = false;

    setTimeout(() => {
      this.puedeMover = true;
    }, 2000);
    switch (dir) {
      case 'izquierda':
        jQuery(this.containerSelector.nativeElement).animate({
          scrollLeft: '-=' + objetivo
        }, 1500, 'easeInOutCubic');

        break;

      case 'derecha':
        jQuery(this.containerSelector.nativeElement).animate({
          scrollLeft: '+=' + objetivo
        }, 1500, 'easeInOutCubic');
        break;
    }
  }


}
