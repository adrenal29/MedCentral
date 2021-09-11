import React from 'react'
import '../components-css/shop.css';
import img from '../images/shop.png';
export default function Shop() {
    return (
        <>
        <h2 className="shop">Buy Medicines with MedCentral Shop</h2>
        <div className="flexshop">
            <div className="contentshop">
                <h3>Go healthy with us @ <span>MedShopi</span></h3>
                <p>
                    <ul>
                        <li>Get instant delivery within 24 hours</li>
                        <li>Hassle Free Process</li>
                        <li>Keep transaction record on secure decentalized network</li>
                        <li>Comapre price and shop for best</li>
                    </ul>
                </p>
                <button className="btn sn">Shop Now</button>
            </div>
            <div className="io"><img src={img} alt="" /></div>
        </div>
        </>
    )
}