import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';

const ViewReviewDialog = (props) => {
  const {
    open,
    handleOpen,
    description,
  } = props;
  return (<>
    <Dialog open={open} onClose={() => handleOpen(false)}>
      <DialogTitle>
        Full Review
      </DialogTitle>
      <DialogContent>
        {description}
      </DialogContent>
      <DialogActions>
        <Button variant='container' onClick={() => handleOpen(false)}>Close</Button>
      </DialogActions>
    </Dialog>
  </>);
};

export default ViewReviewDialog;