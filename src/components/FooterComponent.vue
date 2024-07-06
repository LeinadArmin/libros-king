<template>
  <footer class="footer py-2 mt-auto">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-3 mb-lg-0">
          <h3>Enlaces</h3>
          <ul class="list-unstyled">
            <li><router-link to="/" class="footer-link">Inicio</router-link></li>
            <li><router-link to="/about" class="footer-link">Acerca de</router-link></li>
            <li><router-link to="/contact" class="footer-link">Contacto</router-link></li>
          </ul>
        </div>
        <div class="col-lg-4 mb-3 mb-lg-0">
          <h3>Contacto</h3>
          <p>Correo electrónico: <a href="mailto:info@example.com" class="footer-link">info@example.com</a></p>
          <p>Teléfono: <a href="tel:123-456-7890" class="footer-link">123-456-7890</a></p>
        </div>
        <div class="col-lg-4">
          <h3>Derechos de autor</h3>
          <p>&copy; 2023 Mi Sitio Web. Todos los derechos reservados.</p>
          <div class="social-icons">
            <a href="#" class="footer-link"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="footer-link"><i class="fab fa-twitter"></i></a>
            <a href="#" class="footer-link"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
};
</script>

<style scoped>
.footer {
  background-color: #393E46;
  color: #EEEEEE;
  padding-top: 10px;
  padding-bottom: 10px;
}

.footer h3 {
  margin-bottom: 15px;
  color: #00ADB5;
}

.footer .footer-link {
  color: #EEEEEE;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer .footer-link:hover {
  color: #00ADB5;
}

.footer ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.footer li {
  margin-bottom: 8px;
}

.footer .social-icons a {
  font-size: 1.2rem;
  margin-right: 8px;
  color: #EEEEEE;
  transition: color 0.3s ease;
}

.footer .social-icons a:hover {
  color: #00ADB5;
}

.footer p {
  margin-bottom: 8px;
}

.container {
  padding-left: 15px;
  padding-right: 15px;
}
</style>

