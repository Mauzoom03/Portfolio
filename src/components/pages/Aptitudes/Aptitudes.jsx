import { useState, useEffect } from "react";
import "./aptitudes.scss";
import { useTranslation } from "react-i18next";

const Aptitudes = () => {
  const [inView, setInView] = useState(false);
  const {t} = useTranslation();
  const skills = [
    {
      title: t("aptitudes.languagesTitle"), 
      languages: [
        { name: t("aptitudes.languages.spanish"), width: "100%" },
        { name: t("aptitudes.languages.english"), width: "100%" },
        { name: t("aptitudes.languages.french"), width: "40%" },
      ],
    },
    {
      title: t("aptitudes.socialSkillsTitle"),
      languages: [
        { name: t("aptitudes.socialSkills.communication"), width: "100%" },
        { name: t("aptitudes.socialSkills.teamwork"), width: "100%" },
        { name: t("aptitudes.socialSkills.problemSolving"), width: "100%" },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".container-aptitudes");
      if (element) {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        console.log("Position:", position, "Window Height:", windowHeight);

        if (position < windowHeight - 100) {
          console.log("Component is in view");
          setInView(true);
        } else {
          setInView(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container-aptitudes">
      {skills.map((skill, index) => (
        <div className="aptitudes" key={index}>
          <h3>{skill.title}</h3>
          {skill.languages.map((lang, i) => (
            <div className="progress-bar" key={i}>
              <div
                className={`progress ${inView ? "active" : ""}`}
                style={{ width: inView ? lang.width : "0%" }}
              >
                {lang.name}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Aptitudes;
