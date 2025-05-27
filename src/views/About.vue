<template>
  <div class="about-page">
    <section class="company-intro">
      <h1>Our Company</h1>
      <p>
        Soni Global Inc. is a professional hotel management and consulting firm dedicated to providing full-spectrum operational support to small and mid-sized hotel owners. Our company integrates hands-on management experience with innovative solutions to streamline daily operations and maximize profitability. We serve as a strategic partner to hospitality businesses, handling every facet of hotel operations so our clients can focus on growth and guest satisfaction.
      </p>
    </section>
        <section class="about-us">
      <h2>About Us</h2>
      <p>
        Founded by Ashok Soni, Soni Global Inc. was established to bridge the gap between operational excellence and hands-on execution in the hospitality sector. With over 15 years of experience in managing complex operations, Ashok leads a team committed to bringing innovation, accountability, and structure to hotel management. Our collaborative approach enables hotel owners to achieve consistent results while reducing operational burdens.
      </p>
    </section>


  </div>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style scoped>
.about-page {
  padding: 20px;
  font-family: Arial, sans-serif;
  max-width: 900px;
  margin: 0 auto;
}

section {
  margin-bottom: 30px;
}

h1, h2, h3 {
  color: #2c3e50;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

ul li {
  margin-bottom: 10px;
}

p {
  line-height: 1.6;
}

.company-intro, .about-us{
  background-color: #f4f6f8;
  padding: 20px;
  border-radius: 8px;
}

</style>
