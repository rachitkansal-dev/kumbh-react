import { useState } from "react";
import LfContext from "./LfContext";


const LfState=(props)=>{

    const itemsInitial=[  {
        "_id": "6704ebdf17aa64d7814d7ee8",
        "landf": "found",
        "type": "Phones & Tablets",
        "description": "I Lost them tomorroeow at 9 am ",
        "location": "Triveni Sangam",
        "date": "2024-10-02T00:00:00.000Z",
        "photo": "1728375775494.png",
        "contact": "9464910100",
        "__v": 0
      },
      {
        "_id": "670b7fca86c0e9024282b88f",
        "landf": "found",
        "type": "Jewelry",
        "description": "4t5erf",
        "location": "Airport",
        "date": "2024-10-01T00:00:00.000Z",
        "photo": "1728806858082.jpg",
        "contact": "refsdv",
        "__v": 0
      },
      {
        "_id": "670b843eacd230b57073a654",
        "landf": "found",
        "type": "Jewelry",
        "description": "5rhtfdb",
        "location": "Railway Station",
        "date": "2024-10-12T00:00:00.000Z",
        "photo": "1728807998576.jpg",
        "contact": "sd ",
        "__v": 0
      },
      {
        "_id": "672133ca6e004e9ba9f9fc63",
        "landf": "lost",
        "type": "Bags",
        "description": "lost",
        "location": "Triveni Sangam",
        "date": "2024-10-02T00:00:00.000Z",
        "photo": "1730229194392.jpg",
        "contact": "1",
        "__v": 0
      }];

      const [items,setItems] = useState(itemsInitial);


    return (
        <LfContext.Provider value={{items,setItems}}>
            {props.children}
        </LfContext.Provider>
    )
}

export default LfState;