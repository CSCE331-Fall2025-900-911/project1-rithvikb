function loadTheme() {
    if (window.location.pathname.includes('genai.html')) return;
    
    const stylesheet = document.getElementById('main-stylesheet');
    const savedTheme = sessionStorage.getItem('theme') || 'style1';
    const profileImage = document.getElementById('profile-image');
    
    if (savedTheme === 'style2') {
        stylesheet.href = 'style2.css';
        if (profileImage) profileImage.src = 'images/headshot2.jpg';
    } 
    else {
        stylesheet.href = 'style1.css';
        if (profileImage) profileImage.src = 'images/headshot1.jpg';
    }
}

function toggleTheme() {
    if (window.location.pathname.includes('genai.html')) return;

    const stylesheet = document.getElementById('main-stylesheet');
    const currentTheme = sessionStorage.getItem('theme') || 'style1';
    const profileImage = document.getElementById('profile-image');
    
    if(currentTheme === 'style1') {
        stylesheet.href = 'style2.css';
        sessionStorage.setItem('theme', 'style2');
        if (profileImage) profileImage.src = 'images/headshot2.jpg';
    } 
    else {
        stylesheet.href = 'style1.css';
        sessionStorage.setItem('theme', 'style1');
        if (profileImage) profileImage.src = 'images/headshot1.jpg';
    }
}

document.addEventListener('DOMContentLoaded', loadTheme);
