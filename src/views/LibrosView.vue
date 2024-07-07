<template>
 
 <CardLibrosComponent/>
 <ButtonRegresarComponent/>
 <FooterComponent/>

</template>

<script>
import CardLibrosComponent from '@/components/CardLibrosComponent.vue'
import ButtonRegresarComponent from '@/components/ButtonRegresarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'LibrosView',
  components: {
    CardLibrosComponent,
    ButtonRegresarComponent,
    FooterComponent,
  }
}
</script>

<style scoped>
/* Opcional: agrega estilos adicionales si es necesario */
.card-title {
  font-size: 1.25rem;
}
.card-subtitle {
  font-size: 1rem;
}
</style>
