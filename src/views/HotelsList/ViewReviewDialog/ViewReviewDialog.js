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
    hotel,
  } = props;

  const { name, location, business_id, reviews, active_subscription, description, customAIDescription, place_id, activeAI, activePlatforms, isActive, slogan, room } = hotel;
  // console.log(hotel);
  // const copyToClipboard = () => {
  const copyToClipboard = async (text) => {
    let textToCopy = `https://remi-back.onrender.com/feedback?business_id=${business_id}`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      toast.info("Url copied to clipboard!");
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  return (
    <Dialog className='businessInformation' open={open} onClose={() => handleOpen(false)} maxWidth="md" fullWidth>
      <DialogTitle>Business Details</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" component="div">{name}</Typography>
            <Typography variant="caption" display="block" gutterBottom>{slogan}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <List dense>
              <ListItem>
                <ListItemIcon sx={{ fontSize: "30px", color: 'white !important' }}><LocationOnIcon sx={{ fontSize: "20px" }} /></ListItemIcon>
                <ListItemText primary={<span style={{ fontWeight: 600 }}>Location</span>} secondary={<span style={{ color: "white" }}>{location}</span>} />
              </ListItem>
              {/* <ListItem>
                <ListItemIcon sx={{ fontSize: "30px", color: 'white !important' }}><MeetingRoomIcon /></ListItemIcon>
                <ListItemText primary={<span style={{ fontWeight: 600 }}>Room</span>} secondary={room} />
              </ListItem> */}
              <ListItem>
                <ListItemIcon sx={{ fontSize: "30px", color: 'white !important' }}><CommentIcon /></ListItemIcon>
                <ListItemText primary={<span style={{ fontWeight: 600 }}>Reviews</span>} secondary={<span style={{ color: "white" }}>{`${reviews?.length} reviews`}</span>} />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ fontSize: "30px", color: 'white !important' }}><SubscriptionIcon /></ListItemIcon>
                <ListItemText primary={<span style={{ fontWeight: 600 }}>Subscription</span>} secondary={<span style={{ color: "white" }}>{active_subscription ? 'Active' : 'Inactive'}</span>} />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            <List dense>
              <ListItem>
                <ListItemIcon sx={{ fontSize: "30px", color: 'white !important' }}><PsychologyIcon /></ListItemIcon>
                <ListItemText primary={<Typography sx={{ fontWeight: 500 }}>
                  Active AI
                </Typography>} sx={{ fontWeight: "500 !important" }} secondary={<span style={{ color: 'white' }} >{activeAI}</span>} />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ fontSize: "30px", color: 'white !important' }}><VerifiedIcon /></ListItemIcon>
                <ListItemText primary={<Typography sx={{ fontWeight: 500 }}>
                  Status
                </Typography>} secondary={<span style={{ color: 'white' }} >{isActive ? 'Active' : 'Inactive'}</span>} />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ fontSize: "30px", color: 'white !important' }}><LaptopMacIcon /></ListItemIcon>
                <ListItemText primary={<Typography sx={{ fontWeight: 500 }}>
                  Platforms
                </Typography>} secondary={<span style={{ color: 'white' }} >{activePlatforms && activePlatforms.length > 0 && activePlatforms.join(', ')}</span>} />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>Description</Typography>
            <Typography variant="body2" paragraph>{description}</Typography>
            <Typography variant="body1" gutterBottom>AI Description</Typography>
            <Typography variant="body2" paragraph>{customAIDescription}</Typography>
            <Button variant='outlined' sx={{ color: '#1a73e8 !important' }} onClick={() => copyToClipboard()} >Copy Review Qr link</Button>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant='contained' sx={{ color: 'white !important' }} onClick={() => handleOpen(false)}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewReviewDialog;
