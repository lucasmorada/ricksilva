const portfolioItems = [
  { id: 1, type: 'video', category: 'Videos', title: 'Cinematic Showreel', image: 'https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { id: 2, type: 'photo', category: 'Photography', title: 'Urban Portraits', image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { id: 3, type: 'video', category: 'Commercial', title: 'Brand Campaign', image: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { id: 4, type: 'photo', category: 'Photography', title: 'Fashion Editorial', image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { id: 5, type: 'video', category: 'Videos', title: 'Documentary Short', image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { id: 6, type: 'photo', category: 'Commercial', title: 'Product Photography', image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { id: 7, type: 'video', category: 'Videos', title: 'Music Video', image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { id: 8, type: 'photo', category: 'Photography', title: 'Street Photography', image: 'https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg?auto=compress&cs=tinysrgb&w=1200' },
];

const skills = [
  { name: 'Vídeos', percentage: 98, icon: 'video' },
  { name: 'Fotos', percentage: 100, icon: 'camera' },
  { name: 'Edição de Vídeos', percentage: 100, icon: 'film' },
  { name: 'Color Grading', percentage: 93, icon: 'award' },
];

const stats = [
  { number: '100+', label: 'Projetos Entregues' },
  { number: '10+', label: 'Anos de Experiência' },
  { number: '50+', label: 'Clientes Satisfeitos' },
  { number: '20+', label: 'Prêmios' },
];

let currentActiveSection = 'home';
let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initPortfolio();
  initSkills();
  initStats();
  initMouseTracking();
  initFormSubmission();
});

function initNavigation() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');


  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const section = link.getAttribute('data-section');
      scrollToSection(section);
      if (navMenu.parentElement.classList.contains('mobile-menu-open')) {
        toggleMobileMenu();
      }
    });
  });

  mobileMenuBtn.addEventListener('click', toggleMobileMenu);

  document.querySelectorAll('[data-section]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const section = e.target.getAttribute('data-section');
      scrollToSection(section);
    });
  });
}

function toggleMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navbarContent = document.querySelector('.navbar-content');

  navbarContent.parentElement.classList.toggle('mobile-menu-open');
  mobileMenuBtn.classList.toggle('active');
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    currentActiveSection = sectionId;
  }
}

function updateActiveNavLink() {
  const sections = ['home', 'portfolio', 'about', 'contact'];
  let current = 'home';

  sections.forEach(section => {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= 200 && rect.bottom >= 200) {
        current = section;
      }
    }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-section') === current) {
      link.classList.add('active');
    }
  });
}

function initPortfolio() {
  const portfolioGrid = document.getElementById('portfolio-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  renderPortfolioItems(portfolioItems);

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      currentFilter = filter;

      const filtered = filter === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === filter);

      renderPortfolioItems(filtered);
    });
  });
}

function renderPortfolioItems(items) {
  const portfolioGrid = document.getElementById('portfolio-grid');
  portfolioGrid.innerHTML = '';

  items.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'portfolio-item';
    div.style.animationDelay = `${index * 100}ms`;

    const icon = item.type === 'video' ?
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>' :
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>';

    div.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="portfolio-overlay"></div>
      <div class="portfolio-info">
        <p class="portfolio-category">${item.category}</p>
        <h3 class="portfolio-title">${item.title}</h3>
      </div>
      <div class="portfolio-icon">${icon}</div>
    `;

    portfolioGrid.appendChild(div);
  });
}

function initSkills() {
  const skillsList = document.getElementById('skills-list');

  skills.forEach((skill, index) => {
    const div = document.createElement('div');
    div.className = 'skill-item';
    div.style.animationDelay = `${index * 100}ms`;

    const icons = {
      'video': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>',
      'camera': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>',
      'film': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><line x1="16" y1="3" x2="16" y2="7"></line><line x1="8" y1="3" x2="8" y2="7"></line><line x1="12" y1="14" x2="12" y2="14.01"></line><line x1="19" y1="14" x2="19" y2="14.01"></line><line x1="5" y1="14" x2="5" y2="14.01"></line></svg>',
      'award': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2h-2"></path><path d="M6 9a6 6 0 0 0 12 0"></path><path d="M12 9v3"></path><path d="M11 12h2"></path><path d="M12 9L8.5 6.5"></path><path d="M12 9l3.5-2.5"></path></svg>'
    };

    div.innerHTML = `
      <div class="skill-header">
        <div class="skill-label">
          ${icons[skill.icon]}
          <span>${skill.name}</span>
        </div>
        <span class="skill-percentage">${skill.percentage}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-bar-fill" style="width: 0%; animation-delay: 0.5s;"></div>
      </div>
    `;

    skillsList.appendChild(div);

    setTimeout(() => {
      const fill = div.querySelector('.skill-bar-fill');
      fill.style.width = `${skill.percentage}%`;
    }, 100);
  });
}

function initStats() {
  const statsGrid = document.getElementById('stats-grid');

  stats.forEach((stat, index) => {
    const div = document.createElement('div');
    div.className = 'stat-item';
    div.style.animationDelay = `${index * 100}ms`;

    div.innerHTML = `
      <div class="stat-number">${stat.number}</div>
      <div class="stat-label">${stat.label}</div>
    `;

    statsGrid.appendChild(div);
  });
}

function initMouseTracking() {
  const heroGradient = document.getElementById('hero-gradient');
  const hero = document.getElementById('home');

  document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    if (heroGradient && hero) {
      const rect = hero.getBoundingClientRect();
      if (rect.top <= y && y <= rect.bottom) {
        heroGradient.style.background = `radial-gradient(600px at ${x}px ${y - rect.top}px, rgba(255, 255, 255, 0.1), transparent 80%)`;
      }
    }
  });
}

function initFormSubmission() {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Agradeço pela Mensagem! Entrarei em contato em breve:)');
      form.reset();
    });
  }
}

const island = document.getElementById("dynamic-island");
const navbar = document.getElementById("navbar");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  updateActiveNavLink();

  // Topo absoluto
  if (currentScroll <= 20) {
    island.classList.remove("show");
    navbar.classList.remove("hidden");
    navbar.classList.remove("scrolled");
    lastScrollY = currentScroll;
    return;
  }

  navbar.classList.add("scrolled");

  // Descendo
  if (currentScroll > lastScrollY) {
    island.classList.add("show");
    navbar.classList.add("hidden");
  } 
  // Subindo
  else {
    island.classList.remove("show");
    navbar.classList.remove("hidden");
  }

  lastScrollY = currentScroll;
});

document.querySelectorAll("[data-section]").forEach(btn => {
  btn.addEventListener("click", () => {
    const section = document.getElementById(btn.dataset.section);
    section.scrollIntoView({ behavior: "smooth" });
  });
});

