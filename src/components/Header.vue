<template>
  <div class="header">
    <div class="logo-container">
      <div class="abbrv_size">SG</div>
      <div class="divider"></div>
      <div class="text-block">
        <h1 class="brand-name">SONI</h1>
        <div class="subtitle">GLOBAL Inc.</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  text-align: center;
  padding: 20px;
  background-color: #474141bb;
  color: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.abbrv_size {
  margin: 0;
  font-size: 28px;
  letter-spacing: 1px;
  color: #ADD8E6;
  border: 1px solid white;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.size{
  height: 60px;
  width: auto;
}

.divider {
  width: 1px;
  height: 50px;
  background-color: white;
}

.text-block {
  text-align: left;
}

.brand-name {
  margin: 0;
  font-size: 28px;
  letter-spacing: 1px;
  color: #ADD8E6;
}

.subtitle {
color:#ADD8E6;
}
</style>
