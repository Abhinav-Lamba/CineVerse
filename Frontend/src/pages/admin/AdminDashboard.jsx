import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import { mockReports } from '../../data/mockData';

export default function AdminDashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <div className="card">
          <h2>Admin Dashboard</h2>
          <p>Monitor the application, users, theatres, and system health.</p>
          <div className="grid compact-grid">
            {mockReports.map((report) => (
              <div className="card" key={report.label}>
                <h3>{report.label}</h3>
                <p>{report.value}</p>
              </div>
            ))}
          </div>
          <div className="actions">
            <Link className="btn" to="/admin/users">Manage Users</Link>
            <Link className="btn btn-secondary" to="/admin/theatres">Manage Theatres</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
