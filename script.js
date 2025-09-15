function initializeTheme() {
    if (window.location.pathname.includes('genai.html')) return;
    
    const stylesheet = document.getElementById('main-stylesheet');
    const toggle = document.getElementById('theme-toggle');
    const savedTheme = sessionStorage.getItem('theme') || 'style1';
    
    if (savedTheme === 'style2') stylesheet.href = 'style2.css';
    else stylesheet.href = 'style1.css';
}

function toggleTheme() {
    const stylesheet = document.getElementById('main-stylesheet');
    const toggle = document.getElementById('theme-toggle');
    const currentTheme = sessionStorage.getItem('theme') || 'style1';
    
    if(currentTheme === 'style1') {
        stylesheet.href = 'style2.css';
        sessionStorage.setItem('theme', 'style2');
    } 
    else {
        stylesheet.href = 'style1.css';
        sessionStorage.setItem('theme', 'style1');
    }
}

document.addEventListener('DOMContentLoaded', initializeTheme);
