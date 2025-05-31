<template>
    <nav class="nav">
      <RouterLink to="/PortfolioWebsite/">About Us</RouterLink>
      <RouterLink to="/PortfolioWebsite/services">Services</RouterLink>
      <RouterLink to="/PortfolioWebsite/mission">Mission/Vision</RouterLink>
      <RouterLink to="/PortfolioWebsite/values">Core Values </RouterLink>
      <RouterLink to="/PortfolioWebsite/clients">Clients</RouterLink>
      <RouterLink to="/PortfolioWebsite/founder">Meet Our Founder</RouterLink>
      <RouterLink to="/PortfolioWebsite/careers">Careers</RouterLink>
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
  