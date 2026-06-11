import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import { mockTheatres } from '../../data/mockData';

export default function ManageTheatres() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <div className="card">
          <h2>Manage Theatres</h2>
          {mockTheatres.map((theatre) => (
            <div className="history-item" key={theatre.id}>
              <strong>{theatre.name}</strong>
              <span>{theatre.city}</span>
              <span>{theatre.screens} screens</span>
            </div>
          ))}
          <Link className="btn" to="/admin/dashboard">Back</Link>
        </div>
      </main>
    </div>
  );
}
