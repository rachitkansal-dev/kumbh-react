import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blogData from '../bolgData/blogData';

function UserBlog() {
    // State to control form visibility
    const [isFormOpen, setIsFormOpen] = useState(false);
    const openForm = () => setIsFormOpen(true);
    const closeForm = () => setIsFormOpen(false);

    return (
        <div>
            <div className="user-blog-header">
                <button className="btn-primary lost-btn" onClick={openForm}>
                    Create Blog
                </button>
                <form action="">
                    <input type="text" name="search" className="input-search" placeholder="Search by Place" />
                    <button className="mg-5 btn-primary lost-btn">
                        Search
                    </button>
                </form>
            </div>

            {/* Conditional rendering of the form based on isFormOpen state */}
            {isFormOpen && (
                <div className="unique-report-form active">
                    <button className="unique-close-button" onClick={closeForm}>&times;</button>
                    <h2>Create new Blog</h2>
                    <form className="unique-form">
                        <input className="unique-input" type="text" name="title" placeholder="Give title in about 20 words" required />
                        <input className="unique-input" type="file" name="photo" accept="image/*" required />
                        <textarea className="unique-input blog-input-desc" name="description" placeholder="Your Blog here" required></textarea>

                        <button className="btn-primary lost-btn new-btn" type="submit">Submit</button>
                    </form>
                </div>
            )}

            <section className="showcase" id="explore-places">
                <h1 className="heading-blog">User's experiences ---</h1>
                <div className="container">
                    {blogData.map((blog, index) => (
                        <div className={index % 2 === 0 ? "row row2" : "row row1"} key={blog.id}>
                            <div className="img-box">
                                <img src={blog.image} alt="pic" />
                            </div>
                            <div className="text-box">
                                <div className="number-background">0{blog.id}</div>
                                <div className="shift">
                                    <div className="line-text line-blog">
                                        <span className="line"></span>
                                        <span className="guide-title">{blog.place}</span>
                                    </div>

                                    <h2 className="lg-heading">{blog.heading}</h2>
                                    <div className="author guide-title">
                                        --- By Author Name
                                    </div>
                                    <p className="text-gray">
                                        {blog.description}
                                    </p>
                                    <div className="read-btn">
                                        <Link to='/' className="btn btn-secondary">
                                            Read More 
                                        </Link>
                                        <Link to='/'>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default UserBlog;
