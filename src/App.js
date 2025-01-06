import React, { useContext } from "react";
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


const App = () => {
  const { language } = useContext(LanguageContext);

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

  return (
    <div className={language === "fa" ? "farsi_font" : ""}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Login route without layout */}
            <Route path="/login" element={<Login/>} />

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
