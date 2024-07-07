<template>
 
  <FormLoginComponent/>
  <FooterComponent/>
 
 </template>
 
 <script>
 import FormLoginComponent from '@/components/FormLoginComponent.vue'
 import FooterComponent from '@/components/FooterComponent.vue'
 
 export default {
   name: 'LibrosView',
   components: {
    FormLoginComponent,
    FooterComponent
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
 