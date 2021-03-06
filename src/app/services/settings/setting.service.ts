import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingService {

  ajustes: IAjustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };
  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
  }


  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes));
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes') ) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      this.aplicarTema( this.ajustes.tema);
    } else {
      this.aplicarTema( this.ajustes.tema);
    }
  }

  aplicarTema( tema: any) {
    let url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute('href', url);

    this.ajustes.temaUrl = url;
    this.ajustes.tema = tema;
    this.guardarAjustes();
  }
}

interface IAjustes {
  temaUrl: string;
  tema: string;
 }
