import { useState } from "react";
import LfContext from "./LfContext";

const LfState = (props) => {
  const itemsInitial = [];
  const [items, setItems] = useState(itemsInitial);

  const getItems = async () => {
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
      setItems(json);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const addItems = async (landf,type,description,location,date,photo,contact) => {
    const url = "http://localhost:8080/lf/items"
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ landf,type,description,location,date,photo,contact })
    });

    const json = await response.json();  

    setItems(items.concat(json));  
};

  return (
    <LfContext.Provider value={{ items, getItems,addItems }}>
      {props.children}
    </LfContext.Provider>
  );
};

export default LfState;
