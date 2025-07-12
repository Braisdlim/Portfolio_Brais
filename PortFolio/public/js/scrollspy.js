// Scrollspy para resaltar la sección activa en la navegación
class ScrollSpy {
  constructor() {
    this.sections = [];
    this.navLinks = [];
    this.init();
  }

  init() {
    // Obtener todas las secciones
    this.sections = [
      document.getElementById('inicio'),
      document.getElementById('sobre-mi'),
      document.getElementById('habilidades'),
      document.getElementById('proyectos'),
      document.getElementById('educacion'),
      document.getElementById('contacto')
    ].filter(section => section !== null);

    // Obtener todos los enlaces de navegación
    this.navLinks = Array.from(document.querySelectorAll('.nav-link'));

    // Configurar el observer
    this.setupIntersectionObserver();
    
    // Ejecutar inmediatamente para establecer el estado inicial
    this.checkActiveSection();
  }

  setupIntersectionObserver() {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Detectar cuando la sección está en el 20%-30% superior del viewport
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observar todas las secciones
    this.sections.forEach(section => {
      this.observer.observe(section);
    });
  }

  setActiveSection(sectionId) {
    // Remover clase activa de todos los enlaces
    this.navLinks.forEach(link => {
      link.classList.remove('active-section');
    });

    // Mapear IDs de sección a IDs de navegación
    const sectionToNavMap = {
      'inicio': '#inicio',
      'sobre-mi': '#sobre-mi', 
      'habilidades': '#habilidades',
      'proyectos': '#proyectos',
      'educacion': '#educacion',
      'contacto': '#contacto'
    };

    // Encontrar el enlace correspondiente y añadir clase activa
    const targetHref = sectionToNavMap[sectionId];
    if (targetHref) {
      const activeLink = this.navLinks.find(link => 
        link.getAttribute('href') === targetHref
      );
      
      if (activeLink) {
        activeLink.classList.add('active-section');
      }
    }
  }

  checkActiveSection() {
    // Método alternativo usando scroll position para estado inicial
    const scrollY = window.scrollY;
    let activeSection = null;

    this.sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + scrollY;
      const sectionHeight = rect.height;

      if (scrollY >= sectionTop - 100 && scrollY < sectionTop + sectionHeight - 100) {
        activeSection = section.id;
      }
    });

    if (activeSection) {
      this.setActiveSection(activeSection);
    }
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new ScrollSpy();
});

// También inicializar si el script se carga después del DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ScrollSpy();
  });
} else {
  new ScrollSpy();
}
