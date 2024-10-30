import React from 'react'

export default function Home() {
  return (
    <>
        <div className="content">
            <div className="rotate">
                Follow us
                <i className="fa-brands fa-instagram space5px"></i>
                <i className="fa-brands fa-twitter space5px"></i>
            </div>
            <div className="guide-section">
                <div className="line-text">
                    <span className="line"></span>
                    <span className="guide-title">A Kumbh Mela Guide</span>
                    <span className="line"></span>
                </div>
                <h1>Be Prepared for the <br/>Biggest Festival Ever !!!</h1>
                <h5>
                    <a href="#fades">Scroll Down </a>
                    <i className="fa-solid fa-arrow-down-long"></i>
                </h5>
            </div>
            <div>
                <p className="notvisible">Scroll Down
                </p>
            </div>
        </div>
    </>
  )
}
