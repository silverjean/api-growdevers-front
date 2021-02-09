import api from './services/api';

import CreateAccount from './classes/CreateAccount';
import Login from './classes/Login';
import List from './classes/List';

class App {
  constructor() {
    this.createAccountModal = new CreateAccount();
    this.loginModal = new Login();
  }
}

new App();
