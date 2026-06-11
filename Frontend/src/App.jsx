import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

import UserDashboard from './pages/user/UserDashboard';
import MovieCatalog from './pages/user/MovieCatalog';
import MovieDetails from './pages/user/MovieDetails';
import LocationSelection from './pages/user/LocationSelection';
import TheatreSelection from './pages/user/TheatreSelection';
import ShowtimeSelection from './pages/user/ShowtimeSelection';
import SeatSelection from './pages/user/SeatSelection';
import BookingSummary from './pages/user/BookingSummary';
import BookingConfirmation from './pages/user/BookingConfirmation';
import UserProfile from './pages/user/UserProfile';
import BookingHistory from './pages/user/BookingHistory';

import OwnerDashboard from './pages/owner/OwnerDashboard';
import ManageMovies from './pages/owner/ManageMovies';
import ManageShows from './pages/owner/ManageShows';

import AdminDashboard from './pages/admin/AdminDashboard';
import ManageUsers from './pages/admin/ManageUsers';
import ManageTheatres from './pages/admin/ManageTheatres';
import Requests from './pages/admin/Requests';
import Reports from './pages/admin/Reports';

function HomePage() {
  return (
    <div className="page-shell">
      <div className="card hero-card">
        <p className="eyebrow">Mock Booking Platform</p>
        <h1>Cineverse</h1>
        <p>Explore a fully navigable frontend prototype for movie discovery, booking, and dashboard flows.</p>
        <div className="actions">
          <a className="btn" href="/movies">Browse Movies</a>
          <a className="btn btn-secondary" href="/login">Login</a>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app-shell">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/movies" element={<MovieCatalog />} />
            <Route path="/movies/:id" element={<MovieDetails />} />

            <Route path="/user/dashboard" element={<ProtectedRoute allowedRoles={['customer']}><UserDashboard /></ProtectedRoute>} />
            <Route path="/locations" element={<ProtectedRoute allowedRoles={['customer']}><LocationSelection /></ProtectedRoute>} />
            <Route path="/theatres" element={<ProtectedRoute allowedRoles={['customer']}><TheatreSelection /></ProtectedRoute>} />
            <Route path="/showtimes" element={<ProtectedRoute allowedRoles={['customer']}><ShowtimeSelection /></ProtectedRoute>} />
            <Route path="/seats" element={<ProtectedRoute allowedRoles={['customer']}><SeatSelection /></ProtectedRoute>} />
            <Route path="/booking/summary" element={<ProtectedRoute allowedRoles={['customer']}><BookingSummary /></ProtectedRoute>} />
            <Route path="/booking/confirmation/:id" element={<ProtectedRoute allowedRoles={['customer']}><BookingConfirmation /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute allowedRoles={['customer']}><UserProfile /></ProtectedRoute>} />
            <Route path="/bookings/history" element={<ProtectedRoute allowedRoles={['customer']}><BookingHistory /></ProtectedRoute>} />

            <Route path="/owner/dashboard" element={<ProtectedRoute allowedRoles={['owner']}><OwnerDashboard /></ProtectedRoute>} />
            <Route path="/owner/movies" element={<ProtectedRoute allowedRoles={['owner']}><ManageMovies /></ProtectedRoute>} />
            <Route path="/owner/shows" element={<ProtectedRoute allowedRoles={['owner']}><ManageShows /></ProtectedRoute>} />

            <Route path="/admin/dashboard" element={<ProtectedRoute allowedRoles={['admin']}><AdminDashboard /></ProtectedRoute>} />
            <Route path="/admin/users" element={<ProtectedRoute allowedRoles={['admin']}><ManageUsers /></ProtectedRoute>} />
            <Route path="/admin/theatres" element={<ProtectedRoute allowedRoles={['admin']}><ManageTheatres /></ProtectedRoute>} />
            <Route path="/admin/requests" element={<ProtectedRoute allowedRoles={['admin']}><Requests /></ProtectedRoute>} />
            <Route path="/admin/reports" element={<ProtectedRoute allowedRoles={['admin']}><Reports /></ProtectedRoute>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;