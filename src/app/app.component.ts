import { Component } from '@angular/core';
import { ModalModule, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from './shared/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bar e Lanchonete';
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService){}
  
}