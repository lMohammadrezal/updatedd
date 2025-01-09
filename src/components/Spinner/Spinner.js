import React from 'react';

const Spinner = ({ show,className,style}) => {
  return show?(
    <div
      
      className={className}
       style={style}
    >
      <div
        className="spinner-border text-primary"
        style={{ width: '3rem', height: '3rem'}}
        role="status"
        >
          
      </div>
    </div>
  ):null;
};

export default Spinner;