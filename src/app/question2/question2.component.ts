import { Component, OnInit } from '@angular/core';
declare const ClassicEditor;
@Component({
    selector: 'app-question2',
    templateUrl: './question2.component.html',
    styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {
    editor: any;

    constructor() { }

    ngOnInit() {
        ClassicEditor
            .create(document.getElementById('editor'))
            .then(editor => this.editor = editor)
            .catch(error => console.log(error));
    }

    // บันทึกข้อมูล
    onSubmit() {
        console.log(this.editor.getData());
    }
}
