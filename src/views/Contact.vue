<template>
  <div class="contact-page">
    <section class="contact-info">
      <h1>Contact Us</h1>
      <p><strong>Address:</strong> 4546 Jimmy Carter Blvd, Ste 107, Norcross, GA, 30093</p>
      <p><strong>Phone:</strong> <a href="tel:+1-xxx-xxx-xxxx">[Insert Phone Number]</a></p>
      <p><strong>Email:</strong> <a href="mailto:[Insert Email Address]">[Insert Email Address]</a></p>
      <p><strong>Website:</strong> <a href="[Insert Website URL]" target="_blank" rel="noopener noreferrer">[Insert Website URL]</a></p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
};
</script>

<style scoped>
.contact-page {
  padding: 20px;
  font-family: Arial, sans-serif;
  max-width: 900px;
  margin: 0 auto;
}

h1 {
  color: #2c3e50;
}

.contact-info {
  background-color: #f4f6f8;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.contact-info p {
  margin: 10px 0;
  line-height: 1.6;
}

a {
  color: #1e76d2;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
