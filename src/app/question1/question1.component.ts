import { JSONItem } from './modal/modal.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component {
  model: JSONItem;

  onChangeMessage(model: JSONItem) {
    this.model = model;
  }

}
