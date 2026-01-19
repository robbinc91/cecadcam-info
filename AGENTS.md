# AGENTS.md - Development Guidelines for CAD/CAM Study Center Website

This file contains development guidelines, build commands, and coding standards for agentic coding agents working on this repository.

## Project Overview

This is a static HTML/CSS/JavaScript website for the CAD/CAM Study Center at the University of Holguín. The site features multilingual support (EN, ES, RU, CN), team profiles, publications, events, and administrative functionality.

## Build/Lint/Test Commands

### Development Server
```bash
# Using Python 3 (recommended)
python -m http.server 8000

# Using Node.js
http-server

# Using PHP
php -S localhost:8000
```
Open browser to `http://localhost:8000`

### Admin Password Generation
```bash
# Generate encrypted admin password
node scripts/generate_admin_enc.js <password>
```

### No Linting/Testing Framework
This project uses vanilla HTML/CSS/JavaScript with no formal linting or testing framework. Manual testing in browsers is required.

## Code Style Guidelines

### HTML Structure
- Use semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- All pages must have proper `lang` attribute and meta tags
- Use `data-translate` attributes for all translatable content
- Maintain consistent navigation structure across all pages
- Use relative paths for internal links

### CSS Architecture
- CSS Custom Properties (variables) defined in `:root` for colors and spacing
- Mobile-first responsive design using media queries
- BEM-like naming for components (`.team-member`, `.team-member-image`)
- Use Flexbox/Grid for layouts
- Smooth transitions and animations with CSS transitions

### JavaScript Patterns
- Use modern ES6+ features consistently
- Separate data layer (`data.js`) from presentation logic
- Use template literals for HTML generation
- Event delegation for dynamic content
- `const`/`let` instead of `var`
- Arrow functions for callbacks and array methods

### File Organization
```
/                      # Root HTML files
css/styles.css         # Main stylesheet
data/                  # JSON data files
├── translations/      # Language translations
│   ├── en.json
│   ├── es.json
│   ├── ru.json
│   └── zh.json
├── team-members.json  # Team member data
├── projects.json      # Research projects data
├── publications.json  # Publications data
├── events.json        # Events data
└── icons-and-refs.json # Contact icon mappings
javascript/            # Application JavaScript
├── script.js         # Main functionality (ES6 module)
├── data.js           # Data loader module
└── data-editor.js    # Admin interface
scripts/              # Build/admin scripts
images/              # Image assets organized by type
```

### Import/Link Guidelines
- External CSS: Use CDNs for fonts and Font Awesome
- Internal CSS: Single main stylesheet in `css/styles.css`
- External JS: No external dependencies (vanilla JS only)
- Internal JS: Modular files, loaded at end of `<body>`

### Naming Conventions
- **Files**: kebab-case (`data-editor.html`, `script.js`)
- **Classes**: kebab-case with BEM prefixes (`.team-member__title`)
- **IDs**: snake_case for major elements (`#profile-content`)
- **Variables**: camelCase for JavaScript (`teamMembers`)
- **Functions**: camelCase with descriptive verbs (`renderTeam`, `filterPublicationsByResearcher`)

### Error Handling
- Graceful degradation for missing images (use FontAwesome icons as fallback)
- Check for element existence before DOM manipulation (`if (!element) return`)
- User-friendly error messages in appropriate language
- LocalStorage operations wrapped in try/catch for privacy mode compatibility

### Multilingual Support
- All user-facing strings must use `data-translate` attributes
- Translation keys use snake_case (`nav_about`, `hero_title`)
- Language preference stored in localStorage
- Update all language files when adding new translatable content

### Responsive Design Requirements
- Mobile-first approach with breakpoints at 768px (tablet) and 1024px (desktop)
- Touch-friendly tap targets (minimum 44px)
- Readable font sizes and contrast ratios
- Flexible grid layouts using CSS Grid/Flexbox

### Performance Considerations
- Optimize images for web (WebP format preferred)
- Lazy load non-critical images
- Minimize external dependencies
- Use CSS animations instead of JavaScript when possible
- Debounce scroll and resize events

### Security Guidelines
- No sensitive data in client-side JavaScript
- Admin access uses XOR encryption with stored password file
- Input validation for any user-provided data
- Use HTTPS for all external resources

### Accessibility Standards
- Semantic HTML for screen readers
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all meaningful images
- Keyboard navigation support
- ARIA labels where needed
- Focus management for dynamic content

### Content Management
- Team member data stored in `data.js` with consistent structure
- Publications and events use categorized data objects
- Profile pages generated dynamically from team data
- Editorial interface available through `data-editor.html` (admin access required)

## Common Development Tasks

### Adding New Team Member
1. Add member object to `teamMembers` array in `javascript/data.js`
2. Add profile image to `images/team/` directory
3. Update translations if needed

### Adding New Language
1. Add language code and translations to `translations` object in `javascript/data.js`
2. Update language selector in navigation
3. Test all pages for proper translation display

### Creating New Page
1. Follow existing HTML structure and navigation pattern
2. Use same header/footer includes
3. Add proper meta tags and translations
4. Ensure responsive design consistency

## Git Workflow
- Feature branches: `git checkout -b feature/description`
- Commit format: `Add description of change`
- No formal PR process, but ensure code follows these guidelines before merging