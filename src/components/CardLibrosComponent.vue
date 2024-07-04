<template>
  <div class="container my-5">
    <h1 class="my-4">Lista de Libros</h1>
    <SearchComponent @search="filterLibros" />
    <div class="row">
      <div class="col-md-4" v-for="libro in filteredLibros" :key="libro.id">
        <div class="card mb-5">
          <div class="card-body">
            <h5 class="card-title">{{ libro.Title }}</h5>
            <router-link :to="{ name: 'libroDetalle', params: { id: libro.id }}">{{ libro.Title }}</router-link>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Año: {{ libro.Year }}</li>
            <li class="list-group-item">Pages: {{ libro.Pages }}</li>
            <li class="list-group-item">Publisher: {{ libro.Publisher }}</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Comprar</a>
            <a href="#" class="card-link">Comentarios</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import SearchComponent from '@/components/SearchComponent.vue';

export default {
  name: 'CardLibrosComponent',
  components: {
    SearchComponent
  },
  data() {
    return {
      searchQuery: ''
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
    }
  }
};
</script>

<style scoped>
.card-title {
  font-size: 1.25rem;
}
.card-subtitle {
  font-size: 1rem;
}
.card {
  background-color: #393E46 !important;
  color: #42b983 !important;
}
.list-group-item {
  background-color: #393E46 !important;
  color: #42b983 !important;
}
a {
  color: #EEEEEE;
}
</style>
