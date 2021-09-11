import React from 'react'
import '../components-css/member.css';
import sub from '../images/sub.png'
export default function Member() {
    return (
        <>
        <div className="subscribe">
          <h2 className="member">Explore MedCentral's Pro Membership </h2>  
          <div className="flexmember">
            <div className="sub"><img src={sub} alt="" /></div>
              <div className="contentmember">
                  <p>
                      <ul>
                          <li><i>Avail free Delivery using membership card</i></li>
                          <li><i>Access to exclusive offers before MedShopi</i>></li>
                          <li><i>24 Hours Delivery option</i></li>
                          <li><i> Exclusive Health Reminder </i></li>
                          <li><i>Monthly Health Report and Support</i>  </li>
                      </ul>
                  </p>
              </div>
          </div>
          <div className="steps">
              <div className="one"><h2>Create account</h2>
              <p>Make your  Medcentral account in few easy steps </p>
              <button className="btn "> Sign Up</button></div>
              <div className="two">
              <h2>Start Shopping</h2>
              <p>MedCentral brings medical help at your doorstep</p>
              <button className="btn">Shop Now</button></div>
              <div className="three"><h2>Track your expense </h2>
              <p>After shopping don't forget to track your expense </p>
              <button className="btn">LogIn Now</button></div>
              <div className="four"><h2>Maintain your record online leisure</h2>
              <p>Now no need to carry your record as we are here</p></div>
          </div>
          </div>
          </>
    )
}
