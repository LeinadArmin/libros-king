<template>

  <CardLibroDetalleComponent />
  <ButtonRegresarLibreriaComponent />
  <FooterComponent />

</template>

<script>
import CardLibroDetalleComponent from '@/components/CardLibroDetalleComponent.vue';
import ButtonRegresarLibreriaComponent from '@/components/ButtonRegresarLibreriaComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';


export default {
  name: 'LibroDetalleView',
  components: {
    ButtonRegresarLibreriaComponent,
    CardLibroDetalleComponent,
    FooterComponent,
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
