import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import { mockUsers } from '../../data/mockData';

export default function ManageUsers() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <div className="card">
          <h2>Manage Users</h2>
          {mockUsers.map((user) => (
            <div className="history-item" key={user.email}>
              <strong>{user.name}</strong>
              <span>{user.email}</span>
              <span>{user.role}</span>
            </div>
          ))}
          <Link className="btn" to="/admin/dashboard">Back</Link>
        </div>
      </main>
    </div>
  );
}
