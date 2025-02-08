<script setup>
const playSound = (frequency) => {
  const audioContext = new AudioContext();
  const oscillator = audioContext.createOscillator();
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  oscillator.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.2);
}
</script>

<template>
  <div class="piano">
    <div class="white-group">
      <div class="key white" @click="playSound(261.626)"></div>
      <div class="key white" @click="playSound(293.665)"></div>
      <div class="key white" @click="playSound(329.628)"></div>
      <div class="key white" @click="playSound(349.228)"></div>
      <div class="key white" @click="playSound(391.995)"></div>
      <div class="key white" @click="playSound(440.000)"></div>
      <div class="key white" @click="playSound(493.883)"></div>
      <div class="key white" @click="playSound(523.251)"></div>
    </div>
    <div class="black-group">
      <div class="key black" @click="playSound(277.183)"></div>
      <div class="key black" @click="playSound(311.127)"></div>
      <div class="key black" @click="playSound(369.994)"></div>
      <div class="key black" @click="playSound(415.305)"></div>
      <div class="key black" @click="playSound(466.16)"></div>
    </div>
  </div>
</template>

<style scoped>
.piano {
  --key-scale: 20;
  --black-key-width: calc(2px * var(--key-scale));
  --white-key-width: calc(3px * var(--key-scale));
  --black-key-height: calc(6px * var(--key-scale));
  --white-key-height: calc(10px * var(--key-scale));
  width: calc(var(--white-key-width) * 7 + 1);
  height: var(--white-key-height);
  position: relative;
  overflow: hidden;
}

.key {
  position: absolute;
  border: 1px solid black;
}

.white {
  width: var(--white-key-width);
  height: var(--white-key-height);
  background-color: white;
}

.black {
  background-color: black;
  width: var(--black-key-width);
  height: var(--black-key-height);
  z-index: 1;
}

.white:nth-child(2) {
  left: calc((var(--white-key-width) - 1px) * 1);
}

.white:nth-child(3) {
  left: calc((var(--white-key-width) - 1px) * 2);
}

.white:nth-child(4) {
  left: calc((var(--white-key-width) - 1px) * 3);
}

.white:nth-child(5) {
  left: calc((var(--white-key-width) - 1px) * 4);
}

.white:nth-child(6) {
  left: calc((var(--white-key-width) - 1px) * 5);
}

.white:nth-child(7) {
  left: calc((var(--white-key-width) - 1px) * 6);
}

.white:nth-child(8) {
  left: calc((var(--white-key-width) - 1px) * 7);
}

.black:nth-child(1) {
  left: calc(((2 * var(--white-key-width)) + 1px - var(--black-key-width)) / 2);
}

.black:nth-child(2) {
  left: calc(((2 * var(--white-key-width)) + 1px - var(--black-key-width)) / 2 + (var(--white-key-width) - 1px) * 1);
}

.black:nth-child(3) {
  left: calc(((2 * var(--white-key-width)) + 1px - var(--black-key-width)) / 2 + (var(--white-key-width) - 1px) * 3);
}

.black:nth-child(4) {
  left: calc(((2 * var(--white-key-width)) + 1px - var(--black-key-width)) / 2 + (var(--white-key-width) - 1px) * 4);
}

.black:nth-child(5) {
  left: calc(((2 * var(--white-key-width)) + 1px - var(--black-key-width)) / 2 + (var(--white-key-width) - 1px) * 5);
}
</style>