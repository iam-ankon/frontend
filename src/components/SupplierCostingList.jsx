import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SupplierCostingList = () => {
  const [supplierCostings, setSupplierCostings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/supplier-costing/')
      .then((response) => {
        setSupplierCostings(response.data);
      })
      .catch((error) => {
        console.error('Error fetching supplier costing data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Supplier Costing</h2>
      <table>
        <thead>
          <tr>
            <th>Supplier Name</th>
            <th>Material</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {supplierCostings.map((costing) => (
            <tr key={costing.id}>
              <td>{costing.supplier_name}</td>
              <td>{costing.material}</td>
              <td>{costing.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupplierCostingList;
