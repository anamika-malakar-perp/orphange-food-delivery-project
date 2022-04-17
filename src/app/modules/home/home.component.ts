import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'core-home',
  template: `
  <div>
    <router-outlet></router-outlet>
  </div>
  `,
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
