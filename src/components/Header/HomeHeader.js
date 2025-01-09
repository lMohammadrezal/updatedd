import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";
import heroImage from "../../assets/img/hero.png";
import LanguageContext from "../../Context/LanguageContext";
const HomeHeader = () => {
  const { language, setLanguage, translations } = useContext(LanguageContext); //Language Toggle
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext); // Get theme and toggle function from context

  // Apply dark mode to body
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  // Toggle dark mode
  const toggleNavbar = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Sticky navbar effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fa" : "en");
  };

  return (
    <div className="container-xxl position-relative p-0">
      <nav
        className={`navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0 ${
          isSticky ? "sticky-top" : ""
        }`}
      >
        <Link to="/" className="navbar-brand p-0">
          <h1 className={`text-primary m-0 ${language==="fa"?"farsi_font":""}`}>
            <i className="fa fa-utensils me-3"></i>
            {translations[language].restoran}
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarCollapse"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`}
          id="navbarCollapse"
        >
          <div className="navbar-nav ms-auto py-0 pe-4">
            <Link to="/" className="nav-item nav-link active">
              {translations[language].home}
            </Link>
            <Link to="/about" className="nav-item nav-link">
              {translations[language].about}
            </Link>
            <Link to="/services" className="nav-item nav-link">
              {translations[language].service}
            </Link>
            <Link to="/menu" className="nav-item nav-link">
              {translations[language].menu}
            </Link>
            <div
              className={`nav-item dropdown ${isDropdownOpen ? "show" : ""}`}
              onClick={toggleDropdown}
            >
              <span
                className="nav-link dropdown-toggle"
                role="button"
                aria-expanded={isDropdownOpen}
              >
                {translations[language].pages}
              </span>
              <div
                className={`dropdown-menu m-0 ${isDropdownOpen ? "show" : ""}`}
              >
                <Link to="/booking" className="dropdown-item">
                  {translations[language].booking}
                </Link>
                <Link to="/team" className="dropdown-item">
                  {translations[language].our_team}
                </Link>
                <Link to="/testimonial" className="dropdown-item">
                  {translations[language].testimonial}
                </Link>
              </div>
            </div>
            <Link to="/contact" className="nav-item nav-link">
              {translations[language].contact}
            </Link>
          </div>
          <div className="d-flex align-items-center">
            <Link to="/booking" className={`btn btn-primary py-2 px-4 me-3 ${language==="fa"?"rounded-3":""}`}
            style={{fontFamily:`${language==="fa"?"Rubik":""}`,fontWeight:`${language==="fa"?"900":""}`,margin:`${language==="fa"?"10px":""}`}}
            >
              {translations[language].book_a_table}
            </Link>
            {/* Dark Mode Toggle */}
            <div className="theme-toggle">
              <button
                className="btn btn-outline-light rounded-circle p-2 d-flex align-items-center justify-content-center"
                onClick={toggleTheme}
                title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                {theme === "light" ? (
                  <i className="fas fa-moon"></i>
                ) : (
                  <i className="fas fa-sun"></i>
                )}
              </button>
            </div>
            {/* Language Toggle */}
            <div className="language-toggle">
              <button
                className="btn btn-outline-light rounded-circle p-2 m-2 d-flex align-items-center justify-content-center"
                onClick={toggleLanguage}
                title={`Switch to ${language === "en" ? "FA" : "EN"} mode`}
              >
                <span>{language === "en" ? "FA" : "EN"}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Image Section */}
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container my-5 py-5" >
          <div className="row align-items-center g-5" >
            <div  className="col-lg-6 text-center text-lg-start" >
              {/* ................................ */}

              <h1 className={`display-3 text-white animated slideInLeft ${language==="fa"?"farsi_font text-end":""}`}
               data-aos={`${language==="fa"?"fade-left":"fade-right"}`} data-aos-duration="1000" data-aos-easing="linear"
              
               >
                {language === "fa" ? (
                  "از وعده‌های خوشمزه ما لذت ببرید"
                ) : (
                  <>
                    Enjoy Our <br />
                    Delicious Meal
                  </>
                )}
              </h1>

              <p className={`text-white animated slideInLeft mb-4 pb-2 ${language==="fa"?" farsi_font_md text-end":""}`}
              data-aos={`${language==="fa"?"fade-left":"fade-right"}`} data-aos-duration="1000" data-aos-easing="linear"
              >
                {language === "fa"
                  ? "رستوران ما با ارائه انواع غذاهای خوشمزه و لذیذ، آماده است تا تجربه‌ای فراموش‌نشدنی برای شما رقم بزند. از طعم‌های اصیل گرفته تا جدیدترین دستورهای غذایی، همه چیز برای رضایت شما آماده است."
                  : "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet"}
              </p>

              {/* ................................ */}
              <Link
              
                to="/booking"
                className={`btn btn-primary py-sm-3 px-sm-5 me-3 ${language==="fa"?"rounded-3":""}`}
                style={{fontFamily:`${language==="fa"?"Rubik":""}`,fontSize:`${language==="fa"?"18px":""}`,fontWeight:`${language==="fa"?"900":""}`}}
                data-aos={`${language==="fa"?"fade-left":"fade-right"}`} data-aos-duration="1500" data-aos-delay="500"
              >
                {translations[language].book_a_table}
              </Link>
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden" data-aos={`${language==="fa"?"fade-right":"fade-left"}` } data-aos-duration="1500">
              <img className="img-fluid" src={heroImage} alt="Hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;  
