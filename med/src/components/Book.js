import React from 'react';
import '../components-css/book.css';
import book from '../images/book (2).png';
export default function Book() {
    return (
        <>
        <div className="doc">
        <h2 className="book">Book a session with our experts</h2>
           <div className="flexbook"> 
           <div className="i"><img src={book} alt=""/></div>
           <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Enter Your Mobile Number/Email to book Appointment" />
  <button class="btn  bookon" type="button" id="button-addon2">Book Now</button>
</div>
           </div>
           </div>
        </>
    )
}
