import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const InquiryList = () => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/inquiries/')
      .then(response => {
        setInquiries(response.data);
      })
      .catch(error => {
        console.error('Error fetching inquiries:', error);
      });
  }, []);

  return (
    <div>
      <h2>Inquiry List</h2>
      <Link to="/add-inquiry">Add New Inquiry</Link>
      <table>
        <thead>
          <tr>
            <th>Inquiry No</th>
            <th>Buyer Name</th>
            <th>Supplier Name</th>
            <th>Requested Qty</th>
            <th>Proposed Shipment Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map(inquiry => (
            <tr key={inquiry.id}>
              <td>{inquiry.inquiry_no}</td>
              <td>{inquiry.buyer_name}</td>
              <td>{inquiry.supplier_name}</td>
              <td>{inquiry.request_qty}</td>
              <td>{inquiry.proposed_shipment_date}</td>
              <td>
                <Link to={`/inquiries/${inquiry.id}`}>View/Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InquiryList;
