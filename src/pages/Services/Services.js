import { useContext, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import LanguageContext from '../../Context/LanguageContext';



const Services = ({ limit }) => {
 
    const { language, translations } = useContext(LanguageContext);
    const services = [
        { icon: "fa-user-tie", title: translations[language].master_chefs, description: translations[language].service_lorem },
        { icon: "fa-utensils", title: translations[language].quality_food, description: translations[language].service_lorem },
        { icon: "fa-cart-plus", title: translations[language].online_order, description: translations[language].service_lorem },
        { icon: "fa-headset", title: translations[language].service_24_7, description: translations[language].service_lorem },
        { icon: "fa-user-tie", title: translations[language].master_chefs, description: translations[language].service_lorem },
        { icon: "fa-utensils", title: translations[language].quality_food, description: translations[language].service_lorem },
        { icon: "fa-cart-plus", title: translations[language].online_order, description: translations[language].service_lorem },
        { icon: "fa-headset", title: translations[language].service_24_7, description: translations[language].service_lorem },
    ];

    // Limit the number of services if limit is provided
    const limitedServices = limit ? services.slice(0, limit) : services;

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className={`section-title ff-secondary text-center text-primary fw-normal ${language==="fa"?"farsi_font":""}`}>{translations[language].our_services}</h5>
                    <h1 className={`mb-5 ${language==="fa"?"farsi_font":""}`}>{translations[language].explore_our_services}</h1>
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
