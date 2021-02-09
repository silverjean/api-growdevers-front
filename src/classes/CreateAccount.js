import Swal from 'sweetalert2';

import api from '../services/api';

class CreateAccount {
  constructor() {
    this.name = document.querySelector('#createAccountModal #name');
    this.username = document.querySelector('#createAccountModal #login');
    this.type = document.querySelector('#createAccountModal #type');
    this.password = document.querySelector('#createAccountModal #password');

    this.btnSave = document.getElementById('save-btn');

    this.registerEvent();
  }
  registerEvent() {
    this.btnSave.onclick = () => this.createAccount();
  }

  async createAccount() {
    try {
      const body = {
        name: this.name.value,
        password: this.password.value,
        type: this.type.value,
        username: this.username.value,
      };
      if (!body.name || !body.password || !body.type || !body.username) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Preencha corretamente todos os campos!',
        });
        return;
      }

      const { data } = await api.post('/users', body);

      Swal.fire('Feito', 'Conta criada com sucesso!', 'success');

      return data;
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocorreu um erro no cadastro!',
      });
      console.log(error);

      return error;
    }
  }
}

export default CreateAccount;
