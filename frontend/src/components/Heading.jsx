import React from 'react'

function Heading() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>Ticket Booking System</h1>
      <div className='flex gap-5'>
        <div className='flex items-center gap-2'>
          <div className='h-3 w-3 bg-black'></div>
          <div>Booked Seats</div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='h-3 w-3 bg-[#d3d3d3]'></div>
          <div>Available Seats</div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='h-3 w-3 bg-[#595959]'></div>
          <div>Booking Seats</div>
        </div>
      </div>
    </div>
  )
}

export default Heading;