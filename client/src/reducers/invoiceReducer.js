import { createSlice } from '@reduxjs/toolkit';
import { fetchInvoices, addInvoice } from '../actions/invoiceActions';

const invoiceSlice = createSlice({
  name: 'invoice',
  initialState: {
    invoices: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInvoices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchInvoices.fulfilled, (state, action) => {
        state.loading = false;
        state.invoices = action.payload;
      })
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addInvoice.fulfilled, (state, action) => {
        state.invoices.push(action.payload); // Pastikan data baru ditambahkan ke state
      })
      .addCase(addInvoice.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default invoiceSlice.reducer;
