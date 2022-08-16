import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Sitefooter.css';

function SiteFooter() {
  return (
    <footer className='footer-style'>
        <div className="footer-left-side">
            <h1>Krishna <mark style={{color: "lightseagreen", backgroundColor: "transparent"}}>Classes</mark></h1>
            <div className="foot-leftsd-btns">
                <Link to={"/"} className="foot-btns">Home | </Link>
                <Link to={"/about"} className="foot-btns">About | </Link>
                <Link to={"/classes"} className="foot-btns">Classes | </Link>
                <Link to={"/contact"} className="foot-btns">Contact Us | </Link>
            </div>
            <h3>Tuition Classes © 2022</h3>
        </div>
        <div className="footer-center-side">
            <div className="foot-censd-top">
                <img src="/location.png" alt="img" />
                <p>Krishnaclasses tuition is in Harsh Vihar Delhi 93</p>
            </div>
            <div className="foot-censd-center">
                <img src="/phone.png" alt="img" />
                <p>+91 8802370171</p>
            </div>
            <div className="foot-censd-bottom">
                <img src="/message_icon.png" alt="img" />
                <p>support@message.com</p>
            </div>
        </div>
        <div className="footer-right-side">
            <h2>About The Tuition</h2>
            <p>
                Krishna Classes Tuition was started from 2007 to 2010. 
                The name of the teacher of Krishna Classes Tuition is Deepak Sir. 
                Will give you all the information from private to government.
            </p>
            <div className="set-foot-icons">
                <img src="/facebook_icon.png" alt="img" />
                <img src="/instagram_icon.png" alt="img" />
                <img src="/telegram_icon.png" alt="img" />
                <img src="/twitter_icon.png" alt="img" />
            </div>
        </div>
    </footer>
  )
}

export default SiteFooter