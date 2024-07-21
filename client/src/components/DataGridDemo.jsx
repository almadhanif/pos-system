import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { fetchInvoices } from '../actions/invoiceActions';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'customer_name',
    headerName: 'Customer Name',
    width: 150,
    editable: true,
  },
  {
    field: 'salesperson_name',
    headerName: 'Sales Person Name',
    width: 150,
    editable: true,
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 110,
    editable: true,
  },
  {
    field: 'total_amount',
    headerName: 'Total Amount',
    width: 160,
    editable: true,
  },
];

export default function DataGridDemo() {
  const dispatch = useDispatch();
  const invoices = useSelector((state) => state.invoice.invoices);

  useEffect(() => {
    dispatch(fetchInvoices()); // Fetch invoices when component mounts
  }, [dispatch]);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={invoices}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
