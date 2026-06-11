import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Sidebar() {
  const { user } = useAuth();

  const items =
    user.role === 'owner'
      ? [
          { to: '/owner/dashboard', label: 'Overview' },
          { to: '/owner/movies', label: 'Add/Edit Movie' },
          { to: '/owner/shows', label: 'Manage Shows' },
          { to: '/owner/bookings', label: 'View Bookings' },
          { to: '/owner/screens', label: 'Screen Management' },
          { to: '/owner/seat-layout', label: 'Seat Layout' },
        ]
      : [
          { to: '/admin/dashboard', label: 'Overview' },
          { to: '/admin/users', label: 'Manage Users' },
          { to: '/admin/theatres', label: 'Manage Theatres' },
          { to: '/admin/requests', label: 'Approve Requests' },
          { to: '/admin/reports', label: 'Reports' },
        ];

  return (
    <aside className="sidebar">
      <h3>{user.role === 'owner' ? 'Theatre Owner' : 'Admin Panel'}</h3>
      {items.map((item) => (
        <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'sidebar-link active' : 'sidebar-link')}>
          {item.label}
        </NavLink>
      ))}
      <Link to="/" className="sidebar-link">
        Back to app
      </Link>
    </aside>
  );
}
