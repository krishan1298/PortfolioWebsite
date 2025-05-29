<template>
            <div class="image-left-layout">
    <img src="@/assets/Mission Photo.png" alt="Company Logo" class="left-image" />
        <section class="mission-vision">
      <h2>Mission / Vision</h2>
      <div class="mission">
        <h3>Mission:</h3>
        <p>To empower hotel owners and investors by managing the complete spectrum of hospitality operations with excellence, reliability, and innovation.</p>
      </div>
      <div class="vision">
        <h3>Vision:</h3>
        <p>To become a leading provider of operational management services for hotels, known for delivering scalable solutions that drive growth, efficiency, and guest satisfaction.</p>
      </div>
      <div class="vision">
        <h3>Our Core Values:</h3>
        <li>Operational Excellence — We hold ourselves to the highest standards in every detail of hotel operations.</li>
        <li>Client-Centered Service — We prioritize the unique needs and goals of each client we serve.</li>
        <li>Innovation and Adaptability — We embrace new ideas and technologies to stay ahead in a fast-evolving industry.</li>
        <li>Integrity and Accountability — We operate with honesty, transparency, and a commitment to delivering on promises.</li>
        <li>Long-Term Partnership — We aim to build enduring relationships that foster mutual growth and success.</li>
      </div>
    </section>
</div>
</template>
<script>
export default {
  name: 'MissionPage',
};
</script>

<style scoped>
.mission-vision {
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
  gap:10px;
  padding: 20px;
}

.left-image {
  width: 1000px;
  height: auto;
  border-radius: 8px; /* Optional: rounded corners */
}
</style>