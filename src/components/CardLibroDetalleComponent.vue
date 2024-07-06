<template>
  <div class="container my-5">
    <div v-if="libro" class="libro-detalle">
      <h1 class="my-4 text-center">{{ libro.Title }}</h1>
      <div class="card libro-card shadow-sm">
        <div class="card-body">
          <h5 class="card-title">Año: {{ libro.Year }}</h5>
          <p class="card-text">Páginas: {{ libro.Pages }}</p>
          <p class="card-text">Editorial: {{ libro.Publisher }}</p>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <p>Cargando...</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'CardLibroDetalleView',
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
.libro-detalle {
  text-align: center;
}

.libro-card {
  background-color: #222831;
  color: #eeeeee;
  border: 1px solid #00adb5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.libro-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-color: #007b8a;
}

.card-title {
  font-size: 1.25rem;
  color: #00adb5;
}

.card-text {
  font-size: 1rem;
  color: #eeeeee;
}

.text-center p {
  color: #eeeeee;
}
</style>

