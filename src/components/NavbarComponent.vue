<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Biblioteca</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" active-class="active">Acerca de</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/libros" class="nav-link" active-class="active">Libros</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link disabled" active-class="active">Carro de compras</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" v-if="isAuthenticated">
            <button class="btn-logout btn btn-outline-danger" @click="handleLogout">Logout</button>
          </li>
          <li class="nav-item" v-else>
            <router-link to="/login" class="btn btn-outline-success">Login</router-link>
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

<style scoped>
.navbar {
  background-color: #343a40;
}

.navbar-brand {
  font-size: 1.5rem;
  color: #ffffff;
}

.nav-link {
  font-size: 1.1rem;
  color: #ffffff;
  transition: color 0.3s ease;
}

.nav-link.active {
  color: #00adb5;
}

.nav-link:hover {
  color: #00adb5;
}

.btn-outline-danger {
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-outline-danger:hover {
  background-color: #dc3545;
  color: #ffffff;
  transform: translateY(-3px);
}

.btn-outline-danger:active {
  background-color: #c82333;
  transform: translateY(1px);
}

.btn-outline-danger:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.5);
}

.btn-outline-success {
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-outline-success:hover {
  background-color: #28a745;
  color: #ffffff;
  transform: translateY(-3px);
}

.btn-outline-success:active {
  background-color: #218838;
  transform: translateY(1px);
}

.btn-outline-success:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.5);
}
</style>

