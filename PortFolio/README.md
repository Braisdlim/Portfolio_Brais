
# PortFolio - Brais de la Iglesia Martínez

Portfolio profesional desarrollado con [Astro](https://astro.build/), Tailwind CSS y componentes `.astro` puros. Presenta mi experiencia, formación, proyectos y habilidades como desarrollador Full Stack.

## 🚀 Características

- 100% Astro, sin React ni frameworks adicionales.
- Diseño moderno, responsivo y profesional.
- Scrollspy para navegación activa en todas las secciones (incluido Contacto).
- Cambio de idioma sencillo (ES/EN).
- Secciones: Inicio, Sobre mí, Educación, Proyectos, Habilidades, Contacto y Footer.
- Estilos personalizados con Tailwind y CSS.

## � Estructura del proyecto

```
PortFolio/
├── public/
│   ├── favicon.svg
│   ├── images/
│   │   ├── aboutMe.jpg
│   │   └── profile.jpg
│   └── js/
│       ├── language-toggle.js
│       └── scrollspy.js
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   ├── Education.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Projects.astro
│   │   └── Skills.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── package.json
├── astro.config.mjs
└── tailwind.config.js
```

## 🧑‍💻 Instalación y uso

1. Instala dependencias:
   ```sh
   npm install
   ```
2. Ejecuta en modo desarrollo:
   ```sh
   npm run dev
   ```
3. Compila para producción:
   ```sh
   npm run build
   ```

## 🌐 Demo

Puedes ver el portfolio en local tras ejecutar `npm run dev` y acceder a `http://localhost:4321`.

## 📄 Licencia

MIT

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
