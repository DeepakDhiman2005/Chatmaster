import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Classes.css'

function ClassesCards(props) {
    const [ChangeFilter, setChangeFilter] = useState("none")
    function mouseup() {
      setChangeFilter("invert(1)");
    }
    function mousedown(){
      setChangeFilter("none");
    }
    return (
        <div className="Cl-card" id={props.ID}>
            <div className="Cl-logo">{props.logoname}</div>
            <div className="Cl-content">
                <div className="Cl-content-upperlair">
                    <h2>{props.title}</h2>
                    <Link className='button' to={"/Contact"} onMouseEnter={mouseup} onMouseLeave={mousedown}>
                        <img src="/phone.png" alt="img" style={{ filter: ChangeFilter }} /> Contact
                    </Link>
                </div>
                <div className="Cl-content-lowerlair">
                    <div className="lowlair-top">
                        <b style={{ color: "black" }}>Medium: </b>{"Hindi and English."}
                    </div>
                    <div className="lowlair-bottom">
                        <b style={{ color: "black" }}>Subjects: </b>{props.subjects}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClassesCards