import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const InquiryDetail = () => {
  const [inquiry, setInquiry] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

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
        navigate('/');
      })
      .catch(error => {
        console.error('Error updating inquiry:', error);
      });
  };

  if (!inquiry) return <div>Loading...</div>;

  return (
    <div>
      <h2>Edit Inquiry</h2>
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
          <label>Buyer Name:</label>
          <input
            type="text"
            name="buyer_name"
            value={inquiry.buyer_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Supplier Name:</label>
          <input
            type="text"
            name="supplier_name"
            value={inquiry.supplier_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Request Qty:</label>
          <input
            type="number"
            name="request_qty"
            value={inquiry.request_qty}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Proposed Shipment Date:</label>
          <input
            type="date"
            name="proposed_shipment_date"
            value={inquiry.proposed_shipment_date}
            onChange={handleChange}
          />
        </div>
        {/* Add other fields similarly as required */}
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default InquiryDetail;
