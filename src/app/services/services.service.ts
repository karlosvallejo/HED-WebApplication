import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Injectable()
export class GeneralServices {
  private idiomaActual: string;
  evento_actual: string = "2017-2";

  data_identidad: FirebaseObjectObservable<any[]>;
  general_info: FirebaseObjectObservable<any[]>;


  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase) {
    this.initIdiomas('es');
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
