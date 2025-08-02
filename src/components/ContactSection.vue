<script setup>
import portraitImage from '../assets/portrait.jpg';
</script>

<template>
   <section id="contact" class="contact-section" data-aos="zoom-in-up">
    <div class="section-title">
      <h2>Get In Touch</h2>
      <p>Have a question or a project in mind? I'd love to hear from you.</p>
    </div>

 
    <div class="contact-wrapper">
      
      <!-- Left Column: The Form -->
      <div class="form-column">
        <form action="https://formspree.io/f/mdkazrnq" method="POST">
          <div class="form-group">
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Derek Banor" required>
          </div>
          
          <div class="form-group">
            <label for="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="derek.banor@example.com" required>
          </div>

          <div class="form-group">
            <label for="message">Your Message</label>
            <textarea id="message" name="message" rows="7" placeholder="I'd like to discuss a project..." required></textarea>
          </div>

          <button type="submit" class="submit-button">Send Message</button>
        </form>
      </div>

      <!-- Right Column: The Image -->
      <div class="image-column">
        <img :src="portraitImage" alt="A portrait of Derek Banor" class="contact-image" />
      </div>

    </div>
  </section>
</template>

<style scoped>
.contact-section {
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

/* --- Main Layout --- */
.contact-wrapper {
  display: flex;
  align-items: center; 
  gap: 20px;
}

/* --- Left Column: Form --- */
.form-column {
  flex: 1.3; 
  padding: 40px;
  background-color: var(--card-bg);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  box-shadow: 0 15px 40px var(--shadow-color);
  
  /* The overlap trick */
  position: relative; 
  z-index: 2; 
  margin-right: -100px;

  transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

/* --- Right Column: Image --- */
.image-column {
  flex: 1;
  position: relative;
  z-index: 1; 
}
.contact-image {
  width: 100%;
  border-radius: 12px;
  display: block; 
}

/* --- Form Fields --- */
.form-group {
  margin-bottom: 25px;
}
.form-group label {
  display: block;
  margin-bottom: 8px;
  color: var(--text-color-primary);
  font-weight: 500;
  transition: color 0.3s ease;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 15px;
  background-color: var(--bg-color); /* Use main bg for inputs */
  border: 1px solid var(--border-color);
  border-radius: 8px;
  color: var(--text-color-primary);
  font-size: 1rem;
  font-family: inherit;
  box-sizing: border-box;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease;
}
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent-color) 20%, transparent);
}
.submit-button {
  display: block;
  width: 100%;
  padding: 15px 20px;
  background-color: var(--accent-color);
  color: var(--card-bg); /* Text color contrasts with button color */
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.submit-button:hover {
  background-color: var(--accent-color-hover);
}

/* --- Responsive Adjustments --- */
@media (max-width: 900px) {
  .contact-section {
    padding: 40px 20px;
  }
  .contact-wrapper {
    flex-direction: column;
    gap: 0; /* No gap needed when stacked */
  }
  .form-column {
    margin-right: 0;
    margin-bottom: -50px; /* Overlap image from the top */
    width: 100%;
    box-sizing: border-box;
  }
  .image-column {
    width: 100%;
  }
}
</style>