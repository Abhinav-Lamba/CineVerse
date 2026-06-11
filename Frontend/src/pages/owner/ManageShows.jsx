import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

export default function ManageShows() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <div className="card">
          <h2>Manage Shows</h2>
          <p>Create or update screen timings and show schedules.</p>
          <Link className="btn" to="/owner/dashboard">Back</Link>
        </div>
      </main>
    </div>
  );
}
