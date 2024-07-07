<template>
  <div class="container my-5">
    <h1 class="my-4 text-center">Lista de Libros</h1>
    <SearchBooksComponent @search="filterLibros" />
    <div class="row">
      <div class="col-md-4" v-for="libro in filteredLibros" :key="libro.id">
        <div class="card mb-5 book-card">
          <img :src="getBookImage(libro.id)" class="card-img-top" alt="Book Image">
          <div class="card-body">
            <h5 class="card-title">{{ libro.Title }}</h5>
            <router-link :to="{ name: 'libroDetalle', params: { id: libro.id }}" class="btn btn-primary btn-sm mt-2">Ver Detalles</router-link>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Año: {{ libro.Year }}</li>
            <li class="list-group-item">Páginas: {{ libro.Pages }}</li>
            <li class="list-group-item">Editorial: {{ libro.Publisher }}</li>
          </ul>
          <div class="card-body text-center">
            <a href="#" class="btn btn-success btn-sm mx-2">Comprar</a>
            <a href="#" class="btn btn-info btn-sm mx-2">Comentarios</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import SearchBooksComponent from '@/components/SearchBooksComponent.vue';
import images from '@/data/images.json';

export default {
  name: 'CardLibrosComponent',
  components: {
    SearchBooksComponent
  },
  data() {
    return {
      searchQuery: '',
      images: images
    };
  },
  computed: {
    ...mapState(['libros']),
    filteredLibros() {
      return this.libros.filter(libro =>
        libro.Title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  created() {
    this.fetchLibros();
  },
  methods: {
    ...mapActions(['fetchLibros']),
    filterLibros(query) {
      this.searchQuery = query;
    },
    getBookImage(id) {
      return this.images[id] || 'https://example.com/images/default.jpg';
    }
  }
};
</script>

<style scoped>
.card {
  background-color: #222831;
  color: #eeeeee;
  border: 1px solid #00adb5;
  border-radius: 10px;
  padding: 1rem;
}

.book-card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.book-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-color: #007b8a;
}

.card-title {
  font-size: 1.25rem;
  color: #00adb5;
}

.card-body {
  padding: 1rem;
}

.card-img-top {
  height: 500px; /* Aumenta la altura de la imagen */
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.list-group-item {
  background-color: #393e46;
  color: #eeeeee;
  border: none;
  padding: 0.5rem 1rem;
}

.btn-primary {
  background-color: #00adb5;
  border-color: #00adb5;
  color: #eeeeee;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
}

.btn-primary:hover {
  background-color: #007b8a;
  border-color: #007b8a;
  transform: translateY(-3px);
}

.btn-primary:active {
  background-color: #005f63;
  border-color: #005f63;
  transform: translateY(1px);
}

.btn-success,
.btn-info {
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
}

.btn-success:hover,
.btn-info:hover {
  transform: translateY(-3px);
}

.btn-success:active,
.btn-info:active {
  transform: translateY(1px);
}

a {
  color: #00adb5;
}

a:hover {
  color: #007b8a;
  text-decoration: none;
}

.text-center {
  text-align: center;
}
</style>

