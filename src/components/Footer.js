import React from 'react'

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
                        <li><a href="#">About TPW</a></li>
                        <li><a href="#">Writers</a></li>
                        <li><a href="#">Write your experiences</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="right-list">
                    <h3 className="text-yellow">
                        More on TPW
                    </h3>
                    <ul>
                        <li><a href="#">The Team</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Press</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
