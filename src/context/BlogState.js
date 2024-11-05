import { useState, useCallback } from "react";
import BlogContext from "./BlogContext";

const BlogState = (props) => {
    const blogsInitial = [];
    const [blogs, setBlogs] = useState(blogsInitial);
    const getBlogs = async () => {
        const url = "http://localhost:8080/";
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            const json = await response.json();
            console.log(json);
            setComments(json);
        } else {
            console.error('Error fetching data:', response.statusText);
        }
    };
    return (
        <BlogContext.Provider value={{}}>
            {props.children}
        </BlogContext.Provider>
    );
};

export default BlogState;
