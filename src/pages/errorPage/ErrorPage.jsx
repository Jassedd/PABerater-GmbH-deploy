import React from 'react'
import "./ErrorPage.css"
import Jorge from "../../assets/img/jorge-4.png"
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <>
    <div className='Errorpage'>
      <img src={Jorge} alt="" className='imgError'/>
      <div className='Errormsg'>
        <h1>404 Not Found</h1>
        <p>La página que estás buscando no existe.</p>
        <Link to="/">
          <button className='btn-added'>Volver al Inicio</button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default ErrorPage