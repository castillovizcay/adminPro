import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Servicios
import {
  SettingService,
  SharedService,
  SidebarService
} from './index.services';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SettingService,
    SharedService,
    SidebarService
  ],
  declarations: []
})
export class ServiceModule { }
