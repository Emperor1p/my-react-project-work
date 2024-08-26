import React from 'react';


const Marquee = ({ props }) => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        {props}
      </div>
    </div>
  );
};

export default Marquee;
