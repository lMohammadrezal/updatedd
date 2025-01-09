import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";
import LanguageContext from "../../Context/LanguageContext";
const Header = () => {


  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext); // Get theme and toggle function from context
  const { language, setLanguage, translations } = useContext(LanguageContext); // Get language and toggle function from context

  const location = useLocation();
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/about":
        return [translations[language].about_us, translations[language].about];
      case "/services":
        return [
          translations[language].services,
          translations[language].service,
        ];
      case "/menu":
        return [translations[language].food_menu, translations[language].menu];
      case "/booking":
        return [translations[language].booking, translations[language].booking];
      case "/team":
        return [translations[language].our_team, translations[language].team];
      case "/testimonial":
        return [
          translations[language].testimonial,
          translations[language].testimonial,
        ];
      case "/contact":
        return [
          translations[language].contact_us,
          translations[language].contact,
        ];
      default:
        return [
          translations[language].page_not_found,
          translations[language].not_found,
        ];
    }
  };
  const PageText = getPageTitle();

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleNavbar = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
    <div>
      <div className="container-xxl position-relative p-0">
        <nav
          className={`navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0 ${
            isSticky ? "sticky-top" : ""
          }`}
        >
          <Link to="/" className="navbar-brand p-0">
            <h1
              className={`text-primary m-0 ${
                language === "fa" ? "farsi_font" : ""
              }`}
            >
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
            className={`collapse navbar-collapse ${
              isNavCollapsed ? "" : "show"
            }`}
            id="navbarCollapse"
          >
            <div className="navbar-nav ms-auto py-0 pe-4">
              <Link to="/" className="nav-item nav-link">
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
                  className={`dropdown-menu m-0 ${
                    isDropdownOpen ? "show" : ""
                  }`}
           
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
              <Link
                to="/booking"
                className={`btn btn-primary py-2 px-4 me-3 ${
                  language === "fa" ? "rounded-3" : ""
                }`}
                style={{fontFamily:`${language==="fa"?"Rubik":""}`,fontWeight:`${language==="fa"?"900":""}`,margin:`${language==="fa"?"10px":""}`}}
              >
                {translations[language].book_a_table}
              </Link>
              {/* Dark Mode Toggle */}
              <div className="theme-toggle">
                <button
                  className="btn btn-outline-light rounded-circle p-2 d-flex align-items-center justify-content-center"
                  onClick={toggleTheme}
                  title={`Switch to ${
                    theme === "light" ? "dark" : "light"
                  } mode`}
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
        {/* Hero Section */}
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container text-center my-5 pt-5 pb-4">
            <h1 
              className={`display-3 text-white mb-3 animated slideInDown ${
                language === "fa" ? "farsi_font" : ""
              }`}
                // data-aos="fade-up" .............................
            >
              {PageText[0]}
            </h1>

            <nav aria-label="breadcrumb" dir="ltr">
              <ol
                className={`breadcrumb justify-content-center text-uppercase ${
                  language === "fa" ? "rtl" : ""
                }`}
              >
                {language === "fa" ? (
                  <>
                    <li
                      className="breadcrumb-item text-white active"
                      aria-current="page"
                    >
                      {PageText[1]}
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="#">{translations[language].pages}</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/">{translations[language].home}</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="breadcrumb-item">
                      <Link to="/">{translations[language].home}</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="#">{translations[language].pages}</Link>
                    </li>
                    <li
                      className="breadcrumb-item text-white active"
                      aria-current="page"
                    >
                      {PageText[1]}
                    </li>
                  </>
                )}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
