import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ReminderList = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/reminders/')
      .then(response => {
        setReminders(response.data);
      })
      .catch(error => {
        console.error('Error fetching reminders:', error);
      });
  }, []);

  return (
    <div>
      <h2>Reminders</h2>
      <ul>
        {reminders.map((reminder) => (
          <li key={reminder.id}>
            <Link to={`/reminders/${reminder.id}`}>{reminder.reminder_text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReminderList;
