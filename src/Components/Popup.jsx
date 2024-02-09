import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Popup({ show, handleClose, order }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Order Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <p>Order ID: {order.OrderID}</p>
          <p>Customer ID: {order.CustomerID}</p>
          <p>Order Date: {order.OrderDate}</p>
          <p>Total Amount: {order.TotalAmount}</p>
          <p>Payment Status: {order.PaymentStatus}</p>
          {/* Add more order details here as needed */}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Popup;
