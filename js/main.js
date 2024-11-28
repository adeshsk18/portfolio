// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
let isMenuOpen = false;

hamburger.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.backgroundColor = 'rgba(10, 25, 47, 0.95)';
        navLinks.style.padding = '2rem';
        navLinks.style.backdropFilter = 'blur(10px)';
        hamburger.classList.add('active');
    } else {
        navLinks.style.display = '';
        navLinks.style.flexDirection = '';
        navLinks.style.position = '';
        navLinks.style.top = '';
        navLinks.style.left = '';
        navLinks.style.right = '';
        navLinks.style.backgroundColor = '';
        navLinks.style.padding = '';
        navLinks.style.backdropFilter = '';
        hamburger.classList.remove('active');
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (isMenuOpen && !hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.click();
    }
});

// Projects data
const projects = [
    {
        title: 'Project 1',
        description: 'A brief description of project 1. This showcases my ability to create responsive and interactive web applications.',
        image: 'assets/project1.jpg',
        tech: ['React', 'Node.js', 'MongoDB'],
        github: 'https://github.com/yourusername/project1',
        live: 'https://project1.com'
    },
    {
        title: 'Project 2',
        description: 'A brief description of project 2. This demonstrates my expertise in building scalable backend systems.',
        image: 'assets/project2.jpg',
        tech: ['Python', 'Django', 'PostgreSQL'],
        github: 'https://github.com/yourusername/project2',
        live: 'https://project2.com'
    },
    {
        title: 'Project 3',
        description: 'A brief description of project 3. This shows my skills in creating beautiful and performant user interfaces.',
        image: 'assets/project3.jpg',
        tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
        github: 'https://github.com/yourusername/project3',
        live: 'https://project3.com'
    }
];

// Populate projects
const projectsGrid = document.querySelector('.projects-grid');
projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.setAttribute('data-aos', 'fade-up');
    
    projectCard.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.github}" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github"></i>
                </a>
                <a href="${project.live}" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    `;
    
    projectsGrid.appendChild(projectCard);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (isMenuOpen) {
                hamburger.click();
            }
        }
    });
});

// Typing animation for hero name
const heroName = document.querySelector('.hero-name');
const text = heroName.textContent;
heroName.textContent = '';
let charIndex = 0;

function typeText() {
    if (charIndex < text.length) {
        heroName.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    }
}

// Start typing animation after a delay
setTimeout(typeText, 1000);
