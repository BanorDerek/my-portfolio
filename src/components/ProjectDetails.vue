<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { projects } from '../projects.js';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const route = useRoute();
const router = useRouter();
const project = ref(projects.find(p => p.slug === route.params.slug));
const swiperModules = [Navigation, Pagination, A11y];

onMounted(() => {
  if (!project.value) {
    router.push('/');
    return;
  }
  
  if (window.Prism) {
    window.Prism.highlightAll();
  }
});
</script>

<template>
  <div v-if="project" class="project-details-page">
    <div class="container">
      <router-link to="/#portfolio" class="back-link">← Back to Portfolio</router-link>

      <header class="project-header">
        <h1>{{ project.title }}</h1>
        <div class="project-links">
          <a v-if="project.liveLink && project.liveLink !== '#'" :href="project.liveLink" target="_blank" class="btn btn-primary">View Live Site</a>
          <a v-if="project.githubLink && project.githubLink !== '#'" :href="project.githubLink" target="_blank" class="btn btn-secondary">View on GitHub</a>
        </div>
      </header>
      
      <swiper
        class="project-slider"
        :modules="swiperModules"
        :slides-per-view="1"
        :space-between="30"
        navigation
        :pagination="{ clickable: true }"
      >
        <swiper-slide>
          <img :src="project.image" :alt="project.title + ' main image'" />
        </swiper-slide>
        <swiper-slide v-for="img in project.galleryImages" :key="img">
          <img :src="img" :alt="project.title + ' gallery image'" />
        </swiper-slide>
      </swiper>
      
      <div class="project-body">
        <div class="project-description">
          <h2>About The Project</h2>

          <div v-for="(block, index) in project.fullDescription" :key="index">
            <p v-if="block.type === 'paragraph'">{{ block.content }}</p>
            <h3 v-if="block.type === 'heading'" class="features-heading">{{ block.content }}</h3>
            <ul v-if="block.type === 'list'" class="features-list">
              <li v-for="(item, i) in block.items" :key="i">{{ item }}</li>
            </ul>
          </div>
        </div>

        <div class="project-sidebar">
          <h3>Technology Stack</h3>
          <div class="stack-tags">
            <div v-for="(techs, category) in project.stack" :key="category" class="stack-category">
              <span v-for="tech in techs" :key="tech" class="tech-tag">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
      
     <div v-if="project.codeSnippets && project.codeSnippets.length > 0" class="code-snippets-section">
  <h2>Code Snippets</h2>
  <div v-for="snippet in project.codeSnippets" :key="snippet.title" class="snippet-block">
    <h4>{{ snippet.title }}</h4>
    <div class="code-container">
      <pre><code :class="'language-' + snippet.language">{{ snippet.code.trim() }}</code></pre>
    </div>
</div>
</div>
    </div>
  </div>
</template>

<style scoped>
/* --- Slider Styles --- */
.project-slider {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 40px;
  aspect-ratio: 16 / 9;
  min-height: 250px;
  background-color: var(--bg-color);
  transition: background-color 0.3s ease;
}
.project-slider .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.project-slider img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
/* Use :deep to style Swiper's internal elements with our theme variables */
:deep(.swiper-button-next), 
:deep(.swiper-button-prev) { 
  color: var(--accent-color);
  transition: color 0.3s ease;
}
:deep(.swiper-pagination-bullet-active) { 
  background-color: var(--accent-color);
  transition: background-color 0.3s ease;
}

/* --- General Page Layout --- */
.project-details-page {
  padding-top: 120px;
  padding-bottom: 80px;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}
.back-link {
  display: inline-block;
  margin-bottom: 30px;
  color: var(--accent-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

/* --- Project Header --- */
.project-header {
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 20px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  transition: border-color 0.3s ease;
}
.project-header h1 {
  font-size: 2.5rem;
  color: var(--text-color-primary);
  margin: 0;
  transition: color 0.3s ease;
}

/* --- Buttons --- */
.project-links .btn {
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  margin-left: 15px;
  border: 1px solid transparent;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}
.btn-primary { 
  background-color: var(--accent-color); 
  color: var(--card-bg); 
}
.btn-primary:hover {
  background-color: var(--accent-color-hover);
}
.btn-secondary { 
  background-color: var(--card-bg);
  color: var(--text-color-primary);
  border-color: var(--border-color);
}
.btn-secondary:hover {
  background-color: var(--bg-color);
}

/* --- Project Body and Description --- */
.project-body {
  display: grid;
  grid-template-columns: 3fr 1fr; /* Using your preferred wider layout */
  gap: 50px;
}
.project-description h2, .code-snippets-section h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: var(--text-color-primary);
  transition: color 0.3s ease;
}
.project-description p {
  line-height: 1.8;
  margin-bottom: 15px;
  color: var(--text-color-secondary);
  transition: color 0.3s ease;
}
.features-heading {
  font-size: 1.2rem;
  color: var(--text-color-primary);
  margin-top: 25px;
  margin-bottom: 15px;
  transition: color 0.3s ease;
}
.features-list {
  line-height: 1.8;
  color: var(--text-color-secondary);
  padding-left: 20px;
  transition: color 0.3s ease;
}
.features-list li {
  margin-bottom: 10px;
}

/* --- Sidebar and Tech Stack --- */
.project-sidebar {
  background-color: var(--card-bg);
  padding: 25px;
  border-radius: 12px;
  height: fit-content;
  border: 1px solid var(--border-color);
  transition: background-color 0.3s ease, border-color 0.3s ease;
}
.project-sidebar h3 {
  font-size: 1.2rem;
  margin-top: 0;
  margin-bottom: 15px;
  color: var(--text-color-primary);
  transition: color 0.3s ease;
}
.stack-tags { display: flex; flex-direction: column; gap: 10px; }
.stack-category { display: flex; flex-wrap: wrap; gap: 10px; }
.tech-tag {
  background-color: color-mix(in srgb, var(--accent-color) 15%, transparent);
  color: var(--accent-color);
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* --- Code Snippets --- */
.code-snippets-section { 
  margin-top: 60px; 
}
.code-snippets-section h2 { 
  border-top: 1px solid var(--border-color); 
  padding-top: 40px; 
  transition: border-color 0.3s ease;
}
.code-container {
  overflow-x: auto;      
  border-radius: 8px;   
  /* This is a standard dark background for code, which works well in both themes */
  background: #2d2d2d; 
}
.code-container pre[class*="language-"] {
  background: none;       
  margin: 0;             
  padding: 1.2em;         
  min-width: fit-content; 
}

/* --- Responsive Adjustments --- */
@media (max-width: 800px) {
  .project-body { 
    grid-template-columns: 1fr; 
    gap: 40px; 
  }
}
</style>