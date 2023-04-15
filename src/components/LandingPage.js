import React from 'react'
import { useState,useEffect } from 'react'
import Img1 from './image1.png'
import Img2 from './image2.png'
import Img3 from './image3.jpg'
import Img4 from './image4.webp'

function LandingPage() {
  const imgCon = [Img1,Img2,Img3,Img4]
    const prev = '<'
    const next = '>'
    let [ind,upInd] = useState(0)
    useEffect(() => {
        const imageChange = setInterval(() => {
            ind++;
            if(ind > 3)
                ind = 0;
          upInd(ind);
        }, 5000);
        return () => clearInterval(imageChange);
      }, []);
  return (
    <>
    <br/><br/>
        <div className='carouselClass'>
        <div className='prev arrow' onClick={()=>{
            ind--;
            if(ind < 0)
                ind = 3;
            upInd(ind);
        }}> <p> {prev} </p>  </div>
        <div className='next arrow'onClick={()=>{
            ind++;
            if(ind > 3)
                ind = 0;
            upInd(ind);
        }}> <p> {next} </p> </div>
        <img src={imgCon[ind]} alt=""/>
        </div>
        <br/>
        <button className='createCV'>Create your CV</button>
        </>
  )
}

export default LandingPage;

