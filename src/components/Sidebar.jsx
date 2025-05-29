import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => (
  <div className="sidebar">
    <div className="logo">Healthcare.</div>
    <nav>
      <ul>
        <li className="active">Dashboard</li>
        <li>History</li>
        <li>Calendar</li>
        <li>Appointments</li>
        <li>Statistics</li>
      </ul>
    </nav>
    <div className="tools">
      <div>Chat</div>
      <div>Support</div>
    </div>
    <div className="setting">Setting</div>
  </div>
);

export default Sidebar;
