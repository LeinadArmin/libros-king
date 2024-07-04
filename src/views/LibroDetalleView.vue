<template>

  <LibroDetalleComponent />
  <ButtonRegresarLibreriaComponent />

</template>

<script>
import LibroDetalleComponent from '@/components/LibroDetalleComponent.vue';
import ButtonRegresarLibreriaComponent from '@/components/ButtonRegresarLibreriaComponent.vue';


export default {
  name: 'LibroDetalleView',
  components: {
    ButtonRegresarLibreriaComponent,
    LibroDetalleComponent
  },
  
  computed: {

  },
  created() {

  },
  methods: {

  }
};
</script>

<style scoped>
.card {
  background-color: #393E46 !important;
  color: #42b983 !important;
}
</style>
