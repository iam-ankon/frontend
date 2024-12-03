import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const InquiryList = ({ status }) => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    let url = 'http://localhost:8000/inquiries/';
    if (status) {
      url = `http://localhost:8000/inquiries/${status}/`;
    }

    axios.get(url)
      .then(response => {
        setInquiries(response.data);
      })
      .catch(error => {
        console.error('Error fetching inquiries:', error);
      });
  }, [status]);

  return (
    <div>
      <h2>{status ? `${status.charAt(0).toUpperCase() + status.slice(1)} Inquiries` : 'All Inquiries'}</h2>
      <table>
        <thead>
          <tr>
            <th>Inquiry No</th>
            <th>Status</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map((inquiry) => (
            <tr key={inquiry.id}>
              <td>{inquiry.inquiry_no}</td>
              <td>{inquiry.is_confirmed ? 'Confirmed' : 'Pending'}</td>
              <td>{inquiry.description}</td>
              <td>
                <Link to={`/inquiries/${inquiry.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InquiryList;
