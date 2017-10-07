import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';


@Injectable()
export class GeneralServices {
  private idiomaActual: string;
  evento_actual: string;

  data_identidad: AngularFireObject<any[]>;
  general_info: AngularFireObject<any[]>;


  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase) {
    this.initIdiomas('es');
    this.evento_actual = '2017-2';
  }

  initIdiomas(idioma: string): void {
    this.loadDB(idioma);
  }

  loadDB(idioma: string) {
    this.idiomaActual = idioma;
    this.data_identidad = this.db.object('hed_identidad/' + idioma);
    this.general_info = this.db.object('general_info/');
  }

}
