<script>
  import Libras from '@/components/Libras.vue'

  export default {
    name: 'LoginView',
    components: {
      Libras,
    },
    data() {
      return {
        username: '',
        password: '',
        mostrarSenha: false
      };
    },
    methods: {
      verificarLogin() {
        if (this.username === 'root' && this.password === 'root') {
          this.$router.push('/');
        } else {
          alert('Usuário ou senha incorretos.');
        }
      },
      alternarVisibilidade() {
        this.mostrarSenha = !this.mostrarSenha;
      }
    }
  }
</script>


<template>
  <div class="container">
    <div class="left-side">
      <img src="/assets/img/logofsph_login.svg" alt="Logo FSPH Lacen" class="logo">
      <h1>Login</h1>
      <p class="subtitle">Realize seu login para enviar amostras e fazer o<br> acompanhamento do status das análises</p>

      <form @submit.prevent="verificarLogin">
        <label for="username">Nome de usuário</label>
        <input type="text" id="username" v-model="username" placeholder="Usuário" />

        <label for="password">Insira sua Senha</label>
        <div class="password-field">
          <input :type="mostrarSenha ? 'text' : 'password'" id="password" v-model="password" placeholder="Senha" />
          <span class="eye-icon" @click="alternarVisibilidade">&#128065;</span>
        </div>

        <a href="#" class="forgot-password">Esqueceu sua senha?</a>

        <button type="submit" class="login-button">Login</button>
      </form>
    </div>

    <div class="right-side">
      <div class="image-wrapper">
        <img src="/assets/img/img_login.png" alt="Laboratório">
      </div>
    </div>
  </div>
  <Libras />
</template>


<style scoped>
  /* Global Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    background-color: #000;
  }

  .container {
    display: flex;
    height: 100vh;
    background-color: #fdfdfb;
    overflow: hidden;
    position: relative;
    flex-wrap: wrap; /* Ajuda em telas menores */
  }

  .left-side {
    flex: 1;
    padding: 50px 80px 50px 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    z-index: 2;
    min-width: 280px;
  }

  .logo {
    width: 120px;
    position: relative;
    top: -25px;
    left: -5px;
    margin-bottom: 30px;
  }

  h1 {
    font-size: 35px;
    margin-top: -15px;
    margin-bottom: 8px;
    font-weight: 600;
    color: #000;
    margin-left: 140px;
  }

  .subtitle {
    font-size: 15px;
    color: #999;
    margin-bottom: 30px;
    line-height: 20px;
    margin-left: 140px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 350px;
    margin-left: 100px;
  }

  label {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
    margin-left: 40px;
    margin-top: 15px;
  }

  input[type="text"],
  input[type="password"],
  .login-button {
    width: calc(100% - 40px);
    padding: 18px 12px;
    border: 1px solid #ccc;
    border-radius: 2px;
    margin-bottom: 8px;
    margin-left: 40px;
    font-size: 14px;
    box-sizing: border-box;
  }

  .password-field {
    position: relative;
  }

  .password-field input {
    padding-right: 36px;
  }

  .eye-icon {
    position: absolute;
    right: 10px;
    top: 43%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 16px;
    color: #aaa;
  }

  .forgot-password {
    margin-top: 4px;
    margin-bottom: 20px;
    font-size: 12px;
    color: #555;
    text-decoration: none;
    text-align: right;
    margin-left: 40px;
    display: block;
  }

  .login-button {
    background-color: #0291D3;
    color: white;
    font-size: 14px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: background 0.3s ease;
    margin-bottom: 0;
  }

  .login-button:hover {
    background-color: #0291D3;
  }

  .right-side {
    width: 300px;
    background-color: #0291D3;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .image-wrapper {
    position: absolute;
    left: 20%;
    top: 42%;
    transform: translate(-120%, -40%) scale(1.9, 1.7);
    width: 290px;
    max-width: 100%;
    height: auto;
  }

  .image-wrapper img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  /* Responsividade */

  @media screen and (max-width: 1200px) {
    .left-side {
      padding: 40px 60px 40px 40px;
    }

    form {
      width: 100%;
      max-width: 320px;
      margin-left: 80px;
    }

    .image-wrapper {
      transform: translate(-120%, -40%) scale(1.4, 1.5);
      width: 260px;
    }
  }

  @media screen and (max-width: 992px) {
    .container {
      flex-direction: column;
      height: auto;
    }

    .left-side {
      padding: 30px 40px;
      align-items: center;
    }

    .logo {
      margin-bottom: 20px;
      align-self: flex-start;
    }

    h1, .subtitle {
      margin-left: 100px;
    }

    form {
      margin-left: 60px;
    }

    .right-side {
      width: 100%;
      height: 200px;
    }

    .image-wrapper {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(1, 1);
      width: 250px;
    }
  }

  @media screen and (max-width: 768px) {
    .left-side {
      padding: 20px 30px;
    }

    h1 {
      font-size: 30px;
      margin-left: 40px;
    }

    .subtitle {
      font-size: 14px;
      margin-left: 40px;
    }

    form {
      width: 100%;
      max-width: 350px;
      margin-left: 0;
    }

    label,
    input[type="text"],
    input[type="password"],
    .login-button,
    .forgot-password {
      margin-left: 0;
      width: 100%;
    }
  }

  @media screen and (max-width: 576px) {
    .container {
      height: auto;
      min-height: 100vh;
    }

    .left-side {
      padding: 20px;
    }

    .logo {
      width: 100px;
      top: 0;
      left: 0;
      margin-bottom: 30px;
    }

    h1 {
      font-size: 26px;
      margin-left: 0;
      margin-top: 0;
    }

    .subtitle {
      margin-left: 0;
    }

    .right-side {
      height: 150px;
    }

    .image-wrapper {
      width: 200px;
    }
  }
</style>
