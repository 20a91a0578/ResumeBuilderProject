import React from 'react'
import { useState,useEffect } from 'react'
import pic1 from './image1.png'
import pic2 from './image2.png'
import pic3 from './image3.jpg'
import pic4 from './image4.webp'
import { Link } from 'react-router-dom'
function LandingPage() {
  const imgCon = [pic1,pic2,pic3,pic4]
    const prev = '<'
    const next = '>'
    let [index,setindex] = useState(0)


    
    useEffect(() => {
        const imageChange = setInterval(() => {
           index++;
            if(index > 3)
               index = 0;
          setindex(index);
        }, 5000);
        return () => clearInterval(imageChange);
      }, []);
   
  return (
    <>
    <br/><br/>
        <div className='classcarousel'>
        <div className='prev arrow' onClick={()=>{
           index--;
            if(index < 0)
               index = 3;
            setindex(index);
        }}> <p> {prev} </p>  </div>
        <div className='next arrow'onClick={()=>{
           index++;
            if(index > 3)
               index = 0;
            setindex(index);
        }}> <p> {next} </p> </div>
        <img src={imgCon[index]} alt=""/>
        </div>
        <br/>
        <button className='createresume' ><Link to ='/create-resume'>CreateResume</Link></button>
        </>
  )
}

export default LandingPage;

