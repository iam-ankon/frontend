import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const InquiryForm = () => {
  const [inquiry, setInquiry] = useState({
    inquiry_no: '',
    request_qty: 0,
    proposed_shipment_date: '',
    buyer_name: '',
    supplier_name: '',
    // Initialize other fields as needed
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInquiry({ ...inquiry, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/inquiries/', inquiry)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error('Error creating inquiry:', error);
      });
  };

  return (
    <div>
      <h2>Add New Inquiry</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Inquiry No:</label>
          <input
            type="text"
            name="inquiry_no"
            value={inquiry.inquiry_no}
            onChange={handleChange}
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

export default InquiryForm;
