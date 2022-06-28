import { FormControl, FormGroup } from "@angular/forms";

export class SignIn {
  signInFormGroup: FormGroup;

  constructor() {
    this.signInFormGroup = this.newSignInFormGroup;
  }

  /** Public section */
  submit() {
    console.log('form',this.signInFormGroup)
  }

  /** Private section */
  private get newSignInFormGroup(): FormGroup {
    return  new FormGroup({
      userName: new FormControl(''),
      password: new FormControl(''),
    });
  }
}
