import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addInvoice } from '../actions/invoiceActions';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import sidePics from '../images/sidePic.jpg';
import Swal from 'sweetalert2';

const InvoiceForm = ({ handleClose }) => {
  const [date, setDate] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [salespersonName, setSalespersonName] = useState('');
  const [notes, setNotes] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const invoiceData = {
      id: Date.now(), // Generate a unique ID
      date,
      customer_name: customerName,
      salesperson_name: salespersonName,
      notes,
      total_amount: totalAmount,
    };

    try {
      if (!date || !customerName || !salespersonName || !totalAmount) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'All fields are required!',
        });
        return;
      }
      await dispatch(addInvoice(invoiceData)).unwrap();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Invoice added successfully!',
        showConfirmButton: false,
        timer: 1500,
      });
      handleClose(); // Close modal if success
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to add invoice!',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full h-full mt-3 ">
      <div className="w-full space-y-6 lg:w-1/2 ">
        <div className="w-full">
          <input
            type="date"
            value={date}
            className="flex-wrap w-full p-2 border-2 rounded-sm shadow-sm"
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="w-full">
          <TextField
            type="text"
            id="customer-name"
            className="w-full"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            label="Customer Name"
            variant="standard"
            required
          />
        </div>
        <div className="w-full">
          <TextField
            type="text"
            id="salesperson-name"
            className="w-full"
            value={salespersonName}
            onChange={(e) => setSalespersonName(e.target.value)}
            label="Sales Person Name"
            variant="standard"
            required
          />
        </div>
        <div className="w-full">
          <textarea
            placeholder="Notes"
            className="w-full p-2 border-2 rounded-sm"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <div className="w-full">
          <Input
            id="standard-adornment-amount"
            type="number"
            className="w-full"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
            placeholder="Total Amount"
            required
            startAdornment={
              <InputAdornment position="start">Rp</InputAdornment>
            }
          />
        </div>
        <div className="flex w-full">
          <button
            type="submit"
            className="w-3/4 p-2 mx-auto text-white bg-black border-2 rounded-md "
          >
            Submit Invoice
          </button>
        </div>
      </div>
      <div className="invisible sm:visible lg:w-1/2">
        <img src={sidePics} width="auto" height="auto" alt="Admin Picture" />
      </div>
    </form>
  );
};

export default InvoiceForm;
