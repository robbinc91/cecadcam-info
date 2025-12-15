// Render Team Members
function renderTeam() {
    const teamGrid = document.querySelector('.team-grid');
    if (!teamGrid) return;

    teamGrid.innerHTML = teamMembers.map(member => {
        const imageHtml = member.image
            ? `<img src="${member.image}" alt="${member.name}">`
            : `<i class="fas fa-user"></i>`;

        const rolesHtml = member.roles.map(role => {
            const translateAttr = role.translateKey ? ` data-translate="${role.translateKey}"` : '';
            return `<p class="member-title"${translateAttr}>${role.text}</p>`;
        }).join('');

        return `
            <a href="profile.html?id=${member.id}" class="team-member-link">
                <div class="team-member">
                    <div class="member-image">
                        ${imageHtml}
                    </div>
                    <div class="member-info">
                        <h3 class="member-name">${member.name}</h3>
                        ${rolesHtml}
                    </div>
                </div>
            </a>
        `;
    }).join('');
}

function renderProfile() {
    const profileContent = document.getElementById('profile-content');
    if (!profileContent) return;

    const urlParams = new URLSearchParams(window.location.search);
    const memberId = urlParams.get('id');
    const member = teamMembers.find(m => m.id === memberId);

    if (!member) {
        profileContent.innerHTML = '<p class="error-message">Member not found.</p>';
        return;
    }

    // Set page title
    document.title = `${member.name} - CAD/CAM Study Center`;

    const imageHtml = member.image
        ? `<img src="${member.image}" alt="${member.name}" class="profile-image">`
        : `<i class="fas fa-user profile-icon-placeholder"></i>`;

    const rolesHtml = member.roles.map(role => {
        const translateAttr = role.translateKey ? ` data-translate="${role.translateKey}"` : '';
        return `<p class="profile-role"${translateAttr}>${role.text}</p>`;
    }).join('');

    const interestsHtml = member.interests.map(interest =>
        `<span class="interest-tag">${interest}</span>`
    ).join('');

    const publicationsHtml = member.publications.length > 0
        ? `
        <div class="profile-section-block">
            <h3>Selected Publications</h3>
            <ul class="publications-list">
                ${member.publications.map(pub => `<li>${pub}</li>`).join('')}
            </ul>
        </div>`
        : '';

    const contactHtml = `
        <div class="contact-links">
            ${member.contact.email ? `<a href="mailto:${member.contact.email}" class="contact-btn"><i class="fas fa-envelope"></i> Email</a>` : ''}
            ${member.contact.linkedin && member.contact.linkedin !== '#' ? `<a href="${member.contact.linkedin}" target="_blank" class="contact-btn"><i class="fab fa-linkedin"></i> LinkedIn</a>` : ''}
            ${member.contact.googleScholar && member.contact.googleScholar !== '#' ? `<a href="${member.contact.googleScholar}" target="_blank" class="contact-btn"><i class="fas fa-graduation-cap"></i> Google Scholar</a>` : ''}
        </div>
    `;

    profileContent.innerHTML = `
        <div class="profile-header-card">
            <div class="profile-image-container">
                ${imageHtml}
            </div>
            <div class="profile-main-info">
                <h2 class="profile-name">${member.name}</h2>
                ${rolesHtml}
                ${contactHtml}
            </div>
        </div>
        
        <div class="profile-body">
            <div class="profile-bio-section">
                <h3>Biography</h3>
                <p class="profile-bio" data-translate="${member.bioKey}">
                    ${translations['en'][member.bioKey] || "Biography not available."}
                </p>
            </div>

            <div class="profile-interests-section">
                <h3>Research Interests</h3>
                <div class="interests-container">
                    ${interestsHtml}
                </div>
            </div>

            ${publicationsHtml}
        </div>
    `;

    // Ensure translation is applied if language was already switched
    const currentLang = localStorage.getItem('selectedLanguage') || 'en';
    if (currentLang !== 'en') {
        changeLanguage(currentLang);
    }
}

// Render Projects
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projects.map(project => {
        return `
            <div class="project-card">
                <div class="project-image">
                    <img src="${project.image}" alt="Project Image">
                </div>
                <div class="project-content">
                    <h3 class="project-title" data-translate="${project.titleKey}">Project Title</h3>
                    <p class="project-description" data-translate="${project.descKey}">Project Description</p>
                    <div class="project-meta">
                        <span data-translate="${project.programKey}">Program Name</span>
                        <span data-translate="${project.periodKey}">Period</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Initial Render
renderTeam();
renderProjects();
renderProfile();

// DOM elements
const languageBtn = document.getElementById('languageBtn');
const languageOptions = document.getElementById('languageOptions');
const currentLang = document.getElementById('currentLang');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const themeToggle = document.getElementById('themeToggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.querySelector('nav');

// Theme Toggle
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('darkTheme', isDark);

        // Update icon
        const icon = themeToggle.querySelector('i');
        if (isDark) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });

    // Load saved theme
    if (localStorage.getItem('darkTheme') === 'true') {
        document.body.classList.add('dark-theme');
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }
}

// Mobile Menu
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (nav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// Language selector functionality
if (languageBtn) {
    languageBtn.addEventListener('click', () => {
        languageOptions.classList.toggle('active');
    });
}

// Close language options when clicking outside
document.addEventListener('click', (e) => {
    if (languageBtn && languageOptions && !languageBtn.contains(e.target) && !languageOptions.contains(e.target)) {
        languageOptions.classList.remove('active');
    }
});

// Language selection
const langLinks = document.querySelectorAll('.language-options a');
langLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = link.getAttribute('data-lang');
        changeLanguage(lang);
        languageOptions.classList.remove('active');
    });
});

// Change language function
function changeLanguage(lang) {
    // Update current language display
    const langText = {
        en: 'English',
        es: 'Español',
        ru: 'Русский',
        zh: '中文'
    };
    if (currentLang) currentLang.textContent = langText[lang];

    // Update all elements with translation
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Store language preference
    localStorage.setItem('selectedLanguage', lang);
}

// Tab functionality
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');

        // Remove active class from all tabs and contents
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        // Add active class to clicked tab and corresponding content
        btn.classList.add('active');
        const tabContent = document.getElementById(tabId);
        if (tabContent) tabContent.classList.add('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Load saved language preference
const savedLanguage = localStorage.getItem('selectedLanguage');
if (savedLanguage) {
    changeLanguage(savedLanguage);
}

// Back to Top functionality
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = "flex";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}