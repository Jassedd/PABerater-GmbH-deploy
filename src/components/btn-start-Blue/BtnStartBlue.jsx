import React from 'react'
import Arrow from "../../assets/icons/arrow.svg"
import "./BtnStartBlue.css"
import { Link } from 'react-router-dom'


function BtnStartBlue() {
  return (
    <Link to="/landing">
      <button className='btn-start-blue'>
          ¿COMENZAMOS? <img src={Arrow} alt="btn-arrow"/>
      </button>
    </Link>

  )
}

export default BtnStartBlue