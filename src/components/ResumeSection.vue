<template>
  <section id="resume" class="resume-section" data-aos="fade-left">
    <div class="section-title">
      <h2>My Résumé</h2>
      <p>A detailed look at my experience, skills, and education.</p>
    </div>

    <div class="resume-container">
      
      <!-- Left Column: Download Button -->
      <div class="download-column">
        
        <a href="/derek-banor-resume.pdf" download class="download-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>
          Download Full CV
        </a>
      </div>

      <!-- Right Column: Resume Glimpse -->
      <div class="preview-column">
        <div class="resume-preview">
          <h3>Summary</h3>
          <p>I thrive on solving complex problems through innovative technology solutions. With experience in web development, cloud technologies, and software engineering, I specialize in building accessible, interactive, and user-friendly applications while leveraging cloud platforms like AWS to develop scalable and efficient solutions.</p>
          
          <h3>Professional Experience</h3>
          <h4>Web Developer Specialist</h4>
          <h5>AccessTech Innovation and Research Center | Oct 2023 – Present</h5>
          <ul>
            <li>Spearheaded the design and implementation of an e-learning website optimized for visually impaired users.</li>
            <li>Built assistive e-commerce solutions with PHP, transitioning to Laravel for advanced functionalities.</li>
            <li>Led the development of an assistive website tailored to users with disabilities.</li>
          </ul>

          <h3>Key Skills</h3>
          <ul>
            <li><strong>Programming & Web:</strong> PHP, Laravel, React, Vue, React Native, Node.js, Next.js, JavaScript, HTML, CSS, Python</li>
            <li><strong>Cloud Technologies:</strong> AWS (EC2, S3), Cloud Computing</li>
            <li><strong>Tools & Technologies:</strong> Git, MySQL, Adobe XD, Jenkins, JIRA</li>
          </ul>

          <h3>Certifications</h3>
          <ul>
            <li>Udemy - AWS Certified Cloud Practitioner</li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.resume-section {
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
.resume-container {
  display: flex;
  gap: 40px;
}

/* --- Left Column: Download Button --- */
.download-column {
  flex: 0 0 300px; 
  text-align: center;
}
.download-button {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  background-color: var(--accent-color);
  /* The text color on the button should contrast with the accent color. */
  /* In most cases, this will be the card background color or a primary text color. */
  color: var(--card-bg);
  padding: 15px 30px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: background-color 0.3s ease, transform 0.3s ease, color 0.3s ease;
}
.download-button:hover {
  background-color: var(--accent-color-hover);
  transform: translateY(-5px);
}
.download-button .icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
}

/* --- Right Column: Résumé Preview --- */
.preview-column {
  flex-grow: 1;
}
.resume-preview {
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 30px 40px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}
.resume-preview h3 {
  font-size: 1.5rem;
  color: var(--accent-color-hover);
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 10px;
  margin: 0 0 20px 0;
  transition: color 0.3s ease, border-color 0.3s ease;
}
.resume-preview h4 {
  font-size: 1.2rem;
  color: var(--text-color-primary);
  margin: 0 0 5px 0;
  transition: color 0.3s ease;
}
.resume-preview h5 {
  font-size: 1rem;
  color: var(--text-color-secondary);
  font-weight: 400;
  margin: 0 0 15px 0;
  transition: color 0.3s ease;
}
.resume-preview p, .resume-preview ul {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-color-secondary);
  margin-bottom: 25px;
  transition: color 0.3s ease;
}
.resume-preview ul {
  list-style: none;
  padding-left: 0;
}
.resume-preview li {
  position: relative;
  padding-left: 25px;
  margin-bottom: 10px;
}
.resume-preview li::before {
  content: '›';
  position: absolute;
  left: 0;
  top: 0;
  color: var(--accent-color);
  font-weight: 900;
  font-size: 1.5rem;
  line-height: 1;
  transition: color 0.3s ease;
}

/* --- Responsive Adjustments --- */
@media (max-width: 900px) {
  .resume-section {
    padding: 20px 10px;
    margin-right: 15px;
  }
  .resume-container {
    flex-direction: column;
    gap: 30px;
  }
  .download-column {
    flex-basis: auto;
    margin-bottom: 0;
  }
  .resume-preview {
    padding: 25px;
  }
}
</style>