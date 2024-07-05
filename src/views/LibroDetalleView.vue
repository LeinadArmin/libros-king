<template>

  <CardLibroDetalleComponent />
  <ButtonRegresarLibreriaComponent />

</template>

<script>
import CardLibroDetalleComponent from '@/components/CardLibroDetalleComponent.vue';
import ButtonRegresarLibreriaComponent from '@/components/ButtonRegresarLibreriaComponent.vue';


export default {
  name: 'LibroDetalleView',
  components: {
    ButtonRegresarLibreriaComponent,
    CardLibroDetalleComponent
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
