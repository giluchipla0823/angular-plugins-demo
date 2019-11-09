import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of, EMPTY } from 'rxjs';

@Component({
  selector: 'app-tag-input-validation',
  templateUrl: './tag-input-validation.component.html',
  styleUrls: ['./tag-input-validation.component.css']
})
export class TagInputValidationComponent implements OnInit {
  public validators = [this.must_be_email];
  public errorMessages = {
      must_be_email: 'Please be sure to use a valid email format'
  };

  constructor() { }

  ngOnInit() {
  }

  private must_be_email(control: FormControl) {
      const EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/i;

      if (control.value.length !== '' && !EMAIL_REGEXP.test(control.value)) {
          return { must_be_email: true };
      }

      return null;
  }

  public onAdding(tag: string): Observable<string> {
    if (this['errors'].length === 0) { // this is tricky the this here is actualy the ngx-chips tag-input component
      console.log(`valid adding: ${tag}`);
      return of(tag);
    } else {
      console.log(`invalid cancel adding: ${tag}`);
      return EMPTY;
    }
  }

}
