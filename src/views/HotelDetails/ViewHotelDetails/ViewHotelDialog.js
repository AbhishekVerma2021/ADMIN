import React from 'react';
import './ViewHotelDialog.css';
// import brandLogo from '../../../Images/surveySphere.png';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';

const ViewHotelDialog = (props) => {
  const {
    setOpenViewBuisness,
    open,
  } = props;
  return (<>
  <Dialog className='addBuisnessDialog' open={open} onClose={() => setOpenViewBuisness(false)}>
    <DialogTitle>
      Buisness Details
    </DialogTitle>

    <DialogActions>
      <Button onClick={() => setOpenViewBuisness(false)}>Close</Button>
    </DialogActions>
  </Dialog>
  </>);
};

export default ViewHotelDialog;