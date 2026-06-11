import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

export default function OwnerDashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <div className="card">
          <h2>Theatre Owner Dashboard</h2>
          <p>Manage movies, schedules, screens, and seat layouts from one place.</p>
          <div className="actions">
            <Link className="btn" to="/owner/movies">Add/Edit Movie</Link>
            <Link className="btn btn-secondary" to="/owner/shows">Manage Shows</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
