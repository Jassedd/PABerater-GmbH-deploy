import React from 'react'
import Arrow from "../../assets/icons/arrow.svg"
import "./BtnStart.css"


function BtnStart() {
  return (
    <button className='btn-start'>
        ¿COMENZAMOS? <img src={Arrow} alt="btn-arrow" className='arrow-btn' />
    </button>
  )
}

export default BtnStart