import React from 'react';
import { Helmet } from 'react-helmet-async';
import aboutImg from '../images/social-integration-working-team_23-2149341140.avif';

const AboutUs = () => {
    return (
        <div className="about-us-body">
            <Helmet>
                <title>Prayatak - About Us</title>
            </Helmet>
            <div className='about-us-main'>
                <section className="about-us-about-us">
                    <div className="about-us-content">
                        <h2>How It Started</h2>
                        <h1>Our Dream is Global Learning Transformation</h1>
                        <p>
                            Kawruh was founded by Robert Anderson, a passionate lifelong learner, and Maria Sanchez, a visionary educator. Their shared dream was to create a digital haven of knowledge accessible to all. United by their belief in the transformational power of education, they embarked on a journey to build 'Kawruh.' With relentless dedication, they gathered a team of experts and launched this innovative platform, creating a global community of eager learners, all connected by the desire to explore, learn, and grow.
                        </p>
                    </div>
                    <div className="about-us-image">
                        <img src={aboutImg} alt="Founders working together" />
                    </div>
                </section>

                <section className="about-us-stats">
                    <div className="about-us-stat">
                        <h3>3.5</h3>
                        <p>Years Experience</p>
                    </div>
                    <div className="about-us-stat">
                        <h3>23</h3>
                        <p>Project Challenge</p>
                    </div>
                    <div className="about-us-stat">
                        <h3>830+</h3>
                        <p>Positive Reviews</p>
                    </div>
                    <div className="about-us-stat">
                        <h3>100K</h3>
                        <p>Trusted Students</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
