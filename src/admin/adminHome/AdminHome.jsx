import React from 'react';
import "./AdminHome.css"
import { useAuth } from '../../authContext/AuthContext';
import { Link } from 'react-router-dom';
import Jorge from "../../assets/img/jorge-4.png"

function AdminHome() {

  const { logout } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='Section-adm'>
      <img src={Jorge} alt="" className='JorgeAdm' />
      <div className="admin-dashboard">
      <h2>Bienvenid@</h2>
      <br />
      <Link to="/admnews">  
        <button className='btn-advisory'>Ver Noticias</button>
      </Link>
      <br />
      <Link to="/blogadm">
        <button className='btn-advisory'>Crear Noticia</button>
      </Link>
      <br />
      <Link to="/users">  
        <button className='btn-advisory'>Ver usuarios</button>
      </Link>
      <br />
      <button onClick={handleLogout} className='btn-advisory'>Cerrar sesión</button>
    </div>
  </section>
  );
}

export default AdminHome;
