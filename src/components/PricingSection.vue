<script setup>
import { ref } from 'vue';

const pricingTiers = ref([
  {
    title: 'Web Development',
    price: 'Project-Based',
    description: 'For building dynamic accessible websites and robust web applications from scratch.',
    features: [
      'Responsive Design',
      'Backend with PHP/Laravel',
      'Frontend with Vue/React',
      'Database Integration',
      'SEO Best Practices'
    ],
    isFeatured: false
  },
  {
    title: 'Mobile App Development',
    price: 'Contact for Quote',
    description: 'For creating beautiful and accessible, cross-platform mobile apps for iOS & Android.',
    features: [
      'React Native Development',
      'UI/UX Design Mockups',
      'API Integration',
      'Push Notifications',
      'App Store Deployment Support'
    ],
    isFeatured: true
  },
  {
    title: 'Accessibility Audit',
    price: 'Starting at $100',
    description: 'For ensuring your existing website is inclusive and WCAG compliant.',
    features: [
      'Full Site Scan & Report',
      'Code-Level Recommendations',
      'Screen Reader Testing',
      'Usability Feedback',
      'Compliance Certificate'
    ],
    isFeatured: false
  }
]);
</script>

<template>
    
  <section id="pricing" class="pricing-section" data-aos="zoom-in-up">
    <div class="section-title">
      <h2>Pricing & Plans</h2>
      <p>Flexible plans tailored to your project needs. Let's build something great.</p>
    </div>

    <div class="pricing-grid">
      <div v-for="tier in pricingTiers" :key="tier.title" class="pricing-card" :class="{ 'is-featured': tier.isFeatured }">
        <div v-if="tier.isFeatured" class="featured-badge">Most Popular</div>
        <h3 class="tier-title">{{ tier.title }}</h3>
        <div class="tier-price">{{ tier.price }}</div>
        <p class="tier-description">{{ tier.description }}</p>
        <ul class="tier-features">
          <li v-for="feature in tier.features" :key="feature">{{ feature }}</li>
        </ul>
        <!-- THIS IS THE LINE TO CHANGE: href="#contact" -->
        <a href="#contact" class="cta-button">Get Started</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing-section {
  width: 90%;
  max-width: 1200px;
  padding: 60px 0;
  margin: 0 auto;
  background-color: transparent;
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
  transition: color 0.3s ease;
}
.section-title p {
  font-size: 1.1rem;
  color: var(--text-color-secondary);
  transition: color 0.3s ease;
}

/* --- Pricing Grid --- */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  align-items: stretch; /* Make all cards the same height */
}

/* --- Pricing Card --- */
.pricing-card {
  background-color: var(--card-bg);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  padding: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
  position: relative;
}

.pricing-card.is-featured {
  border-color: var(--accent-color);
  transform: scale(1.05);
  box-shadow: 0 15px 30px var(--shadow-color);
}

.featured-badge {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--accent-color);
  color: var(--card-bg);
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* --- Card Content --- */
.tier-title {
  font-size: 1.5rem;
  color: var(--text-color-primary);
  margin-bottom: 15px;
  transition: color 0.3s ease;
}
.tier-price {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent-color-hover);
  margin-bottom: 10px;
  transition: color 0.3s ease;
}
.tier-description {
  color: var(--text-color-secondary);
  margin-bottom: 25px;
  min-height: 50px; /* Ensures vertical alignment is consistent */
  transition: color 0.3s ease;
}
.tier-features {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
  text-align: left;
  flex-grow: 1; /* Pushes the button to the bottom */
}
.tier-features li {
  color: var(--text-color-secondary);
  margin-bottom: 12px;
  position: relative;
  padding-left: 25px;
  transition: color 0.3s ease;
}
.tier-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-color);
  font-weight: 600;
  transition: color 0.3s ease;
}

/* --- Call to Action Button --- */
.cta-button {
  background-color: var(--border-color);
  color: var(--text-color-primary);
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;
  border: 1px solid transparent;
}
.pricing-card.is-featured .cta-button {
  background-color: var(--accent-color);
  color: var(--card-bg);
}
.cta-button:hover {
  background-color: var(--accent-color-hover);
  color: var(--card-bg); /* Ensure text is readable on hover */
}

/* --- Responsive Adjustments --- */
@media (max-width: 992px) {
  .pricing-section {
    padding: 40px 20px;
  }
  .pricing-grid {
    grid-template-columns: 1fr; /* Stack cards on smaller screens */
    gap: 40px; /* Increase gap for stacked cards */
  }
  .pricing-card.is-featured {
    transform: scale(1); /* Reset scaling on smaller screens */
  }
}
</style>