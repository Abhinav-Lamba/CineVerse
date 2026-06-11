import { Link, useParams } from 'react-router-dom';

export default function BookingConfirmation() {
  const { id } = useParams();

  return (
    <div className="page-shell">
      <div className="card success-card">
        <h2>Booking Confirmed!</h2>
        <p>Your booking reference is {id}.</p>
        <Link className="btn" to="/bookings/history">View History</Link>
      </div>
    </div>
  );
}
