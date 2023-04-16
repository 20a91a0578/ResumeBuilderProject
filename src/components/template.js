import {FiMail,FiPhoneCall,FiHome} from 'react-icons/fi';
import jsPDF from 'jspdf';

const Template=(props)=>{
    function temp1(){
        
        const element = document.getElementById("template1");
        const width = element.offsetWidth;
const height = element.offsetHeight;
const doc = new jsPDF('px','px',[width+(width/2),height]);
        const html = element.innerHTML;
        doc.html(html, {
          callback: function () {
            doc.save("template1.pdf");
          },
        });

    }
    function temp2(){
        
        const element = document.getElementById("template2");
        const width = element.offsetWidth;
const height = element.offsetHeight;
const doc = new jsPDF('px','px',[width+(width/2),height]);
        const html = element.innerHTML;
        doc.html(html, {
          callback: function () {
            doc.save("template2.pdf");
          },
        });

    }
    function temp3(){
        
        const element = document.getElementById("template3");
        const width = element.offsetWidth;
const height = element.offsetHeight;
const doc = new jsPDF('px','px',[width+(width/2),height]);
        const html = element.innerHTML;
        doc.html(html, {
          callback: function () {
            doc.save("template3.pdf");
          },
        });

    }
//     const props={
//         about
// : 
// "wsrdtfvghbnm hbjgfdres\neqsrdcfgbjnnkhcfvgbhnjm",
// address
// : 
// "3-59,eevana vari meraka,turputallu",
// bcgpa
// : 
// "8.83",
// bcol
// : 
// "Aditya Engineering College",
// byear
// : 
// "2020-2024",
// c1
// : 
// "Python Basics",
// c2
// : 
// "Java Basics",
// c3
// : 
// "HTML",
// email
// : 
// "20a91a0578@aec.edu.in",
// firstName
// : 
// "Eevana",
// icgpa
// : 
// "9.88",
// icol
// : 
// "Aditya Junior College",
// iyear
// : 
// "2018-2020",
// lastName
// : 
// "Rajesh",
// phone
// : 
// "09100189182",
// pd1
// : 
// "resource Allocator description",
// pd2
// : 
// "food order description",
// p1
// : 
// "Resource Allocator",
// p2
// : 
// "Food Order",
// role
// : 
// "asoring fsd",
// s1
// : 
// "C++",
// s2
// : 
// "Java",
// s3
// : 
// "DSA",
// scol:"Z P P HIGH SCHOOL",
// scgpa:'9.5',
// syear:"2017-2018"
//     }
return(
    <>
    <h1 style={{textAlign:'center'}}>Final Resume </h1><br/>
 <div className='row'>
    <div className='col-md-1'></div>
    <div className='col-md-5' id="template1">
        <h3 style={{textAlign:'center'}}> Template1</h3>
    <div style={{border:'1px solid black',boxShadow:'5px 5px 4px'}}  className='template1'>
        <div style={{textAlign:'left',marginLeft:'5%'}} className='row'>
            <div className='col-md-6'>
            <h2>{props.firstName+' '+props.lastName}</h2>
        <h3>{props.role}</h3>
            </div>
            <div className='col-md-6'>
            <h4><FiPhoneCall/>&nbsp;{props.phone}</h4>
        <h4><FiMail/>&nbsp;{props.email}</h4>
        <h4><FiHome/>&nbsp;{props.address}</h4>
            </div>
        </div>
        <div className='row' style={{border:'1px solid  black',marginLeft:'4%',marginRight:'4%'}}></div>
        <div className='row' style={{marginLeft:'5%',marginRight:'5%'}}>
            <h3><b>About  Me:</b></h3>
            
            <h4>
          
                
                {props.about}</h4>
            
        </div>
        <div className='row' style={{border:'1px solid  black',marginLeft:'4%',marginRight:'4%'}}></div>
        <div className="row" style={{marginLeft:'5%'}}>
           <h3><b>Education :</b></h3>
          <div className='col-md-5'>
          <h5><b>Degree/U.G :</b></h5>
          <h5> {props.bcol}</h5>
          <h5> {props.bcgpa} CGPA</h5>
          <h5> {props.byear} batch</h5>
          </div>
          <div className='col-md-1' style={{textAlign:'left',width:'1px',height:'auto'}}>
          <h3>|</h3>
          <h5>|</h5>
          <h5>|</h5>
          <h5>|</h5>

          </div>  
          <div className='col-md-5'>
          <h5><b>Intermediate/Diplamo :</b></h5>
          <h5> {props.icol}</h5>
          <h5> {props.icgpa} CGPA</h5>
          <h5> {props.iyear} batch</h5>
          </div>

        </div>
        <div className='row' style={{border:'1px solid  black',marginLeft:'4%',marginRight:'4%'}}></div>
        <div className='row' style={{marginLeft:'5%'}}>
        <div className='col-md-5'>
        <h3><b>Ceritifications:</b></h3>
        
            <h4>{props.c1}</h4>
            <h4>{props.c2}</h4>
            <h4>{props.c3}</h4>
        

        </div>
        <div className='col-md-1' style={{textAlign:'left',width:'1px',height:'auto'}}>
        <h3>|</h3>
        <h4>|</h4>
        <h4>|</h4>
        <h4>|</h4>
        </div>
        <div className='col-md-5'>
        <h3><b> Skills:</b></h3>
        <h4>{props.s1}</h4>
            <h4>{props.s2}</h4>
            <h4>{props.s3}</h4>
        </div>
        </div>
        <div className='row' style={{border:'1px solid  black',marginLeft:'4%',marginRight:'4%'}}></div>
        <div className='row' style={{marginLeft:"5%"}}>
            <h3><b>Projects:</b></h3>
        <h4>1.{props.p1}</h4>
        <h4><b>Description:</b>{props.pd1}</h4>
        <br/>
        <h4>2.{props.p2}</h4>
        <h4><b>Description :</b>{props.pd2}</h4>
        </div>
        <div className='row' style={{border:'1px solid  black',marginLeft:'4%',marginRight:'4%'}}></div>
        <div className='row'style={{marginLeft:'5%'}}>
            <h4><b>Declaration:</b></h4>
            <h5>I hereby declare that all the details provided above are true to the best of my knowledge.</h5>
        </div>
    </div>
    <br/>
<center>    <button className='btn btn-primary' onClick={temp1} > Download</button></center>
   
    </div>
    <div className='col-md-1'></div>
    <div className='col-md-5' id="template2">
    <h3 style={{textAlign:'center'}}> Template2</h3>
    <div className='row' style={{boxShadow:'5px 5px 4px',border:'1px solid black',paddingLeft:'2%'}}>
        <h3 style={{textAlign:'center'}}>{props.firstName+" "+props.lastName}</h3>
        <h3 style={{textAlign:'center'}}>{props.role}</h3>
        <h3> <b>AboutMe :</b>{props.about}</h3>
        <div className='col-md-6'>
            <h4><b>Personal Details:</b></h4>
            <h4><FiPhoneCall/>&nbsp;+91-{props.phone}</h4>
        <h4><FiMail/>&nbsp;{props.email}</h4>
        <h4><FiHome/>&nbsp;{props.address}</h4>
<br/>
<h4><b>Skills:</b></h4>

        <h4>{props.s1}</h4>
            <h4>{props.s2}</h4>
            <h4>{props.s3}</h4>

<h4><b>Ceritifications:</b></h4>
<h4>{props.c1}</h4>
            <h4>{props.c2}</h4>
            <h4>{props.c3}</h4>
        </div>
        <div className='col-md-6'>
        <h4><b>Education:</b></h4>
        <h4><b>Degree/U.G :</b></h4>
          <h4> {props.bcol}</h4>
          <h4> {props.bcgpa} CGPA</h4>
          <h4> {props.byear} batch</h4>
         <br/>
          <h4><b>Intermediate/Diplamo :</b></h4>
          <h4> {props.icol}</h4>
          <h4> {props.icgpa} CGPA</h4>
          <h4> {props.iyear} batch</h4>
        
          <h4><b>SSC DETAILS</b></h4>
          <h4>{props.scol}</h4>
          <h4>{props.scgpa}</h4>
          <h4>{props.syear}</h4>
          <br/>
          </div>
          <h4><b>Projects:</b></h4>
        <h4>1.{props.p1}</h4>
        <h4><b>Description:</b>{props.pd1}</h4>
       
        <h4>2.{props.p2}</h4>
        <h4><b>Description :</b>{props.pd2}</h4>
        <h4><b>Declaration:</b></h4>
            <h5>I hereby declare that all the details provided above are true to the best of my knowledge and are absolutly correct</h5>
       
    </div>
    
    <br/>
<center>    <button className='btn btn-primary' onClick={temp2} > Download</button></center>
   
    </div>
<div className='col-md-12'>
<div className='col-md-3'></div>
    <div className='col-md-5' id="template3">
    <h3 style={{textAlign:'center'}}> Template3</h3>
    <div className='row' style={{border:'1px solid black',boxShadow:'5px 5px 4px' ,paddingLeft:'2%'}}>
      <h3 style={{textAlign:'center'}}>{props.firstName+" "+props.lastName}</h3>
      <h3 style={{textAlign:'center'}}>{props.role}</h3>
      <div className='row' style={{border:'1px solid black',marginLeft:'1%',marginRight:'3%'}}></div>
      <h4><b>About_Me:</b>{props.about}</h4>
      <div className='row' style={{border:'1px solid black',marginLeft:'1%',marginRight:'3%'}}></div>
      <h4><b>Personal Details:</b></h4>
            <h4><FiPhoneCall/>&nbsp;+91-{props.phone}</h4>
        <h4><FiMail/>&nbsp;{props.email}</h4>
        <h4><FiHome/>&nbsp;{props.address}</h4>
        <div className='row' style={{border:'1px solid black',marginLeft:'1%',marginRight:'3%'}}></div>
        <h4><b>Education:</b></h4>
        <h4><b>Degree/U.G :</b></h4>
          <h4> {props.bcol}</h4>
          <h4> {props.bcgpa} CGPA</h4>
          <h4> {props.byear} batch</h4>
          <h4><b>Intermediate/Diplamo :</b></h4>
          <h4> {props.icol}</h4>
          <h4> {props.icgpa} CGPA</h4>
          <h4> {props.iyear} batch</h4>
          <div className='row' style={{border:'1px solid black',marginLeft:'1%',marginRight:'3%'}}></div>
          <div className='row' style={{marginLeft:'5%'}}>
        <div className='col-md-5'>
        <h3><b>Ceritifications:</b></h3>
        
            <h4>{props.c1}</h4>
            <h4>{props.c2}</h4>
            <h4>{props.c3}</h4>
        

        </div>
        <div className='col-md-1' style={{textAlign:'left',width:'1px',height:'auto'}}>
        <h3>|</h3>
        <h4>|</h4>
        <h4>|</h4>
        <h4>|</h4>
        </div>
        <div className='col-md-5'>
        <h3><b> Skills:</b></h3>
        <h4>{props.s1}</h4>
            <h4>{props.s2}</h4>
            <h4>{props.s3}</h4>
        </div>
        </div>
        <div className='row' style={{border:'1px solid black',marginLeft:'1%',marginRight:'3%'}}></div>
        <h4><b>Projects:</b></h4>
        <h4>1.{props.p1}</h4>
        <h4><b>Description:</b>{props.pd1}</h4>
       
        <h4>2.{props.p2}</h4>
        <h4><b>Description :</b>{props.pd2}</h4>
        <div className='row' style={{border:'1px solid black',marginLeft:'1%',marginRight:'3%'}}></div>
        <h4><b>Declaration:</b></h4>
            <h5>I hereby declare that all the details provided above are true to the best of my knowledge and are absolutly correct</h5>
       
    </div>
    <br/>
<center>    <button className='btn btn-primary' onClick={temp3} > Download</button></center>
   
    </div>  
</div>
    
 </div>
    </>
)
}
export default Template;