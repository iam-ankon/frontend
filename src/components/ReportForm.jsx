import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ReportForm = () => {
  const [report, setReport] = useState({
    report_date: '',
    total_output: '',
    defective_items: '',
    remarks: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReport({ ...report, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/daily-production/', report)  // Update URL as necessary
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error('Error creating report:', error);
      });
  };

  return (
    <div>
      <h2>Create New Report</h2>
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
        <button type="submit">Create Report</button>
      </form>
    </div>
  );
};

export default ReportForm;
