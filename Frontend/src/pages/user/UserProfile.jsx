import { useAuth } from '../../context/AuthContext';

export default function UserProfile() {
  const { user } = useAuth();

  return (
    <div className="page-shell">
      <div className="card">
        <h2>Profile</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email || 'ava@example.com'}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>
    </div>
  );
}
