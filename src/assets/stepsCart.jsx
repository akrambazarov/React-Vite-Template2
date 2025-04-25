import React from 'react'
import { Button } from './button'
const StepsCart = ({text,desc}) => {
  return (
    <div className="step-card">
    <h3>{text}</h3>
    <p className="section-text">{desc}</p>
    <Button/>
</div>
  )
}

export default StepsCart