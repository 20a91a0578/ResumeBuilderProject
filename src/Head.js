import React from "react";
import {Link} from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import {FiLogOut} from 'react-icons/fi';
function Head(){
    const navigate = useNavigate()
    return (
      <>
      <h1 style={{textAlign:"center"}}>Aditya Resume Builder</h1>
        <nav id='nav'>
            
            <ul>
            <li onClick={(e)=>{
                    e.preventDefault();
        localStorage.removeItem('data')
                    navigate('/login')
                }}><FiLogOut/></li>
                <li><Link to='/contact' >Contact</Link></li>
                <li><Link to='/Singup' >Signup</Link></li>
                <li><Link to='/Login' >Login</Link></li>
                <li><Link to='/home' >Home</Link></li>
                
               
                
               
                
            </ul>
        </nav>
      </>

    )
}
export default Head;