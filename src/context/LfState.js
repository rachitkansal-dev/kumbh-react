import { useState, useCallback } from "react";
import LfContext from "./LfContext";

const LfState = (props) => {
  const HOST_URL = process.env.REACT_APP_HOST_URL; 
  const [items, setItems] = useState([]);
  const [comments, setComments] = useState([]);

  // Function to add a comment
  const addComment = async (username, commentText) => {
    const url = `${HOST_URL}/lf/addcomment`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, commentText }),
    });

    if (response.ok) {
      const result = await response.json();
      alert(result.message);
    } else {
      console.error('Error sending data:', response.statusText);
    }
  };

  // Function to add a claim to an item
  const addClaim = async (id, description, phone, email) => {
    const url = `${HOST_URL}/lf/claim-item`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, description, phone, email }),
    });

    if (response.ok) {
      const result = await response.json();
      alert("Claim Submitted, we will contact you soon!");
    } else {
      console.error('Error sending data:', response.statusText);
    }
  };

  // Function to get comments
  const getComments = async () => {
    const url = `${HOST_URL}/lf/lfcomments`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const json = await response.json();
      setComments(json);
    } else {
      console.error('Error fetching data:', response.statusText);
    }
  };

  // Function to get all items
  const getItems = useCallback(async () => {
    try {
      const url = `${HOST_URL}/lf/items`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch items');
      }

      const json = await response.json();
      const itemsWithFullPhotoUrl = json.map(item => ({
        ...item,
        photo: item.photo ? `${HOST_URL}${item.photo}` : "#",
      }));
      setItems(itemsWithFullPhotoUrl);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  }, [HOST_URL]);

  // Function to get items by type
  const getItemsByType = useCallback(async (type) => {
    try {
      const url = `${HOST_URL}/lf/type/${type}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch items');
      }

      const json = await response.json();
      const itemsWithFullPhotoUrl = json.map(item => ({
        ...item,
        photo: item.photo ? `${HOST_URL}${item.photo}` : "#",
      }));
      setItems(itemsWithFullPhotoUrl);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  }, [HOST_URL]);

  // Function to get items by location
  const getItemsByLocation = useCallback(async (location) => {
    try {
      const url = `${HOST_URL}/lf/location/${location}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch items');
      }

      const json = await response.json();
      const itemsWithFullPhotoUrl = json.map(item => ({
        ...item,
        photo: item.photo ? `${HOST_URL}${item.photo}` : "#",
      }));
      setItems(itemsWithFullPhotoUrl);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  }, [HOST_URL]);

  // Function to search items based on filters
  const getItemsBySearch = async (filters) => {
    try {
      const queryParams = new URLSearchParams(filters).toString();
      const response = await fetch(`${HOST_URL}/lf/search?${queryParams}`);

      if (!response.ok) {
        throw new Error(`Error fetching filtered items: ${response.statusText}`);
      }

      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching filtered items:', error);
    }
  };

  // Function to get an item by its ID
  const getItemById = async (id) => {
    try {
      const response = await fetch(`${HOST_URL}/lf/items/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching item by ID:', error);
    }
  };

  // Function to add new item
  const addItems = async (landf, type, description, location, date, photo, contact, name, email) => {
    const url = `${HOST_URL}/lf/items`;

    const formData = new FormData();
    formData.append('landf', landf);
    formData.append('type', type);
    formData.append('description', description);
    formData.append('location', location);
    formData.append('date', date);
    formData.append('photo', photo); // Append the photo file
    formData.append('contact', contact);
    formData.append('name', name);
    formData.append('email', email);

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData, // Use FormData as the body
      });

      if (!response.ok) {
        throw new Error('Failed to add item');
      }

      const json = await response.json();
      setItems(prevItems => [...prevItems, json]);  
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <LfContext.Provider value={{
      items,
      addClaim,
      getItems,
      addItems,
      getItemsByType,
      getItemsByLocation,
      getItemsBySearch,
      addComment,
      comments,
      getComments,
      getItemById,
    }}>
      {props.children}
    </LfContext.Provider>
  );
};

export default LfState;
