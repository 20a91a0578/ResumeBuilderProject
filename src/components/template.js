import {FiMail,FiPhoneCall,FiHome} from 'react-icons/fi';
const Template=(props)=>{
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