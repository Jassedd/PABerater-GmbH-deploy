// AdminHome.js
import React from 'react';
import { redirect } from 'react-router-dom';
import { useAuth } from '../../authContext/AuthContext';

function AdminHome() {
  const { isAdmin, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  if (!isAdmin) {
    return <redirect to="/" />;
  }

  return (
    <div className="admin-dashboard">
    <h2>Admin Panel</h2>
    <nav>
      <ul>
        <li><Link to="/admin/posts">Ver Noticias</Link></li>
        <li><Link to="/admin/posts/add">Agregar Noticia</Link></li>
      </ul>
    </nav>
    <Switch>
      <Route path="/admin/posts" exact component={PostList} />
      <Route path="/admin/posts/add" component={AddPost} />
    </Switch>
  </div>
  );
}

export default AdminHome;
