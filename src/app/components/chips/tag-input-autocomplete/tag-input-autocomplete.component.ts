import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-tag-input-autocomplete',
  templateUrl: './tag-input-autocomplete.component.html',
  styleUrls: ['./tag-input-autocomplete.component.css']
})
export class TagInputAutocompleteComponent implements OnInit {

  items: any[] = [
    { display: 'Pedro', value: 1 },
    { display: 'Juan', value: 2 },
    { display: 'Marcos', value: 3 },
    { display: 'Miguel', value: 4 },
    { display: 'Gabriel', value: 5 },
    { display: 'William', value: 6 },
    { display: 'Luiggi', value: 7 }
  ];

  books: any[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }


  public onTextChange(text: string) {
      if (text.length < 3) {
        return;
      }

      const url = `http://127.0.0.1:8000/api/books?title=${text}`;

      return this.http
          .get<any>(url)
          .pipe(map(response => {
            return response.data;
          }))
          .subscribe(books => {
            this.books = books;
          });
  }

  requestAutocompleteItems = (text: string) => {
      const url = `http://127.0.0.1:8000/api/books?title=${text}`;

      return this.http
          .get<any>(url)
          .pipe(map(response => {
            return response.data.map(item => {
              return {
                value: item.id,
                display: item.title
              };
            });
          }));
  }

  public onAdding(tag: string): Observable<string> {
      console.log(this);
      return of(tag);
  }

  requestAutocompleteItemsFakeTwo = (text: string): Observable<any> => {
    return of(this.items);
  }

  requestAutocompleteItemsFake = (text: string): Observable<string[]> => {
      return of([
          'item1', 'item2', 'item3'
      ]);
  }

  transform(value: string): Observable<object> {
      const item = {display: `@${value}`, value: `@${value}`};
      return of(item);
  }

}
