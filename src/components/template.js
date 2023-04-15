import bootstrap from 'react-bootstrap';
import {FiMail,FiPhoneCall,FiHome} from 'react-icons/fi';
const Template=(props)=>{

//    const props={
//     about
//     : 
//     "huuhuhiuhuhujhsadfghndeqMWGLKNBMVLEQkngl\nkfdmnaflkgjmvclkxjmnklbvcfsdghjmgbfdekrsghjjgyjgygygygdyge",
//     address
//     : 
//     "3-59,eevana vari meraka,turputallu",
//     bcgpa
//     : 
//     "8.83",
//     bcol
//     : 
//     "Aditya Engineering College",
//     byear
//     : 
//     "2020-2024",
//     c1
//     : 
//     "Python Basics",
//     c2
//     : 
//     "Java Basics",
//     c3:"HTML",
//     email
//     : 
//     "20a91a0578@aec.edu.in",
//     firstName
//     : 
//     "Eevana",
//     icgpa
//     : 
//     "9.88",
//     icol
//     : 
//     "Aditya Junior College",
//     iyear
//     : 
//     "2018-2020",
//     lastName
//     : 
//     "Rajesh",
//     phone
//     : 
//     "9100189182",
//     p1:"Resource Allocator",
//     pd1
//     : 
//     "Capstonnnjqwerghgfewqrjgnljekn",
//     p2:"FOOD ORDER WEBSITE",
//     pd2
//     : 
//     "hbhkbhbhbhjbhjbhjnwrejrjknewjkrngjknejfknfkj",
//     role
//     : 
//     "Aspiring Techinal traineee",
//     s1
//     : 
//     "C++",
//     s2
//     : 
//     "Java",
//     s3
//     : 
//     "DSA"
//    }
return(
    <>
    <h1 style={{textAlign:'center'}}>Choose the Format </h1>
    <div style={{border:'1px solid black',marginLeft:'25%',marginRight:'25%'}}>
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
          
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.about}</h4>
            
        </div>
        <div className='row' style={{border:'1px solid  black',marginLeft:'4%',marginRight:'4%'}}></div>
        <div className="row" style={{marginLeft:'5%'}}>
           <h3><b>Education :</b></h3>
          <div className='col-md-5'>
          <h5><b>Degree/U.G :</b></h5>
          <h5> &nbsp;&nbsp;&nbsp;{props.bcol}</h5>
          <h5> &nbsp;&nbsp;&nbsp;{props.bcgpa} CGPA</h5>
          <h5> &nbsp;&nbsp;&nbsp;{props.byear} batch</h5>
          </div>
          <div className='col-md-1' style={{textAlign:'left',width:'1px',height:'auto'}}>
          <h3>|</h3>
          <h5>|</h5>
          <h5>|</h5>
          <h5>|</h5>

          </div>  
          <div className='col-md-5'>
          <h5><b>Intermediate/Diplamo :</b></h5>
          <h5> &nbsp;&nbsp;&nbsp;{props.icol}</h5>
          <h5> &nbsp;&nbsp;&nbsp;{props.icgpa} CGPA</h5>
          <h5> &nbsp;&nbsp;&nbsp;{props.iyear} batch</h5>
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
            <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I hereby declare that all the details provided above are true to the best of my knowledge.</h4>
        </div>
    </div>
    </>
)
}
export default Template;