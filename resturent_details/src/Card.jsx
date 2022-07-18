import React from 'react'
import './card.css'
export const Card=({id,age,gender,name,details,time,date })=> {


        return (
          <div className='card-div'>
          <div>Name: {name}</div>
          <div>{age}</div>
          <div>{gender}</div>
          <div>{details}</div>
          <div>{date}</div>
          <div>{time}</div>
          <div>ID: {id}</div>
          </div>
        )
      }
