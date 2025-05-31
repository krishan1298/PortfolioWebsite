<template>
    <nav class="nav">
      <RouterLink to="/about-us">About Us</RouterLink>
      <RouterLink to="/services">Services</RouterLink>
      <RouterLink to="/mission">Mission/Vision</RouterLink>
      <RouterLink to="/values">Core Values </RouterLink>
      <RouterLink to="/clients">Clients</RouterLink>
      <RouterLink to="/founder">Meet Our Founder</RouterLink>
      <RouterLink to="/careers">Careers</RouterLink>
    </nav>
  </template>
  
  <style scoped>
  .nav {
    display: flex;
    justify-content: center;
    gap: 30px;
    background-color: #e0e0e0;
    padding: 15px;
  }
  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
  .router-link-active {
    color: #0077cc;
  }
  </style>
  