<template>
  <div class="app">
    <Header />
    <Navbar />
    <router-view />
      <footer class="contact-footer">
      <p><strong>Contact Us</strong></p>
      <p><strong>Address:</strong> 4546 Jimmy Carter Blvd, Ste 107, Norcross, GA, 30093</p>
      <p><strong>Phone:</strong> <a href="tel:+1-xxx-xxx-xxxx">[Insert Phone Number]</a></p>
      <p><strong>Email:</strong> <a href="mailto:[Insert Email Address]">[Insert Email Address]</a></p>
      <p><strong>Website:</strong> <a href="[Insert Website URL]" target="_blank" rel="noopener noreferrer">[Insert Website URL]</a></p>
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
