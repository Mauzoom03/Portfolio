import { useEffect, useRef } from "react";
import "./_main.scss";
import background from "../../images/background2test .mp4";
import gsap from 'gsap';
import { useTranslation } from "react-i18next";



function Main() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const { t } = useTranslation();

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    gsap.fromTo(
      title,
      { y: 100, opacity: 0, rotation: -20 },
      { y: 0, opacity: 1, rotation: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      subtitle,
      { y: 100, opacity: 0, rotation: 20 },
      { y: 0, opacity: 1, rotation: 0, duration: 1, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
    <>
      <div className="container-main" id="main">
        <video className="background" src={background} autoPlay loop muted />
        <div className="text-container">
          <h1 ref={titleRef} className="title">
            {t("main.title")}
          </h1>
          <br />
          <h2 ref={subtitleRef} className="subtitle">
            {t("main.subtitle")}
          </h2>
          <a
            href="/public/Mauro Quintana(D).pdf"
            download="mi_cv.pdf"
          >
            <button className="btnCv">{t("main.downloadCv")}</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Main;
