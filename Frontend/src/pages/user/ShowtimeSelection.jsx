import { Link } from 'react-router-dom';
import { mockScreens } from '../../data/mockData';

export default function ShowtimeSelection() {
  return (
    <div className="page-shell">
      <div className="card">
        <h2>Select a Showtime</h2>
        <div className="grid compact-grid">
          {mockScreens.map((screen) => (
            <div className="card" key={screen.id}>
              <h3>{screen.name}</h3>
              <p>{screen.type}</p>
              <div className="actions">
                {screen.showtimes.map((time) => (
                  <Link key={time} className="btn btn-secondary" to="/seats">
                    {time}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
