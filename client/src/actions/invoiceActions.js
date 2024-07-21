import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchInvoices = createAsyncThunk(
  'invoice/fetchInvoices',
  async () => {
    const response = await axios.get('/api/invoices');
    return response.data;
  }
);

export const addInvoice = createAsyncThunk(
  'invoice/addInvoice',
  async (invoice) => {
    console.log('Payload to be sent:', invoice); // Log payload sebelum dikirim
    const response = await axios.post('/api/invoices', invoice);
    return response.data;
  }
);
