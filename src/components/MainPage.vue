<script setup>
import { onMounted, nextTick } from 'vue';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

import MainContent from './MainContent.vue';
import AboutSection from './AboutSection.vue';
import ServicesSection from './ServicesSection.vue';
import PortfolioSection from './PortfolioSection.vue';
import ResumeSection from './ResumeSection.vue';
import PricingSection from './PricingSection.vue';
import ContactSection from './ContactSection.vue';

onMounted(() => {
  nextTick(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100
    });
  });
});
</script>

<template>
  <div class="main-page-container">
    <MainContent />
    <AboutSection />
    <ServicesSection />
    <PortfolioSection />
    <ResumeSection />
    <PricingSection />
    <ContactSection />
  </div>
</template>

<style scoped>
.main-page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 80px; 
  min-height: 100vh;
  box-sizing: border-box;
  gap: 30px;
}
</style>