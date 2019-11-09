import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-input-with-objects',
  templateUrl: './tag-input-with-objects.component.html',
  styleUrls: ['./tag-input-with-objects.component.css']
})
export class TagInputWithObjectsComponent implements OnInit {
  items: any[] = [
    { id: 0, name: 'Angular', readonly: true },
    { id: 1, name: 'React' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
