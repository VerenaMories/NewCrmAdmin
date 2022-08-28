import React from "react";
import "../Features/Features.css";
import nurture from "../../Images/nurture-relationships.png";
import save from "../../Images/save-time.png";
import grow from "../../Images/grow-practice.png";
import test from "../../Images/dvm-testimonial.png";
import test1 from "../../Images/snoppy.png";
import group from "../../Images/Group-2720-1.png";
import group1 from "../../Images/Group-2721.png";
import group2 from "../../Images/Group-2722.png";

export default function Features() {
  return (
    <>
      <div className="container">
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
    </>
  );
}
 
