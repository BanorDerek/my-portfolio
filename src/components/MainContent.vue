<script setup>
import { ref, onMounted, computed } from 'vue';
import portraitImage from '../assets/portrait1.jpg';

const languages = ref([
  { name: 'React Native', level: 95, label: 'Expert' },
  { name: 'HTML & CSS', level: 98, label: 'Mastery' },
  { name: 'Laravel', level: 90, label: 'Expert' },
  { name: 'PHP', level: 88, label: 'Proficient' },
  { name: 'AWS', level: 85, label: 'Proficient' },
  { name: 'React.js', level: 80, label: 'Proficient' },
  { name: 'JavaScript (ES6+)', level: 82, label: 'Proficient' },
  { name: 'Vue.js', level: 70, label: 'Competent' },
]);

const displayedText = ref('');
const languageIndex = ref(0);
const isDeleting = ref(false);
const typingSpeed = 150;
const deletingSpeed = 75;
const delayBetweenWords = 2000;

const typeWriterEffect = () => {
  const currentFullText = languages.value[languageIndex.value].name;
  if (isDeleting.value) {
    displayedText.value = currentFullText.substring(0, displayedText.value.length - 1);
  } else {
    displayedText.value = currentFullText.substring(0, displayedText.value.length + 1);
  }

  if (!isDeleting.value && displayedText.value === currentFullText) {
    setTimeout(() => { isDeleting.value = true; typeWriterEffect(); }, delayBetweenWords);
  } else if (isDeleting.value && displayedText.value === '') {
    isDeleting.value = false;
    languageIndex.value = (languageIndex.value + 1) % languages.value.length;
    setTimeout(typeWriterEffect, typingSpeed);
  } else {
    const currentSpeed = isDeleting.value ? deletingSpeed : typingSpeed;
    setTimeout(typeWriterEffect, currentSpeed);
  }
};

const currentLanguage = computed(() => languages.value[languageIndex.value]);

const getProficiencyEmoji = (level) => {
  if (level > 95) return '👑';
  if (level > 89) return '🚀';
  if (level > 79) return '🔥';
  if (level >= 70) return '💪';
  return '🌱';
};

onMounted(() => {
  setTimeout(typeWriterEffect, 250);
});
</script>

<template>
  <main class="main-content" data-aos="fade-up">
    <div class="intro-container">
      <div class="introduction-text">
        <h1 class="greeting">Hello👋, I'm </h1>
        <h2 class="name">Derek Banor.</h2>
        <p class="intro-sentence">I build powerful and accessible applications with tools like:</p>

        <div class="typewriter-container" aria-hidden="true">
          <span class="typed-text">{{ displayedText }}</span>
          <span class="cursor"></span>
        </div>
        <div class="skills-list" aria-hidden="true">
          <Transition name="fade" mode="out-in">
            <div class="skill-item" :key="currentLanguage.name">
              <span class="skill-emoji">{{ getProficiencyEmoji(currentLanguage.level) }}</span>
              <div class="skill-details">
                <span class="skill-level-text">{{ currentLanguage.label }}</span>
                <div class="skill-bar-container">
                  <div class="skill-bar-level" :style="{ width: currentLanguage.level + '%' }"></div>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <div class="sr-only">
          <h3>My Skills and Proficiency Levels:</h3>
          <ul>
            <li v-for="lang in languages" :key="lang.name + '-sr'">
              {{ lang.name }}, proficiency level: {{ lang.label }}.
            </li>
          </ul>
        </div>
        
 <!-- Social Links Section with SVG Icons -->
        <div class="social-links-container">
          <h3>Connect with me:</h3>
          <div class="social-icons">
    
            <a href="mailto:derek.banor@yahoo.com" class="social-icon" aria-label="Email" title="Email">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img">
                <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"/>
              </svg>
            </a>
    
            <a href="https://wa.me/2349078964773" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="WhatsApp" title="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.96 2.76 15.91 3.89 17.59L2.33 21.68L6.61 20.15C8.21 21.13 10.06 21.7 12.04 21.7C17.5 21.7 21.95 17.25 21.95 11.79C21.95 6.33 17.5 2 12.04 2M12.04 20.26C10.33 20.26 8.7 19.72 7.31 18.79L6.9 18.54L4.85 19.11L5.44 17.11L5.18 16.7C4.16 15.24 3.57 13.5 3.57 11.79C3.57 7.27 7.39 3.45 12.04 3.45C16.69 3.45 20.5 7.27 20.5 11.91C20.5 16.56 16.69 20.26 12.04 20.26M17.43 14.87C17.15 14.73 15.65 14 15.38 13.89C15.11 13.78 14.93 13.71 14.75 13.98C14.57 14.25 14.03 14.91 13.85 15.11C13.66 15.31 13.48 15.34 13.21 15.2C12.94 15.07 11.96 14.74 10.79 13.69C9.84 12.85 9.22 11.83 9.04 11.56C8.86 11.29 9 11.15 9.12 11.03C9.23 10.92 9.38 10.73 9.52 10.57C9.66 10.42 9.71 10.3 9.8 10.12C9.89 9.94 9.82 9.76 9.75 9.62C9.68 9.48 9.17 8.24 8.94 7.67C8.72 7.12 8.49 7.19 8.32 7.19H7.81C7.64 7.19 7.37 7.26 7.13 7.5C6.9 7.74 6.24 8.36 6.24 9.53C6.24 10.7 7.16 11.81 7.28 11.98C7.39 12.15 9.18 14.85 11.91 16.11C12.56 16.41 13.06 16.56 13.43 16.68C14.1 16.88 14.65 16.84 15.08 16.48C15.58 16.06 16.39 15.13 16.62 14.87C16.85 14.6 16.62 14.47 16.35 14.33H17.43V14.87Z"/>
              </svg>
            </a>
         
            <a href="https://www.linkedin.com/in/derekbanor" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LinkedIn" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img">
                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 6 8 5.44 7.19 5.44A1.68 1.68 0 0 0 5.5 7.12C5.5 7.94 6.06 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/>
              </svg>
            </a>
           
            <a href="https://github.com/banorderek" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="GitHub" title="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img">
                <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.55,5.9 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.45,5.9 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Right Column: Portrait Image -->
      <div class="portrait-container">
        <img :src="portraitImage" alt="A portrait of Derek Banor" class="portrait-image" />
      </div>

    </div>
  </main>
</template>

<style scoped>
/* A11Y FIX: Screen-reader-only class */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* --- Main Content Card --- */
.main-content {
  width: 90%;
  max-width: 1200px;
  margin-top: 30px; 
  background-color: var(--card-bg);
  padding: 40px 50px;
  border-radius: 12px;
  box-shadow: 0 10px 30px var(--shadow-color);
  line-height: 1.6;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

/* --- Layout and Text Styles --- */
.intro-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
}
.introduction-text { 
  flex: 1.2; 
}
.greeting {
  font-size: 1.5rem;
  color: var(--accent-color);
  margin: 0;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: color 0.3s ease;
}
.name {
  font-size: 4rem;
  font-weight: 700;
  color: var(--text-color-primary);
  margin: 0 0 10px 0;
  transition: color 0.3s ease;
}
.intro-sentence { 
  font-size: 1.2rem; 
  color: var(--text-color-secondary);
  margin: 20px 0 5px 0; 
  transition: color 0.3s ease;
}

/* --- Portrait Image --- */
.portrait-container { 
  flex: 1; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
}
.portrait-image { 
  max-width: 100%; 
  width: 350px; 
  height: 350px; 
  object-fit: cover; 
  border-radius: 50%; 
  border: 5px solid var(--border-color); /* Use border variable */
  /* The shadow is a static color, which is fine, but can be a variable too if desired */
  box-shadow: 0 0 25px rgba(0, 170, 255, 0.3); 
  transition: border-color 0.3s ease;
}

/* --- Typewriter Effect --- */
.typewriter-container { 
  font-size: 2.5rem; 
  font-weight: 600; 
  color: var(--text-color-primary); /* Base color for the container */
  min-height: 60px; 
  display: flex; 
  align-items: center; 
}
.typed-text { 
  color: var(--accent-color-hover); /* Use the hover/brighter accent color */
}
.cursor { 
  display: inline-block; 
  width: 3px; 
  background-color: var(--accent-color-hover);
  margin-left: 5px; 
  animation: blink 0.7s infinite; 
}
@keyframes blink { 
  0%, 100% { opacity: 1; } 
  50% { opacity: 0; } 
}

/* --- Skills Section --- */
.skills-list { 
  margin-top: 30px; 
  min-height: 80px; 
}
.skill-item { 
  display: flex; 
  align-items: center; 
  gap: 20px; 
}
.skill-emoji { 
  font-size: 2.5rem; 
  line-height: 1; 
}
.skill-details { 
  flex-grow: 1; 
}
.skill-level-text { 
  color: var(--text-color-primary); /* Use primary text color */
  font-weight: 500; 
  display: block; 
  margin-bottom: 8px; 
  font-size: 1.1rem; 
  transition: color 0.3s ease;
}
.skill-bar-container { 
  width: 100%; 
  background-color: var(--border-color); /* Use border color for the track */
  border-radius: 5px; 
  height: 14px; 
  overflow: hidden; 
  transition: background-color 0.3s ease;
}
.skill-bar-level { 
  height: 100%; 
  background: linear-gradient(90deg, var(--accent-color), var(--accent-color-hover)); 
  border-radius: 5px; 
  transition: width 1s ease-out; 
}

/* --- Vue Transition --- */
.fade-enter-active, .fade-leave-active { 
  transition: opacity 0.4s ease; 
}
.fade-enter-from, .fade-leave-to { 
  opacity: 0; 
}

/* --- Social Links --- */
.social-links-container {
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid var(--border-color); /* Use border variable */
  transition: border-color 0.3s ease;
}
.social-links-container h3 {
  color: var(--text-color-primary);
  font-weight: 500;
  margin: 0 0 20px 0;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}
.social-icons {
  display: flex;
  align-items: center;
  gap: 25px;
}
.social-icon {
  color: var(--text-color-secondary);
  text-decoration: none;
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
}
.social-icon svg {
  width: 30px;
  height: 30px;
  fill: currentColor;
}
.social-icon:hover {
  color: var(--accent-color-hover);
  transform: translateY(-5px);
}

/* --- Responsive Adjustments --- */
@media (max-width: 900px) {
    .main-content {
      /* Reduce padding on smaller screens */
      padding: 30px 25px;
      /* Remove margin-top and let parent handle spacing */
      margin-top: 0;
    }
    
  .intro-container { 
    flex-direction: column; 
    text-align: center; 
  }
  .greeting { 
    justify-content: center; 
  }
  .portrait-container { 
    margin-top: 40px; 
    order: -1; 
  }
  .portrait-image { 
    width: 250px; 
    height: 250px; 
  }
  .name { 
    font-size: 3rem; 
  }
  .typewriter-container { 
    font-size: 1.8rem; 
    justify-content: center; 
  }
  .skill-item { 
    justify-content: center; 
  }
  
  /* The key fix for mobile alignment */
  .skill-details { 
    flex-grow: 0;
    text-align: center; 
  }

  .social-icons {
    justify-content: center;
  }
}
</style>