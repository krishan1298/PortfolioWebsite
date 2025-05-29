<template>
  <div class="app">
    <Header />
    <Navbar />
    <router-view />
      <footer class="contact-footer">
      <p><strong>Contact Us</strong></p>
      <p><strong>Address:</strong> 4546 Jimmy Carter Blvd, Ste 107, Norcross, GA, 30093</p>
      <p>Contact Us: <a href="tel:+16786656252"><strong>678-665-6252</strong></a></p>
      <p>Email Us: <a href="mailto:soniglobalinc@gmail.com"><strong>soniglobalinc@gmail.com</strong> </a></p>
    </footer>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
</script>

<style>

body {
  margin: 0;
  background-color: #474141bb;
  font-family: 'Segoe UI', sans-serif;
}
.app {
  min-height: 100vh;
}
.content {
  padding: 2rem;
  text-align: center;
}
.contact-footer {
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  text-align: center;
  margin-top: 40px;
  border-radius: 8px;
}

.contact-footer a {
  color: #1e76d2;
  text-decoration: none;
}

.contact-footer a:hover {
  text-decoration: underline;
}

.contact-footer h2 {
  margin-bottom: 15px;
  font-size: 1.8rem;
}

.contact-footer p {
  margin: 5px 0;
}
</style>
