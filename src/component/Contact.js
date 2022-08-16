import React from 'react'
import { useState } from 'react';
import '../styles/SiteContact.css'

function Contact() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [SelClass, setSelClass] = useState("Select Class");
  const [DisplayChange, setDisplayChange] = useState("none");
  const [MarL, setMarL] = useState(-64);
  let num=-64;

  function CancelForm(e){
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    setSelClass("Select Class");
  }
  function SendForm(e){
    e.preventDefault();
    if (Name === "" || Email === "" || Message === "" || SelClass === "Select Class") {
      alert("Sorry: The form is not fillup!");
    }else{
      setDisplayChange("flex");
      StartAnimation();
      let obj={
        N: Name,
        E: Email,
        M: Message,
        S: SelClass
      }
      // console.log(
      //   obj.N, obj.E, obj.M, obj.S
      // )
    }
  }

  function StartAnimation() {
    console.log("start")
    let startanim = setInterval(() => {
      setMarL(num);
      if (num >= 0) {
        // console.log("startanim: Close");
        StopAnimation();
        clearInterval(startanim);
      }
      num++;
    }, 20);
  }

  function StopAnimation() {
    // console.log("start Stopanimation")
    let a = setInterval(() => {
      setDisplayChange("none");
      setMarL(0);
      clearInterval(a);
    }, 2000);
  }

  return (
    <div className='Contact-page'>
      <div className="Contact-page-left-side">
        <h1>Contact Us</h1>
        <h2><img src="/phone.png" alt="img" /> Phone No:- +91 8802370171</h2>
      </div>
      <form action="#" className="Contact-page-from">
        <div className="from-top-lair">
          <h1>Tuition Contact</h1>
          <div className="line"></div>
        </div>
        <input type="text" placeholder="Enter your Name: " value={Name} id="Name" onChange={(v)=>{
          setName(v.target.value);
        }} />
        <input type="email" placeholder="Enter your Email: " value={Email} id="email" onChange={(v)=>{
          setEmail(v.target.value);
        }} />
        <select name="" id="" className='class-list' onChange={(v)=>{
          setSelClass(v.target.value);
        }} value={SelClass} >
          <option value="Select Class">Select Class</option>
          <option value="Class 6th">Class 6th</option>
          <option value="Class 7th">Class 7th</option>
          <option value="Class 8th">Class 8th</option>
          <option value="Class 9th">Class 9th</option>
          <option value="Class 10th">Class 10th</option>
          <option value="Class 11th">Class 11th</option>
          <option value="Class 12th">Class 12th</option>
        </select>
        <div className="text-area"><textarea onChange={(v)=>{
          setMessage(v.target.value);
        }} id="" placeholder='Message' value={Message} ></textarea></div>
        <div className="from-bottom-lair">
          <button className='submit-from-btn' onClick={CancelForm}>Cancel</button>
          <button type="submit" className='submit-from-btn' onClick={SendForm}>Send</button>
        </div>
      </form>

      <div className="send-message-box" style={{display: DisplayChange}}>
        <div className="send-mb-top" style={{marginLeft: MarL+"rem"}}>✔</div>
        <div className="send-mb-bottom" style={{marginRight: MarL+"rem"}}>
          Your Message Send is <mark style={{backgroundColor: "transparent", color: "lightgreen"}}>Successfully</mark>
        </div>
      </div>
    </div>
  )
}

export default Contact