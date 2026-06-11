import { Link } from 'react-router-dom';
import { mockLocations } from '../../data/mockData';

export default function LocationSelection() {
  return (
    <div className="page-shell">
      <div className="card">
        <h2>Select a Location</h2>
        <div className="grid compact-grid">
          {mockLocations.map((location) => (
            <Link key={location} className="card option-card" to="/theatres">
              <h3>{location}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
