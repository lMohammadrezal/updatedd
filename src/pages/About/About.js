import React, { useContext } from "react";
import aboutImage1 from "../../assets/img/about-1.jpg";
import aboutImage2 from "../../assets/img/about-2.jpg";
import aboutImage3 from "../../assets/img/about-3.jpg";
import aboutImage4 from "../../assets/img/about-4.jpg";

import Team from "../Team/Team";
import AboutCounter from "./AboutCounter";
import LanguageContext from "../../Context/LanguageContext";
import { AOS } from 'aos';

const About = ({ includeTeam = true }) => {
  const { language, translations } = useContext(LanguageContext);
  return (
    <div className="About">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="row g-3" >
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-100 "
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="0"                  
                    src={aboutImage1}
                    alt=""
                  />
                </div>
                {/*  */}
                <div className={`col-6  ${language==="fa"?"text-end":"text-start"}`}>
                  <img
                    className="img-fluid rounded w-75"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="200"   
                    src={aboutImage2}
                    alt=""
                    style={{ marginTop: "25%" }}
                  />
                </div>
                <div className={`col-6  ${language==="fa"?"text-start":"text-end"}`}>
                  <img
                    className="img-fluid rounded w-75"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="400" 
                    src={aboutImage3}
                    alt=""
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-100 "
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="600"         
                    src={aboutImage4}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6"
                data-aos="fade-up"
                data-aos-duration="1000">
              <h5 className={`section-title ff-secondary text-start text-primary fw-normal ${language==="fa"?"farsi_font_md":""}`}>
                {translations[language].about_us}
              </h5>
              {/* .......................................... */}
              <h1 className={`mb-4 ${language==="fa"?"farsi_font":""}`}
              data-aos={`${language==="fa"?"fade-left":"fade-right"}`}
  
              >
                {language === "fa" ? "به رستوران خوش آمدید" : "Welcome to "}
                <i className="fa fa-utensils text-primary me-2"></i>
                {language === "fa" ? "" : "Restoran"}
              </h1>
              {/* .......................................... */}
              <p className="mb-4"
              style={{fontFamily:`${language==="fa"?"Rubik":""}`,fontWeight:`${language==="fa"?"400":""}`}}>
                {language === "fa"
                  ? "رستوران ما با بیش از ده سال تجربه در صنعت غذایی، به شما تجربه‌ای منحصر به فرد از طعم‌های خوشمزه و سرویس عالی ارائه می‌دهد. ما به استفاده از مواد اولیه تازه و باکیفیت اهمیت می‌دهیم تا هر وعده غذایی را برای شما لذیذ و بی‌نظیر کنیم."
                  : "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit."}
              </p>
              <p className="mb-4"
              style={{fontFamily:`${language==="fa"?"Rubik":""}`,fontWeight:`${language==="fa"?"400":""}`}}>
                {language === "fa"
                  ? "هدف ما این است که هر مشتری با تجربه‌ای بی‌نظیر از رستوران ما خارج شود و دوباره به ما سر بزند. تیم متخصص ما در آشپزخانه همیشه در تلاش است تا با خلق غذاهای خوشمزه و متنوع، لحظات خوشی را برای شما فراهم کند."
                  : "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet"}
              </p>

              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                    <AboutCounter
                      endValue={15}
                      className="flex-shrink-0 display-5 text-primary mb-0"
                    />
                    <div className="ps-4">
                    {/* ........................ */}
                    {language==="fa"
                    ?(<>
                    <p className={`mb-0 ${language==="fa"?"farsi_font_md":""}`}>سال</p>
                      <h6 className={`text-uppercase mb-0 ${language==="fa"?"farsi_font":""}`}>
                         تجربه
                      </h6>
                      </>)
                    :(<>
                      <p className="mb-0">Years of</p>
                      <h6 className="text-uppercase mb-0">
                        EXPERIENCE
                      </h6>
                      </>)
                    }

           
                    </div>
                  </div>
                </div>


                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                    <AboutCounter
                      endValue={50}
                      className="flex-shrink-0 display-5 text-primary mb-0"
                    />
                    <div className="ps-4">
                      {language==="fa"
                      ?(<>
                      <h6 className={`text-uppercase mb-0 ${language==="fa"?"farsi_font":""}`}>سرآشپز</h6>
                      <p className={`mb-0 ${language==="fa"?"farsi_font_md":""}`}>محبوب</p>
                      

                       </>)
                      :(<>
                      <p className="mb-0">Popular</p>
                      <h6 className="text-uppercase mb-0">
                        MASTER CHEFS
                      </h6>
                        </>)}
                    </div>
                  </div>
                </div>
              </div>
              <a className={`btn btn-primary py-3 px-5 mt-2 ${language==="fa"?"rounded-3":""}`} 
              style={{fontFamily:`${language==="fa"?"Rubik":""}`,fontWeight:`${language==="fa"?"900":""}`}}
              href="#"
              data-aos={`${language==="fa"?"fade-left":"fade-right"}`}>
                {translations[language].read_more}
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Team Start */}
      {includeTeam && <Team limit={4} />}
      {/* Team End */}
    </div>
  );
};

export default About;
