import React from 'react'
import Arrow from "../../assets/icons/arrow.svg"
import "./BtnAdvisory.css"
import { Link } from 'react-router-dom'

function BtnAdvisory() {
  return (
    <Link to="/landing">
    <button className='btn-advisory'>
        Solicitar asesoría <img src={Arrow} alt="btn-arrow" className='arrow-btn' />
    </button>
    </Link>

  )
}

export default BtnAdvisory