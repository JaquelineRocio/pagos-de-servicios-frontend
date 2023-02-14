import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalResponseComponent } from './modal-response/modal-response.component';


@NgModule({
  declarations: [
    ModalResponseComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ModalResponseComponent
  ]
})
export class SharedModule { }
