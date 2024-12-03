import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OrderDetail = () => {
  const { id } = useParams();  // Get the order ID from the URL
  const [order, setOrder] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/orders/${id}/`)
      .then(response => {
        setOrder(response.data);
      })
      .catch(error => {
        console.error('Error fetching the order details!', error);
      });
  }, [id]);

  if (!order) return <div>Loading...</div>;

  return (
    <div>
      <h1>Order Detail</h1>
      <p><strong>Master Order No:</strong> {order.master_order_no}</p>
      <p><strong>Supplier Name:</strong> {order.supplier_name}</p>
      <p><strong>Buyer Name:</strong> {order.buyer_name}</p>
      <p><strong>Shipment Date:</strong> {order.shipment_date}</p>
      <p><strong>Total Value:</strong> {order.total_value}</p>
      <p><strong>Status:</strong> {order.current_status}</p>
      <p><strong>Description:</strong> {order.description}</p>
      {/* You can display more order details here */}
    </div>
  );
};

export default OrderDetail;
