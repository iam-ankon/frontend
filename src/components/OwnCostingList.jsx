import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OwnCostingList = () => {
  const [ownCostings, setOwnCostings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/own-costing/')
      .then((response) => {
        setOwnCostings(response.data);
      })
      .catch((error) => {
        console.error('Error fetching own costing data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Own Costing</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Total Cost</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {ownCostings.map((costing) => (
            <tr key={costing.id}>
              <td>{costing.name}</td>
              <td>{costing.total_cost}</td>
              <td>{costing.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OwnCostingList;
