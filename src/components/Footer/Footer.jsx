import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-[#243E63] text-primary-content">
      <div>
        <img src="https://i.postimg.cc/Pf8YRMKQ/next.png" alt="" className='w-40 ' />
         
           <p className="font-bold text-white">Robotics Toy Store
          Online Shop!</p>
        
        <p className='text-white'>Copyright © 2023 - All right reserved MD Mehedi Hasan</p>
      </div>
      
    </footer>
  );
};

export default Footer;