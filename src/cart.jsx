import React from 'react'
<<<<<<< HEAD
import { Button } from './assets/button'
export const Cart = ({img,text,desc}) => {
  return (
    <div className="room-card">
    <img src={img} alt="Single Room"/>
    <div className="room-content">
        <h3>{text}</h3>
        <p className="section-text">{desc}</p>
        <Button/>
    </div>
</div>
=======

export const Cart = ({text}) => {
  return (
    <div>{text}</div>
>>>>>>> c16bb234c2e577ffb96e1c70429f040fdb79b817
  )
}
