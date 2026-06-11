import { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockSeats } from '../../data/mockData';

export default function SeatSelection() {
  const [selected, setSelected] = useState([]);

  const toggleSeat = (seatId) => {
    setSelected((current) =>
      current.includes(seatId) ? current.filter((id) => id !== seatId) : [...current, seatId]
    );
  };

  return (
    <div className="page-shell">
      <div className="card">
        <h2>Select Seats</h2>
        <div className="seat-grid">
          {mockSeats.map((seat) => (
            <button
              key={seat.id}
              className={`seat ${seat.available ? '' : 'unavailable'} ${selected.includes(seat.id) ? 'selected' : ''}`}
              disabled={!seat.available}
              onClick={() => toggleSeat(seat.id)}
            >
              {seat.label}
            </button>
          ))}
        </div>
        <div className="actions">
          <Link className="btn" to="/booking/summary">Continue</Link>
          <Link className="btn btn-secondary" to="/showtimes">Back</Link>
        </div>
      </div>
    </div>
  );
}
