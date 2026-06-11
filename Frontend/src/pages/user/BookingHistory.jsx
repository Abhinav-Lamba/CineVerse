import { mockBookings } from '../../data/mockData';

export default function BookingHistory() {
  return (
    <div className="page-shell">
      <div className="card">
        <h2>Booking History</h2>
        {mockBookings.map((booking) => (
          <div key={booking.id} className="history-item">
            <strong>{booking.id}</strong>
            <span>{booking.movie}</span>
            <span>{booking.date}</span>
            <span>{booking.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
