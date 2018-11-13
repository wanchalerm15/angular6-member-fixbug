import { JSONItem } from './../modal/modal.component';
import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form: FormGroup;
  constructor(private builder: FormBuilder) {
    this.form = this.builder.group({
      message: []
    });
  }

  @Input('model') set inputModel(model: JSONItem) {
    if (!model) return;
    this.form.controls['message'].setValue(model.title);
  }
}
