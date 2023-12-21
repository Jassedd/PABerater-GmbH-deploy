import React from 'react'
import Arrow from "../../assets/icons/arrow.svg"
import "./BtnAdvisory.css"

function BtnAdvisory() {
  return (
    <button className='btn-advisory'>
        Quiero una asesoría <img src={Arrow} alt="btn-arrow" className='arrow-btn' />
    </button>
  )
}

export default BtnAdvisory