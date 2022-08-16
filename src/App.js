import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Site.css'
import Cards from './component/Cards.js'
import DropPlate from './component/DropPlate.js';

function App() {
  const [ChangeMargin, setChangeMargin] = useState("11rem");
  const [ChangeMarLR1, setChangeMarLR1] = useState("-25rem");
  const [ChangeMarLR2, setChangeMarLR2] = useState("-25rem");
  const [Num1, setNum1] = useState(0.2);
  const [Num2, setNum2] = useState(0.2);
  const [Num3, setNum3] = useState(0.2);
  useEffect(() => {
    if (window.scrollY >= 180) {
      setChangeMargin("4rem");
      setNum1(1);
      setChangeMarLR1("0rem");
      setNum2(1);
      setChangeMarLR2("0rem");
      setNum3(1);
    }
  }, [])
  window.addEventListener("scroll", () => {
    // console.log(window.scrollY);
    if (window.scrollY <= 180) {
      setChangeMargin("4rem");
      setNum1(1);
    } else if (window.scrollY <= 500) {
      setChangeMarLR1("0rem");
      setNum2(1);
    } else if (window.scrollY <= 824) {
      setChangeMarLR2("0rem");
      setNum3(1);
    }
  });
  return <>
    <div className='maincontainer'>
      <div className="intro-container">
        <div className='introduction'>
          <div className="webimg1">
            <img src="/call-icon.webp" alt="image" />
            <h2>Phone no. </h2><p>+91 8802370171</p>
          </div>
          <div className="webimg2">
            <img src="/whatsapp-icon.webp" alt="image" />
            <h2>Whatsapp Us </h2><a href={`https://api.whatsapp.com/send/?phone=${8802370171}&text&type=phone_number&app_absent=0`}>Send Message</a>
          </div>
        </div>
        <div className="h-line"></div>
        <div className='introduction'>
          <h1>Welcome to Krishna Classes</h1>
          <div className="intro-button">
            <Link to={"/about"} className="button">Read</Link>
            <Link to={"/contact"} className="button">Contact us</Link>
          </div>
        </div>
      </div>
    </div>

    <div className="cards-container"
      style={{ marginTop: ChangeMargin, filter: `contrast(${Num1}) opacity(${Num1})` }}>
      <Cards ID={"6th"} title={"Class 6th"} content={"This is 6th class."}
        BgColor={"red"} CSS={{ R: "0rem", L: "0rem" }} />
      <Cards ID={"7th"} title={"Class 7th"} content={"This is 7th class."}
        BgColor={"purple"} CSS={{ R: "0rem", L: "0rem" }} />
      <Cards ID={"8th"} title={"Class 8th"} content={"This is 8th class."}
        BgColor={"green"} CSS={{ R: "0rem", L: "0rem" }} />
    </div>

    <div className="cards-container"
      style={{ filter: `contrast(${Num2}) opacity(${Num2})` }}>
      <Cards ID={"9th"} title={"Class 9th"} content={"This is 9th class."}
        BgColor={"lightgreen"} CSS={{ R: "0rem", L: ChangeMarLR1 }} />
      <Cards ID={"10th"} title={"Class 10th"} content={"This is 10th class."}
        BgColor={"lightskyblue"} CSS={{ R: ChangeMarLR1, L: "0rem" }} />
    </div>

    <div className="cards-container"
      style={{ filter: `contrast(${Num3}) opacity(${Num3})` }}>
      <Cards ID={"11th"} title={"Class 11th"} content={"This is 11th class."}
        BgColor={"brown"} CSS={{ R: "0rem", L: ChangeMarLR2 }} />
      <Cards ID={"12th"} title={"Class 12th"} content={"This is 12th class."}
        BgColor={"aqua"} CSS={{ R: ChangeMarLR2, L: "0rem" }} />
    </div>

    <div className="tutor-card-container">
      <div className="tutor-card-under-side">
        <div className="RHS-tutor">
          <img src="/favicon.ico" alt="image" />
          <p>Mr. Deepak sir!</p>
        </div>
        <div className="LHS-tutor">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="symbol block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p>
              Krishna Classes Tuition was started from 2007 to 2010. 
              The name of the teacher of Krishna Classes Tuition is Deepak Sir. 
          </p>
        </div>
      </div>
    </div>

    <div className="drop-plates-container">
      <h1 id='readid'>About Tuition</h1>
      <DropPlate title={"krishnaClasses Tuition"} 
      content={"Krishnaclasses Tuition is the best tuition which is in Delhi, if you are looking for some good tuition then join Krishnaclasses"} />

      <DropPlate title={"Fees of the Tuition"}
      content={"6th to 8th ₹400 hundred rupe \n 9th to 10th ₹600 hundred rupe \n 11th to 12th ₹300 hundred per subject"} />

      <DropPlate title={"Study related"} 
      content={"In Krishnaclasses, you will be taught all kinds of subjects, in this tuition, both Hindi media and English people can study well together."} />

      <DropPlate title={"Best Subjects"} 
      content={"By the way, all the subjects are taught well in Krishnaclasses. But the subject that children understand the most and quickly is math and social science."} />

      <DropPlate title={"Tuition Location"} 
      content={"Krishnaclasses tuition is in Harsh Vihar Delhi 93"} />

      <DropPlate title={"Teacher of krishnaClasses"} 
      content={"Krishna Classes Tuition was started from 2007 to 2010. The name of the teacher of Krishna Classes Tuition is Deepak Sir. Will give you all the information from private to government."} />

      <DropPlate title={"students response"} 
      content={"The students of Krishnaclasses love to read this, here they also do seven funs of studying, all the students' numbers are very good."} />
    </div>
  </>
}

export default App;
