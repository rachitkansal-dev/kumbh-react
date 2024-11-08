import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogContext from '../context/BlogContext';
import UserContext from '../context/UserContext';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function UserBlog() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [formData, setFormData] = useState({
        title: '',
        place: '',
        photo: null,
        description: ''
    });
    const { blogs, getBlogs, createBlogs } = useContext(BlogContext);
    const { user } = useContext(UserContext);
    const [isSubmitDisabled, setSubmitDisabled] = useState(true);

    const openForm = () => setIsFormOpen(true);
    const closeForm = () => setIsFormOpen(false);

    const truncateText = (text, length = 750) => {
        return text.length > length ? text.slice(0, length) + '...' : text;
    };

    useEffect(() => {
        getBlogs(); // Fetch the blogs when the component mounts
    }, []);

    const handleFormChange = (e) => {
        const { name, value, files } = e.target || {}; // Destructure `e.target` safely for the cases where e is undefined
        if (files) {
            setFormData((prevData) => ({
                ...prevData,
                [name]: files[0]
            }));
        } else if (name === 'description') {
            // Description handling moved to a separate function
            updateDescription(value);
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const updateDescription = (text) => {
        const wordCount = text.trim().split(/\s+/).length;
        setSubmitDisabled(wordCount < 800);
        setFormData((prevData) => ({
            ...prevData,
            description: text
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isSubmitDisabled) {
            const { title, place, description, photo } = formData;
            const userName = user?.name || "Author Name"; // Replace with actual user name from context

            await createBlogs(title, place, description, photo, userName); // Pass parameters correctly
            setFormData({ title: '', place: '', photo: null, description: '' }); // Clear the form
            closeForm();
        } else {
            alert("Blog Length must be at least 800 words.");
        }
    };

    return (
        <div>
            <div className="user-blog-header">
                <button className="btn-primary lost-btn" onClick={openForm}>
                    Create Blog
                </button>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        name="search"
                        className="input-search"
                        placeholder="Search by Place"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="mg-5 btn-primary lost-btn">
                        Search
                    </button>
                </form>
            </div>

            {isFormOpen && (
                <div className="unique-report-form active">
                    <button className="unique-close-button" onClick={closeForm}>&times;</button>
                    <h2>Create new Blog</h2>
                    <form className="unique-form" onSubmit={handleSubmit}>
                        <input
                            className="unique-input"
                            type="text"
                            name="title"
                            placeholder="Give title in about 20 words"
                            required
                            value={formData.title}
                            onChange={handleFormChange}
                        />
                        <input
                            className="unique-input"
                            type="text"
                            name="place"
                            placeholder="About which Place You are Writing?"
                            required
                            value={formData.place}
                            onChange={handleFormChange}
                        />
                        <input
                            className="unique-input"
                            type="file"
                            name="photo"
                            accept="image/*"
                            required
                            onChange={handleFormChange}
                        />
                        <ReactQuill
                            className="unique-input blog-input-desc"
                            theme="snow"
                            placeholder="Enter your blog here in a minimum of 800 words..."
                            value={formData.description}
                            onChange={updateDescription} // Pass the text to updateDescription directly
                            required
                        />
                        <button
                            className="btn-primary lost-btn new-btn"
                            type="submit"
                            disabled={isSubmitDisabled}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            )}

            <section className="showcase" id="explore-places">
                <h1 className="heading-blog">User's experiences ---</h1>
                <div className="container">
                    {blogs.map((blog, index) => (
                        <div className={index % 2 === 0 ? "row row2" : "row row1"} key={blog._id}>
                            <div className="img-box">
                                <img src={blog.image} alt="pic" />
                            </div>
                            <div className="text-box">
                                <div className="number-background">0{index + 1}</div>
                                <div className="shift">
                                    <div className="line-text line-blog">
                                        <span className="line"></span>
                                        <span className="guide-title">{blog.place}</span>
                                    </div>
                                    <h2 className="lg-heading">{blog.title}</h2>
                                    <div className="author guide-title">
                                        --- By {blog.author || "Unknown"}
                                    </div>
                                    <p className="text-gray blog-body" dangerouslySetInnerHTML={{ __html: truncateText(blog.body) }} />

                                    <div className="read-btn">
                                        <Link to={`/blog/${blog._id}`} className="btn btn-secondary">
                                            Read More
                                        </Link>
                                        <Link to={`/blog/${blog._id}`}>
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
