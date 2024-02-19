import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';
import './ViewReviewDialog.css'


const ViewReviewDialog = (props) => {
  const {
    open,
    handleOpen,
    data,
  } = props;
  // const { name, location } = data;
  return (<>
    <Dialog className='viewUserDialog' open={open} onClose={() => handleOpen(false)}>
      <DialogTitle>
        Registerd business Info
      </DialogTitle>
      <DialogContent>
        <div>
          <strong>Registerd business Name:</strong> {data?.name ? data.name : "Not registerd Yet"}
        </div>
        <div>
          <strong>Location:</strong> {data?.location ? data.location : "Not registerd Yet"}
        </div>
      </DialogContent>
      <DialogActions>
        <Button variant='container' sx={{ color: 'white !important' }} onClick={() => handleOpen(false)}>Close</Button>
      </DialogActions>
    </Dialog>
  </>);
};

export default ViewReviewDialog;