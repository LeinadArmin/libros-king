<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <h3>Enlaces</h3>
                    <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Acerca de</a></li>
                    <li><a href="#">Contacto</a></li>
                    </ul>
                </div>
                <div class="col-lg-4">
                    <h3>Contacto</h3>
                    <p>Correo electrónico: info@example.com</p>
                    <p>Teléfono: 123-456-7890</p>
                </div>
                <div class="col-lg-4">
                    <h3>Derechos de autor</h3>
                    <p>(c) 2023 Mi Sitio Web. Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
    props: {
      
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  footer{
    background-color: #393E46;
  }

  a{
    color: #EEEEEE
  }

  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  