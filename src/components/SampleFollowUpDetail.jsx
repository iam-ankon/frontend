import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const SampleFollowUpDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [followUp, setFollowUp] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/sample-follow-ups/${id}/`)
      .then(response => {
        setFollowUp(response.data);
      })
      .catch(error => {
        console.error('Error fetching follow-up:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFollowUp({ ...followUp, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/sample-follow-ups/${id}/`, followUp)
      .then(() => {
        navigate('/sample-follow-ups');
      })
      .catch(error => {
        console.error('Error updating follow-up:', error);
      });
  };

  if (!followUp) return <div>Loading...</div>;

  return (
    <div>
      <h2>Edit Sample Follow-Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={followUp.name} onChange={handleChange} />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" name="date" value={followUp.date} onChange={handleChange} />
        </div>
        <div>
          <label>Status:</label>
          <input type="text" name="status" value={followUp.status} onChange={handleChange} />
        </div>
        <div>
          <label>Remarks:</label>
          <textarea name="remarks" value={followUp.remarks} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default SampleFollowUpDetail;
