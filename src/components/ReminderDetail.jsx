import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ReminderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [reminder, setReminder] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/reminders/${id}/`)
      .then(response => {
        setReminder(response.data);
      })
      .catch(error => {
        console.error('Error fetching reminder:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReminder({ ...reminder, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/reminders/${id}/`, reminder)
      .then(() => {
        navigate('/reminders');
      })
      .catch(error => {
        console.error('Error updating reminder:', error);
      });
  };

  if (!reminder) return <div>Loading...</div>;

  return (
    <div>
      <h2>Edit Reminder</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Reminder Text:</label>
          <input type="text" name="reminder_text" value={reminder.reminder_text} onChange={handleChange} />
        </div>
        <div>
          <label>Due Date:</label>
          <input type="date" name="due_date" value={reminder.due_date} onChange={handleChange} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ReminderDetail;
