import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/axios';

export const fetchInvoices = createAsyncThunk(
  'invoice/fetchInvoices',
  async () => {
    try {
      const response = await api.get('/api/invoices');
      console.log('Fetched invoices:', response.data); // Debugging: tampilkan data yang diambil
      return response.data;
    } catch (error) {
      console.error('Error fetching invoices:', error); // Debugging: tampilkan error jika ada
      throw error;
    }
  }
);

export const addInvoice = createAsyncThunk(
  'invoice/addInvoice',
  async (invoice) => {
    console.log('Payload to be sent:', invoice); // Log payload sebelum dikirim
    const response = await api.post('/api/invoices', invoice);
    return response.data;
  }
);
