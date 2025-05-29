import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/Calendar.css';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar">
      <h3>Your Schedule</h3>
      <Calendar onChange={setDate} value={date} />
      <div className="schedule">
        <div className="card">Dentist: Dr. Cameron Williamson (09:00–11:00)</div>
        <div className="card">Physiotherapy: Dr. Kevin Djones (11:00–12:00)</div>
        <div className="card">Health Checkup (11:00)</div>
        <div className="card">Ophthalmologist (14:00)</div>
        <div className="card">Cardiologist (00:00)</div>
        <div className="card">Neurologist (16:00)</div>
      </div>
    </div>
  );
};

export default CalendarComponent;
