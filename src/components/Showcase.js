import React from 'react';

import TriveniGhat from '../images/Triveni-Ghat-Prayag.jpg';
import VictoriaMemorial from '../images/Victoria-Memorial-Company-Garden-Allahabad.webp';
import KhusroBagh from '../images/KB-11.jpg';

export default function Showcase() {
  return (
    <>
      <section className="showcase" id="explore-places">
        <div className="container">
          <div className="row row1">
            <div className="img-box">
              <img src={TriveniGhat} alt="Triveni Ghat, Prayag" />
            </div>
            <div className="text-box">
              <div className="number-background">01</div>
              <div className="shift">
                <div className="line-text line-blog">
                  <span className="line"></span>
                  <span className="guide-title">Let's get Started</span>
                </div>
                <h2 className="lg-heading">Have you ever seen a confluence before? Explore the best one.</h2>
                <p className="text-gray">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit excepturi sint nihil, quae
                  provident nam illum iste repellendus quam atque, labore nobis totam eum animi dicta doloribus a ad
                  necessitatibus aliquam saepe quibusdam eos eaque! Quasi laboriosam cumque ipsa veniam quae!
                  Adipisci dignissimos voluptatum delectus consectetur esse officiis odit molestiae maxime mollitia. A
                  omnis minus non cum aperiam recusandae nobis aliquam! Odit doloremque porro vel repellendus
                  laboriosam ipsa corporis temporibus!
                </p>
                <div className="read-btn">
                  <a href="#" className="btn btn-secondary">Read More</a>
                  <a href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row row2">
            <div className="img-box">
              <img src={VictoriaMemorial} alt="Victoria Memorial" />
            </div>
            <div className="text-box">
              <div className="number-background">02</div>
              <div className="shift">
                <div className="line-text line-blog">
                  <span className="line"></span>
                  <span className="guide-title">Company Museum</span>
                </div>
                <h2 className="lg-heading">Grand national museum with archaeology, natural history & arts displays in 16 galleries.</h2>
                <p className="text-gray">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit excepturi sint nihil, quae
                  provident nam illum iste repellendus quam atque, labore nobis totam eum animi dicta doloribus a ad
                  necessitatibus aliquam saepe quibusdam eos eaque! Quasi laboriosam cumque ipsa veniam quae!
                  Adipisci dignissimos voluptatum delectus consectetur esse officiis odit molestiae maxime mollitia. A
                  omnis minus non cum aperiam recusandae nobis aliquam! Odit doloremque porro vel repellendus
                  laboriosam ipsa corporis temporibus!
                </p>
                <div className="read-btn">
                  <a href="#" className="btn btn-secondary">Read More</a>
                  <a href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row row1">
            <div className="img-box">
              <img src={KhusroBagh} alt="Khusro Bagh" />
            </div>
            <div className="text-box">
              <div className="number-background">03</div>
              <div className="shift">
                <div className="line-text line-blog">
                  <span className="line"></span>
                  <span className="guide-title">Khusro Bagh</span>
                </div>
                <h2 className="lg-heading">Explore the resting place of Khusro Mirza, emperor Jahangir's son.</h2>
                <p className="text-gray">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit excepturi sint nihil, quae
                  provident nam illum iste repellendus quam atque, labore nobis totam eum animi dicta doloribus a ad
                  necessitatibus aliquam saepe quibusdam eos eaque! Quasi laboriosam cumque ipsa veniam quae!
                  Adipisci dignissimos voluptatum delectus consectetur esse officiis odit molestiae maxime mollitia. A
                  omnis minus non cum aperiam recusandae nobis aliquam! Odit doloremque porro vel repellendus
                  laboriosam ipsa corporis temporibus!
                </p>
                <div className="read-btn">
                  <a href="#" className="btn btn-secondary">Read More</a>
                  <a href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
