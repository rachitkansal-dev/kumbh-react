import React,{useContext,useEffect}from 'react';
import { Link,useLocation } from 'react-router-dom'; // Import Link from react-router-dom
import LfContext from '../context/LfContext';

export default function Navbar(props) {
  let location = useLocation();
  useEffect(()=>{
  },[location]);
  const a = useContext(LfContext)
  return (
    <nav className="navbar" id="navbar">
      <ul>
        <div className="logo">
          <Link to="/">TPW</Link>
        </div>
        <div className="nav-items">
          <li className={`${location.pathname==='/'?"activeg":""}`}><Link to="/">Home</Link></li>
          <li className={`${location.pathname==='/about'?"activeg":""}`}><Link to="/about">About</Link></li> 
          <li className={`${location.pathname==='/lost-found'?"activeg":""}`}><Link to="/lost-found">Lost And Found</Link></li>
          <li className={`${location.pathname==='/contact'?"activeg":""}`}><Link to="/contact">Contact</Link></li> 
        </div>
        <div className="sign-up">
          <i className="fa-solid fa-user"></i>
          <Link to="/signup">{a.name}</Link> 
        </div>
      </ul>
    </nav>
  );
}
