import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Summary = () => {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/summary/')
      .then((response) => {
        setSummary(response.data);
      })
      .catch((error) => {
        console.error('Error fetching summary data:', error);
      });
  }, []);

  if (!summary) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Costing Summary</h2>
      <p><strong>Total Own Costing:</strong> {summary.total_own_costing}</p>
      <p><strong>Total Supplier Costing:</strong> {summary.total_supplier_costing}</p>
    </div>
  );
};

export default Summary;
