<template>
  <div class="loading-container">
    <div class="dots-container">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  </div>
</template>

<style scoped>
/* 'scoped' means these styles only apply to this component */
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #1a1a1a;
}

.dots-container {
  display: flex;
}

.dot {
  width: 20px;
  height: 20px;
  margin: 0 10px;
  background-color: #ffffff;
  border-radius: 50%;
  animation: bounce 1.4s infinite ease-in-out both;
}


.dot:nth-child(1) {
  animation-delay: -0.32s;
}

.dot:nth-child(2) {
  animation-delay: -0.16s;
}


@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1.0);
  }
}
</style>