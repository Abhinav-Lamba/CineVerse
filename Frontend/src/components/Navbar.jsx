import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const linksByRole = {
  guest: [
    { to: '/', label: 'Home' },
    { to: '/movies', label: 'Movies' },
    { to: '/login', label: 'Login' },
    { to: '/signup', label: 'Signup' },
  ],
  customer: [
    { to: '/user/dashboard', label: 'Dashboard' },
    { to: '/movies', label: 'Movies' },
    { to: '/profile', label: 'Profile' },
    { to: '/bookings/history', label: 'History' },
  ],
  owner: [
    { to: '/owner/dashboard', label: 'Owner Dashboard' },
    { to: '/owner/movies', label: 'Manage Movies' },
    { to: '/owner/shows', label: 'Manage Shows' },
  ],
  admin: [
    { to: '/admin/dashboard', label: 'Admin Dashboard' },
    { to: '/admin/users', label: 'Users' },
    { to: '/admin/theatres', label: 'Theatres' },
  ],
};

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <Link to="/" className="brand">Cineverse</Link>
      <div className="nav-links">
        {(linksByRole[user.role] || linksByRole.guest).map((link) => (
          <NavLink key={link.to} to={link.to} className={({ isActive }) => (isActive ? 'active' : '')}>
            {link.label}
          </NavLink>
        ))}
      </div>
      {user.role !== 'guest' ? (
        <button className="btn btn-secondary" onClick={logout}>
          Logout
        </button>
      ) : null}
    </nav>
  );
}
