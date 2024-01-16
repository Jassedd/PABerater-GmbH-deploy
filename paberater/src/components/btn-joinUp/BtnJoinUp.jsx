import React from 'react'
import Arrow from "../../assets/icons/arrow.svg"
import "./BtnJoinUp.css"
import { Link } from 'react-router-dom'


function BtnJoinUp() {
  return (
    <Link to="/contacto">
      <button className='btn-joinUp'>
          ¿COMENZAMOS? <img className='btn-arrow3' src={Arrow} alt="btn-arrow"/>
      </button>
    </Link>

  )
}

export default BtnJoinUp