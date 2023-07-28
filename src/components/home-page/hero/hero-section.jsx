import React from "react";
import { useTranslation } from "react-i18next";
import './hero.css'


const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="p-0 m-0">
        <div className="text-center p-lg-6" style={{background: "url(/assets/img/main.jpg) center"}}>
          <div className="col-xxl">
            <div className="p-0 m-0 text-light" style={{backgroundColor : "rgba(0, 0, 0, 0.542)"}}>
                <div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <h1 className="hero-title hero-shadow">{t('home.hero.title')}</h1>
                    <h2 className="hero-des hero-shadow">
                      {t('home.hero.description')}<br />
                    </h2>
                    <h3 className="license hero-shadow">
                      {t('home.hero.license')}<br />
                      526-006-684<br />
                    </h3>
                    <br /><br /><br /><br /><br /><br />
                </div>
            </div>
            <div className="lc-block">
              <div editable="rich"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
