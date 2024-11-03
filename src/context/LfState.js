import { useState, useCallback} from "react";
import LfContext from "./LfContext";

const LfState = (props) => {
  const itemsInitial = [];
  const [items, setItems] = useState(itemsInitial);

  const getItems = useCallback(async () => {
    try {
      const url = "http://localhost:8080/lf/items";
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
      console.log(json);
      const itemsWithFullPhotoUrl = json.map(item => ({
        ...item,
        photo: `http://localhost:8080${item.photo}`
      }));
  
      setItems(itemsWithFullPhotoUrl);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  }, []);
  const getItemsByType = useCallback(async (type) => {
    try {
        const url = `http://localhost:8080/lf/type/${type}`;
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
        console.log(json);
        const itemsWithFullPhotoUrl = json.map(item => ({
            ...item,
            photo: item.photo ? `http://localhost:8080${item.photo}` : "#", // Handle potential undefined photo
        }));

        setItems(itemsWithFullPhotoUrl);
    } catch (error) {
        console.error("Error fetching items:", error);
    }
}, [setItems]);
  const getItemsByLocation = useCallback(async (location) => {
    try {
        const url = `http://localhost:8080/lf/location/${location}`;
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
        console.log(json);
        const itemsWithFullPhotoUrl = json.map(item => ({
            ...item,
            photo: item.photo ? `http://localhost:8080${item.photo}` : "#", 
        }));

        setItems(itemsWithFullPhotoUrl);
    } catch (error) {
        console.error("Error fetching items:", error);
    }
}, [setItems]);
  

  const addItems = async (landf, type, description, location, date, photo, contact) => {
    const url = "http://localhost:8080/lf/items";
    
    // Create a FormData object
    const formData = new FormData();
    formData.append('landf', landf);
    formData.append('type', type);
    formData.append('description', description);
    formData.append('location', location);
    formData.append('date', date);
    formData.append('photo', photo); // Append the photo file
    formData.append('contact', contact);

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData // Use FormData as the body
        });

        if (!response.ok) {
            throw new Error('Failed to add item');
        }
        alert("Report Submitted SuccessFuly");
        const json = await response.json();
        setItems(items.concat(json));  
    } catch (error) {
        console.error("Error adding item:", error);
    }
};

  return (
    <LfContext.Provider value={{ items, getItems,addItems,getItemsByType,getItemsByLocation }}>
      {props.children}
    </LfContext.Provider>
  );
};

export default LfState;
