// Render Team Members
function renderTeam() {
    const teamGrid = document.querySelector('.team-grid');
    if (!teamGrid) return;

    teamGrid.innerHTML = teamMembers.map(member => {
        const imageHtml = member.image
            ? `<img src="${member.image}" alt="${member.name}" loading="lazy" decoding="async" onload="this.classList.add('loaded')" onerror="this.parentElement.innerHTML='<i class=\\'fas fa-user\\'></i>'">`
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

// Enhanced renderProfile with filtering functionality
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

    // Get filtered content for this researcher
    const researcherPublications = filterPublicationsByResearcher(member);
    const researcherEvents = filterEventsByResearcher(member);

    const imageHtml = member.image
        ? `<img src="${member.image}" alt="${member.name}" class="profile-image" loading="lazy" decoding="async" onload="this.classList.add('loaded')" onerror="this.parentElement.innerHTML='<i class=\\'fas fa-user profile-icon-placeholder\\'></i>'">`
        : `<i class="fas fa-user profile-icon-placeholder"></i>`;

    const rolesHtml = member.roles.map(role => {
        const translateAttr = role.translateKey ? ` data-translate="${role.translateKey}"` : '';
        return `<p class="profile-role"${translateAttr}>${role.text}</p>`;
    }).join('');

    const interestsHtml = member.interests.map(interest =>
        `<span class="interest-tag">${interest}</span>`
    ).join('');

    const publicationsHtml = researcherPublications.length > 0
        ? `
        <div class="profile-section-block">
            <h3>Publications (2025)</h3>
            <div class="profile-publications">
                ${researcherPublications.map(pub => `
                    <div class="profile-publication-card">
                        <h4>${pub.title}</h4>
                        <p class="pub-authors">${pub.authors}</p>
                        <p class="pub-journal">${pub.journal || pub.book}</p>
                        <p class="pub-volume">${pub.volume}</p>
                        ${pub.doi ? `<a href="${pub.doi}" class="pub-doi" target="_blank">View Publication</a>` : ''}
                        ${pub.scopus ? '<span class="scopus-badge">SCOPUS</span>' : ''}
                    </div>
                `).join('')}
            </div>
        </div>`
        : '';

    const eventsHtml = researcherEvents.length > 0
        ? `
        <div class="profile-section-block">
            <h3>Event Participation (2025)</h3>
            <div class="profile-events">
                ${researcherEvents.map(event => `
                    <div class="profile-event-card">
                        <h4>${event.eventName}</h4>
                        <p class="event-meta">${event.date} • ${event.location}</p>
                        <p class="event-title">${event.presentationTitle}</p>
                        <p class="event-authors">${event.authors.join(', ')}</p>
                        ${event.workshop ? `<p class="event-workshop">Workshop: ${event.workshop}</p>` : ''}
                    </div>
                `).join('')}
            </div>
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
            ${eventsHtml}
        </div>
    `;

    // Apply translations if needed
    const currentLang = localStorage.getItem('selectedLanguage') || 'en';
    if (currentLang !== 'en') {
        changeLanguage(currentLang);
    }
}

// Filter publications by researcher name
function filterPublicationsByResearcher(researcher) {


    const researcherNameParts = researcher.name.toLowerCase().split(/[:,;\s-]+/)
    const nameParts = [...new Set([...researcherNameParts, ...researcher.search_keys])];

    console.log(nameParts);
    console.log(researcherNameParts);
    const allPublications = [
        ...publications2025.groupI,
        ...publications2025.groupII,
        ...publications2025.groupIII,
        ...publications2025.bookChapters
    ];

    return allPublications.filter(pub => {
        // Check if researcher name appears in authors string (case insensitive)
        const authorsLower = pub.authors.toLowerCase();
        console.log(authorsLower);
        console.log(nameParts.filter(part => authorsLower.includes(part)));
        return nameParts.filter(part => authorsLower.includes(part)).length >= 3;
    });
}

// Filter events by researcher name
function filterEventsByResearcher(researcher) {
    const researcherEvents = [];

    const researcherNameParts = researcher.name.toLowerCase().split(/[:,;\s-]+/)
    const nameParts = [...new Set([...researcherNameParts, ...researcher.search_keys])];

    events2025.forEach(event => {
        event.papers.forEach(paper => {
            // Check if researcher is in authors array

            const authorsLower = paper.authors.join(', ').toLowerCase();
            const isAuthor = nameParts.filter(part => authorsLower.includes(part)).length >= 3;

            if (isAuthor) {
                researcherEvents.push({
                    eventName: event.name,
                    date: event.date,
                    location: event.location,
                    presentationTitle: paper.title,
                    workshop: paper.workshop || null,
                    authors: paper.authors
                });
            }
        });
    });

    return researcherEvents;
}

// Render Projects
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projects.map(project => {
        const projectImage = project.image
            ? `<img src="${project.image}" alt="Project Image" loading="lazy" decoding="async" onload="this.classList.add('loaded')" onerror="this.parentElement.innerHTML='<i class=\\'fas fa-project-diagram\\'></i>'">`
            : `<i class="fas fa-project-diagram"></i>`;
        return `
            <div class="project-card">
                <div class="project-image">
                    ${projectImage}
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


// Enhanced mobile menu functionality


if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mainNav.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');

        if (mainNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mainNav.classList.contains('active') &&
            !mainNav.contains(e.target) &&
            !mobileMenuBtn.contains(e.target)) {
            mainNav.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            mainNav.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// More menu dropdown functionality
document.addEventListener('DOMContentLoaded', function () {
    const moreBtn = document.querySelector('.more-btn');
    const moreDropdown = document.querySelector('.more-dropdown');

    if (moreBtn && moreDropdown) {
        // Toggle dropdown on click
        moreBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            moreDropdown.style.display = moreDropdown.style.display === 'block' ? 'none' : 'block';
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function () {
            moreDropdown.style.display = 'none';
        });

        // Keep dropdown open when clicking inside it
        moreDropdown.addEventListener('click', function (e) {
            e.stopPropagation();
        });

        // Close dropdown on window resize if it becomes desktop
        window.addEventListener('resize', function () {
            if (window.innerWidth > 767) {
                moreDropdown.style.display = 'none';
            }
        });
    }
});

// Hierarchical dropdown menu functionality
document.addEventListener('DOMContentLoaded', function () {
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');

    dropdownMenus.forEach(menu => {
        const trigger = menu.querySelector('.menu-trigger');
        const dropdown = menu.querySelector('.dropdown');

        // Mobile click functionality
        if (window.innerWidth <= 767) {
            trigger.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                // Close other open dropdowns
                dropdownMenus.forEach(otherMenu => {
                    if (otherMenu !== menu) {
                        otherMenu.classList.remove('active');
                    }
                });

                menu.classList.toggle('active');
            });
        }

        // Desktop hover functionality
        else {
            menu.addEventListener('mouseenter', function () {
                menu.classList.add('active');
            });

            menu.addEventListener('mouseleave', function () {
                menu.classList.remove('active');
            });
        }
    });

    // Close all dropdowns when clicking outside
    document.addEventListener('click', function () {
        dropdownMenus.forEach(menu => {
            menu.classList.remove('active');
        });
    });

    // Handle window resize
    window.addEventListener('resize', function () {
        dropdownMenus.forEach(menu => {
            menu.classList.remove('active');
        });
    });
});

// Enhanced dropdown menu functionality for hierarchical navigation
document.addEventListener('DOMContentLoaded', function () {
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');

    dropdownMenus.forEach(menu => {
        const trigger = menu.querySelector('.menu-trigger');
        const dropdown = menu.querySelector('.dropdown');

        // Mobile touch functionality
        if (window.innerWidth <= 767) {
            trigger.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                // Close other open dropdowns
                dropdownMenus.forEach(otherMenu => {
                    if (otherMenu !== menu) {
                        otherMenu.classList.remove('active');
                    }
                });

                menu.classList.toggle('active');
            });
        }

        // Desktop hover functionality
        else {
            let hoverTimeout;

            menu.addEventListener('mouseenter', function () {
                clearTimeout(hoverTimeout);
                menu.classList.add('active');
            });

            menu.addEventListener('mouseleave', function () {
                hoverTimeout = setTimeout(() => {
                    menu.classList.remove('active');
                }, 100);
            });
        }
    });

    // Close all dropdowns when clicking outside
    document.addEventListener('click', function () {
        dropdownMenus.forEach(menu => {
            menu.classList.remove('active');
        });
    });

    // Handle window resize
    window.addEventListener('resize', function () {
        dropdownMenus.forEach(menu => {
            menu.classList.remove('active');
        });
    });

    // Mobile menu functionality (keep existing)
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mainNav.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');

            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        document.addEventListener('click', (e) => {
            if (mainNav.classList.contains('active') &&
                !mainNav.contains(e.target) &&
                !mobileMenuBtn.contains(e.target)) {
                mainNav.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});

/* ===== IMAGE LAZY LOADING & OPTIMIZATION ===== */

// Intersection Observer for enhanced lazy loading
function initLazyLoading() {
    // Check for native lazy loading support
    const supportsLazyLoading = 'loading' in HTMLImageElement.prototype;

    // Create intersection observer for images
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;

                // Add loaded class when image loads
                img.onload = () => {
                    img.classList.add('loaded');
                    img.classList.add('fade-in');
                    img.parentElement?.classList.remove('loading');
                };

                // Handle image error
                img.onerror = () => {
                    img.classList.add('loaded');
                    img.style.display = 'none';
                    // Show fallback icon
                    const fallback = document.createElement('i');
                    fallback.className = img.dataset.fallbackIcon || 'fas fa-image';
                    fallback.style.cssText = 'font-size: 3rem; color: #ccc;';
                    img.parentElement?.appendChild(fallback);
                };

                // If native lazy loading is supported, just add the attribute
                if (supportsLazyLoading && img.loading !== 'lazy') {
                    img.loading = 'lazy';
                }

                // Stop observing once we've handled the image
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '100px 0px',
        threshold: 0.01
    });

    // Observe all images that need lazy loading
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });

    // Observer for background images
    const bgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const bgImage = element.dataset.bgImage;

                if (bgImage) {
                    element.style.backgroundImage = `url(${bgImage})`;
                    element.classList.add('bg-loaded');
                    bgObserver.unobserve(element);
                }
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.01
    });

    // Observe elements with data-bg-image attribute
    document.querySelectorAll('[data-bg-image]').forEach(el => {
        bgObserver.observe(el);
    });

    return imageObserver;
}

// Progressive image loading with blur-up effect
function initProgressiveLoading() {
    const progressiveImages = document.querySelectorAll('.progressive img');

    progressiveImages.forEach(img => {
        const src = img.dataset.src;
        const placeholder = img.dataset.placeholder;

        if (src && placeholder) {
            // Create placeholder image
            const placeholderImg = new Image();
            placeholderImg.src = placeholder;
            placeholderImg.onload = () => {
                img.style.filter = 'blur(0)';
                img.classList.add('loaded');
            };

            // Load full resolution image
            img.src = src;
        }
    });
}

// Add loading state to images before they load
function addImageLoadingStates() {
    document.querySelectorAll('img').forEach(img => {
        // Skip already loaded images
        if (img.complete) {
            img.classList.add('loaded');
            return;
        }

        // Add loading class to parent
        img.parentElement?.classList.add('loading');

        // Remove loading class when loaded
        img.addEventListener('load', () => {
            img.parentElement?.classList.remove('loading');
            img.classList.add('loaded');
        });

        // Handle error
        img.addEventListener('error', () => {
            img.parentElement?.classList.remove('loading');
            img.parentElement?.classList.add('error');
        });
    });
}

// Initialize image optimization on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    initLazyLoading();
    addImageLoadingStates();

    // Re-run for dynamically added content
    const mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            if (mutation.addedNodes.length > 0) {
                // Check for new images
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1) {
                        const newImages = node.querySelectorAll?.('img[loading="lazy"]');
                        newImages?.forEach(img => {
                            const imageObserver = new IntersectionObserver((entries) => {
                                entries.forEach(entry => {
                                    if (entry.isIntersecting) {
                                        const img = entry.target;
                                        img.onload = () => img.classList.add('loaded');
                                        img.onerror = () => {
                                            img.style.display = 'none';
                                            const fallback = document.createElement('i');
                                            fallback.className = img.dataset.fallbackIcon || 'fas fa-image';
                                            fallback.style.cssText = 'font-size: 3rem; color: #ccc;';
                                            img.parentElement?.appendChild(fallback);
                                        };
                                        observer.unobserve(img);
                                    }
                                });
                            }, { rootMargin: '100px 0px' });
                            imageObserver.observe(img);
                        });

                        // Check for new background images
                        const newBgImages = node.querySelectorAll?.('[data-bg-image]');
                        newBgImages?.forEach(el => {
                            el.style.backgroundImage = `url(${el.dataset.bgImage})`;
                        });
                    }
                });
            }
        });
    });

    mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
    });
});

// Preload critical images
function preloadCriticalImages() {
    const criticalImages = [
        'images/team/robin_cabeza_ruiz.png'
    ];

    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Run preload for critical images
preloadCriticalImages();

/* ===== RESPONSIVE IMAGE & WEBP SUPPORT ===== */

// Check WebP support
function supportsWebP() {
    const canvas = document.createElement('canvas');
    if (canvas.getContext && canvas.getContext('2d')) {
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
    return false;
}

// Generate responsive image markup with srcset
function getResponsiveImageMarkup(config) {
    const {
        src,
        alt,
        sizes = '(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw',
        className = '',
        loading = 'lazy',
        decoding = 'async',
        fallbackIcon = 'fas fa-image'
    } = config;

    // Generate filename variants for different sizes
    const basePath = src.replace(/\.[^/.]+$/, '');
    const extension = src.split('.').pop();

    // Create srcset for responsive images
    const srcset = [
        `${basePath}-small.${extension} 480w`,
        `${basePath}-medium.${extension} 768w`,
        `${basePath}-large.${extension} 1200w`
    ].join(', ');

    // Check if WebP versions exist (for browsers that support it)
    const useWebP = supportsWebP();
    const webpSrcset = useWebP ? [
        `${basePath}-small.webp 480w`,
        `${basePath}-medium.webp 768w`,
        `${basePath}-large.webp 1200w`
    ].join(', ') : '';

    // Build the picture element with WebP source
    let markup = `<picture>`;

    if (useWebP && webpSrcset) {
        markup += `
            <source srcset="${webpSrcset}" sizes="${sizes}" type="image/webp">`;
    }

    markup += `
        <img
            src="${src}"
            srcset="${srcset}"
            sizes="${sizes}"
            alt="${alt}"
            class="${className}"
            loading="${loading}"
            decoding="${decoding}"
            onload="this.classList.add('loaded')"
            onerror="this.parentElement.innerHTML='<i class=\\'${fallbackIcon}\\'></i>'"
        >
    </picture>`;

    return markup;
}

// Update team member image rendering to use responsive images
function renderTeam() {
    const teamGrid = document.querySelector('.team-grid');
    if (!teamGrid) return;

    teamGrid.innerHTML = teamMembers.map(member => {
        const imageHtml = member.image
            ? `<img src="${member.image}" alt="${member.name}" loading="lazy" decoding="async" class="fade-in" onload="this.classList.add('loaded')" onerror="this.parentElement.innerHTML='<i class=\\'fas fa-user\\'></i>'">`
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

// Update profile image rendering to use responsive images
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

    // Get filtered content for this researcher
    const researcherPublications = filterPublicationsByResearcher(member);
    const researcherEvents = filterEventsByResearcher(member);

    const imageHtml = member.image
        ? `<img src="${member.image}" alt="${member.name}" class="profile-image" loading="lazy" decoding="async" onload="this.classList.add('loaded')" onerror="this.parentElement.innerHTML='<i class=\\'fas fa-user profile-icon-placeholder\\'></i>'">`
        : `<i class="fas fa-user profile-icon-placeholder"></i>`;

    const rolesHtml = member.roles.map(role => {
        const translateAttr = role.translateKey ? ` data-translate="${role.translateKey}"` : '';
        return `<p class="profile-role"${translateAttr}>${role.text}</p>`;
    }).join('');

    const interestsHtml = member.interests.map(interest =>
        `<span class="interest-tag">${interest}</span>`
    ).join('');

    const publicationsHtml = researcherPublications.length > 0
        ? `
        <div class="profile-section-block">
            <h3>Publications (2025)</h3>
            <div class="profile-publications">
                ${researcherPublications.map(pub => `
                    <div class="profile-publication-card">
                        <h4>${pub.title}</h4>
                        <p class="pub-authors">${pub.authors}</p>
                        <p class="pub-journal">${pub.journal || pub.book}</p>
                        <p class="pub-volume">${pub.volume}</p>
                        ${pub.doi ? `<a href="${pub.doi}" class="pub-doi" target="_blank">View Publication</a>` : ''}
                        ${pub.scopus ? '<span class="scopus-badge">SCOPUS</span>' : ''}
                    </div>
                `).join('')}
            </div>
        </div>`
        : '';

    const eventsHtml = researcherEvents.length > 0
        ? `
        <div class="profile-section-block">
            <h3>Event Participation (2025)</h3>
            <div class="profile-events">
                ${researcherEvents.map(event => `
                    <div class="profile-event-card">
                        <h4>${event.eventName}</h4>
                        <p class="event-meta">${event.date} • ${event.location}</p>
                        <p class="event-title">${event.presentationTitle}</p>
                        <p class="event-authors">${event.authors.join(', ')}</p>
                        ${event.workshop ? `<p class="event-workshop">Workshop: ${event.workshop}</p>` : ''}
                    </div>
                `).join('')}
            </div>
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
            ${eventsHtml}
        </div>
    `;

    // Apply translations if needed
    const currentLang = localStorage.getItem('selectedLanguage') || 'en';
    if (currentLang !== 'en') {
        changeLanguage(currentLang);
    }
}

// Update projects rendering to use responsive images
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projects.map(project => {
        const projectImage = project.image
            ? `<img src="${project.image}" alt="Project Image" loading="lazy" decoding="async" onload="this.classList.add('loaded')" onerror="this.parentElement.innerHTML='<i class=\\'fas fa-project-diagram\\'></i>'">`
            : `<i class="fas fa-project-diagram"></i>`;
        return `
            <div class="project-card">
                <div class="project-image">
                    ${projectImage}
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