import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TotalInquiryList = () => {
  const [totalInquiries, setTotalInquiries] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/InquiryDatabase/inquiries/")
      .then((response) => {
        setTotalInquiries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching total inquiries:", error);
      });
  }, []);

  return (
    <div>
      <h2>Total Inquiries</h2>
      <table>
        <thead>
          <tr>
            <th>Inquiry No</th>
            <th>Added At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {totalInquiries.map((inquiry) => (
            <tr key={inquiry.id}>
              <td>{inquiry.inquiry_no}</td>
              <td>{new Date(inquiry.added_at).toLocaleString()}</td>
              <td>
                <Link to={`/total-inquiries/${inquiry.id}`}>View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TotalInquiryList;
