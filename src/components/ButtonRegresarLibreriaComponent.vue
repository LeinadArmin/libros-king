<template>
  <div class="text-end container mb-5">
    <button @click="goBack" class="btn btn-back">Regresar a libros</button>
  </div>
</template>

<script>
export default {
  name: 'ButtonRegresarLibreriaComponent',
  methods: {
    goBack() {
      if (this.$router) {
        this.$router.push('/libros');
      } else {
        console.log('Vue Router no está disponible');
      }
    }
  }
};
</script>

<style scoped>
.btn-back {
  background-color: #00adb5;
  color: #eeeeee;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-back:hover {
  background-color: #007b8a;
  transform: translateY(-3px);
}

.btn-back:active {
  background-color: #005f63;
  transform: translateY(1px);
}

.btn-back:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 173, 181, 0.5);
}
</style>

