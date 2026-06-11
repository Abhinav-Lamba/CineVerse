import { Link } from 'react-router-dom';
import { mockMovies } from '../../data/mockData';

export default function MovieCatalog() {
  return (
    <div className="page-shell">
      <h2>Movie Catalog</h2>
      <div className="grid">
        {mockMovies.map((movie) => (
          <div className="card" key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.genre} • {movie.duration}</p>
            <p>{movie.synopsis}</p>
            <Link className="btn" to={`/movies/${movie.id}`}>Book Now</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
