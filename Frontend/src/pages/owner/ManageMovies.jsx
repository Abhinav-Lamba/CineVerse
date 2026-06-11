import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

export default function ManageMovies() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <div className="card">
          <h2>Manage Movies</h2>
          <p>Add a new movie or update existing movie details.</p>
          <Link className="btn" to="/owner/dashboard">Back</Link>
        </div>
      </main>
    </div>
  );
}
