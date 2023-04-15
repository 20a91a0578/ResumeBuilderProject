import React from "react";
import {Link} from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import {FiLogOut} from 'react-icons/fi';
function Head(){
    const navigate = useNavigate()
    return (
      <>
   <div className="header">
   <h1 style={{textAlign:"center",marginLeft:'2%'}}>Aditya Resume Builder</h1>
        <nav id='nav'className="header">
            
            <ul className="header" style={{marginLeft:"-30%"}}>
                <li><Link to='/home' >Home</Link></li>
                <li><Link to='/Login' >Login</Link></li>
                <li><Link to='/Singup' >Signup</Link></li>
                <li><Link to='/contact' >Contact</Link></li>
                <li onClick={(e)=>{
                    e.preventDefault();
        localStorage.removeItem('data')
                    navigate('/login')
                }}><FiLogOut/></li>
                
               
                
            </ul>
        </nav>
   </div>
      </>

    )
}
export default Head;