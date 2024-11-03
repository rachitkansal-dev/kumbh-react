import React from 'react'
import { Link } from 'react-router-dom'; 

export default function Footer() {
  return (
    <div>
        <section id="#footer">
        <div  className="container-bot sec-foot" >
            <div className="left-bot"> 
                <div className="className-up">
                    <h2 className="text-white heading-bot">
                        TPW
                    </h2>
                    <p className="text-white text-smaller">
                        Get out there , discover your best<br/>Festival , have amazing experiences!
                    </p>
                </div>
                <div className="className-down">
                    <p className="text-grey">Copyright 2024 TPW Inc.</p>
                </div>
            </div>
            <div className="right-bot">
                <div className="left-list">
                    <h3 className="text-yellow">
                        More on the Blog
                    </h3>
                    <ul>
                        <li><Link to="/">About TPW</Link></li>
                        <li><Link to="/">Writers</Link></li>
                        <li><Link to="/">Write your experiences</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="right-list">
                    <h3 className="text-yellow">
                        More on TPW
                    </h3>
                    <ul>
                        <li><Link to="/">The Team</Link></li>
                        <li><Link to="/">Jobs</Link></li>
                        <li><Link to="/">Press</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
