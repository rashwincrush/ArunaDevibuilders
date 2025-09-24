// Load footer component
async function loadFooter() {
  try {
    // First, remove all existing footers and placeholders
    document.querySelectorAll('footer, #footer-placeholder').forEach(el => el.remove());
    
    // Get the new footer HTML
    const response = await fetch('/components/footer.html');
    if (!response.ok) return;
    
    const footerHTML = await response.text();
    
    // Create a temporary container to parse the HTML
    const temp = document.createElement('div');
    temp.innerHTML = footerHTML;
    const newFooter = temp.querySelector('footer');
    
    if (newFooter) {
      // Add the new footer to the end of the body
      document.body.appendChild(newFooter);
      
      // Update year in footer
      const yearElement = document.getElementById('year');
      if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
      }
    }
  } catch (error) {
    console.error('Error loading footer:', error);
  }
}

// Make the function globally available
window.loadFooter = loadFooter;

// Load footer when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadFooter);
} else {
  loadFooter();
}
