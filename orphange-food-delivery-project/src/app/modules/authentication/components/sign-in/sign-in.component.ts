import { Component, OnInit } from '@angular/core';
import { SignIn } from '../../classes/sign-in';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent extends SignIn implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
