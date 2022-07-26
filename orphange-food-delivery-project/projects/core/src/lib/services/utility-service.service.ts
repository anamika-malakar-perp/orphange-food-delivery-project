import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {

  constructor() { }

  /**
   * Gets a value stored in local storage. It also ensure the proper
   * decoding of the json string.
   *
   * @param key Key name in local storage
   * @param decode `true` to decode the given json string, otherwise `false`. Default set to `true`
   */
  getFromLocal<T>(key: string, decode = true): T {

    let jsonString = localStorage.getItem(key);

    // Decode the json string if decoding enabled
    if (jsonString && decode) {
      jsonString = this.decodeString(jsonString);
    }

    // Parse json string to the object fellow
    return this.toJson<T>(jsonString);
  }

  /**
   * Decodes a string from base64 format to normal string
   *
   * @param s String to decode
   */
  decodeString(s: string): string {
    return atob(s);
  }

  /**
   * Converts a JSON string to JSON object.
   *
   * @param val Json string
   *
   * @returns JSON object on success otherwise the same object.
   */
  toJson<T>(val: any): T {

    try {
      return JSON.parse(val);
    } catch (e) {
      return val;
    }
  }

  /**
   * Checks if a given string is `null`, `undefined` or empty string.
   *
   * @param str String to verify for null
   *
   * @returns `true` if the given string is `null`, `undefined` or empty,
   * otherwise `false`.
   */
  isNullOrEmpty(str: string): boolean {
    return !!(str === null || typeof str === 'undefined' || str.length <= 0);
  }
}
