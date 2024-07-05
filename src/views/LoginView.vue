<template>
 
  <FormLoginComponent/>
 
 </template>
 
 <script>
 import FormLoginComponent from '@/components/FormLoginComponent.vue'
 
 export default {
   name: 'LibrosView',
   components: {
    FormLoginComponent,
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
 