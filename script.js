function loadTheme() {
    if (window.location.pathname.includes('genai.html')) return;
    
    const stylesheet = document.getElementById('main-stylesheet');
    const savedTheme = sessionStorage.getItem('theme') || 'style1';
    
    if (savedTheme === 'style2') {
        stylesheet.href = 'style2.css';
        updateProfileImage('style2');
    } 
    else {
        stylesheet.href = 'style1.css';
        updateProfileImage('style1');
    }
}

function toggleTheme() {
    const stylesheet = document.getElementById('main-stylesheet');
    const currentTheme = sessionStorage.getItem('theme') || 'style1';
    
    if(currentTheme === 'style1') {
        stylesheet.href = 'style2.css';
        sessionStorage.setItem('theme', 'style2');
        updateProfileImage('style2');
    } 
    else {
        stylesheet.href = 'style1.css';
        sessionStorage.setItem('theme', 'style1');
        updateProfileImage('style1');
    }
}

function updateProfileImage(theme) {
    const profileImage = document.getElementById('profile-image');
    if (theme === 'style2') profileImage.src = 'images/headshot2.jpg';
    else profileImage.src = 'images/headshot1.jpg';
}

document.addEventListener('DOMContentLoaded', loadTheme());
