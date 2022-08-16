import React from 'react'
import { useState } from 'react';
import '../styles/SiteContact.css'

function Contact() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [SelClass, setSelClass] = useState("");
  function CancelForm(e){
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    setSelClass("");
  }
  function SendForm(e){
    e.preventDefault();
    let obj={
      N: Name,
      E: Email,
      M: Message,
      S: SelClass
    }
    console.log(
      obj.N, obj.E, obj.M, obj.S
    )
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
        <input type="text" placeholder="Enter your Name: " id="Name" onChange={(v)=>{
          setName(v.target.value);
        }} />
        <input type="email" placeholder="Enter your Email: " id="email" onChange={(v)=>{
          setEmail(v.target.value);
        }} />
        <select name="" id="" className='class-list' onChange={(v)=>{
          setSelClass(v.target.value);
        }}>
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
        }} id="" placeholder='Message'></textarea></div>
        <div className="from-bottom-lair">
          <button className='submit-from-btn' onClick={CancelForm}>Cancel</button>
          <button type="submit" className='submit-from-btn' onClick={SendForm}>Send</button>
        </div>
      </form>
    </div>
  )
}

export default Contact