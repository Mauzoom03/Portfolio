// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        header: {
          home: "Home",
          aboutMe: "About Me",
          projects: "Projects",
        },
        main: {
          title: "Hello, I'm Mauro Quintana",
          subtitle:
            "Junior FullStack Developer creating digital experiences from scratch to the top. Welcome to my portfolio, where innovation and creativity come together to bring impactful projects to life!",
          downloadCv: "Download CV",
        },
        about: {
          title: "About Me",
          intro:
            "My name is Mauro Quintana Hernández. From a young age, I discovered not only my affinity for technology but also an innate curiosity to understand the why and how of things.",
          detail:
            "This fascination led me to the world of development. I stand out for my friendly demeanor and problem-solving skills. I firmly believe in teamwork, which is a fundamental part of my daily routine. Currently, I work as a freelancer, collaborating on a variety of projects ranging from enterprise applications to optimized websites. I am always seeking new experiences and opportunities to continue growing professionally. I am based in Madrid, Spain.",
        },
        skills: {
          title: "Skills",
        },
        aptitudes: {
          title: "Aptitudes",
          languagesTitle: "Languages",
          languages: {
            spanish: "Spanish",
            english: "English",
            french: "French",
          },
          socialSkillsTitle: "Social Skills",
          socialSkills: {
            communication: "Communication",
            teamwork: "Teamwork",
            problemSolving: "Problem Solving",
          },
        },
        formacion: {
          title: "Educational Training",
          description: "FullStack Developer Bootcamp(2023)",
        },
        projects: {
          title: "Personal Projects",
          description1:
            "UP CODE is an essential tool for frontend developers that simplifies the creation of elements for apps and websites. With UP CODE, you can easily design contact forms for your business or customize the look of your blog in a matter of minutes. The tool automatically generates the code needed to implement your designs.",
          description2:
            "Wiki Books is an innovative literary platform, developed with PHP Laravel and supported by a solid SQL database. This application is designed for reading lovers, offering an exclusive niche where you can explore and discover a vast collection of classic works of world literature. The interface is intuitive and makes it easy to find iconic titles, renowned authors and genres that have marked literary history. With an elegant and functional design, Wiki Books makes the experience of finding and reading classics something accessible and enriching for any passionate reader. (Coming soon to production)",
          description3:
            "Techinder is an innovative platform that acts like a Tinder for developers, allowing you to match with both exciting freelance projects and other developers. Still in development, Techinder aims to transform the way tech professionals connect, making it easier to find meaningful opportunities and collaborations. Stay tuned for its launch!",
          showDemo: "Show Demo",
          hideDemo: "Hide Demo",
          website: "Website",
        },
        footer: {
          description:
            "&copy; 2024 Mauro Quintana Hernandez. All rights reserved.",
        },
      },
    },
    es: {
      translation: {
        header: {
          home: "Inicio",
          aboutMe: "Sobre Mi",
          projects: "Proyectos",
        },
        main: {
          title: "Hola, soy Mauro Quintana",
          subtitle:
            "Desarrollador FullStack Junior creando experiencias digitales desde cero hasta la cima. ¡Bienvenido a mi portafolio, donde la innovación y la creatividad se unen para dar vida a proyectos impactantes!",
          downloadCv: "Descargar CV",
        },
        about: {
          title: "Sobre Mi",
          intro:
            "Mi nombre es Mauro Quintana Hernández. Desde mi infancia, descubrí no solo mi afinidad por la informática, sino también una curiosidad innata por comprender el porqué y el cómo de las cosas.",
          detail:
            "Esta fascinación me llevó al mundo del desarrollo. Me destaco por mi simpatía y mi capacidad para resolver problemas. Creo firmemente en el trabajo en equipo, que forma parte fundamental de mi día a día. Actualmente, trabajo como freelancer, colaborando en una variedad de proyectos, desde aplicaciones empresariales hasta sitios web optimizados. Siempre estoy en busca de nuevas experiencias y oportunidades para seguir creciendo profesionalmente. Estoy ubicado en Madrid, España.",
        },
        skills: {
          title: "Habilidades",
        },
        aptitudes: {
          title: "Aptitudes",
          languagesTitle: "Idiomas",
          languages: {
            spanish: "Español",
            english: "Inglés",
            french: "Francés",
          },
          socialSkillsTitle: "Habilidades Sociales",
          socialSkills: {
            communication: "Comunicación",
            teamwork: "Trabajo en Equipo",
            problemSolving: "Resolución de problemas",
          },
        },
        formacion: {
          title: "Formación",
          description: "Bootcamp Desarrollo Fullstack(2023)",
        },
        projects: {
          title: "Proyectos Personales",
          description1:
            " UP CODE es una herramienta esencial para desarrolladores de frontend que simplifica la creación de elementos para aplicaciones y sitiosweb. Con UP CODE, puedes diseñar fácilmente formularios de contactopara tu negocio o personalizar el aspecto de tu blog en cuestión deminutos. La herramienta genera automáticamente el código necesario para implementar tus diseños.",
          description2:
            "Wiki Books es una plataforma literaria innovadora, desarrollada con PHP Laravel y respaldada por una sólida base de datos en SQL. Esta aplicación está diseñada para los amantes de la lectura, ofreciendo un nicho exclusivo donde puedes explorar y descubrir una vasta colección de obras clásicas de la literatura mundial. La interfaz es intuitiva y facilita la búsqueda de títulos icónicos, autores reconocidos y géneros que han marcado la historia literaria. Con un diseño elegante y funcional, Wiki Books convierte la experiencia de encontrar y leer clásicos en algo accesible y enriquecedor para cualquier lector apasionado.(Proximamente despliegue en produccion)",
          description3:
            "Techinder es una innovadora plataforma que actúa como un Tinder para desarrolladores, permitiendo hacer matches tanto con emocionantes proyectos freelancers como con otros desarrolladores. Aún en desarrollo, Techinder busca transformar la manera en que los profesionales del ámbito tecnológico se conectan, facilitando la búsqueda de oportunidades y colaboraciones significativas. ¡Mantente atento a su lanzamiento!",
          showDemo: "Mostrar Demo",
          hideDemo: "Ocultar Demo",
          website: "SitioWeb",
        },
        footer: {
          description:
            "&copy; 2024 Mauro Quintana Hernandez. Todos los derechos reservados.",
        },
      },
    },
  },
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
