import React from 'react'
import './card.css'
export const Card=({id,age,gender,name,details,time,date })=> {


        return (
          <div className='card-div'>
          <div>Name: {name}</div>
          <div>Age: {age}</div>
          <div>{gender}</div>
          <div>{details}</div>
          <div>Date: {date}</div>
          <div>Time: {time}</div>
          <div>ID: {id}</div>
          </div>
        )
      }
