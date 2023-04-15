import React from 'react';
import {FiFacebook,FiInstagram,FiLinkedin} from 'react-icons/fi';
function Foot() {
  return (
   <>
   <br/>
   <div className='foot'>
   <footer>
      <h3>Aditya Resume Builder's Copy Rights © {new Date().getFullYear()} Your Company Name All rights reserved.</h3>
      <h3>Contact Us: info@yourcompany.com | 123-456-7890 | 123 Main St, Anytown USA</h3>
      <div style={{textAlign:'left',marginLeft:'30%'}}> 
      <br/>
        <span style={{fontSize:'220%'}}><a href='#'><FiFacebook/>Facebook</a> </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span style={{fontSize:'220%'}}><a href='#'><FiInstagram/>Instagram</a> </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span style={{fontSize:'220%'}}><a href='#'><FiLinkedin/>Instagram</a> </span>
      </div>
      
    </footer>
   </div>
   </>
  );
}

export default Foot;
