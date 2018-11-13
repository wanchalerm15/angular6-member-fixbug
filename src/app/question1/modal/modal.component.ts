import { Component, OnInit, TemplateRef, Output, EventEmitter } from '@angular/core';
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  modal: ModalDirective;
  items: JSONItem[] = [];
  @Output('onChange') onChange = new EventEmitter();
  constructor(
    private modalService: BsModalService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {

  }

  onSelectMessage(item: JSONItem) {
    this.onChange.emit(item);
    this.modal.hide();
  }

  openModal(modal: ModalDirective) {
    this.modal = modal;
    this.http
      .get<JSONItem[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(items => {
        this.modal.show();
        this.items = items;
      });
  }
}

export interface JSONItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}
