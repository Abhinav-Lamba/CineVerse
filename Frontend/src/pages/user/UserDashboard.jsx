import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { mockMovies } from '../../data/mockData';

export default function UserDashboard() {
  const { user } = useAuth();

  return (
    <div className="page-shell">
      <section className="hero-card card">
        <h2>Welcome back, {user.name}</h2>
        <p>Book your next movie night with a smooth, mock booking flow.</p>
      </section>
      <div className="grid">
        {mockMovies.map((movie) => (
          <div className="card" key={movie.id}>
            <div className="movie-card-top">
              <span className="badge">{movie.genre}</span>
              <span className="badge">⭐ {movie.rating}</span>
            </div>
            <h3>{movie.title}</h3>
            <p>{movie.synopsis}</p>
            <Link className="btn" to={`/movies/${movie.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
