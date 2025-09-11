// Theme initialization function
function initializeTheme() {
    // Check if we're on the genai page - if so, don't apply theme switching
    if (window.location.pathname.includes('genai.html')) {
        return;
    }
    
    const stylesheet = document.getElementById('main-stylesheet');
    const toggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'style1';
    
    if (savedTheme === 'style2') {
        stylesheet.href = 'style2.css';
        if (toggle) toggle.classList.add('active');
    } else {
        stylesheet.href = 'style1.css';
        if (toggle) toggle.classList.remove('active');
    }
}


// Theme toggle functionality
function toggleTheme() {
    const stylesheet = document.getElementById('main-stylesheet');
    const toggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'style1';
    
    if (currentTheme === 'style1') {
        // Switch to style2
        stylesheet.href = 'style2.css';
        toggle.classList.add('active');
        localStorage.setItem('theme', 'style2');
    } else {
        // Switch to style1
        stylesheet.href = 'style1.css';
        toggle.classList.remove('active');
        localStorage.setItem('theme', 'style1');
    }
}

// Initialize theme when page loads
document.addEventListener('DOMContentLoaded', initializeTheme);
