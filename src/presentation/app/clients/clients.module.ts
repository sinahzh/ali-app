import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ClientsComponent } from './clients.component';



@NgModule({
  declarations: [
    MainComponent,
    ClientsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClientsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClientsModule { }
