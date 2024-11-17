import { useState, useCallback } from "react";
import BlogContext from "./BlogContext";

const BlogState = (props) => {
    const blogsInitial = [];
    const [blogs, setBlogs] = useState(blogsInitial);
    const getBlogs = async () => {
        const url = "http://localhost:8080/blog";
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
    };
    const UserblogsInitial = [];
    const [userBlogs, setUserBlogs] = useState(UserblogsInitial);
    const getBlogsofUser = async (id) => {
        const url = `http://localhost:8080/profile/${id}/blogs`;
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
    };

    const contactform = async (name,email,phoneNumber,message) => {
        const url = "http://localhost:8080/submit-contactus";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name,email,phoneNumber,message}), 
        });
    
        if (response.ok) {
            const result = await response.json();
            alert(result.message);
        } else {
            console.error('Error sending data:', response.statusText);
        }
    };


    const createBlogs = async (title, place, body, image, author) => {
        const url = "http://localhost:8080/blog/create"; // Make sure this matches your backend
    
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
    };
    const updateBlog = async (bid, title, place, body, image) => {
        const url = `http://localhost:8080/blog/edit/${bid}`; 
    
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
                credentials: 'include', // Ensure session credentials are sent
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
    };
    

    const getBlogById = async (id) => {
        const response = await fetch(`http://localhost:8080/blog/${id}`);
        const data = await response.json();
        return data;
      };
    
    return (
        <BlogContext.Provider value={{blogs,userBlogs,getBlogs,createBlogs,getBlogById,contactform,getBlogsofUser,updateBlog}}>
            {props.children}
        </BlogContext.Provider>
    );
};

export default BlogState;
