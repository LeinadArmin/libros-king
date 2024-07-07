<template>
  <footer class="footer py-3 mt-auto">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-4 mb-lg-0">
          <h3>Enlaces</h3>
          <ul class="list-inline">
            <li class="list-inline-item"><router-link to="/" class="footer-link">Inicio</router-link></li>
            <li class="list-inline-item"><router-link to="/about" class="footer-link">Acerca de</router-link></li>
            <li class="list-inline-item"><router-link to="/contact" class="footer-link">Contacto</router-link></li>
          </ul>
        </div>
        <div class="col-lg-4 mb-4 mb-lg-0">
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
  padding-top: 20px;
  padding-bottom: 20px;
}

.footer h3 {
  margin-bottom: 20px;
  color: #00ADB5;
  font-size: 1.5rem;
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
  padding: 0;
  margin: 0;
}

.footer .list-inline-item {
  margin-right: 15px;
}

.footer .social-icons a {
  font-size: 1.5rem;
  margin-right: 10px;
  color: #EEEEEE;
  transition: color 0.3s ease;
}

.footer .social-icons a:hover {
  color: #00ADB5;
}

.footer p {
  margin-bottom: 10px;
}

.container {
  padding-left: 15px;
  padding-right: 15px;
}
</style>
