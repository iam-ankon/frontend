import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  // Fetch data from the backend API when the component mounts
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/DatabaseDesign/orders/")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the orders!", error);
      });
  }, []);

  return (
    <div>
      <h1>Order List</h1>
      <table>
        <thead>
          <tr>
            <th>Master Order No</th>
            <th>Supplier Name</th>
            <th>Buyer Name</th>
            <th>Shipment Date</th>
            <th>Total Value</th>
            <th>Current Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.master_order_no}</td>
              <td>{order.supplier_name}</td>
              <td>{order.buyer_name}</td>
              <td>{order.shipment_date}</td>
              <td>{order.total_value}</td>
              <td>{order.current_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
