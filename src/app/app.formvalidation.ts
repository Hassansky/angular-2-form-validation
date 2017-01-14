import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'form-validation',
  template : `
  <div class="jumbotron">
    <h2>Formularz kontaktowy</h2>
    <form [formGroup]="complexForm" (ngSubmit)="submitForm(complexForm.value)">
      <div class="form-group" [ngClass]="{'has-error':!complexForm.controls['firstName'].valid && complexForm.controls['firstName'].touched}">
        <label>Imię:</label>
        <input class="form-control" type="text" placeholder="Jan" [formControl]="complexForm.controls['firstName']">
        <div *ngIf="complexForm.controls['firstName'].hasError('required') && complexForm.controls['firstName'].touched" class="alert alert-danger">Musisz podać imię.</div>
      </div>
      <div class="form-group" [ngClass]="{'has-error':!complexForm.controls['lastName'].valid && complexForm.controls['lastName'].touched}">
        <label>Nazwisko</label>
        <input class="form-control" type="text" placeholder="Kowalski" [formControl]="complexForm.controls['lastName']">
        <div *ngIf="complexForm.controls['lastName'].hasError('required') && complexForm.controls['lastName'].touched" class="alert alert-danger">Musisz podać nazwisko.</div>
        <div *ngIf="complexForm.controls['lastName'].hasError('minlength') && complexForm.controls['lastName'].touched" class="alert alert-danger">Nazwisko musi mieć przynajmniej 3 znaki.</div>
        <div *ngIf="complexForm.controls['lastName'].hasError('maxlength') && complexForm.controls['lastName'].touched" class="alert alert-danger">Nazwisko musi mieć przynajmniej 6 znaków.</div>
      </div>
      <div class="form-group">
        <label>Gender</label>
        <div class="alert alert-danger" *ngIf="!complexForm.controls['gender'].valid && complexForm.controls['gender'].touched">You must select a gender.</div>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="gender" value="Mężczyzna" [formControl]="complexForm.controls['gender']">
          Male
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="gender" value="Kobieta" [formControl]="complexForm.controls['gender']">
          Female
        </label>
      </div>
      <div class="form-group">
        <label>Treść</label>
      
        <textarea style="width: 100%; height: 200px;"></textarea>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary" [disabled]="!complexForm.valid">Wyślij</button>
      </div>
    </form>
  </div>
  `
})
export class FormValidationComponent {
  complexForm : FormGroup;

  constructor(fb: FormBuilder){
    this.complexForm = fb.group({
      'firstName' : [null, Validators.required],
      'lastName': [null,  Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(6)])],
      'gender' : [null, Validators.required]
    })
    console.log(this.complexForm);
    this.complexForm.valueChanges.subscribe( (form: any) => {
      console.log('form changed to:', form);
    }
    );
  }

  submitForm(value: any){
    console.log(value);
  }
}
