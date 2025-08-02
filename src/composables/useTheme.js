import { ref, watchEffect } from 'vue';

// Get the user's saved preference from localStorage, or default to 'dark'
const savedTheme = localStorage.getItem('theme') || 'dark';

// Create a reactive reference for the theme
const theme = ref(savedTheme);

// This composable will be available to any component
export function useTheme() {
  
  // A function to toggle between 'light' and 'dark'
  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  }

  // A watcher that reacts to theme changes
  watchEffect(() => {
    // Save the new theme to localStorage
    localStorage.setItem('theme', theme.value);

    // Update the class on the <body> element
    // This is how our CSS will apply the different color variables
    if (theme.value === 'light') {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    }
  });

  // Expose the theme and the toggle function to the components that use this composable
  return {
    theme,
    toggleTheme,
  };
}