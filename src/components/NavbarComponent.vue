<template>
  <nav class="navbar navbar-expand-lg bg-body-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">Acerca de</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/libros" class="nav-link">Libros</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Carro de compras</a>
          </li>

        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" v-if="isAuthenticated">
            <button class="btn btn-outline-danger" @click="handleLogout">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'NavbarComponent',
  computed: {
    ...mapGetters(['isAuthenticated']) // Mapea el getter isAuthenticated
  },
  methods: {
    ...mapActions(['logout']),
    handleLogout() {
      this.logout();
      this.$router.push({ name: 'login' });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
