<template>
          <div class="image-left-layout">
    <img src="@/assets/Careers Photo.png" alt="Company Logo" class="left-image" />
        <section class="careers">
      <h2>Careers</h2>
        <h3>We’re always looking for passionate, talented individuals to join our team. Explore opportunities such as:</h3>
            <li>General Manager — Lead overall hotel operations, team performance, and guest satisfaction.</li>
            <li>Assistant General Manager — Support day-to-day operations, manage departments, and help drive success.</li>
            <li>Operations Manager — Oversee workflow, ensure efficiency, and maintain top-tier service standards.</li>
            <li>Sales & Marketing — Build strong client relationships, drive bookings, and promote brand visibility.</li>
            <li>Maintenance — Ensure the property runs smoothly and safely, handling repairs and upkeep with care.</li>

        <h3>Why Work With Us?</h3>
            <li>Career development and training</li>
            <li>Dynamic, supportive team culture</li>
            <li>Opportunities for advancement</li>
            <li>Work with premier hotel brands</li>
        <h3>Ready to Apply?</h3>
        <li>Email us your resume: <a href="mailto:">soniglobalinc@gmail.com</a></li>
        <li>Call us: <a href="tel:+6786656252">678-665-6252</a></li>

    </section>
    </div>
</template>

<script>
export default {
  name: 'ClientsPage',
};
</script>

<style scoped>
.careers {
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