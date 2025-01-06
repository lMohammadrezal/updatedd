import React, { useContext , useEffect } from 'react';
import Header from '../Header/Header';
import HomeHeader from '../Header/HomeHeader';
import Footer from '../Footer/Footer';
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/style.css'
import LoadingContext from "../../Context/LoadingContext"

import { useLocation } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';





const Layout = ({children}) => {
// Important ==> How to use Loading Context and using loading and setLoading
    const { loading, setLoading } = useContext(LoadingContext); 
    const location = useLocation();
    //console.log(location)

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 1000); // شبیه‌سازی لودینگ
    
        return () => clearTimeout(timer);
      }, [setLoading]);







    return (
        <div >
            <Spinner show={loading}/>
            {!loading &&(
            <>
            {location.pathname==='/' ? <HomeHeader/>:<Header/>}
            <main>{children}</main>
            <Footer/>   
            </>
        )}

        </div>
    );
}

export default Layout;
