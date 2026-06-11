import { Link } from 'react-router-dom';
import { mockTheatres } from '../../data/mockData';

export default function TheatreSelection() {
  return (
    <div className="page-shell">
      <div className="card">
        <h2>Select a Theatre</h2>
        <div className="grid compact-grid">
          {mockTheatres.map((theatre) => (
            <Link key={theatre.id} className="card option-card" to="/showtimes">
              <h3>{theatre.name}</h3>
              <p>{theatre.city} • {theatre.screens} screens</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
