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
            ${Object.keys(member.contact).filter(key => member.contact[key] !== '#').map(el =>
        `<a href="${el === 'email' ? 'mailto:' : ''}${member.contact[el]}" class="contact-btn"><i class="${iconsAndRefs[el].icon}"></i> ${iconsAndRefs[el].text}</a>`).join('')}
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

// Add these functions to script.js
// Render ALL Publications
function renderPublications() {
    const publicationsContent = document.getElementById('publications-content');
    if (!publicationsContent) return;

    let html = '';

    // Research Group I Publications (ALL 4 SCOPUS publications)
    html += '<div class="publications-group" data-group="group-I">';
    html += '<h3 data-translate="research_group_I">Research Group I Publications (SCOPUS Indexed)</h3>';
    html += '<div class="publications-list">';

    publications2025.groupI.forEach(pub => {
        html += `
            <div class="publication-card" data-type="${pub.type}" data-scopus="${pub.scopus}">
                <div class="publication-header">
                    <span class="publication-type">${pub.type}</span>
                    ${pub.scopus ? '<span class="scopus-badge">SCOPUS</span>' : ''}
                </div>
                <h4 class="publication-title">${pub.title}</h4>
                <p class="publication-authors">${pub.authors}</p>
                <p class="publication-journal">${pub.journal}</p>
                <p class="publication-volume">${pub.volume}</p>
                ${pub.doi ? `<a href="${pub.doi}" class="publication-doi" target="_blank">DOI: ${pub.doi}</a>` : ''}
            </div>
        `;
    });
    html += '</div></div>';

    // Research Group II Publications (ALL 1 publication)
    html += '<div class="publications-group" data-group="group-II">';
    html += '<h3 data-translate="research_group_II">Research Group II Publications</h3>';
    html += '<div class="publications-list">';

    publications2025.groupII.forEach(pub => {
        html += `
            <div class="publication-card" data-type="${pub.type}">
                <div class="publication-header">
                    <span class="publication-type">${pub.type}</span>
                </div>
                <h4 class="publication-title">${pub.title}</h4>
                <p class="publication-authors">${pub.authors}</p>
                <p class="publication-journal">${pub.journal}</p>
                <p class="publication-volume">${pub.volume}</p>
                ${pub.doi ? `<a href="${pub.doi}" class="publication-doi" target="_blank">DOI: ${pub.doi}</a>` : ''}
            </div>
        `;
    });
    html += '</div></div>';

    // Research Group III Publications (ALL 4 publications)
    html += '<div class="publications-group" data-group="group-III">';
    html += '<h3 data-translate="research_group_III">Research Group III Publications</h3>';
    html += '<div class="publications-list">';

    publications2025.groupIII.forEach(pub => {
        html += `
            <div class="publication-card" data-type="${pub.type}">
                <div class="publication-header">
                    <span class="publication-type">${pub.type}</span>
                </div>
                <h4 class="publication-title">${pub.title}</h4>
                <p class="publication-authors">${pub.authors}</p>
                <p class="publication-journal">${pub.journal}</p>
                <p class="publication-volume">${pub.volume}</p>
                ${pub.doi ? `<a href="${pub.doi}" class="publication-doi" target="_blank">DOI: ${pub.doi}</a>` : ''}
            </div>
        `;
    });
    html += '</div></div>';

    // ALL 15 Book Chapters
    html += '<div class="publications-group" data-group="book-chapters">';
    html += '<h3 data-translate="book_chapters">Book Chapters (Springer Proceedings)</h3>';
    html += '<div class="publications-list">';

    publications2025.bookChapters.forEach(chapter => {
        html += `
            <div class="publication-card" data-type="${chapter.type}" data-scopus="${chapter.scopus}">
                <div class="publication-header">
                    <span class="publication-type">Book Chapter</span>
                    ${chapter.scopus ? '<span class="scopus-badge">SCOPUS</span>' : ''}
                </div>
                <h4 class="publication-title">${chapter.title}</h4>
                <p class="publication-authors">${chapter.authors}</p>
                <p class="publication-book">${chapter.book}</p>
                <a href="${chapter.doi}" class="publication-doi" target="_blank">DOI: ${chapter.doi}</a>
            </div>
        `;
    });
    html += '</div></div>';

    publicationsContent.innerHTML = html;
}

// Render ALL Events
function renderEvents() {
    const eventsContent = document.getElementById('events-content');
    if (!eventsContent) return;

    let html = '';

    // ALL 8 conferences with ALL 54 presentations
    events2025.forEach(event => {
        html += `
            <div class="event-card">
                <div class="event-header">
                    <h3 class="event-name">${event.name}</h3>
                    <div class="event-meta">
                        <span class="event-date"><i class="fas fa-calendar"></i> ${event.date}</span>
                        <span class="event-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</span>
                        <span class="event-presentations"><i class="fas fa-presentation"></i> ${event.presentations} presentations</span>
                        ${event.isbn ? `<span class="event-isbn"><i class="fas fa-book"></i> ${event.isbn}</span>` : ''}
                    </div>
                </div>
                <div class="event-papers">
                    <h4>Presentations:</h4>
                    <div class="papers-list">
        `;

        // ALL presentations for each conference
        event.papers.forEach(paper => {
            html += `
                <div class="paper-item">
                    <h5 class="paper-title">${paper.title}</h5>
                    <p class="paper-authors">
                        <strong>Authors:</strong> ${paper.authors.join(', ')}
                    </p>
                    ${paper.workshop ? `<p class="paper-workshop"><strong>Workshop:</strong> ${paper.workshop}</p>` : ''}
                </div>
            `;
        });

        // Keynotes if present
        if (event.keynotes) {
            html += `
                <div class="keynotes-section">
                    <h4>Keynote Presentations:</h4>
            `;
            event.keynotes.forEach(keynote => {
                html += `
                    <div class="paper-item keynote">
                        <h5 class="paper-title">${keynote.title}</h5>
                        <p class="paper-authors">
                            <strong>Author:</strong> ${keynote.author}
                        </p>
                        <p class="keynote-type">${keynote.type}</p>
                    </div>
                `;
            });
            html += '</div>';
        }

        html += `
                    </div>
                </div>
            </div>
        `;
    });

    eventsContent.innerHTML = html;
}


// Initial Render
renderTeam();
renderProjects();
renderProfile();
renderPublications();
renderEvents();

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