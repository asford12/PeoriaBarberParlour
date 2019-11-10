//In the module, we have created several methods for saving, retrieving and deleting a token value in the LocalStorage of a user’s browser.

class Auth {

  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static authenticateUser(token) {
    // console.log("setting token ", token);
    localStorage.setItem('token', token);
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static deauthenticateUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('first_name');
    localStorage.removeItem('last_name');
  }

  /**
   * Get a token value.
   *
   * @returns {string}
   */

  static getToken() {
    return localStorage.getItem('token');
  }
  /**
   * Get a the user's name.
   *
   * @returns {string}
   */

  static getFirstName() {
    return localStorage.getItem('first_name');
  }
  static getLastName() {
    return localStorage.getItem('last_name');
  }
  /**
   * Set a the user's name.
   *
   * @param {string} name
   */

}

export default Auth;