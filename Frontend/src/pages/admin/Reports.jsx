import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import { mockReports } from '../../data/mockData';

export default function Reports() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <div className="card">
          <h2>System Overview</h2>
          <div className="grid compact-grid">
            {mockReports.map((report) => (
              <div className="card" key={report.label}>
                <h3>{report.label}</h3>
                <p>{report.value}</p>
              </div>
            ))}
          </div>
          <Link className="btn" to="/admin/dashboard">Back</Link>
        </div>
      </main>
    </div>
  );
}
