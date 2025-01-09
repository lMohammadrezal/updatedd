import React, { useContext } from 'react';
import teamImage1 from '../../assets/img/team-1.jpg';
import teamImage2 from '../../assets/img/team-2.jpg';
import teamImage3 from '../../assets/img/team-3.jpg';
import teamImage4 from '../../assets/img/team-4.jpg';
import TeamMemberCard from './TeamMemberCard';
import LanguageContext from '../../Context/LanguageContext';

const Team = ({ limit }) => {
  const { language,translations } = useContext(LanguageContext);
  const teamMembers = [
    { image: teamImage1, name: language === 'fa' ? 'جان اسمیت' : 'John Smith', designation: translations[language].chef, socialLinks: { facebook: 'facebook1', twitter: 'twitter1', instagram: 'instagram1' },delay:"0"},
    { image: teamImage2, name: language === 'fa' ? 'مایکل جانسون' : 'Michael Johnson', designation: translations[language].sous_chef, socialLinks: { facebook: 'facebook2', twitter: 'twitter2', instagram: 'instagram2' },delay:"100"},
    { image: teamImage3, name: language === 'fa' ? 'دیوید براون' : 'David Brown', designation: translations[language].pastry_chef, socialLinks: { facebook: 'facebook3', twitter: 'twitter3', instagram: 'instagram3' },delay:"200"},
    { image: teamImage4, name: language === 'fa' ? 'جیمز ویلیامز' : 'James Williams', designation: translations[language].head_chef, socialLinks: { facebook: 'facebook4', twitter: 'twitter4', instagram: 'instagram4' },delay:"300"},
    { image: teamImage1, name: language === 'fa' ? 'ویلیام دیویس' : 'William Davis', designation: translations[language].chef, socialLinks: { facebook: 'facebook5', twitter: 'twitter5', instagram: 'instagram5' },delay:"400"},
    { image: teamImage2, name: language === 'fa' ? 'ریچارد مارتینز' : 'Richard Martinez', designation: translations[language].sous_chef, socialLinks: { facebook: 'facebook6', twitter: 'twitter6', instagram: 'instagram6' },delay:"500"},
    { image: teamImage3, name: language === 'fa' ? 'جوزف گارسیا' : 'Joseph Garcia', designation: translations[language].pastry_chef, socialLinks: { facebook: 'facebook7', twitter: 'twitter7', instagram: 'instagram7' },delay:"600"},
    { image: teamImage4, name: language === 'fa' ? 'چارلز رودریگز' : 'Charles Rodriguez', designation: translations[language].head_chef, socialLinks: { facebook: 'facebook8', twitter: 'twitter8', instagram: 'instagram8' },delay:"700"}
  ];
  

  // URL template
  const baseUrls = {
    facebook: 'https://www.facebook.com/',
    twitter: 'https://twitter.com/',
    instagram: 'https://www.instagram.com/'
  };

  // Limit team members if a limit prop is provided
  const displayedMembers = limit ? teamMembers.slice(0, limit) : teamMembers;

  return (
    <div>
      <div className="container-xxl pt-5 pb-3">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className={`section-title ff-secondary text-center text-primary fw-normal ${language==="fa"?"farsi_font_sm":""}`}>{translations[language].team_members}</h5>
            <h1 className={`mb-5 ${language==="fa"?"farsi_font_md":""}`}
              data-aos="zoom-out" data-aos-duration="1500"
            >{translations[language].our_master_chefs}</h1>
          </div>
          <div className="row g-4">
            {displayedMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                image={member.image}
                name={member.name}
                designation={member.designation}
                delay={member.delay}
                socialLinks={Object.keys(member.socialLinks).map(key => ({
                  icon: `fab fa-${key}`,
                  url: baseUrls[key] + member.socialLinks[key]
                }))}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
