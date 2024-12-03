import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const TotalInquiryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [totalInquiry, setTotalInquiry] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/total-inquiries/${id}/`)
      .then(response => {
        setTotalInquiry(response.data);
      })
      .catch(error => {
        console.error('Error fetching total inquiry details:', error);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/total-inquiries/${id}/`, totalInquiry)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error('Error updating total inquiry:', error);
      });
  };

  if (!totalInquiry) return <div>Loading...</div>;

  return (
    <div>
      <h2>Details for Total Inquiry {totalInquiry.inquiry.inquiry_no}</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Inquiry No:</label>
          <input
            type="text"
            value={totalInquiry.inquiry.inquiry_no}
            readOnly
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={totalInquiry.inquiry.description}
            readOnly
          />
        </div>
        <div>
          <label>Status:</label>
          <select
            value={totalInquiry.inquiry.is_confirmed}
            onChange={(e) => setTotalInquiry({
              ...totalInquiry,
              inquiry: { ...totalInquiry.inquiry, is_confirmed: e.target.value }
            })}
          >
            <option value={true}>Confirmed</option>
            <option value={false}>Pending</option>
          </select>
        </div>
        <div>
          <label>Added At:</label>
          <input
            type="text"
            value={new Date(totalInquiry.added_at).toLocaleString()}
            readOnly
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default TotalInquiryDetail;
