<template>
  <div class="search-container">
    <input
      type="text"
      v-model="searchQuery"
      @input="onInput"
      placeholder="Buscar libros..."
      class="search-input"
    />
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
}
.search-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
