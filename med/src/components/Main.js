import React from 'react'
import '../components-css/main.css';
import pic from '../images/pic.png';
export default function Main() {
    return (
        <>
        <div className="flex">
         <div className="content">
             <h2>Connect to world ,<br/>Enrich your health</h2>
             <p>Pay your medical bills.Store your health record on our Decentralized network.Single Destination for all your health management</p>
             <button className="btn sign">Sign Up</button>        
         </div>
         <div className="pic"><img src={pic} alt="no" /></div>
         </div>
        </>
    )
}
