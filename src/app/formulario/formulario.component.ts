import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  form: Observable<any[]>;
  constructor() {
  }

  ngOnInit() {
  }
  get formularioParse() {
    return JSON.stringify(this.form);
  }
  submit(form) {
    console.log(form);
  }
}
