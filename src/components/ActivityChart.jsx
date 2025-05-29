import React from 'react';
import '../styles/ActivityChart.css';

const ActivityChart = () => {
  const data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return (
    <div className="activity-chart">
      <h3>Activity</h3>
      <div className="chart">
        {data.map((day, index) => (
          <div key={index} className="bar-container">
            <div className="bar" style={{ height: `${40 + index * 10}px` }}></div>
            <p>{day}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;

