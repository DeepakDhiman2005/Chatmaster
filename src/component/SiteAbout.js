import React from 'react'
import '../styles/SiteAbout.css'
import '../styles/Site.css'
import { Link } from 'react-router-dom'

function SiteAbout() {
  return <>
    <div className='About-container' id='marksid'>
      <h1>Total mark of Students in 2022-2023</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Goodboy</td>
            <td>80%</td>
          </tr>
          <tr className="active-row">
            <td>i am good boy</td>
            <td>70%</td>
          </tr>
        </tbody>
      </table>

      <h1>Total mark of Students in 2021-2022</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Goodboy thi</td>
            <td>90%</td>
          </tr>
          <tr className="active-row">
            <td>i am good boy thi</td>
            <td>89%</td>
          </tr>
        </tbody>
      </table>
    </div>
    {/* ============================================================================= */}
    <div className="tuition-about-container">
      <div className="about-content">
        <h2>Subjects of Class 6th to 12th</h2>
        <ul>
          <li>6th Class: Math, Science, Hindi, English, Social Science.</li>
          <li>7th Class: Math, Science, Hindi, English, Social Science.</li>
          <li>8th Class: Math, Science, Hindi, English, Social Science.</li>
          <li>9th Class: Math, Science, Hindi, English, Social Science With Supporting Material.</li>
          <li>10th Class: Math, Science, Hindi, English, Social Science With Supporting Material.</li>
          <li>11th Class Arts Stream: Economics, Political Science, Geography, Hindi With Supporting Material.</li>
          <li>11th Class Commerce Stream:  Economice, Math, Account, Business With Supporting Material.</li>
          <li>11th Class Science Stream:  Economics, Political Science, Geography, Hindi With Supporting Material.</li>
          <li>12th Class Arts Stream: Economics, Political Science, Geography, Hindi With Supporting Material.</li>
          <li>12th Class Commerce Stream:  Economice, Math, Account, Business With Supporting Material.</li>
          <li>12th Class Science Stream:  Economics, Political Science, Geography, Hindi With Supporting Material.</li>
        </ul>
      </div>

      <div className="about-content" style={{alignItems: "center"}}>
        <h2 style={{fontSize: "40px", marginBottom: "5px"}}>Krinshna Classes</h2>
        <img src="/group_img.jpg" alt="image" className='group_img'/>
          <div className="tutor-card-under-side">
            <div className="RHS-tutor">
              <img src="/tuition_teacher_img.png" alt="image" />
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

      <div className="about-content" style={{
        alignItems: "center",
        backgroundColor: "#161616cc"
      }}>
        <h1>Join The Krishna Classes</h1>
        <Link to={"/contact"} className='join_button'>Join the Tuition</Link>
      </div>

      <div className="about-content">
        <h2>Fees of Class 6th to 12th Students</h2>
        <p>
          <li>6th to 8th ₹400 hundred rupe</li>
          <li>9th to 10th ₹600 hundred rupe</li>
          <li>11th to 12th ₹300 hundred per subject</li>
        </p>
      </div>
    </div>
  </>
}

export default SiteAbout