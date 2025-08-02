import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../components/MainPage.vue';
import ProjectDetails from '../components/ProjectDetails.vue';

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