import { useState, useCallback } from "react";
import BlogContext from "./BlogContext";

const BlogState = (props) => {
    const blogsInitial = [];
    const [blogs, setBlogs] = useState(blogsInitial);
    const [userBlogs, setUserBlogs] = useState([]);

    // Access the HOST_URL from the .env file
    const HOST_URL = process.env.REACT_APP_HOST_URL; 

    // Function to get all blogs
    const getBlogs = useCallback(async () => {
        const url = `${HOST_URL}/blog`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const json = await response.json();
            setBlogs(json);
        } else {
            console.error('Error fetching data:', response.statusText);
        }
    }, [HOST_URL]);

    // Function to get blogs of a specific user
    const getBlogsofUser = useCallback(async (id) => {
        const url = `${HOST_URL}/${id}/blogs`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const json = await response.json();
            setUserBlogs(json);
        } else {
            console.error('Error fetching data:', response.statusText);
        }
    }, [HOST_URL]);

    // Function to handle contact form submission
    const contactform = useCallback(async (name, email, phoneNumber, message) => {
        const url = `${HOST_URL}/submit-contactus`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, phoneNumber, message }),
        });

        if (response.ok) {
            const result = await response.json();
            alert(result.message);
        } else {
            console.error('Error sending data:', response.statusText);
        }
    }, [HOST_URL]);

    // Function to create a new blog
    const createBlogs = useCallback(async (title, place, body, image, author) => {
        const url = `${HOST_URL}/blog/create`; // Ensure this matches your backend
        const formData = new FormData();
        formData.append('title', title);
        formData.append('place', place);
        formData.append('body', body);
        formData.append('image', image);
        formData.append('author', author); // Correctly pass the author

        try {
            const response = await fetch(url, {
                method: 'POST',
                credentials: 'include',
                body: formData
            });

            if (!response.ok) {
                const errorMessage = await response.text(); // Get detailed error response
                throw new Error(`Failed to add blog: ${errorMessage}`);
            }

            const json = await response.json();
            setBlogs(prevBlogs => [...prevBlogs, json.post]); 
            alert("Blog submitted successfully!");
        } catch (error) {
            console.error("Error adding blog:", error);
            alert("An error occurred while submitting your blog. Please try again.");
        }
    }, [HOST_URL]);

    // Function to update a blog
    const updateBlog = useCallback(async (bid, title, place, body, image) => {
        const url = `${HOST_URL}/blog/edit/${bid}`;

        const formData = new FormData();
        formData.append('title', title);
        formData.append('place', place);
        formData.append('body', body);
        if (image) {
            formData.append('image', image); // Append the image only if it exists
        }

        try {
            const response = await fetch(url, {
                method: 'POST',
                credentials: 'include',
                body: formData
            });

            if (!response.ok) {
                const errorMessage = await response.json(); // Parse JSON error message
                throw new Error(errorMessage.error || 'Failed to update blog.');
            }

            const result = await response.json();
        } catch (error) {
            console.error("Error updating blog:", error);
            alert(`An error occurred: ${error.message}`);
        }
    }, [HOST_URL]);

    // Function to get a blog by ID
    const getBlogById = useCallback(async (id) => {
        const response = await fetch(`${HOST_URL}/blog/${id}`);
        const data = await response.json();
        return data;
    }, [HOST_URL]);

    return (
        <BlogContext.Provider value={{ blogs, userBlogs, getBlogs, createBlogs, getBlogById, contactform, getBlogsofUser, updateBlog }}>
            {props.children}
        </BlogContext.Provider>
    );
};

export default BlogState;
