import { Component } from '@angular/core';
import { SettingService } from './services/index.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private _ajustes: SettingService) {}
}
