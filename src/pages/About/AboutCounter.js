// src/components/Counter/Counter.js
import React, { useState, useEffect, useContext } from 'react';
import LanguageContext from '../../Context/LanguageContext';

const AboutCounter = ({ endValue, className }) => {
    const [value, setValue] = useState(1);
    const { language } = useContext(LanguageContext); 

    const toFarsiNumber = (num) => {
        const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
        return num.toString().replace(/\d/g, (x) => farsiDigits[x]);
      };
    useEffect(() => {
        const duration = 4000; // Animation duration in milliseconds
        const stepTime = duration / endValue; // Time per increment
        let currentValue = 1;

        const interval = setInterval(() => {
            currentValue += 1;
            setValue(currentValue);
            if (currentValue >= endValue) {
                clearInterval(interval);
            }
        }, stepTime);

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [endValue]);
    const displayValue = language === "fa" ? toFarsiNumber(value) : value;
    return <h1 className={`${className} ${language==="fa"?"farsi_font":""}`}>{displayValue}</h1>;
};

export default AboutCounter;
