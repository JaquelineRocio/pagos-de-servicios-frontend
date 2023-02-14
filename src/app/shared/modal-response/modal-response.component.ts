import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-response',
  templateUrl: './modal-response.component.html',
  styleUrls: ['./modal-response.component.scss']
})
export class ModalResponseComponent {
@Input() titulo='';
@Input() message='';
}
