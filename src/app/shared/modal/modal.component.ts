import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() type = 'sucess';
  @Input() message = 'sucess';

  constructor(public bsModalRef: BsModalRef) { }

    ngOnInit(): void {
  }

}
