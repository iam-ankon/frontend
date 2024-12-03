import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Total Inquiries</Link></li>
          <li><Link to="/inquiries/confirmed">Confirmed Inquiries</Link></li>
          <li><Link to="/inquiries/pending">Pending Inquiries</Link></li>
          <li><Link to="/sample-follow-ups">Sample Follow-Ups</Link></li>
          <li><Link to="/sample-comments">Sample Comments</Link></li>
          <li><Link to="/reminders">Reminders</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
