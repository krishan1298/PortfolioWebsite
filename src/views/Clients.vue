<template>
        <div class="image-left-layout">
    <img src="@/assets/Clients Photo.png" alt="Company Logo" class="left-image" />
        <section class="clients">
      <h2>Clients</h2>
      <li>Soni Global Inc. proudly manages properties affiliated with some of the world’s most respected hotel brands, including Marriott, IHG, and Hilton. We deliver comprehensive management services tailored to the specific needs of U.S.-based properties, ensuring seamless alignment with each brand’s operational standards, guest expectations, and performance benchmarks.</li>
    <li>Our client relationships are built on a foundation of consistency, quality, and continuous improvement. Whether managing a luxury resort, a full-service hotel, or a boutique property, we focus on delivering measurable results — driving operational efficiency, optimizing profitability, and enhancing guest satisfaction.
</li>
<li>By partnering closely with our clients, we position their properties for long-term success in a competitive and evolving hospitality market.</li>
    </section>
    </div>
</template>

<script>
export default {
  name: 'ClientsPage',
};
</script>

<style scoped>
.clients {
  background-color: #f4f6f8;
  margin: 1% auto;
  max-width: 900px;
  padding: 20px;
  border-radius: 10px;
  line-height: 1.6;
}
.image-left-layout {
  display: flex;
  align-items: center; /* Vertically align image and text */
  gap: 10px;
  padding: 20px;
}

.left-image {
  width: 1000px;
  height: auto;
  border-radius: 8px; /* Optional: rounded corners */
}
</style>