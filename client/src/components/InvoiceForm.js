import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addInvoice } from '../actions/invoiceActions';
import { fetchProducts } from '../actions/productActions';

const InvoiceForm = () => {
  const [date, setDate] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [salespersonName, setSalespersonName] = useState('');
  const [notes, setNotes] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const dispatch = useDispatch();

  // Fetch products once on mount
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const invoiceData = {
        date,
        customer_name: customerName,
        salesperson_name: salespersonName,
        notes,
        total_amount: totalAmount,
      };
      console.log('Submitting invoice:', invoiceData);
      if (!date || !customerName || !salespersonName || !totalAmount) {
        console.error('All fields are required');
        alert('All fields are required');
        return;
      }
      await dispatch(addInvoice(invoiceData)).unwrap();
      alert('Invoice added successfully!');
    } catch (error) {
      console.error('Failed to add invoice:', error);
      alert('Failed to add invoice');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="text"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        placeholder="Customer Name"
        required
      />
      <input
        type="text"
        value={salespersonName}
        onChange={(e) => setSalespersonName(e.target.value)}
        placeholder="Salesperson Name"
        required
      />
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Notes"
      />
      <input
        type="number"
        value={totalAmount}
        onChange={(e) => setTotalAmount(e.target.value)}
        placeholder="Total Amount"
        required
      />
      <button type="submit">Submit Invoice</button>
    </form>
  );
};

export default InvoiceForm;
