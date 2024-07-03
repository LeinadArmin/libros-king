<template>
    <div class="container">
      <h1>Listado de Libros</h1>
      <input v-model="searchQuery" type="text" placeholder="Buscar libros..." class="form-control mb-3">
  
      <div class="row">
        <div v-for="libro in filteredBooks" :key="libro.id" class="col-md-4">
          <div class="card my-3">
            <div class="card-body">
              <h5 class="card-title">{{ libro.Title }}</h5>
              <p class="card-text">Año: {{ libro.Year }}</p>
              <router-link :to="'/libro/' + libro.id" class="btn btn-primary">Ver Detalle</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'LibrosView',
  data() {
    return {
      searchQuery: ''  // Almacena el texto de búsqueda del usuario
    };
  },
  computed: {
    ...mapState(['libros']),
    filteredBooks() {
      return this.libros.filter(libro => libro.Title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },
  created() {
    this.fetchLibros(); // Llama a la acción fetchLibros al cargar el componente
  },
  methods: {
    ...mapActions(['fetchLibros'])
  }
};
</script>
