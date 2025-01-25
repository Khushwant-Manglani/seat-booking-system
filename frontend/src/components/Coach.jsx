import React, { useState } from 'react'
import Seat from './Seat';

function Coach({ seats, setSelectSeatNumbers }) {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-wrap">
        {
          seats.map((seatStatus, seatNumber) => 
            <Seat 
              key={seatNumber} 
              seatStatus={seatStatus} 
              seatNumber={seatNumber} 
              setSelectSeatNumbers={setSelectSeatNumbers}
            />)
        }
      </div>
    </div>
  )
}

export default Coach;