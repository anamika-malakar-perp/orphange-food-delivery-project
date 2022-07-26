import { Injectable } from '@angular/core';
import { UtilityServiceService } from './utility-service.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  /**
   * Local storage key to store login credentials
   */
  private readonly localStorageLoginCredentialsKey = 'c';

  constructor(private util: UtilityServiceService) { }

  /**
   * Checks is a user is currently logged in or not. A user
   * if logged in if his login credentials exists in the local storage.
   *
   * @returns `true` if user is logged in otherwise `false`
   */
  get loggedIn(): boolean {
    // Get credentials stored in local storage
    const credentials = this.util.getFromLocal<any>(this.localStorageLoginCredentialsKey);

    // Validate user credentials
    return !!(credentials && this.isValidCredentials(credentials));
  }

  /**
   * Checks if login credentials is valid or not. A valid login
   * credentials must have `mobileNo` and `password`.
   */
  private isValidCredentials(credentials: any): boolean {

    return (
      !this.util.isNullOrEmpty(credentials.userName) &&
      !this.util.isNullOrEmpty(credentials.password)
    );
  }
}
