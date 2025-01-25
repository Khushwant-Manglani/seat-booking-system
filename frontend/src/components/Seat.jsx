import React, { useState } from 'react';
import flightSeatSvg from "../svg/flight-seat.svg";

function Seat({ seatStatus, seatNumber, setSelectSeatNumbers }) {
  const [click, setClick] = useState(false);

  return (
    <div className='p-5 border'>
      <img 
        src={flightSeatSvg} 
        alt="Flight seat svg" 
        className={`cursor-pointer w-16 ${click ? "booking__seat" : (seatStatus ? "booked__seat pointer-events-none" : "available__seat")}`} 
        onClick={() => {
          if(!seatStatus) {
            setClick((prevState) => {
              if(!prevState) {
                setSelectSeatNumbers((prevSelectSeatNumbers) => {
                  return [...prevSelectSeatNumbers, seatNumber];
                })    
              } else {
                setSelectSeatNumbers((prevSelectSeatNumbers) => {
                  const updatedSelectSeatNumbers = prevSelectSeatNumbers.filter((element) => element !== seatNumber);             
                  return updatedSelectSeatNumbers;  
                })
              }

              return !prevState;
            });
          }
        }} 
      />
      <div className='text-center'>A{seatNumber}</div>
    </div>
  )
}

export default Seat;