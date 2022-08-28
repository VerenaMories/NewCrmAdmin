import React from "react";
import "../Home/Home.css";

import brand from '../../Images/Capterra-reviews-12.png';
import digitail from '../../Images/digitail-all-in-one.png';
import nurture from "../../Images/nurture-relationships.png";
import save from "../../Images/save-time.png";
import grow from "../../Images/grow-practice.png";
import test from "../../Images/dvm-testimonial.png";
import test1 from "../../Images/snoppy.png";
import group from "../../Images/Group-2720-1.png";
import group1 from "../../Images/Group-2721.png";
import group2 from "../../Images/Group-2722.png";

export default function Home() {
  return (
    <>
    <div className="homgBg">
    <div className="container p-3">
        <div
          className="row"
       
        >
          <h1 className="typewriter text-center">Meet Digitail, the</h1>
          <span className="typewriter1">
            <h2 id="text">VARVORA EL SHATORA</h2>
            <h2 id="text">DAV THE BRAVE</h2>

          </span>
          <h1 className="typewriter text-center">veterinary software</h1>
          <h2 className=" text-center p-3">You'd Wish You Had Sooner</h2>
        </div>
        <div className="row btnContainer p-4">
          <button className="btn  bookDemo p-2">Book a Demo</button>
        </div>
        <div className="row imgContainer">
          <img src={brand} className='brand' alt="" />
        </div>
        <div className="row imgContainer">
          <img src={digitail} className='digitail' alt="" />
        </div>
      </div>
    </div>
    <div className="container" style={{paddingTop:'20%'}}>
        <div className="row">
          <h2 className="text-center">A Single software to achieve</h2>
        </div>
        <div className="row text-center">
        <h2><span style={{color: "#5d78ff"}}>more </span>with <span style={{color: "#4ccfe2"}}>less work</span>  </h2>

        </div>
        <div className="row">
          <p className="text-center" style={{fontWeight:'600'}}>
            Digitail is an{" "}
            <span className="fw-bold"> all-in-one cloud platform</span> that
            allows you to run your entire practice with one single tool. We are
            your trusted partner to enhance{" "}
            <span className="fw-bold">
              patient engagement, streamline your processes,
            </span>{" "}
            and <span className="fw-bold">grow your practice.</span>{" "}
          </p>
        </div>
        <div className="row">
          <div
            className="col-md-6"
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "stretch",
            }}
          >
                          <h2><span style={{color: "#5d78ff"}}>Nurture </span>relationships </h2>
                          <h2>and <span style={{color: "#4ccfe2"}}>increase </span>compliance</h2>


            <p  style={{fontWeight:'600'}}>
You no longer need multiple, disconnected tools. We make the entire patient journey easier and faster — for you and your patients. Retain your clients by giving them a modern experience before, during, and after the visit.
</p>
          </div>
          <div className="col-md-6">
            <img src={nurture} style={{ width: "100%" }} alt="" />
          </div>
        </div>
        <div className="row">
        <div className="col-md-6">
            <img src={save} style={{ width: "100%" }} alt="" />
          </div>
          <div
            className="col-md-6"
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "stretch",
            }}
          >
                          <h2><span style={{color: "#5d78ff"}}>Saving time </span>can also be your </h2>
                          <h2><span style={{color: "#4ccfe2"}}>super pawer  </span></h2>


            <p  style={{fontWeight:'600'}}>
            We are making it easier to run a thriving practice! Spend less time on tedious tasks including phone calls, managing paperwork, intake processes, and follow-ups to focus on what matters most.

</p>
          </div>
          
        </div>
        <div className="row">
          <div
            className="col-md-6"
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "stretch",
            }}
          >
                          <h2>Grow your practice<span style={{color: "#5d78ff"}}>10x faster </span> </h2>
                          <h2>with  <span style={{color: "#4ccfe2"}}>Digitail </span></h2>


            <p style={{fontWeight:'600'}}>
            How do you grow your practice when you don’t have the capacity for new clients? Digitail automatically takes care of everything you need to run your practice. Cut visit times in half, understand and solve bottlenecks, and unlock new revenue streams.</p>
          </div>
          <div className="col-md-6">
            <img src={grow} style={{ width: "100%" }} alt="" />
          </div>
        </div>
      </div>
      <div className='discover'>
<h4 className="text-center p-4">
Discover the only all-in-one software for animal hospitals

</h4>
<div className=" btnContainer p-4">
          <button className="btn  bookDemo ">Book a Demo</button>
        </div>
      </div>
      <div className="bgblue">
        <div className="layer">
          <div className="container">
            <div className="row" style={{marginTop:'35%'}}>
              <div className="col-md-6 ">
                <div className="leftContainer p-4">
                <p className="postContent">We are more efficient after implementing Digitail. We decreased the amount of time we need to type in information and now we can spend more time with the patients.</p >
<p className="postContent">
  <img src={test} alt="" style={{width:'25%', borderRadius:'50px'}} />
Focused Pet Care <span className="postContent"> Dr. Rachel Green</span >
 </p>
                </div>
              </div>
              <div className="col-md-2">

              </div>
              <div className="col-md-4">
                <div className="rightContainer">
                <p className="postContent" style={{marginTop:'15%', marginLeft:'10%'}}>I agree. Best vet, gives treetos!</p >   
<p className="postContent">
<img src={test1} alt="" style={{width:'25%', borderRadius:'50px', marginLeft:'10%'}} />
Best doggo
Droopy
</p>
                </div>
              </div>
            </div>
          </div>
    
        </div>
      </div>
      <div className="container">
        <div className="line " style={{paddingTop:'10%'}}>
          <div className="row">
          <h2><span style={{color: "#4ccfe2 "}}>Dreading change? </span>We’ve made it </h2>
                          <h2>and <span style={{color: "#5d78ff"}}>our mission
to make change </span> easy peasy!</h2>
          </div>
    <div className="row">
      <div className="col-md-3 innerLine">
      <img src={group} className='group' alt="" />
<h2 style={{color: "#5d78ff"}}>Smooth data migration</h2>
<p>✓ cleaning & data standardization</p>
<p>✓ real-time sync</p>

      </div>
      <div className="col-md-1"></div>
      <div className="col-md-3 innerLine">
      <img src={group1} className='group1' alt="" />
<h2 style={{color: "#5d78ff"}}>Training & support</h2>
<p>✓  unlimited training for all team members</p>
<p>✓ monthly webinars introducing new features & tips</p>
<p>✓ 24/7 tech support</p>

      </div>
      <div className="col-md-1"></div>
      <div className="col-md-1"></div>

      <div className="col-md-3 innerLine">
      <img src={group2} className='group2' alt="" />
<h2 style={{color: "#5d78ff"}}>Go live day
</h2>
<p>✓ remote assistance via Zoom</p>
<p>✓ dedicated specialist on-premise</p>

      </div>
      
    </div>

        </div>
      </div>
      <div className='bgYellow p-3'>
<h4 className="text-center p-2">
Digitail is the only independent all-in-one solution for animal hospitals.


</h4>
<h4 className="text-center p-2">We raised $2.5M from <span className="changeColor" style={{color: "#5d78ff", cursor:'pointer'}}>Google AI, byFounders & Partech </span> to continue improving the life of veterinarians and pet parents.</h4>

<h4 className="text-center p-2 changeColor" style={{color: "#5d78ff", cursor:'pointer'}}>
 Read our story 👉

</h4>
      </div>
      <div className="container" style={{paddingTop:'5%'}}>
       
        <div className="row text-center " style={{paddingBottom:'10px'}}>
        <h2>The <span style={{color: "#5d78ff"}}>all-in-one  </span><span style={{color: "#4ccfe2"}}>veterinary software</span>  </h2>
        <h2>that you can trust and grow with
</h2>

        </div>

      </div>
      <div className="container">
        <div className="row p-3">
          <div className="col-md-2 health p-2">
          <i className="fa-solid fa-id-card-clip fs-1" style={{color:'#5d78ff', padding:'20px'}}></i>
            <h3>Health records</h3>
            <p className="text-muted">You can have it all – collaborative records, SOAP templates, integrations, automation, and more.</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2 online p-2">
          <i className="fa-solid fa-calendar-days fs-1" style={{color:'#5d78ff', padding:'20px'}}></i>
            <h3>Online appointments</h3>
            <p className="text-muted">Reduce phone calls with your own personalized booking system!</p>
          </div>          <div className="col-md-1"></div>

          <div className="col-md-2 Invoicing p-2">
          <i className="fa-solid fa-file-invoice-dollar fs-1"  style={{color:'#5d78ff', padding:'20px'}}></i>
            <h3>Invoicing</h3>
            <p className="text-muted">Be ready for check-out with automatic invoicing, and quick & integrated payments. Downpayments, split payments, refunds.</p>
          </div>          <div className="col-md-1"></div>

          <div className="col-md-2 Stock p-2">
          <i className="fa-solid fa-box-archive fs-1" style={{color:'#5d78ff', padding:'20px'}}></i>
            <h3>Stock management</h3>
            <p className="text-muted">Kick inventory stress to a curb and keep your stock up to date, in real-time.</p>
          </div>
        </div>
        <div className="row p-3">
          <div className="col-md-2 petParent p-2">
          <i className="fa-solid fa-mobile-screen-button fs-1" style={{color:'#5d78ff', padding:'20px'}}></i>
            <h3>Pet parent app</h3>
            <p className="text-muted">Offer the vet-in-your-pocket experience to your clients with a dedicated app. Reminders, medical records, invoices - they also have it all-in-one.</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2 chat p-2">
          <i className="fa-solid fa-comment fs-1" style={{color:'#5d78ff', padding:'20px'}}></i>
            <h3>Chat & Telemedicine</h3>
            <p className="text-muted">Stay in touch with your patients with chat, telehealth & telemedicine! Save time on triage, general advice, post-surgery care, or follow-ups.</p>
          </div>          <div className="col-md-1"></div>
          <div className="col-md-2 reports p-2">
          <i className="fa-solid fa-people-roof fs-1"  style={{color:'#5d78ff', padding:'20px'}}></i>
            <h3>Reports</h3>
            <p className="text-muted">Advanced reporting on finances, stock, appointments, clients & more - at your fingertips.</p>
          </div>          <div className="col-md-1"></div>
          <div className="col-md-2 data p-2">
          <i className="fa-solid fa-database fs-1" style={{color:'#5d78ff', padding:'20px'}}></i>
            <h3>Data migration</h3>
            <p className="text-muted">Your data comes with you! We offer smooth data migration, cleaning & standardization so you feel that you've been using Digitail since the first day.</p>
          </div>
        </div>
        <div className="row">
          <h5 style={{color:'#5d78ff'}} className='text-center p-3'>SEE ALL FEATURES</h5>
        </div>
      </div>
      <div className='discover'>
<h4 className="text-center p-4">
It's meow or never!
</h4>
<div className=" btnContainer p-4">
          <button className="btn  bookDemo ">Book a Demo</button>
          
        </div>
        
        </div>
     

    </>
  );
}
