<template>
  <div class="welcome text-center d-flex flex-column justify-content-center align-items-center">
    <h1 class="display-4">Bienvenido a la Biblioteca de Libros</h1>
    <p class="lead">Explora nuestra colección de libros.</p>
    <router-link to="/libros" class="btn">Explorar</router-link>
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
  height: 100%;
  text-align: center;
}

.btn {
  background-color: #00ADB5;
  color: #EEEEEE
}
</style>
