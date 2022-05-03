import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: any;

  mess: string = '';

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        "firstName": new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
        "lastName": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z\\s]*')]), //consente spazio
        "phoneNumber": new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$')]),
        "email": new FormControl(null, [Validators.required, Validators.email]),
        "password": new FormControl(null, [Validators.required, Validators.pattern('((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*?[#?!@$%^&*-])(?=.*[A-Z])(?=.*[a-z]).*$'), Validators.minLength(8)]),
      }
    );
  }

  submit() {
    console.log(this.form.value);
    if(this.form.valid)  {
    this.mess = 'Form inviato con successo!';
    this.form.reset();
    }
    else {
      this.mess = 'Compila correttamente tutti i campi!'
    }

  }

  get firstname() { return this.form.get('firstName') }
  get lastname() { return this.form.get('lastName') }
  get phonenumber() { return this.form.get('phoneNumber') }
  get mail() { return this.form.get('email') }
  get psswrd() { return this.form.get('password') }
}
