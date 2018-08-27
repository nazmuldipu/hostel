import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Application } from 'src/shared/models/application.model';

@Component({
  selector: 'application-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent {
  @Output()
  create = new EventEmitter<Application>();
  form: FormGroup;
  mouseoverErrors;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      gender: ['', Validators.required],
      name: ['', Validators.required],
      fathersName: ['', Validators.required],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^01[5-9][ ]?[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{3}$')
        ]
      ],
      permanentAddress: ['', Validators.required],
      academyName: ['', Validators.required],
      academyAddress: ['', Validators.required],
      budget: ['', Validators.required],
      expectedEntryDate: ['', Validators.required]
    });
  }

  save() {
    // console.log(this.form.value);
    this.create.emit(this.form.value);
    this.form.reset();
    this.createForm();
  }
}
