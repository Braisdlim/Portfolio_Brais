// --- Language Switcher Interruptor visual ---
document.addEventListener('DOMContentLoaded', function () {
  const langSwitchDesktop = document.getElementById('langSwitchSimple');
  const langSwitchMobile = document.getElementById('langSwitchMobile');
  const langSwitchDesktopLabel = document.getElementById('langSwitchSimpleLabel');
  const langSwitchMobileLabel = document.getElementById('langSwitchMobileLabel');
  
  let current = localStorage.getItem('preferredLanguage') || 'en';
  let translations = {};

  // Cargar traducciones
  async function loadTranslations(lang) {
    try {
      const response = await fetch(`/i18n/${lang}.json`);
      const data = await response.json();
      translations[lang] = data;
      return data;
    } catch (error) {
      console.warn(`Could not load translations for ${lang}:`, error);
      return {};
    }
  }

  function updateSwitchUI(lang) {
    // Actualiza las etiquetas de los botones
    if (langSwitchDesktopLabel) {
      langSwitchDesktopLabel.textContent = lang.toUpperCase();
    }
    if (langSwitchMobileLabel) {
      langSwitchMobileLabel.textContent = lang.toUpperCase();
    }
    document.documentElement.lang = lang;
  }

  async function switchLanguage() {
    current = current === 'es' ? 'en' : 'es';
    localStorage.setItem('preferredLanguage', current);
    updateSwitchUI(current);
    
    // Cargar traducciones si no están cargadas
    if (!translations[current]) {
      await loadTranslations(current);
    }
    
    changeLanguage(current);
  }

  // Event listeners para ambos botones
  if (langSwitchDesktop) {
    langSwitchDesktop.addEventListener('click', function (e) {
      e.preventDefault();
      switchLanguage();
    });
  }
  
  if (langSwitchMobile) {
    langSwitchMobile.addEventListener('click', function (e) {
      e.preventDefault();
      switchLanguage();
    });
  }

  // Función para cambiar idioma
  function changeLanguage(lang) {
    const langTranslations = translations[lang];
    if (!langTranslations) {
      console.warn('No translations found for language:', lang);
      return;
    }

    console.log('Changing language to:', lang);
    
    document.querySelectorAll('[data-translate]').forEach(function(element) {
      const key = element.getAttribute('data-translate');
      if (key && langTranslations[key]) {
        const content = langTranslations[key];
        
        // Verificar si el contenido incluye HTML
        if (content.includes('<') && content.includes('>')) {
          console.log('Setting innerHTML for key:', key);
          element.innerHTML = content;
        } else {
          element.textContent = content;
        }
      }
    });
    
    console.log('Language change completed');
  }

  // Inicialización
  async function init() {
    // Cargar traducciones para el idioma actual
    await loadTranslations(current);
    // También precargar el otro idioma
    await loadTranslations(current === 'es' ? 'en' : 'es');
    
    updateSwitchUI(current);
    
    // Forzar aplicación de traducciones al cargar
    setTimeout(() => {
      changeLanguage(current);
    }, 100);
  }

  init();
});
// --- Fin Language Switcher Interruptor visual ---
