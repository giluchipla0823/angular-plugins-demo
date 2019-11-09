import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-input-basic-not-removable-items',
  templateUrl: './tag-input-basic-not-removable-items.component.html',
  styleUrls: ['./tag-input-basic-not-removable-items.component.css']
})
export class TagInputBasicNotRemovableItemsComponent implements OnInit {
  items: any[] = ['Javascript', 'Typescript'];

  constructor() { }

  ngOnInit() {
  }

}
