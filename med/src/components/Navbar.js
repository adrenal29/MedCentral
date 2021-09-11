import React from 'react'
import {Link } from "react-router-dom";
import '../components-css/navbar.css';



export default function Navbar(props) {
    
    return (
        
        <>
        <div className="nav">
            
                <div className="logo"><i>MedCentral</i></div>
                <div className="menu">
               
               <div> <Link to="/" className="opt">Home</Link></div>
                 <div><Link to="/track" className="opt">Track</Link></div>
     <div> <Link to="/shop" className="opt">Shop</Link></div>
            <div>   <Link to="/check" className="opt">Check Out</Link></div>
                
                
                </div>
                <div className="login"><button className="btn log">LogIn</button>
                <button className="btn signup">Sign Up </button>
                </div>
           
        </div>

        </>
    )
}
