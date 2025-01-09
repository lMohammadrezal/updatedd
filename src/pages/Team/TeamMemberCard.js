import React, { useContext } from 'react';
import LanguageContext from '../../Context/LanguageContext';

const TeamMemberCard = ({ image, name, designation, socialLinks,delay }) => {
  const { language } = useContext(LanguageContext);
    return (
        <div className="col-lg-3 col-md-6 "
          data-aos="zoom-in" data-aos-delay={delay}
        >
          {/* dark-mode */}
        <div className="team-item text-center rounded overflow-hidden">
          <div className="rounded-circle overflow-hidden m-4">
            <img className="img-fluid" src={image} alt={name} />
          </div>
          <h5 className={`mb-0 ${language==="fa"?"farsi_font_md":""}`}>{name}</h5>
          <small className={`${language==="fa"?"farsi_font_sm":""}`}>{designation}</small>
          <div className="d-flex justify-content-center mt-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                className="btn btn-square btn-primary mx-1"
                href={link.url} // Here you set the actual URL
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
}

export default TeamMemberCard;
