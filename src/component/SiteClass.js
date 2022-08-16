import React from 'react'
import '../styles/Classes.css'
import ClassesCards from './ClassesCards'

function SiteClass() {
  return (
    <div className='Classes-main-container'>
      <div className="Classes-title">
        <h4>Tuition {">"} Welcome to {"My tuition "} Website Phone no. +91 4xxx-xxx-xxx</h4>
        <h1>Children from 6th to 12th can come</h1>
        {/* <h2>Tuition location is Harsh Vihar Delhi 93, Mandoli</h2> */}
        <h3>My Tuition Location. this is my tuition location. this is my website location.</h3>
      </div>
      <div className="Classes-container-content">
        <ClassesCards ID={"6th"} logoname={"6th"} title={"Class 6th"} subjects={"Math, Science, Hindi, English, Social Science."} />
        <ClassesCards ID={"7th"} logoname={"7th"} title={"Class 7th"} subjects={"Math, Science, Hindi, English, Social Science."} />
        <ClassesCards ID={"8th"} logoname={"8th"} title={"Class 8th"} subjects={"Math, Science, Hindi, English, Social Science."} />
        
        <ClassesCards ID={"9th"} logoname={"9th"} title={"Class 9th"} subjects={"Math, Science, Hindi, English, Social Science With Supporting Material."} />
        <ClassesCards ID={"10th"} logoname={"10th"} title={"Class 10th"} subjects={"Math, Science, Hindi, English, Social Science With Supporting Material."} />

        <ClassesCards ID={"11th"} logoname={"11th"} title={"Class 11th: Arts"} subjects={" Economics, Political Science, Geography, Hindi With Supporting Material."} />
        <ClassesCards ID={"11th"} logoname={"11th"} title={"Class 11th: Commerce"} subjects={"Economice, Math, Account, Business With Supporting Material."} />
        <ClassesCards ID={"11th"} logoname={"11th"} title={"Class 11th: Science"} subjects={"Math, English, Physics With Supporting Material."} />

        <ClassesCards ID={"12th"} logoname={"12th"} title={"Class 12th: Arts"} subjects={" Economics, Political Science, Geography, Hindi With Supporting Material."} />
        <ClassesCards ID={"12th"} logoname={"12th"} title={"Class 12th: Commerce"} subjects={"Economice, Math, Account, Business With Supporting Material."} />
        <ClassesCards ID={"12th"} logoname={"12th"} title={"Class 12th: Science"} subjects={"Math, English, Physics With Supporting Material."} />
      </div>
    </div>
  )
}

export default SiteClass