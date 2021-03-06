import {Component, OnInit} from '@angular/core';
import {GeneralServices} from '../services/services.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private identidad_data: any;
  patrocinadoresInfo: {titulo, descripcion, imgSrc, link}[];
  aboutDataSus: Subscription;


  constructor(private services: GeneralServices) {
    /*
    this.patrocinadoresInfo = [{'titulo': 'Centronet', 'descripcion': 'Centro Net SAS Es una empresa dedicada a la ' +
    'cartelería digital, Tótem interactivos, Video Wall, pantallas táctiles y todo lo relacionado con digital.',
      'imgSrc': '/assets/identidad/2017-2/patrocinadores/centronet.jpg', 'link': 'http://www.centronet.com.co/'},
      {'titulo': 'Anthony Chef', 'descripcion': 'qwdoiqwdqiowjqwi',
      'imgSrc': '/assets/identidad/2017-2/patrocinadores/antonio.jpg', 'link': 'https://www.facebook.com/AnthonychefCali/'},
      {'titulo': 'Levels RoofTop', 'descripcion': 'Levels RoofTop sabe que te gusta la "Rumba a otro nivel", así que te ' +
      'invitamos a vivirla en la mejor y única terraza con Zona Lounge y Discoteca en un sólo lugar, ¡ubicada en el oeste de Cali!',
        'imgSrc': '/assets/identidad/2017-2/patrocinadores/levels.jpg', 'link': 'https://www.facebook.com/levelsrooftop/'}];
     */

  }

  ngOnInit() {
    const patrocinadoresInfoTemp: any = this.services.getAboutInfoFinal();
    if (patrocinadoresInfoTemp) {
      this.patrocinadoresInfo = patrocinadoresInfoTemp.patrocinadoresOficiales;
    } else {
      this.aboutDataSus = this.services.getAboutInfo().subscribe(data => {
        const patrocinadoresInfoTempDos: any = data;
        this.patrocinadoresInfo = patrocinadoresInfoTempDos.patrocinadoresOficiales;
      });
    }
  }

}
