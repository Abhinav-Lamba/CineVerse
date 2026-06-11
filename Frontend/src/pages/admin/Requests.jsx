import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

export default function Requests() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <div className="card">
          <h2>Approve or Reject Requests</h2>
          <p>Mock theatre requests can be reviewed here.</p>
          <Link className="btn" to="/admin/dashboard">Back</Link>
        </div>
      </main>
    </div>
  );
}
