import { Link } from 'react-router-dom';

export default function BookingSummary() {
  return (
    <div className="page-shell">
      <div className="card">
        <h2>Booking Summary</h2>
        <p>Movie: Midnight Horizon</p>
        <p>Time: 7:30 PM</p>
        <p>Seats: A1, A3</p>
        <div className="actions">
          <Link className="btn" to="/booking/confirmation/101">Confirm Booking</Link>
          <Link className="btn btn-secondary" to="/seats">Back</Link>
        </div>
      </div>
    </div>
  );
}
