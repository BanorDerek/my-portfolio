<script setup>
import { ref } from 'vue';

const services = ref([
  {
    emoji: '💻',
    title: 'Web Development',
    description: 'I build responsive, high-performance websites and dynamic web applications using modern frameworks like Vue.js and React, powered by robust back-ends.'
  },
  {
    emoji: '📱',
    title: 'Mobile App Development',
    description: 'Using React Native, I create beautiful, cross-platform mobile apps for both iOS and Android that deliver a smooth, native-like user experience.'
  },
  {
    emoji: '♿',
    title: 'Accessibility Audits',
    description: 'I ensure your website is inclusive and usable by everyone by auditing against WCAG standards, improving SEO and expanding your user base.'
  }
]);
</script>

<template>
  <section id="services" class="services-section">
   
     <div class="section-title" data-aos="fade-up">
      <h2>My Services</h2>
      <p>Here's what I can do to help you achieve your goals.</p>
    </div>

   
    <div class="services-container">
      
       <div 
        v-for="(service, index) in services" 
        :key="service.title" 
        class="service-card"
        data-aos="fade-up"
        :data-aos-delay="100 * (index + 1)"
      >
        <div class="service-emoji">{{ service.emoji }}</div>
        <h3 class="service-title">{{ service.title }}</h3>
        <p class="service-description">{{ service.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  width: 90%;
  max-width: 1200px;
  /* This section is a container, so its background should be transparent */
  /* to show the main body background (var(--bg-color)) */
  background-color: transparent;
  padding: 60px 0; /* Adjust padding as it's not a card */
  border-radius: 12px;
}

/* --- Section Title --- */
.section-title {
  text-align: center;
  margin-bottom: 50px;
}

.section-title h2 {
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--text-color-primary);
  margin-bottom: 10px;
  transition: color 0.3s ease;
}

.section-title p {
  font-size: 1.1rem;
  color: var(--text-color-secondary);
  max-width: 600px;
  margin: 0 auto;
  transition: color 0.3s ease;
}

/* --- Services Grid --- */
.services-container {
  display: flex;
  justify-content: center; 
  gap: 30px;
  flex-wrap: wrap;
}

.service-card {
  flex: 1; 
  min-width: 280px; 
  max-width: 350px;
  
  background-color: var(--card-bg);
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px var(--shadow-color); /* Use shadow variable */
  border-color: var(--accent-color); /* Use accent color on hover */
}

.service-emoji {
  font-size: 3.5rem;
  line-height: 1;
  margin-bottom: 20px;
  display: inline-block;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-color-primary);
  margin-bottom: 15px;
  transition: color 0.3s ease;
}

.service-description {
  color: var(--text-color-secondary);
  line-height: 1.6;
  transition: color 0.3s ease;
}

@media (max-width: 900px) {
  .services-section {
    padding: 20px 0;
    margin-top: 0;
    margin-right: 15px;
  }
}
</style>