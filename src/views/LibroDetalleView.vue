<template>
  <div class="container my-5">
    <div v-if="libro">
      <h1 class="my-4">{{ libro.Title }}</h1>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Año: {{ libro.Year }}</h5>
          <p class="card-text">Páginas: {{ libro.Pages }}</p>
          <p class="card-text">Editorial: {{ libro.Publisher }}</p>
      </div>
    </div>
  </div>
    <div v-else>
      <p>Cargando...</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'LibroDetalleView',
  computed: {
    ...mapState(['libros']),
    ...mapGetters(['getLibroById']),
    libro() {
      return this.getLibroById(this.$route.params.id);
    }
  },
  created() {
    this.fetchLibros(); // Asegura que los datos de libros estén disponibles
  },
  methods: {
    ...mapActions(['fetchLibros'])
  }
};
</script>

<style scoped>
.card {
  background-color: #393E46 !important;
  color: #42b983 !important;
}
</style>
