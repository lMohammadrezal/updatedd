import React, { useContext, useEffect, useState } from "react";
import LanguageContext from "../../Context/LanguageContext";

const Footer = () => {
  const { language,translations } = useContext(LanguageContext); // Get language and toggle function from context
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // نمایش دکمه اگر کاربر بیشتر از 300 پیکسل اسکرول کرده باشد
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // برای اسکرول نرم
    });
  };
  
  return (
    <div>
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 "
      
      >
        <div className="container py-5">
          <div className="row g-5" dir="ltr">
            <div className="col-lg-3 col-md-6">
              <h4 className={`section-title ff-secondary text-start text-primary fw-normal mb-4 ${language==="fa"?"farsi_font":""}`}>
                {translations[language].company}
              </h4>
              <a className={`btn btn-link `}
              style={{fontFamily:`${language==="fa"?"Rubik":""}`,fontWeight:`${language==="fa"?"500":""}`}}
              href="#">
                {translations[language].about_us}
              </a>
              <a className={`btn btn-link `}
              style={{fontFamily:`${language==="fa"?"Rubik":""}`,fontWeight:`${language==="fa"?"500":""}`}}
              href="#">
                {translations[language].contact_us}
              </a>
              <a className={`btn btn-link `}
              style={{fontFamily:`${language==="fa"?"Rubik":""}`,fontWeight:`${language==="fa"?"500":""}`}}
              href="#">
                {translations[language].reservation}
              </a>
              <a className={`btn btn-link `}
              style={{fontFamily:`${language==="fa"?"Rubik":""}`,fontWeight:`${language==="fa"?"500":""}`}}
              href="#">
                {translations[language].privacy_policy}
              </a>
              <a className={`btn btn-link `}
              style={{fontFamily:`${language==="fa"?"Rubik":""}`,fontWeight:`${language==="fa"?"500":""}`}}
              href="#">
                {translations[language].terms_and_condition}
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className={`section-title ff-secondary text-start text-primary fw-normal mb-4 ${language==="fa"?"farsi_font":""}`}>
                {translations[language].contact1}
              </h4>
              <p className={`mb-2 ${language==="fa"?"farsi_font_sm":""}`}>
                <i className="fa fa-map-marker-alt me-3"></i>{translations[language].footer_address}
              </p>
              <p className={`mb-2 ${language==="fa"?"farsi_font_sm":""}`} >
                <i className="fa fa-phone-alt me-3"></i>{translations[language].number}
              </p>
              <p className={`mb-2 ${language==="fa"?"farsi_font_sm":""}`}>
                <i className="fa fa-envelope me-3"></i>{translations[language].info_example}
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="#">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className={`section-title ff-secondary text-start text-primary fw-normal mb-4 ${language==="fa"?"farsi_font":""}`}>
                {translations[language].opening}
              </h4>
              <h5 className={`text-light fw-normal ${language==="fa"?"farsi_font_sm":""}`}>
                {language==="fa"
              ? "شنبه - دوشنبه"
              : "Monday - Saturday"
              }
              </h5>
              <p className={`${language==="fa"?"farsi_font_sm":""}`}>
                {language==="fa"
                ? "۹ صبح - ۹ شب"
                : "09AM - 09PM"
                }</p>
        
              <h5 className={`text-light fw-normal ${language==="fa"?"farsi_font_sm":""}`}>
                {language==="fa"
                ? "یکشنبه" 
                : "Sunday"
              }
              </h5>
              <p className={`${language==="fa"?"farsi_font_sm":""}`}>
                {language==="fa"
                ? "۱۰ صبح - ۸ شب"
                : "10AM - 08PM"
                }
                </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className={`section-title ff-secondary text-start text-primary fw-normal mb-4 ${language==="fa"?"farsi_font":""}`}>
                {translations[language].newsletter}
              </h4>
              <p className={`${language==="fa"?"farsi_font_sm":""}`}>{translations[language].footer_lorem}</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  className="form-control border-primary w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder={translations[language].your_email}
                />
                <button
                  type="button"
                  className={`btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2 ${language==="fa"?"rounded-3":""}`}
                  style={{fontFamily:`${language==="fa"?"Rubik":""}`,fontWeight:`${language==="fa"?"900":""}`}}
                >
                  {translations[language].sign_up}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container" dir="ltr">
          <div className="copyright">
            <div className="row" >
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a className="border-bottom" href="#">
                  Restaurant
                </a>
                <br />
                Designed By {"Mohammadreza Mohammadi"}
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu"
                
                style={{fontFamily:`${language==="fa"?"Rubik":""}`,fontWeight:`${language==="fa"?"200":""}`}}
                >
                  
                  <a href="#"> {translations[language].home1} </a>
                  <a href="#"> {translations[language].cookies} </a>
                  <a href="#"> {translations[language].help} </a>
                  <a href="#"> {translations[language].fqas} </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showButton && (
        <a
          href="#"
          className="btn btn-lg btn-primary btn-lg-square back-to-top"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: "1000",
            display: "block",
            padding:"8px",
            borderRadius:"50%"
          }}
        >
          <i className="bi bi-arrow-up"></i>
        </a>
      )}

    </div>
  );
};

export default Footer;
