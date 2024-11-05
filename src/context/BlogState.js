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
            console.log(json);
            setBlogs(json);
        } else {
            console.error('Error fetching data:', response.statusText);
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
            setBlogs(prevBlogs => [...prevBlogs, json.post]); // Use json.post to get the created blog
            alert("Blog submitted successfully!");
        } catch (error) {
            console.error("Error adding blog:", error);
            alert("An error occurred while submitting your blog. Please try again.");
        }
    };
    
    return (
        <BlogContext.Provider value={{blogs,getBlogs,createBlogs}}>
            {props.children}
        </BlogContext.Provider>
    );
};

export default BlogState;
