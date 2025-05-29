import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CalendarComponent from './components/CalendarComponent';
import ActivityChart from './components/ActivityChart';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        {/* Search Bar */}
        <div className="search-bar-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search"
          />
          <button className="search-btn">
            <span role="img" aria-label="search">🔍</span>
          </button>
        </div>
        <Dashboard />
        <CalendarComponent />
        <ActivityChart />
      </div>
    </div>
  ); 
}

export default App;
