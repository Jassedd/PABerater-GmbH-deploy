import React from 'react'
import Arrow from "../../assets/icons/arrow.svg"
import "./BtnStart.css"
import { Link } from 'react-router-dom'


function BtnStart() {
  return (
    <Link to="/contacto">
      <button className='btn-start'>
          ¿COMENZAMOS? <img src={Arrow} alt="btn-arrow"/>
      </button>
    </Link>

  )
}

export default BtnStart