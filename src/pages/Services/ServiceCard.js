import React, { useContext } from 'react';
import LanguageContext from '../../Context/LanguageContext';

const ServiceCard = ({ icon, title, description, delay }) => {
    const { language } = useContext(LanguageContext);
    return (
        <div className="col-lg-3 col-sm-6">
            {/* dark-mode */}
            <div className="service-item rounded pt-3" data-aos="zoom-in" data-aos-delay={delay}>
                <div className="p-4 ">
                    <i className={`fa fa-3x ${icon} text-primary mb-4`}></i>
                    <h5 className={`${language==="fa"?"farsi_font_md":""}`}>{title}</h5>
                    <p className={`${language==="fa"?"farsi_font_sm":""}`}>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
