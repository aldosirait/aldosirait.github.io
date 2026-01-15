// ===== GLOBAL VARIABLES =====
let currentLang = 'id';
let translations = {
    id: id,
    en: en
};

// ===== HELPER FUNCTION: GET NESTED OBJECT VALUE =====
function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}

// ===== LANGUAGE SWITCHER =====
function switchLang(lang) {
    currentLang = lang;

    // Update active button
    document.getElementById('btn-id').classList.toggle('active', lang === 'id');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');

    // Update all translatable elements
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        const langKey = el.getAttribute('data-lang');
        const translation = getNestedValue(translations[lang], langKey);
        
        if (translation) {
            if (el.classList.contains('subtitle')) {
                // Handle subtitle with typing effect
                el.textContent = translation;
                const cursor = document.createElement('span');
                cursor.className = 'cursor';
                el.appendChild(cursor);
            } else {
                el.textContent = translation;
            }
        }
    });

    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-lang-placeholder]');
    placeholderElements.forEach(el => {
        const langKey = el.getAttribute('data-lang-placeholder');
        const translation = getNestedValue(translations[lang], langKey);
        
        if (translation) {
            el.placeholder = translation;
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// ===== PARTICLES CREATION =====
function createParticles() {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 5 + 5) + 's';
        document.body.appendChild(particle);
    }
}

// ===== SMOOTH SCROLLING =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ===== FORM SUBMIT HANDLER =====
function handleSubmit(e) {
    e.preventDefault();
    const message = getNestedValue(translations[currentLang], 'contact.form.success_message');
    alert(message);
    e.target.reset();
}

// ===== TYPING EFFECT FOR SUBTITLE =====
function initTypingEffect() {
    const subtitle = document.querySelector('.subtitle');
    const text = getNestedValue(translations[currentLang], 'hero.subtitle');
    let index = 0;

    setTimeout(() => {
        subtitle.textContent = '';
        const cursor = document.createElement('span');
        cursor.className = 'cursor';

        const typeInterval = setInterval(() => {
            if (index < text.length) {
                subtitle.textContent = text.substring(0, index + 1);
                subtitle.appendChild(cursor);
                index++;
            } else {
                clearInterval(typeInterval);
            }
        }, 100);
    }, 500);
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Set default language
    switchLang('id');
    
    // Create particles
    createParticles();
    
    // Initialize smooth scroll
    initSmoothScroll();
    
    // Initialize typing effect
    initTypingEffect();
});