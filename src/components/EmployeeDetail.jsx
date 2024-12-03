import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EmployeeDetail = () => {
  const [employee, setEmployee] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/employees/${id}/`)
      .then(response => {
        setEmployee(response.data);
      })
      .catch(error => {
        console.error('Error fetching employee:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/employees/${id}/`, employee)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error('Error updating employee:', error);
      });
  };

  if (!employee) return <div>Loading...</div>;

  return (
    <div>
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee ID:</label>
          <input
            type="text"
            name="employee_id"
            value={employee.employee_id}
            onChange={handleChange}
            disabled
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={employee.department}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Position:</label>
          <input
            type="text"
            name="position"
            value={employee.position}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Join Date:</label>
          <input
            type="date"
            name="join_date"
            value={employee.join_date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Status:</label>
          <input
            type="checkbox"
            name="active_status"
            checked={employee.active_status}
            onChange={() => setEmployee({ ...employee, active_status: !employee.active_status })}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EmployeeDetail;
