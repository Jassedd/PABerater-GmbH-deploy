import React from 'react'
import Arrow from "../../assets/icons/arrow.svg"
import "./BtnBigAdvisory.css"
import { Link } from 'react-router-dom'

function BtnBigAdvisory() {
  return (
    <Link to="/contacto">
    <button className='btn-advisory'>
        Solicitar asesoría <img src={Arrow} alt="btn-arrow" className='arrow-btn2' />
    </button>
    </Link>

  )
}

export default BtnBigAdvisory