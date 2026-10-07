document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            
            if (document.body.classList.contains('dark-theme')) {
                themeBtn.textContent = '☀️ Күн режимі';
            } else {
                themeBtn.textContent = '🌙 Түн режимі';
            }
        });
    }
});