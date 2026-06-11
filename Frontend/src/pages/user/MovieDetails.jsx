import { Link, useParams } from 'react-router-dom';
import { mockMovies } from '../../data/mockData';

export default function MovieDetails() {
  const { id } = useParams();
  const movie = mockMovies.find((entry) => entry.id === Number(id));

  if (!movie) {
    return <div className="page-shell"><h2>Movie not found</h2></div>;
  }

  return (
    <div className="page-shell">
      <div className="card detail-card">
        <h2>{movie.title}</h2>
        <p>{movie.genre} • {movie.duration} • ⭐ {movie.rating}</p>
        <p>{movie.synopsis}</p>
        <div className="actions">
          <Link className="btn" to="/locations">Select Location</Link>
          <Link className="btn btn-secondary" to="/movies">Back to Catalog</Link>
        </div>
      </div>
    </div>
  );
}
