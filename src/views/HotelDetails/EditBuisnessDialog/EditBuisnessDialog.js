import React from 'react';
import './EditBuisnessDialog.css';
// import brandLogo from '../../../Images/surveySphere.png';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';

const EditBuisnessDialog = (props) => {
  const {
    setOpenEditBuisness,
    open,
  } = props;
  return (<>
  <Dialog className='addBuisnessDialog' open={open} onClose={() => setOpenEditBuisness(false)}>
    <DialogTitle>
      Edit Buisness Details
    </DialogTitle>

    <DialogActions>
      <Button onClick={() => setOpenEditBuisness(false)}>Close</Button>
    </DialogActions>
  </Dialog>
  </>);
};

export default EditBuisnessDialog;