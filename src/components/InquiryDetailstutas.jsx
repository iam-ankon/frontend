import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const InquiryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inquiry, setInquiry] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/inquiries/${id}/`)
      .then(response => {
        setInquiry(response.data);
      })
      .catch(error => {
        console.error('Error fetching inquiry:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInquiry({ ...inquiry, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/inquiries/${id}/`, inquiry)
      .then(() => {
        navigate(`/inquiries`);
      })
      .catch(error => {
        console.error('Error updating inquiry:', error);
      });
  };

  if (!inquiry) return <div>Loading...</div>;

  return (
    <div>
      <h2>Edit Inquiry {inquiry.inquiry_no}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Inquiry No:</label>
          <input
            type="text"
            name="inquiry_no"
            value={inquiry.inquiry_no}
            onChange={handleChange}
            disabled
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={inquiry.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Status:</label>
          <select
            name="is_confirmed"
            value={inquiry.is_confirmed}
            onChange={handleChange}
          >
            <option value={true}>Confirmed</option>
            <option value={false}>Pending</option>
          </select>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default InquiryDetail;
