import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Menu from "./pages/Menu/Menu";
import Booking from "./pages/Booking/Booking";
import Team from "./pages/Team/Team";
import Testimonial from "./pages/Testimonial/Testimonial";
import Contact from "./pages/Contact/Contact";

import LanguageContext from "./Context/LanguageContext";
import { AuthProvider } from "./Context/AuthContext"; // Import Auth Context
import PrivateRoute from "./Context/PrivateRoute";
import Login from "./components/Login/Login";

// Import AOS and its CSS
import AOS from "aos";
import "aos/dist/aos.css";
import LoadingContext from "./Context/LoadingContext";
import Spinner from './components/Spinner/Spinner';

const App = () => {
  const { globalLoading, setGlobalLoading } = useContext(LoadingContext);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const loadApp = async () => {
      await new Promise((resolve) => setTimeout(resolve,1000)); // Simulating loading
      setGlobalLoading(false);
    };
    loadApp();
  }, [setGlobalLoading]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Default duration of animations
      once: false, // Set to false so animations trigger on each scroll
    });
  }, []);

  // Protected routes that require Layout and PrivateRoute
  const protectedRoutes = [
    { path: "/", component: <Home /> },
    { path: "/about", component: <About /> },
    { path: "/services", component: <Services /> },
    { path: "/menu", component: <Menu /> },
    { path: "/booking", component: <Booking /> },
    { path: "/team", component: <Team /> },
    { path: "/testimonial", component: <Testimonial /> },
    { path: "/contact", component: <Contact /> },
  ];

  return globalLoading ? (
    <Spinner show={globalLoading} className="text-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#111" }}/>
  ) : (
    <div className={language === "fa" ? "farsi_font" : ""}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Login route without layout */}
            <Route path="/login" element={<Login />} />

            {/* Protected Routes with Layout and PrivateRoute */}
            {protectedRoutes.map(({ path, component }) => (
              <Route
                key={path}
                path={path}
                element={
                  <PrivateRoute>
                    <Layout>{component}</Layout>
                  </PrivateRoute>
                }
              />
            ))}
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
