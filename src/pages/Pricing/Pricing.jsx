import React from 'react';
import newVet from "../../Images/new-vet-practice.png";
import newPractice from "../../Images/new-practice-2.png";
import enterprise from "../../Images/enterprise.png";
import "../Pricing/Pricing.css";
import allInOne from "../../Images/All-in-one-solution-vs-tools-3.png";

export default function Pricing() {
  return (
    <>
    
    
    <h1 className='text-center' style={{color:'#4ccfe2'}}>Straight-forward pricing for your all-in-one solution!</h1>
    <h5 className='text-center' >✓ Free trial with your own data ✓ Personalized onboarding & training ✓ 24/7 customer support</h5>
    <div className="container">
     
      <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
    <img src={newVet} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">New practice</h5>
        <p className="card-text">exclusive offers for new practices</p>
      </div>
      <div className="card-footer ">
        <div className="row" style={{display:'flex' , justifyContent:'center'}}>        <button className='btn btnCard text-center' style={{width:'auto'}}>Contact Us</button>
</div>
<div className="row">        <small className="text-muted text-center">We'd love to show you around</small>
</div>

      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={newPractice} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Mobile</h5>
        <p className="card-text">special workflows for mobile vets</p>
      </div>
      <div className="card-footer ">
        <div className="row" style={{display:'flex' , justifyContent:'center'}}>        <button className='btn btnCard2 text-center' style={{width:'auto'}}>Contact Us</button>
</div>
<div className="row">        <small className="text-muted text-center">Start a 14-days trial with your own data</small>
</div>

      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={enterprise} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Enterprise</h5>
        <p className="card-text">for large practices or multi-locations</p>
      </div>
      <div className="card-footer ">
        <div className="row" style={{display:'flex' , justifyContent:'center'}}>        <button className='btn btnCard text-center' style={{width:'auto'}}>Contact Us</button>
</div>
<div className="row">        <small className="text-muted text-center">We'd love to show you around</small>
</div>

      </div>
    </div>
  </div>

      </div>
    </div>
    <div className="container">
      <div className="row p-3" style={{display:"flex", justifyContent:'center'}}>
      <h1 className='text-center' style={{color:'#4ccfe2'}}>Are you a shelter, non-profit, or university?</h1>
    <h5 className='text-center' >You can get Digitail for a significant discount!</h5>
    <button className='btn btnCard2 text-center' style={{width:'auto'}}>Contact Us</button>
      </div>
      <div className="row" style={{display:"flex", justifyContent:'center'}}>
        <img src={allInOne} className='allInOne' alt="" />
      </div>
    </div>
    <div className=' discover '>
<div className="row">
  <div className="col-md-6">
    <h4>
The team is constantly updating and improving. I have been with them from early in the process and it has developed dramatically! Can’t wait to see where it continues in the future!</h4>
<p className='text-muted'>WoofDoctor On Wheels | Beaufort, SC</p>
<h6>Dr. Douglas Cifranick</h6>
  </div>
  <div className="col-md-6">
    <h4>
The team is constantly updating and improving. I have been with them from early in the process and it has developed dramatically! Can’t wait to see where it continues in the future!</h4>
<p className='text-muted'>WoofDoctor On Wheels | Beaufort, SC</p>
<h6>Dr. Douglas Cifranick</h6>
  </div>
</div>
<div className="row">
  <div className="col-md-6">
    <h4>
The team is constantly updating and improving. I have been with them from early in the process and it has developed dramatically! Can’t wait to see where it continues in the future!</h4>
<p className='text-muted'>WoofDoctor On Wheels | Beaufort, SC</p>
<h6>Dr. Douglas Cifranick</h6>
  </div>
  <div className="col-md-6">
    <h4>
The team is constantly updating and improving. I have been with them from early in the process and it has developed dramatically! Can’t wait to see where it continues in the future!</h4>
<p className='text-muted'>WoofDoctor On Wheels | Beaufort, SC</p>
<h6>Dr. Douglas Cifranick</h6>
  </div>
</div>
<div className="row">
  <h1 className='text-center'>Frequently Asked Questions</h1>
</div>
      </div>
    </>
  )
}
