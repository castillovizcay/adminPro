import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {


  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard'},
        { titulo: 'Progresos', url: '/progress'},
        { titulo: 'Gráficas', url: '/graficas1'},
        { titulo: 'Promesas', url: '/promesas'},
        { titulo: 'RXJS Component', url: '/rxjs'},
      ]
    }
  ];
  constructor() { }

}
