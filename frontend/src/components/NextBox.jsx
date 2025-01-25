import React from 'react';
import { Link, useNavigate } from 'react-router';

function NextBox({ selectSeatNumbers, setSeatBookedResponse }) {
  const navigate = useNavigate();
  
  return (
    <div className='flex justify-end pr-16'>
      <div className='text-2xl underline'>
        <Link to="/book-seats" onClick={() => {

          fetch("/api/book-seats", {
            method: "POST",
            body: JSON.stringify({ "bookedSeats": selectSeatNumbers }),
            headers: {
              'Content-Type': 'application/json',   
            }
          })          
          .then((response) => {
            return response.json();
          }) 
          .then((data) => {
            setSeatBookedResponse(data);
          })
          .catch((error) => console.error(`Error: ${error}`));

        }}>Next</Link>
      </div>
    </div>
  )
}

export default NextBox;