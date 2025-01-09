import { useContext, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import LanguageContext from '../../Context/LanguageContext';



const Services = ({ limit }) => {
 
    const { language, translations } = useContext(LanguageContext);
    const services = [
        { icon: "fa-user-tie", title: translations[language].master_chefs, description: translations[language].service_lorem ,delay:"0" },
        { icon: "fa-utensils", title: translations[language].quality_food, description: translations[language].service_lorem ,delay:"100" },
        { icon: "fa-cart-plus", title: translations[language].online_order, description: translations[language].service_lorem ,delay:"200" },
        { icon: "fa-headset", title: translations[language].service_24_7, description: translations[language].service_lorem ,delay:"300" },
        { icon: "fa-user-tie", title: translations[language].master_chefs, description: translations[language].service_lorem ,delay:"400" },
        { icon: "fa-utensils", title: translations[language].quality_food, description: translations[language].service_lorem ,delay:"500" },
        { icon: "fa-cart-plus", title: translations[language].online_order, description: translations[language].service_lorem ,delay:"600" },
        { icon: "fa-headset", title: translations[language].service_24_7, description: translations[language].service_lorem ,delay:"700" },
    ];

    // Limit the number of services if limit is provided
    const limitedServices = limit ? services.slice(0, limit) : services;

    return (
        <div className="container-xxl py-5">
            <div className="container service">
                <div className="text-center">
                    <h5 className={`section-title ff-secondary text-center text-primary fw-normal ${language==="fa"?"farsi_font_md":""}`}>{translations[language].our_services}</h5>
                    <h1 className={`mb-5 ${language==="fa"?"farsi_font":""}`}
                      data-aos="zoom-out" data-aos-duration="1500"
                    >{translations[language].explore_our_services}</h1>
                </div>
                <div className="row g-4 ">
                    {limitedServices.map((service, index) => (
                        <ServiceCard 
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            delay={service.delay}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
