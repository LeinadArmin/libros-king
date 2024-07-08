<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" v-model="username" id="username" required class="form-control">
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <p v-if="authError" class="text-danger">{{ authError }}</p>
    <p class="register">
      <a href="#">Registrarse</a>
    </p>
    <p class="forgot-password">
      <a href="#">Olvidé contraseña</a>
    </p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false
    };
  },
  computed: {
    ...mapState(['authError'])
  },
  methods: {
    ...mapActions(['login']),
    handleLogin() {
      this.login({ username: this.username, password: this.password }).then(() => {
        if (!this.authError) {
          this.$router.push({ name: 'home' });
        }
      });
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  background-color: #222831; /* Fondo oscuro */
  border-radius: 8px;
  box-shadow: 0 4px 8px #007b8a;
  color: #EEEEEE; /* Texto claro */
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #00ADB5; /* Color primario */
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #EEEEEE;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #393E46; /* Fondo de input oscuro */
  color: #EEEEEE; /* Texto de input claro */
}

.btn {
  width: 100%;
  padding: 10px;
  background-color: #00ADB5; /* Color primario */
  border: none;
  border-radius: 4px;
  color: #222831; /* Texto oscuro */
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #007b8a; /* Color primario oscuro */
}

.text-danger {
  color: #dc3545;
  text-align: center;
  margin-top: 10px;
}

.register, .forgot-password {
  text-align: center;
  margin-top: 10px;
}

.register a, .forgot-password a {
  color: #00ADB5; /* Color primario */
  text-decoration: none;
  transition: color 0.3s ease;
}

.register a:hover, .forgot-password a:hover {
  color: #007b8a; /* Color primario oscuro */
}
</style>
