import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => (
  <div className="dashboard">
    <div className="body-scan">
      <img src="/images/body.png" alt="Body" />
      <div className="tag heart">❤️ Healthy Heart</div>
      <div className="tag leg">🦵 Healthy Leg</div>
    </div>
    <div className="status">
      <div className="status-box">
        <p>Lungs</p>
        <div className="bar red"></div>
      </div>
      <div className="status-box">
        <p>Teeth</p>
        <div className="bar green"></div>
      </div>
      <div className="status-box">
        <p>Bone</p>
        <div className="bar red"></div>
      </div>
    </div>
  </div>
);

export default Dashboard;
