import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../components/MainPage.vue';
import ProjectDetails from '../components/ProjectDetails.vue';
import QuoteForm from '../components/QuoteForm.vue'; // Add this import

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainPage,
  },
  {
    path: '/project/:slug',
    name: 'ProjectDetails',
    component: ProjectDetails,
    props: true,
  },
  {
    path: '/quote', // Add this route
    name: 'Quote',
    component: QuoteForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ 
            el: to.hash, 
            behavior: 'smooth',
            top: document.querySelector('header')?.offsetHeight || 100
          });
        }, 100); 
      });
    }
    
    return { top: 0, behavior: 'smooth' };
  },
});

export default router;