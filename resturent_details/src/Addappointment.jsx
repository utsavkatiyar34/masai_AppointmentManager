import React from 'react'
import './addappointment.css'

export default function Addappointment() {
  return (
    <div className='addform'>
        <input type="text" placeholder='Enter Name'></input>
        <input type="text" placeholder='Enter Age'></input>
        <input type="text" placeholder='Enter Gender'></input>
        <input type="text" placeholder='Enter Appointment Details'></input>
        <input type="time" placeholder='Enter Time'></input>
        <input type="date" placeholder='Enter Date'></input>
        <button >Add Appointment</button>
    </div>
  )
}
