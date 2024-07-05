<template>
  <div class="welcome d-flex flex-column justify-content-center align-items-center vh-100">
    <div class="text-center">
      <h1 class="display-4">Bienvenido a la Biblioteca de Libros</h1>
      <p class="lead">Explora nuestra colección de libros.</p>
      <router-link to="/libros" class="btn-explorar btn btn-primary btn-lg mt-3">Explorar</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.welcome {
  background: linear-gradient(to right, #00adb5, #393e46);
  color: #eeeeee;
  height: 100vh;
}

h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.lead {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.btn-explorar {
  background-color: #00adb5;
  border: none;
  padding: 15px 30px;
  font-size: 1.25rem;
  color: #eeeeee;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-explorar:hover {
  background-color: #007b8a;
  transform: translateY(-3px);
}

.btn-explorar:active {
  background-color: #005f63;
  transform: translateY(1px);
}

.btn-explorar:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 173, 181, 0.5);
}
</style>
