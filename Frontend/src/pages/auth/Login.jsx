import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { mockUsers } from '../../data/mockData';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const match = mockUsers.find((user) => user.email === form.email && user.password === form.password);

    if (match) {
      login(match);
      if (match.role === 'owner') {
        navigate('/owner/dashboard');
      } else if (match.role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/user/dashboard');
      }
    }
  };

  return (
    <div className="page-shell">
      <form className="card form-card" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" />
        <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Password" />
        <button className="btn" type="submit">Sign In</button>
        <p>
          New here? <Link to="/signup">Create account</Link>
        </p>
      </form>
    </div>
  );
}
