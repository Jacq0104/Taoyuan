// Language Switcher JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get current page path
    const currentPath = window.location.pathname;
    const isEnglish = currentPath.includes('/en/');
    const isCzech = currentPath.includes('/cs/');
    
    // Update language switcher buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        const buttonText = button.textContent.trim();
        
        if (buttonText === 'EN' && isEnglish) {
            button.classList.add('active');
        } else if (buttonText === 'CS' && isCzech) {
            button.classList.add('active');
        } else if (buttonText === '繁中' && !isEnglish && !isCzech) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    
    // Add click event listeners for language switching
    langButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Remove active class from all buttons
            langButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
        });
    });
    
    // Store language preference in localStorage
    let currentLang = 'zh'; // default to Chinese
    if (isEnglish) currentLang = 'en';
    if (isCzech) currentLang = 'cs';
    localStorage.setItem('preferred-language', currentLang);
});

// Function to get language preference
function getLanguagePreference() {
    return localStorage.getItem('preferred-language') || 'zh';
}

// Function to redirect to appropriate language version
function switchLanguage(targetLang) {
    const currentPath = window.location.pathname;
    let newPath;
    
    if (targetLang === 'en') {
        // Switch to English
        if (currentPath.includes('/en/')) {
            newPath = currentPath; // Already in English
        } else if (currentPath.includes('/cs/')) {
            newPath = currentPath.replace('/cs', '/en');
        } else {
            newPath = '/en' + currentPath;
        }
    } else if (targetLang === 'cs') {
        // Switch to Czech
        if (currentPath.includes('/cs/')) {
            newPath = currentPath; // Already in Czech
        } else if (currentPath.includes('/en/')) {
            newPath = currentPath.replace('/en', '/cs');
        } else {
            newPath = '/cs' + currentPath;
        }
    } else {
        // Switch to Chinese
        if (currentPath.includes('/en/')) {
            newPath = currentPath.replace('/en', '');
        } else if (currentPath.includes('/cs/')) {
            newPath = currentPath.replace('/cs', '');
        } else {
            newPath = currentPath; // Already in Chinese
        }
    }
    
    // Redirect to new path
    window.location.href = newPath;
}
