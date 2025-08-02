<script setup>
// Import ref and onMounted for state and lifecycle hooks
import { ref, onMounted } from 'vue';
import TopNavbar from './components/TopNavbar.vue';
import Loading from './components/LoadingPage.vue'; // Corrected your component name
import { useTheme } from './composables/useTheme'; // Import our new theme composable

// Initialize the theme system. This will read from localStorage
// and apply the correct class to the <body> on startup.
useTheme();

const isLoading = ref(true);

// Set a timer to hide the loader after the component is mounted
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>

<template>
  <Loading v-if="isLoading" />
  
  <div v-else id="app-wrapper">
    <TopNavbar />
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.fullPath + route.hash" />
      </transition>
    </router-view>
  </div>
</template>

<style>
/* 
  GLOBAL STYLES - 'scoped' has been removed
  We define our color palette using CSS Custom Properties (variables).
  This is the single source of truth for colors in the entire application.
*/

/* 1. Light mode (default) variables */
:root {
  --bg-color: #f0f2f5;
  --text-color-primary: #1c1e21;
  --text-color-secondary: #65676b;
  --accent-color: #007BFF;
  --accent-color-hover: #0056b3;
  --card-bg: #ffffff;
  --border-color: #dddfe2;
  --nav-bg: rgba(255, 255, 255, 0.9);
  --shadow-color: rgba(0, 0, 0, 0.08);
}

/* 2. Dark mode overrides */
body.dark-theme {
  --bg-color: rgb(18, 18, 18);
  --text-color-primary: #ffffff;
  --text-color-secondary: #ccc;
  --accent-color: #00aaff;
  --accent-color-hover: #007BFF;
  --card-bg: #2a2a2e;
  --border-color: #444;
  --nav-bg: rgba(33, 33, 33, 0.9);
  --shadow-color: rgba(0, 0, 0, 0.2);
}

/* 3. Apply variables to base elements */
html {
  overflow-anchor: none;
  scroll-behavior: smooth;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color-secondary);
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* --- Your existing fade transition --- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>