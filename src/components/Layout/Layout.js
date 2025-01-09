import React, { useContext , useEffect } from 'react';
import Header from '../Header/Header';
import HomeHeader from '../Header/HomeHeader';
import Footer from '../Footer/Footer';
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/style.css'
import LoadingContext from "../../Context/LoadingContext"

import { useLocation } from 'react-router-dom';






const Layout = ({children}) => {
    const location = useLocation();
    //console.log(location)







    return (
        <div >
            {location.pathname==='/' ? <HomeHeader/>:<Header/>}
            <main>{children}</main>
            <Footer/>   
        </div>
    );
}

export default Layout;
