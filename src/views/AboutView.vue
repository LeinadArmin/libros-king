<template>

    <AboutComponent />
    <FooterComponent />

    
</template>

<script>
import AboutComponent from "@/components/AboutComponent";
import FooterComponent from '@/components/FooterComponent.vue';

  export default {
    name: 'About',
    components: {
      AboutComponent,
      FooterComponent,
    }
  };
  </script>
