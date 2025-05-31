<template>
            <div class="image-left-layout">
    <img src="@/assets/CoreValuesPic.png" alt="Company Logo" class="left-image" />
        <section class="core-values">
      <h2>Core Values</h2>
      <ul>
        <li>Operational Excellence</li>
        <li>Client-Centered Service</li>
        <li>Innovation and Adaptability</li>
        <li>Integrity and Accountability</li>
        <li>Long-Term Partnership</li>
      </ul>
    </section>
    </div>
</template>

<script>
export default {
  name: 'ValuesPage',
};
</script>

<style scoped>
.core-values {
  background-color: #f4f6f8;
  margin: 1% auto;
  width: 900px;
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