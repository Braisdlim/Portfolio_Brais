// --- Language Switcher Interruptor visual ---
document.addEventListener('DOMContentLoaded', function () {
  const langSwitch = document.getElementById('langSwitch');
  const langSwitchInner = document.querySelector('.lang-switch-inner');
  let current = localStorage.getItem('preferredLanguage') || 'es';

  function updateSwitchUI(lang) {
    if (langSwitch) {
      langSwitch.classList.remove('es', 'en');
      langSwitch.classList.add(lang);
    }
    if (langSwitchInner) {
      langSwitchInner.classList.remove('es', 'en');
      langSwitchInner.classList.add(lang);
    }
    // Actualiza la letra dentro del círculo
    var toggleLabel = document.querySelector('.lang-switch-toggle-label');
    if (toggleLabel) {
      toggleLabel.textContent = lang.toUpperCase();
    }
    document.documentElement.lang = lang;
  }

  function switchLanguage() {
    current = current === 'es' ? 'en' : 'es';
    localStorage.setItem('preferredLanguage', current);
    updateSwitchUI(current);
    if (typeof changeLanguage === 'function') {
      changeLanguage(current);
    }
  }

  if (langSwitch) {
    langSwitch.addEventListener('click', function (e) {
      e.preventDefault();
      switchLanguage();
    });
    // Inicializa el estado visual
    updateSwitchUI(current);
    if (typeof changeLanguage === 'function') {
      changeLanguage(current);
    }
  }
});
// --- Fin Language Switcher Interruptor visual ---

// Traducciones simples (puedes expandirlas)
const translations = {
  es: {
    'inicio': 'Inicio',
    'sobre-mi': 'Sobre mí',
    'educacion': 'Educación',
    'proyectos': 'Proyectos',
    'habilidades': 'Habilidades',
    'contacto': 'Contacto',
    'download-cv': 'Descargar CV',
    'hero-title': 'Desarrollador Full Stack',
    'hero-subtitle': 'Creando soluciones digitales innovadoras con tecnologías modernas',
    'hero-cta': 'Ver mi trabajo',
    'about-title': 'Sobre mí',
    'about-p1': 'Soy un desarrollador apasionado por crear soluciones tecnológicas que marquen la diferencia. Con más de 3 años de experiencia en desarrollo web, me especializo en tecnologías modernas que permiten construir aplicaciones robustas y escalables.',
    'about-p2': 'Mi enfoque se centra en escribir código limpio, implementar las mejores prácticas y mantenerme actualizado con las últimas tendencias del desarrollo. Disfruto creando experiencias digitales que combinen funcionalidad y diseño.',
    'skills-title': 'Habilidades',
    'skills-description': 'Tecnologías y herramientas que domino para crear soluciones innovadoras',
    'programming-languages': 'Lenguajes de Programación',
    'web-development': 'Desarrollo Web',
    'databases': 'Bases de Datos',
    'development-tools': 'Herramientas de Desarrollo',
    'learning': 'En Aprendizaje',
    'projects-title': 'Proyectos',
    'projects-description': 'Una selección de mis trabajos más recientes y destacados',
    'contact-title': 'Contacto',
    'contact-description': '¿Tienes un proyecto en mente? ¡Hablemos!'
  },
  en: {
    'inicio': 'Home',
    'sobre-mi': 'About me',
    'educacion': 'Education',
    'proyectos': 'Projects',
    'habilidades': 'Skills',
    'contacto': 'Contact',
    'download-cv': 'Download CV',
    'hero-title': 'Full Stack Developer',
    'hero-subtitle': 'Creating innovative digital solutions with modern technologies',
    'hero-cta': 'See my work',
    'about-title': 'About me',
    'about-p1': 'I am a developer passionate about creating technological solutions that make a difference. With over 3 years of experience in web development, I specialize in modern technologies that enable building robust and scalable applications.',
    'about-p2': 'My approach focuses on writing clean code, implementing best practices, and staying updated with the latest development trends. I enjoy creating digital experiences that combine functionality and design.',
    'skills-title': 'Skills',
    'skills-description': 'Technologies and tools I master to create innovative solutions',
    'programming-languages': 'Programming Languages',
    'web-development': 'Web Development',
    'databases': 'Databases',
    'development-tools': 'Development Tools',
    'learning': 'Learning',
    'projects-title': 'Projects',
    'projects-description': 'A selection of my most recent and outstanding work',
    'contact-title': 'Contact',
    'contact-description': 'Have a project in mind? Let\'s talk!'
  }
};

function changeLanguage(lang) {
  document.querySelectorAll('[data-translate]').forEach(function(element) {
    var key = element.getAttribute('data-translate');
    if (key && translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}
