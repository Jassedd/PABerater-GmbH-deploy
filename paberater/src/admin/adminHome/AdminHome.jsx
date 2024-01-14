// AdminHome.js
import React from 'react';
import "./AdminHome.css"
import { redirect } from 'react-router-dom';
import { useAuth } from '../../authContext/AuthContext';
import { Link } from 'react-router-dom';
import Jorge from "../../assets/img/jorge-4.png"

function AdminHome() {
  return (
    <section className='Section-adm'>
      <img src={Jorge} alt="" className='JorgeAdm' />
      <div className="admin-dashboard">
      <h2>Bienvenid@</h2>
      <br />
      <Link>  
        <button className='btn-advisory'>Ver Noticias</button>
      </Link>
      <br />
      <Link to="/blogadm">
        <button className='btn-advisory'>Crear Noticia</button>
      </Link>
      <br />
    </div>
  </section>
  );
}

export default AdminHome;
