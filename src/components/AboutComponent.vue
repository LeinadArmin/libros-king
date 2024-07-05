<template>
  <div class="about container my-5">
    <h1>About Us</h1>
    <p>Welcome to our application! We are dedicated to providing the best service for our users.</p>

    <section class="about-details mt-4">
      <div class="row">
        <div class="col-md-4">
          <h2>Our Mission</h2>
          <p>Our mission is to create an intuitive and user-friendly platform for book enthusiasts to explore and manage their collections.</p>
        </div>
        <div class="col-md-4">
          <h2>What We Offer</h2>
          <ul>
            <li><i class="fas fa-book"></i> Extensive collection of books</li>
            <li><i class="fas fa-search"></i> Advanced search and filtering options</li>
            <li><i class="fas fa-info-circle"></i> Detailed book information and reviews</li>
            <li><i class="fas fa-user"></i> User authentication and personalized experience</li>
          </ul>
        </div>
        <div class="col-md-4">
          <h2>Contact Us</h2>
          <p>If you have any questions or feedback, feel free to reach out to us:</p>
          <ul>
            <li><i class="fas fa-envelope"></i> Email: <a href="mailto:support@example.com">support@example.com</a></li>
            <li><i class="fas fa-phone"></i> Phone: <a href="tel:+1234567890">+123 456 7890</a></li>
            <li><i class="fas fa-map-marker-alt"></i> Address: 123 Main Street, Anytown, USA</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
.about {
  padding: 20px;
  background-color: #222831;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.about h1 {
  color: #eeeeee;
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
}

.about-details h2 {
  color: #00adb5;
  font-size: 1.75rem;
  margin-top: 20px;
}

.about-details p {
  font-size: 1.125rem;
  color: #d3d3d3;
}

.about-details ul {
  list-style-type: none;
  padding: 0;
}

.about-details ul li {
  font-size: 1.125rem;
  color: #d3d3d3;
  padding: 5px 0;
  display: flex;
  align-items: center;
}

.about-details ul li i {
  margin-right: 10px;
  color: #00adb5;
}

.about-details ul li a {
  color: #00adb5;
  text-decoration: none;
}

.about-details ul li a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .about {
    padding: 15px;
  }

  .about h1 {
    font-size: 2rem;
  }

  .about-details h2 {
    font-size: 1.5rem;
  }

  .about-details p,
  .about-details ul li {
    font-size: 1rem;
  }
}
</style>
