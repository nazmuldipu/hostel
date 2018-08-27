import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  NgbActiveModal,
  ModalDismissReasons
} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'confirm-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{ title }}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>{{message}}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">বন্ধ</button>
    </div>
    `
})
export class MessageModal {
  @Input()
  title;
  @Input()
  message;

  constructor(public activeModal: NgbActiveModal) {}
}
