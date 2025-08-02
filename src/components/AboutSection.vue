<script setup>
import { ref, onMounted } from 'vue';

// --- Target numbers for the animation ---
const targetExperience = 3;
const targetCompleted = 5;
const targetPending = 3;

// --- Reactive refs to display the counting numbers ---
const displayedExperience = ref(0);
const displayedCompleted = ref(0);
const displayedPending = ref(0);

// Ref for the component's root element to use with Intersection Observer
const aboutSectionRef = ref(null);

/**
 * A reusable function to animate a number counting up.
 * @param {Ref<Number>} displayRef - The reactive ref to update for the display.
 * @param {Number} targetValue - The final number to count to.
 * @param {Number} duration - The total animation time in milliseconds.
 */
const animateCountUp = (displayRef, targetValue, duration = 2000) => {
  let start = 0;
  const stepTime = Math.abs(Math.floor(duration / targetValue));
  const timer = setInterval(() => {
    start += 1;
    displayRef.value = start;
    if (start === targetValue) {
      clearInterval(timer);
    }
  }, stepTime);
};

//  onMounted is used to set up the Intersection Observer. it
// also ensures the animation only starts when the user sees the section.
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      // isIntersecting is true when the element is in view
      if (entries[0].isIntersecting) {
        // Start all animations
        animateCountUp(displayedExperience, targetExperience);
        animateCountUp(displayedCompleted, targetCompleted);
        animateCountUp(displayedPending, targetPending);
        
        // Stop observing after the animation has run once
        observer.unobserve(aboutSectionRef.value);
      }
    },
    {
      threshold: 0.5, // Trigger when 50% of the element is visible
    }
  );

  // Start observing the component's root element
  observer.observe(aboutSectionRef.value);
});
</script>

<template>
  <!-- Attach the ref to the root element of the component -->
  <section id="about" class="about-section" ref="aboutSectionRef">
    <div class="about-container">
      
      <!-- Left Column: Stats -->
      <div class="stats-column">
        <div class="stat-item">
          <span class="stat-number">{{ displayedExperience }}+</span>
          <p class="stat-label">Years of Experience</p>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ displayedCompleted }}+</span>
          <p class="stat-label">Completed Projects</p>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ displayedPending }}</span>
          <p class="stat-label">Pending Projects</p>
        </div>
      </div>

      <!-- Right Column: About Me Text -->
      <div class="text-column">
        <h2>About Me</h2>
        <p>
          As a dedicated Full-Stack Developer with 3 years of hands-on experience, I thrive on turning complex problems into elegant, user-friendly solutions. I specialize in building robust mobile and web applications from the ground up, leveraging a powerful stack that includes React Native, Laravel, and AWS.
        </p>
        <p>
          I graduated with a degree in Information Technology at Methodist University Accra Ghana, where I built a strong foundation in software engineering principles. My passion lies not just in writing code, but in architecting scalable systems and creating seamless digital experiences. I am always eager to learn new technologies and take on challenging projects that push the boundaries of what's possible.
        </p>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* --- Main Section Container --- */
.about-section {
  width: 90%;
  max-width: 1200px;
  background-color: var(--card-bg);
  padding: 40px 50px;
  border-radius: 12px;
  box-shadow: 0 10px 30px var(--shadow-color);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

/* --- Two-column Layout --- */
.about-container {
  display: flex;
  align-items: center;
  gap: 50px;
}

/* --- Left Column: Stats --- */
.stats-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;
}

.stat-item {
  padding: 15px;
  border-left: 4px solid var(--accent-color);
  background-color: rgba(128, 128, 128, 0.05); /* Use a semi-transparent color for subtle background */
  border-radius: 0 8px 8px 0;
  transition: border-color 0.3s ease;
}

.stat-number {
  display: block;
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--accent-color-hover); 
  line-height: 1;
  transition: color 0.3s ease;
}

.stat-label {
  margin: 5px 0 0 0;
  font-size: 1rem;
  color: var(--text-color-secondary);
  transition: color 0.3s ease;
}

/* --- Right Column: Text --- */
.text-column {
  flex: 1.5; 
}

.text-column h2 {
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--text-color-primary);
  margin-top: 0;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  transition: color 0.3s ease;
}

/* Decorative underline for the heading */
.text-column h2::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 60%;
  height: 4px;
  background-color: var(--accent-color);
  border-radius: 2px;
  transition: background-color 0.3s ease;
}

.text-column p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-color-secondary);
  margin-bottom: 15px;
  transition: color 0.3s ease;
}

/* --- Responsive Adjustments --- */
@media (max-width: 900px) {
  .about-section {
    /* Reduce padding on smaller screens */
    padding: 30px 25px;
    margin-top: 0;
  }
  .about-container {
    flex-direction: column;
    gap: 40px;
  }
  
  .stats-column {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }

  .stat-item {
    border-left: none;
    border-top: 4px solid var(--accent-color);
    border-radius: 0 0 8px 8px;
    flex: 1; 
  }

  .stat-number {
    font-size: 2.5rem;
  }
}

@media (max-width: 500px) {
  .stats-column {
    flex-direction: column;
  }
}
</style>