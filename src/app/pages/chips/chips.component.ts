import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent implements OnInit {
  menu: any[] = [
    { name: 'Basic', path: '/chips/basic' },
    { name: 'With not removable items', path: '/chips/with-not-removable-items' },
    { name: 'With objects', path: '/chips/with-objects' },
    { name: 'Autocomplete', path: '/chips/autocomplete' },
    { name: 'Validation', path: '/chips/validation' }
  ];

  title: string;

  constructor(
    private router: Router
  ) {
    this.getDataRoute().subscribe(data => this.title = data.title);
  }

  ngOnInit() {
  }

  getDataRoute(): any {
    return this.router.events.pipe(
      filter((event: any) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map(response => response.snapshot.data)
    );
  }

}
