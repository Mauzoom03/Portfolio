import { useState, useEffect } from "react";
import logo from "../../../../public/images/Mauro q.h.png";
import "./_header.scss";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const switchLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`container-logo ${isScrolled ? "scrolled" : ""}`}>
      <img className="logo" src={logo} alt="Logo" />
      <nav className="container-links">
        <ul className="links">
          <li>
            <ScrollLink to="main" smooth={true} duration={500}>
              {t("header.home")}
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about-me" smooth={true} duration={500}>
              {t("header.aboutMe")}
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="projects" smooth={true} duration={500}>
              {t("header.projects")}
            </ScrollLink>
          </li>
          <div className="language-switcher">
            <button onClick={() => switchLanguage("en")} className="lang-btn">
              EN
            </button>
            <button onClick={() => switchLanguage("es")} className="lang-btn">
              ES
            </button>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
