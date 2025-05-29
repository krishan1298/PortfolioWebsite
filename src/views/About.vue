<template>
  <div class="about-layout">
    <div class="logo-container">
      <div class="abbrv_size">SG</div>
      <div class="divider"></div>
      <div class="text-block">
        <h1 class="brand-name">SONI</h1>
        <div class="subtitle">GLOBAL Inc.</div>
      </div>
    </div>
  <div class="about-page">
    <section class="company-intro">
      <h1>Our Company</h1>
      <p>Soni Global Inc. is a professional hotel management and consulting firm providing full-spectrum operational support to small and mid-sized hotel owners. We combine hands-on management experience with innovative solutions to streamline daily operations, elevate service quality, and maximize profitability.</p>
      <p>As a trusted strategic partner, we handle every facet of hotel operations — from staffing and compliance to guest satisfaction and financial performance — so our clients can focus on growth, brand development, and delivering exceptional guest experiences.</p>
    </section>
    
        <section class="about-us">
      <h2>About Us</h2>
      <p>Soni Global Inc. is a professional hotel management and consulting firm dedicated to providing full-spectrum operational support to small and mid-sized hotel owners. We combine hands-on expertise with innovative solutions to streamline daily operations, elevate guest satisfaction, and maximize profitability. Whether you own a boutique property or a portfolio of branded hotels, we serve as your trusted strategic partner, handling every operational detail so you can focus on long-term growth and delivering unforgettable guest experiences. Founded by Ashok Soni, who brings over 15 years of leadership experience, Soni Global Inc. bridges the gap between operational excellence and hands-on execution in the hospitality sector. Under Ashok’s direction, our team delivers innovation, accountability, and structured systems that help hotel owners achieve consistent, measurable results while reducing operational burdens. Managing a hotel today is complex — from staff training and guest satisfaction to facility upkeep and revenue optimization. Soni Global Inc. takes ownership of both daily operations and long-term strategy, allowing hotel owners to stay focused on scaling their business and strengthening their brand.
        </p>
    </section>

  </div>
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
  font-family: Arial, sans-serif;
}
.about-layout {
  display: flex;
  padding: 20px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

/* Vertically center the whole logo block */
.logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
}

/* Horizontally layout SG | Divider | SONI GLOBAL */
.logo-container {
  display: flex;
  align-items: center;
  gap: 15px;
}

.abbrv_size {
  font-size: 80px;
  letter-spacing: 1px;
  color: #ADD8E6;
  border: 1px solid white;
  padding: 10px 15px;
}

.divider {
  width: 1px;
  height: 80px;
  background-color: white;
}

.text-block {
  text-align: left;
}

.brand-name {
  margin: 0;
  font-size: 80px;
  color: #ADD8E6;
}

.subtitle {
  color: #ADD8E6;
  font-size: 80px;
}

.about-text {
  flex: 1;
  padding-left: 40px;
  line-height: 1.6;
}


</style>
