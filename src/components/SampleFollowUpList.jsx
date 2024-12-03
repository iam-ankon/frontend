import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SampleFollowUpList = () => {
  const [sampleFollowUps, setSampleFollowUps] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/sample-follow-ups/')
      .then(response => {
        setSampleFollowUps(response.data);
      })
      .catch(error => {
        console.error('Error fetching SampleFollowUps:', error);
      });
  }, []);

  return (
    <div>
      <h2>Sample Follow-Ups</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sampleFollowUps.map((followUp) => (
            <tr key={followUp.id}>
              <td>{followUp.name}</td>
              <td>{followUp.date}</td>
              <td>{followUp.status}</td>
              <td>
                <Link to={`/sample-follow-ups/${followUp.id}`}>View/Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/sample-follow-ups/create">Create New Follow-Up</Link>
    </div>
  );
};

export default SampleFollowUpList;
