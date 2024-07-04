<template>

    <div class="text-end container mb-5">
      <button @click="goBack" class="btn">Regresar a libros</button>
    </div>
    
</template>
  
<script>

export default {
name: 'ButtonRegresarLibreriaComponent',
methods:{
  goBack() {
    if(this.$router) {
      this.$router.push('/libros')
    }
    else{
      console.log('Vue Router no está disponible');
    }
  }
}
};
</script>

<style>
.btn {
background-color: #00ADB5;
color: #EEEEEE
} 
</style>

  