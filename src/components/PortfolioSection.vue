<script setup>
// This script section is perfect and requires no changes.
import { projects as allProjects } from '../projects.js';
</script>

<template>
  <section id="portfolio" class="portfolio-section">
    <div class="section-title" data-aos="fade-up">
      <h2>My Portfolio</h2>
      <p>A selection of projects I've worked on.</p>
    </div>

    <div class="portfolio-grid">
      <div 
        v-for="(project, index) in allProjects" 
        :key="project.slug" 
        class="project-card"
        :class="{ 'is-pending': project.type === 'pending' }"
        data-aos="fade-up"
        :data-aos-delay="100 * (index % 3)"
      >
        <template v-if="project.type === 'completed'">
          <div class="card-image-container">
            <img :src="project.image" :alt="project.title + ' screenshot'" />
          </div>
          <div class="card-content">
            <div class="card-stack">
              <!-- 
                START OF THE FIX
                The old line was: <span v-for="tech in project.stack" ... >
                The new line reads the values from your stack object and flattens them into a single array.
              -->
              <span v-for="tech in Object.values(project.stack).flat()" :key="tech" class="tech-tag">{{ tech }}</span>
              <!-- END OF THE FIX -->
            </div>
            <h3 class="card-title">{{ project.title }}</h3>
            <p class="card-description">{{ project.description }}</p>
          </div>
          <div class="card-footer">
            <router-link :to="'/project/' + project.slug" class="card-link">
              Read More →
            </router-link>
          </div>
        </template>
        
        <template v-else>
          <div class="pending-content">
            <h3 class="card-title">{{ project.title }}</h3>
            <div v-if="project.stack" class="card-stack">
              <!-- This loop is simpler because pending projects use a flat array -->
              <span v-for="tech in project.stack" :key="tech" class="tech-tag">{{ tech }}</span>
            </div>
            <p class="card-description">{{ project.description }}</p>
            <div class="coming-soon-badge">Coming Soon</div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.portfolio-section {
  width: 90%;
  max-width: 1200px;
  padding: 60px 0;
  margin: 0 auto;
  /* This section is a container, not a card, so it should be transparent */
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

/* --- Portfolio Grid --- */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
}

/* --- Project Card --- */
.project-card {
  background-color: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
}
.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px var(--shadow-color);
}

.card-image-container {
  height: 200px;
  /* Use a subtle version of the main bg color for the image container */
  background-color: var(--bg-color);
  transition: background-color 0.3s ease;
}
.card-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Use 'cover' for a better look on most images */
}

.card-content {
  padding: 25px;
  flex-grow: 1; /* Ensures footer stays at the bottom */
}

.card-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}
.tech-tag {
  /* For tags, we can use a subtle background related to the accent color */
  background-color: color-mix(in srgb, var(--accent-color) 15%, transparent);
  color: var(--accent-color);
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.card-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-color-primary);
  margin-bottom: 10px;
  transition: color 0.3s ease;
}
.card-description {
  color: var(--text-color-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.card-footer {
  padding: 0 25px 25px 25px;
}
.card-link {
  color: var(--accent-color);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}
.card-link:hover {
  color: var(--accent-color-hover);
}

/* --- Pending Project Card --- */
.project-card.is-pending {
  border-style: dashed;
  border-color: var(--border-color);
  align-items: center;
  justify-content: center;
  text-align: center;
}
.pending-content {
  padding: 30px;
}
.project-card.is-pending .card-stack {
  justify-content: center;
}

.coming-soon-badge {
  display: inline-block;
  margin-top: 20px;
  padding: 6px 15px;
  background-color: var(--accent-color);
  color: var(--card-bg); /* Text color should contrast with the badge background */
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* --- Responsive Adjustments --- */
@media (max-width: 900px) {
  .portfolio-section {
    padding: 20px 0;
    padding-right: 15px;
    width: 100%; /* Take full width to manage padding internally */
  }
  .section-title {
    padding: 0 20px; /* Add padding to the title on mobile */
  }
  .portfolio-grid {
    grid-template-columns: 1fr;
    gap: 25px;
    padding: 0 20px; /* Add padding to the grid on mobile */
  }
 
}

@media (max-width: 400px) {
  .portfolio-grid {
    /* Switch to a smaller minmax on very small screens if needed */
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}
</style>