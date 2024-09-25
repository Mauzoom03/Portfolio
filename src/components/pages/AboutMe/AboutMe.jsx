import { useEffect, useRef } from "react";
import "./_aboutMe.scss";
import gsap from "gsap";
import Aptitudes from "../Aptitudes/Aptitudes";
import { useTranslation } from "react-i18next";

function AboutMe() {
  const images = [
    {
      id: 1,
      imageUrl: "/images/JS.png",
      title: "JavaScript",
    },
    {
      id: 2,
      imageUrl: "/images/React.png",
      title: "React",
    },
    {
      id: 3,
      imageUrl: "/images/Angular.png",
      title: "Angular",
    },
    {
      id: 4,
      imageUrl: "/images/html.png",
      title: "Html",
    },
    {
      id: 5,
      imageUrl: "/images/css.png",
      title: "Css",
    },
    {
      id: 6,
      imageUrl: "/images/SASS.png",
      title: "Sass",
    },
    {
      id: 7,
      imageUrl: "/images/NextJs.png",
      title: "NextJs",
    },
    {
      id: 8,
      imageUrl: "/images/TS.png",
      title: "TypeScript",
    },
    {
      id: 9,
      imageUrl: "/images/php.png",
      title: "PHP",
    },
    {
      id: 10,
      imageUrl: "/images/sql.png",
      title: "SQL",
    },
    {
      id: 11,
      imageUrl: "/images/Node.png",
      title: "NodeJs",
    },
    {
      id: 12,
      imageUrl: "/images/Github.png",
      title: "GitHub",
    },
    {
      id: 13,
      imageUrl: "/images/MongoDb.png",
      title: "MongoDB",
    },
    {
      id: 14,
      imageUrl: "/images/symfony.png",
      title: "Symfony",
    },
    {
      id: 15,
      imageUrl: "/images/Microsoft_.NET_logo.svg.png",
      title: ".Net",
    },
    {
      id: 16,
      imageUrl:
        "/images/wordpress-logo-wordpress-icon-transparent-png-free-vector.jpg",
      title: "WordPress",
    },
    {
      id: 14,
      imageUrl: "/images/laravel.webp",
      title: "Laravel",
    },
    {
      id: 15,
      imageUrl: "/images/AWS-logo-2.jpg",
      title: "AWS",
    },
    {
      id: 16,
      imageUrl: "/images/IM_VS Code - Icono.png",
      title: "VisualStudio",
    },
    {
      id: 17,
      imageUrl: "/images/Figma.png",
      title: "Figma",
    },
  ];

  const containerRef = useRef(null);
  const { t } = useTranslation();
  useEffect(() => {
    const container = containerRef.current;

    function handleScroll() {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const containerTop = container.offsetTop;

      // Calcula la distancia entre la parte superior del contenedor y el borde superior de la ventana
      const distanceFromTop = containerTop - scrollTop;

      // Aplica animaciones en función de la dirección del scroll
      if (distanceFromTop <= windowHeight * 0.5) {
        gsap.to(container, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
        });
      } else {
        gsap.to(container, {
          opacity: 0,
          y: 100,
          duration: 1,
          ease: "power4.out",
        });
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container-aboutMe" id="about-me" ref={containerRef}>
      <div className="info-container-title">
        <h1>{t("about.title")}</h1>
        <div />
        <div className="container-img">
          <img
            className="aboutmeImg"
            src="/images/AboutMeImg.png"
            alt="aboutme"
          />
          <div className="text-container">
            <h2 className="subtitle">{t("about.intro")}</h2>
            <h2 className="subtitle">
              {t("about.detail").split("freelancer")[0]}
              <span style={{ color: "black" , fontWeight: "bold"  }}>
                freelancer
              </span>
              {t("about.detail").split("freelancer")[1].split("Madrid")[0]}
              <span style={{ color: "black", fontWeight: "bold" }}>Madrid</span>
              {t("about.detail").split("Madrid")[1]}
            </h2>
          </div>
        </div>
      </div>
      <div className="container-skills-title">
        <h1 className="skills-title">{t("skills.title")}</h1>
      </div>
      <div className="container-skills-img">
        <ul className="list-skills">
          {images.map((image) => (
            <li key={image.id}>
              <div className="card">
                <div className="card-inner">
                  <div className="card-front">
                    <img src={image.imageUrl} alt={image.title} />
                  </div>
                  <div className="card-back">
                    <h2>{image.title}</h2>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Aptitudes />

      <div className="container-formacion-title ">
        <h1 className="formacion-title">{t("formacion.title")}</h1>
      </div>
      <div className="container-formacion-img">
        <img
          className="formacionImg"
          src="https://www.todoenlaces.com/wp-content/uploads/job-manager-uploads/featured_image/2023/08/LOGOTIPO_UPGRADE-01.png"
          alt="formacion"
        />
        <h2>{t("formacion.description")}</h2>
      </div>
    </div>
  );
}

export default AboutMe;
