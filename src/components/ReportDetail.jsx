import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ReportDetail = () => {
  const [report, setReport] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/daily-production/${id}/`)  // Change URL accordingly based on report type
      .then(response => {
        setReport(response.data);
      })
      .catch(error => {
        console.error('Error fetching report:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReport({ ...report, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/daily-production/${id}/`, report)  // Update the URL as necessary
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error('Error updating report:', error);
      });
  };

  if (!report) return <div>Loading...</div>;

  return (
    <div>
      <h2>Edit Report</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Report Date:</label>
          <input type="date" name="report_date" value={report.report_date} onChange={handleChange} />
        </div>
        <div>
          <label>Total Output:</label>
          <input type="number" name="total_output" value={report.total_output} onChange={handleChange} />
        </div>
        <div>
          <label>Defective Items:</label>
          <input type="number" name="defective_items" value={report.defective_items} onChange={handleChange} />
        </div>
        <div>
          <label>Remarks:</label>
          <textarea name="remarks" value={report.remarks} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ReportDetail;
