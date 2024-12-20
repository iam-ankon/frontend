import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MonthlyProductionReportList = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/monthly-production/')
      .then(response => {
        setReports(response.data);
      })
      .catch(error => {
        console.error('Error fetching reports:', error);
      });
  }, []);

  return (
    <div>
      <h2>Monthly Production Reports</h2>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Total Output</th>
            <th>Defective Items</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(report => (
            <tr key={report.id}>
              <td>{report.month}</td>
              <td>{report.total_output}</td>
              <td>{report.defective_items}</td>
              <td>
                <Link to={`/report/${report.id}`}>View/Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonthlyProductionReportList;
