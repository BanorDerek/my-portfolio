<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import ThemeToggle from './ThemeToggle.vue'; // Import the toggle component

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const route = useRoute();

const navLinks = [
  { text: 'Home', href: '#top' },
  { text: 'About', href: '#about' },
  { text: 'Services', href: '#services' },
  { text: 'Portfolio', href: '#portfolio' },
  { text: 'Résumé', href: '#resume' },
  { text: 'Pricing', href: '#pricing' },
  { text: 'Contact', href: '#contact' },
];

const getLinkUrl = (href) => {
  if (route.path === '/') {
    return href;
  }
  return `/${href}`;
};
</script>

<template>
  <nav class="top-navbar">
    <div class="logo">DareDev</div>

    <button @click="toggleMenu" class="hamburger-menu" :class="{ 'is-active': isMenuOpen }" aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <ul class="nav-links" :class="{ 'is-open': isMenuOpen }">
      <li v-for="link in navLinks" :key="link.text">
        <a :href="getLinkUrl(link.href)" @click="closeMenu">{{ link.text }}</a>
      </li>
      <!-- Add the theme toggle as the last item in the list -->
      <li class="theme-toggle-container">
        <ThemeToggle />
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.top-navbar {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: 80%;
  max-width: 1100px;
  /* Use CSS variables for colors */
  background-color: var(--nav-bg);
  box-shadow: 0 4px 15px var(--shadow-color);
  padding: 15px 30px;
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(10px); /* Nice glassy effect */
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.logo {
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--text-color-primary);
  transition: color 0.3s ease;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center; /* Vertically align items */
  gap: 25px;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-color-primary);
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: var(--accent-color-hover);
}

.theme-toggle-container {
  display: flex;
  align-items: center;
}

.hamburger-menu {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1001;
}

.hamburger-menu span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: var(--text-color-primary);
  margin: 5px 0;
  transition: transform 0.3s ease, opacity 0.3s ease, background-color 0.3s ease;
}

.hamburger-menu.is-active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.hamburger-menu.is-active span:nth-child(2) {
  opacity: 0;
}
.hamburger-menu.is-active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

@media (max-width: 850px) {
  .top-navbar {
    width: 90%;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: 0;
    width: 280px;
    height: 100vh;
    background-color: var(--card-bg); /* Use card background for the panel */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    transform: translateX(100%);
    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), background-color 0.3s ease;
  }

  .nav-links.is-open {
    transform: translateX(0);
  }

  .nav-links a {
    font-size: 1.2rem;
  }
  
  .hamburger-menu {
    display: block;
  }
}
</style>