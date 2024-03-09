import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography, Grid, Chip, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CommentIcon from '@mui/icons-material/Comment';
import BusinessIcon from '@mui/icons-material/Business';
import PlaceIcon from '@mui/icons-material/Place';
import AiIcon from '@mui/icons-material/AutoAwesomeMosaic'; // Assuming this represents AI
import RoomIcon from '@mui/icons-material/Room';
import SloganIcon from '@mui/icons-material/Campaign';
import ActiveIcon from '@mui/icons-material/FlashOn';
import SubscriptionIcon from '@mui/icons-material/CardMembership';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import PsychologyIcon from '@mui/icons-material/Psychology';
import VerifiedIcon from '@mui/icons-material/Verified';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import { toast } from 'react-toastify';
import './ViewReviewDialog.css';


const ViewReviewDialog = (props) => {
  const {
    open,
    handleOpen,
    address,
  } = props;

  
  // console.log(hotel);
  // const copyToClipboard = () => {

  return (
    <Dialog className='businessInformation' open={open} onClose={() => handleOpen(false)} maxWidth="md" fullWidth>
      <DialogTitle>Business Address</DialogTitle>
      <DialogContent dividers>
        {address}
      </DialogContent>
      <DialogActions>
        <Button variant='contained' sx={{ color: 'white !important' }} onClick={() => handleOpen(false)}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewReviewDialog;
