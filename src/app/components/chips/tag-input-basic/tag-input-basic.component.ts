import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-input-basic',
  templateUrl: './tag-input-basic.component.html',
  styleUrls: ['./tag-input-basic.component.css']
})
export class TagInputBasicComponent implements OnInit {
  items: any[] = ['Javascript', 'Typescript'];

  constructor() { }

  ngOnInit() {
  }

  onSelect(item: string) {
      console.log('tag selected: value is ' + item);
  }

}
