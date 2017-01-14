import { Component } from '@angular/core';

@Component({
  selector: 'simple-form',
  template : `
  <div class="jumbotron">
    <h2>Formularz Kontaktowy</h2>
    <form #form="ngForm" (ngSubmit)="submitForm(form.value)">
      <div class="form-group">
        <label>Imię</label>
        <input type="text" class="form-control" placeholder="Jan" name="firstName" ngModel required>
      </div>
      <div class="form-group">
        <label>Nazwisko</label>
        <input type="text" class="form-control" placeholder="Kowalski" name="lastName" ngModel required>
      </div>
      
      <div class="form-group">
        <label>Płeć</label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="gender" value="Male" ngModel>
          Mężczyzna
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="gender" value="Female" ngModel>
          Kobieta
        </label>
      </div>
      
      <div class="form-group">
        <label>Treść</label>
      <textarea style="width:100%; height:200px;" ngModel></textarea>
      </div>
      
      <div class="form-group">
        <button type="submit" class="btn btn-default">Submit</button>
      </div>
    </form>
  </div>
  `
})
export class SimpleFormComponent {
  submitForm(form: any): void{
    console.log('Form Data: ');
    console.log(form);
  }
}
