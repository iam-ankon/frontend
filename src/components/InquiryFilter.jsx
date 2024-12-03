import React from 'react';
import { Link } from 'react-router-dom';

const InquiryFilter = () => {
  return (
    <div className="filter-container">
      <h2>Filter Inquiries</h2>
      <Link to="/inquiries/confirmed">Confirmed</Link>
      <Link to="/inquiries/pending">Pending</Link>
    </div>
  );
};

export default InquiryFilter;
