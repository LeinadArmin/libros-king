<template>
  <div class="search-container">
    <input type="text" v-model="searchQuery" @input="onInput" placeholder="Buscar libros..." class="search-input"/>
  </div>
</template>

<script>
export default {
  name: 'SearchComponent',
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    onInput() {
      this.$emit('search', this.searchQuery);
    }
  }
};
</script>

<style scoped>
.search-container {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

.search-input {
  width: 100%;
  max-width: 500px;
  padding: 10px 15px;
  border: 2px solid #00adb5;
  border-radius: 25px;
  background-color: #222831;
  color: #eeeeee;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.search-input::placeholder {
  color: #aaaaaa;
}

.search-input:focus {
  outline: none;
  border-color: #007b8a;
  box-shadow: 0 0 10px rgba(0, 173, 181, 0.5);
}
</style>
