<script setup>

</script>

<template>
  <div class=rainbow-ring-group>
    <div class="rainbow-ring"></div>
    <div class="rainbow-ring"></div>
    <div class="rainbow-ring"></div>
    <div class="rainbow-ring"></div>
    <div class="rainbow-ring"></div>
    <div class="rainbow-ring"></div>
    <div class="rainbow-ring"></div>
  </div>
</template>

<style scoped>
.rainbow-ring-group {
  position: relative;
  margin: 20px calc(50% - 100px);
  min-height: 200px;
}

.rainbow-ring:nth-of-type(1) {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid transparent;
  border-top-color: red;
  animation: rotate-rainbow 3s linear infinite;
}

.rainbow-ring:nth-of-type(2) {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 5px solid transparent;
  border-top-color: orange;
  animation: rotate-rainbow 2.8s linear infinite;
}

.rainbow-ring:nth-of-type(3) {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 5px solid transparent;
  border-top-color: yellow;
  animation: rotate-rainbow 2.5s linear infinite;
}

.rainbow-ring:nth-of-type(4) {
  position: absolute;
  top: 30px;
  left: 30px;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 5px solid transparent;
  border-top-color: green;
  animation: rotate-rainbow 2.0s linear infinite;
}

.rainbow-ring:nth-of-type(5) {
  position: absolute;
  top: 40px;
  left: 40px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 5px solid transparent;
  border-top-color: blue;
  animation: rotate-rainbow 1.8s linear infinite;
}

.rainbow-ring:nth-of-type(6) {
  position: absolute;
  top: 50px;
  left: 50px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid transparent;
  border-top-color: indigo;
  animation: rotate-rainbow 1.5s linear infinite;
}

.rainbow-ring:nth-of-type(7) {
  position: absolute;
  top: 60px;
  left: 60px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 5px solid transparent;
  border-top-color: violet;
  animation: rotate-rainbow 1.0s linear infinite;
}

@keyframes rotate-rainbow {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>