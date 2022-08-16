import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/sitenavbar.css'

function SiteNavbar() {
    let seturl = window.location.origin;
    const [SearchbarWidth, setSearchbarWidth] = useState(0);
    const [SearchbarRightMar, setSearchbarRightPad] = useState(-35);
    const [NavLinksHeight, setNavLinksHeight] = useState("auto");
    const [UpArrow, setUpArrow] = useState("2px solid transparent");
    const [DownArrow, setDownArrow] = useState("2px solid #545454");
    const [ArrowMarginTop, setArrowMarginTop] = useState("-12px");
    const [Arrowboxdisplay, setArrowboxdisplay] = useState("none");
    useEffect(() => {       
        if (window.innerWidth <= 565) {
            setNavLinksHeight("0rem");
            setArrowboxdisplay("flex");
        }
    }, [])
    const popsearchbar = () =>{
        SearchbarWidth !== 8? setSearchbarWidth(8): setSearchbarWidth(0);
        SearchbarRightMar !== -22? setSearchbarRightPad(-22): setSearchbarRightPad(-35);
    }
  return (
    <header className='navbarheader'>
        <nav className='Navbar'>
            <div className="logo">Krishna <mark style={{color: "lightseagreen", 
            backgroundColor: "transparent"}}>Classes</mark></div>
            <div className="nav-links" style={{height: NavLinksHeight}}>
                <NavLink to="/" className={'navlink'} activeClassName="navactlink">Home</NavLink>
                <NavLink to="/About" className={'navlink'} activeClassName="navactlink">About</NavLink>
                <NavLink to="/Classes" className={'navlink'} activeClassName="navactlink">Classes</NavLink>
                <NavLink to="/Contact" className={'navlink'} activeClassName="navactlink">Conact us</NavLink>
                <div className="search-bar">
                    <input type="text" list='inp' style={{width: SearchbarWidth+"rem",
                    marginRight: SearchbarRightMar+"px"}} placeholder="Search..." onClick={(e)=>{
                        e.target.addEventListener('keyup', (k)=>{
                            let passvalues = e.target.value.toUpperCase();
                            if (k.key === "Enter") {
                                // console.log(e.target.value);
                                switch (passvalues) {
                                    case "CLASS 6TH":
                                        window.location=seturl+"/Classes#6th";
                                        break;
                                    case "CLASS 7TH":
                                        window.location=seturl+"/Classes#7th";
                                        break;
                                    case "CLASS 8TH":
                                        window.location=seturl+"/Classes#8th";
                                        break;
                                    case "CLASS 9TH":
                                        window.location=seturl+"/Classes#9th";
                                        break;
                                    case "CLASS 10TH":
                                        window.location=seturl+"/Classes#10th";
                                        break;
                                    case "CLASS 11TH ARTS":
                                        window.location=seturl+"/Classes#11th";
                                        break;
                                    case "CLASS 11TH COMMERCE":
                                        window.location=seturl+"/Classes#11th";
                                        break;
                                    case "CLASS 11TH SCIENCE":
                                        window.location=seturl+"/Classes#11th";
                                        break;
                                    case "CLASS 12TH ARTS":
                                        window.location=seturl+"/Classes#12th";
                                        break;
                                    case "CLASS 12TH COMMERCE":
                                        window.location=seturl+"/Classes#12th";
                                        break;
                                    case "CLASS 12TH SCIENCE":
                                        window.location=seturl+"/Classes#12th";
                                        break;
                                    case "MARKS OF STUDENTS":
                                        window.location=seturl+"/about#marksid";
                                        break;
                                    case "CONTACT":
                                        window.location=seturl+"/contact";
                                        break;
                                    default:
                                        window.location=seturl+"#readid";
                                        console.log(seturl);
                                        break;
                                }
                            }
                        });
                    }} />
                    <datalist id='inp'>
                        <option value="contact">contact</option>
                        <option value="Class 6th">Class 6th</option>
                        <option value="Class 7th">Class 7th</option>
                        <option value="Class 8th">Class 8th</option>
                        <option value="Class 10th">Class 10th</option>
                        <option value="Class 11th Arts">Class 11th Arts</option>
                        <option value="Class 11th Commerce">Class 11th Commerce</option>
                        <option value="Class 11th Science">Class 11th Science</option>
                        <option value="Class 12th Arts">Class 12th Arts</option>
                        <option value="Class 12th Commerce">Class 12th Commerce</option>
                        <option value="Class 12th Science">Class 12th Science</option>
                        <option value="Marks of students">Marks of students</option>
                    </datalist>
                    <button className='searchbar' onClick={popsearchbar}></button>
                </div>
            </div>
        </nav>
        <div className="updown-arrow-container" style={{display: Arrowboxdisplay}}>
            <div className="updown-arrow-box">
                <div className="updown-arrow" style={{
                    borderBottom: DownArrow,
                    borderRight: DownArrow,
                    borderTop: UpArrow,
                    borderLeft: UpArrow,
                    marginTop: ArrowMarginTop
                }} onClick={()=>{
                    if(DownArrow !== "2px solid transparent"){
                        setDownArrow("2px solid transparent");
                        setUpArrow("2px solid #545454");
                        setNavLinksHeight("14rem");
                        setArrowMarginTop("10px");
                    }else{
                        setDownArrow("2px solid #545454");
                        setUpArrow("2px solid transparent");
                        setNavLinksHeight("0rem");
                        setArrowMarginTop("-12px");
                    }
                }}></div>
            </div>
        </div>
    </header>
  )
}

export default SiteNavbar