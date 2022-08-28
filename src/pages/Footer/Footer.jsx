import React from 'react';
import "../Footer/Footer.css";
import cat from "../../Images/cat.png";
import digitailLogo  from "../../Images/Digitail-Logo-teal-icon.png";
import sap  from "../../Images/SAP_Quartz_small_png (1).png";

export default function Footer() {
  return (
<>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#edefff" fill-opacity="1" d="M0,160L60,154.7C120,149,240,139,360,154.7C480,171,600,213,720,208C840,203,960,149,1080,122.7C1200,96,1320,96,1380,96L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
 <div className="container">
  <div className="row catContainer">
  <img src={cat} className='cat' alt="" />

  </div>
 </div>
 <div className="container">
  <div  >
    <img src={digitailLogo} className="digitailLogo" alt="" />
   
  </div>
  
 </div>
 <div className="container">
  <div className="row">
    <div className="col-md-5">
      <h6 style={{fontSize:'1.5rem'}}>All-in-one Veterinary Software for the Modern Veterinary Practices</h6>
      <div className=" btnContainerLeft p-4">
          <button className="btn  bookDemo2 ">Book a Demo</button>
          
        </div>
    </div>
    <div className="col-md-2">
      <h6>Digitail for Vets</h6>
      <p style={{color:'#586bb5'}}>Login</p>
      <p style={{color:'#586bb5'}}>Integrations</p>

      <img src={sap} className='sap' alt="" />
    </div>
    <div className="col-md-2">
<h6>Digitail for Pets</h6>
<p style={{color:'#586bb5'}}>Pet Portal</p>
<p style={{color:'#586bb5'}}>Telemedicine</p>
<p style={{color:'#586bb5'}}>Get the app</p>

    </div>
    <div className="col-md-3">
      <h6>Follow us
</h6>
<i className="fa-brands fa-facebook-f " style={{marginRight:'5px',color:'#586bb5'}}></i><i className="fa-brands fa-twitter" style={{marginRight:'5px',color:'#586bb5'}}></i><i className="fa-brands fa-instagram" style={{marginRight:'5px',color:'#586bb5'}}></i><i className="fa-brands fa-youtube" style={{marginRight:'5px',color:'#586bb5'}}></i><i className="fa-brands fa-linkedin-in" style={{marginRight:'5px',color:'#586bb5'}}></i>
    </div>
  </div>
 </div>
 <svg width="100%" height="10%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
       <defs><linearGradient id="gradient" x1="65%" y1="2%" x2="35%" y2="98%"><stop offset="5%" stop-color="#364c8d"></stop><stop offset="95%" stop-color="#32ded4"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,266 0,266 C 88.133971291866,282.71770334928226 176.267942583732,299.4354066985646 262,289 C 347.732057416268,278.5645933014354 431.0622009569379,240.97607655502392 527,237 C 622.9377990430621,233.02392344497608 731.4832535885168,262.6602870813397 827,262 C 922.5167464114832,261.3397129186603 1005.0047846889952,230.38277511961724 1105,226 C 1204.9952153110048,221.61722488038276 1322.4976076555024,243.80861244019138 1440,266 C 1440,266 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>
</>
  )
}
