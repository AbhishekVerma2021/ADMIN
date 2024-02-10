import React, { useEffect, useState } from 'react';
import './ViewPlanDialog.css';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
// import { Dialog, DialogTitle } from '@material-ui';

const ViewPlanDialog = (props) => {
  const {
    open,
    setOpenEditDialog,
    modifyPlan,
    planId,
    editPlanDetails,
    amount,
    planName,
    trialPeriod,
  } = props;

  const [name, setName] = useState(planName);
  const [price, setPrice] = useState(amount);
  const [trialDays, setTrialDays] = useState(trialPeriod);

  // const [price, setPrice] = useState('');


  // const [dialogStyles, setDialogStyles] = useState(handleDialogStyles())

  const handleChange = async () => {
    try {
      const updates = {
        price,
        name,
        trialDays,
        planId: planId,
      }
      console.log(planId)
      await editPlanDetails(updates);
      setOpenEditDialog(false);
    }
    catch (error) {
      alert('Something went wrong!!')
    }
  };


  return (<>
    <Dialog className='editDialogMasterContainer'
      open={open}
      fullWidth
      onClose={() => setOpenEditDialog(false)}
    >
      <DialogTitle>
        Edit Plan Price:
      </DialogTitle>
      <DialogContent>
        <TextField id="outlined-basic" value={name} sx={{ margin: '20px', width: '90%' }} onChange={(e) => setName(e.target.value)} label="Plan Name" variant="outlined" />
        <TextField id="outlined-basic" value={price} sx={{ margin: '20px', width: '90%' }} onChange={(e) => setPrice(e.target.value)} label="Price" variant="outlined" />
        <TextField id="outlined-basic" value={trialDays} sx={{ margin: '20px', width: '90%' }} onChange={(e) => setTrialDays(e.target.value)} label="Price" variant="outlined" />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleChange()}>
          Set Price
        </Button>
        <Button onClick={() => setOpenEditDialog(false)}>
          CLOSE
        </Button>
      </DialogActions>
    </Dialog>
  </>);
};

export default ViewPlanDialog;
