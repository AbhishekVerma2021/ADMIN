import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import React, { useEffect, useState } from 'react';
import './HotelDetails.css';
import RegisterHotelForm from './RegisterHotelForm';
// import BuisnessCards from './BuisnessCards';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import { Box, Button, Card, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, IconButton, Typography } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

import dummyLogo from '../../Images/maps.png'

const cardsData = [
  {
    buisnessName: "ABC Corporation",
    email: "abc@example.com",
    location: "New York, NY",
    description: "We provide cutting-edge technology solutions.",
    buisnessType: "Technology"
  },
  {
    buisnessName: "XYZ Services",
    email: "xyz@example.com",
    location: "Los Angeles, CA",
    description: "Your one-stop shop for all your service needs.",
    buisnessType: "Services"
  },
  {
    buisnessName: "QuickMart Grocery",
    email: "quickmart@example.com",
    location: "Chicago, IL",
    description: "A neighborhood grocery store with a wide range of products.",
    buisnessType: "Retail"
  },
  {
    buisnessName: "Green Energy Solutions",
    email: "greenenergy@example.com",
    location: "San Francisco, CA",
    description: "We specialize in renewable energy solutions.",
    buisnessType: "Energy"
  }
];
import { useTheme, useMediaQuery } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
// import RemoveRedEyeIcon from '';
// import ViewHotelDialog from './ViewHotelDialog';
import EditBuisnessDialog from './EditBuisnessDialog';
import addIcon from '../../Images/addHotelDetails.svg'


const HotelDetails = (props) => {


  // const { hotelDetailsRedux, getUserHotelData, deleteHotelData } = props;

  const [openAddBuisness, setOpenAddBuisness] = useState(false);
  const [openEditBuisness, setOpenEditBuisness] = useState(false);
  const [openViewBuisness, setOpenViewBuisness] = useState(false);
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [change, setChange] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);


  // useEffect(() => {
  //   const getUserHotelDataFromRedux = async () => {
  //     try {
  //       await getUserHotelData();
  //     }
  //     catch (er) {
  //       alert('Something Went wrong !!!')
  //     }
  //   }
  //   getUserHotelDataFromRedux();
  // }, []);

  // useEffect(() => {
  //   // console.log(hotelDetailsRedux)
  //   setChange(Object.values(hotelDetailsRedux).length === 0)
  // }, [hotelDetailsRedux])

  const handleDeleteHotel = () => {
    setOpenDeleteModal(true);
  };
  const handleDeleteHotelFromRedux = async () => {
    try {
      await deleteHotelData();
      setOpenDeleteModal(false);
    }
    catch (er) {
      alert('Something went wrong !!!');
    }
  };

  // const { location, name, description, room, slogan, customAIDescription } = hotelDetailsRedux;

  return (<>
    <DashboardLayout>
      <DashboardNavbar />
      <Grid item xs={12} pt={3}>
        <Card
          className={!change ? 'hotelDetailsBackground' : 'addHotelDetailsClass'}
          sx={{
            height: '79vh',
            maxHeight: 'fit-content',
            // backgroundImage: 'url(../../Images/formBack.svg) !important',
          }}>
          <MDBox
            mx={2}
            mt={-3}
            py={3}
            px={2}
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
            className='hotelListLabelHeader'
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <MDTypography variant="h6" color="white">
              Your Hotel Details
            </MDTypography>
            {!change && <IconButton onClick={() => handleDeleteHotel()}>
              <DeleteIcon sx={{ color: 'red' }} />
            </IconButton>}
          </MDBox>

          {change ? <div className="enterHotelDetailsMainContainer">
            <div className="plusIconContainer" onClick={() => { setOpenAddBuisness(true) }}>
              <img src={addIcon} alt="" />
            </div>
            <div className="enterDetails">
              Enter Details of your Hotels
            </div>
          </div> :
            <div className="hoteldetailsMasterContainer">
              <div className="hotelNameContainer">
                <div className="logoHotelContainer">
                  <img src={dummyLogo} alt="" />
                </div>
                <div className="hotelNameText">
                  {/* {name} */}
                </div>
              </div>
              <div>
                <hr />
              </div>
              <div className="furtherDetails">
                <div className="locationContainer">
                  <div className="locationLabel">
                    Location:
                  </div>
                  <div className="locationText">
                    {/* {location} */}
                  </div>
                </div>
                <div className='dividerContainer'>
                  <hr className='dividerHr' />
                </div>
                <div className="locationContainer">
                  <div className="locationLabel">
                    No. of Rooms:
                  </div>
                  <div className="locationText">
                    {/* {room} */}
                  </div>
                </div>
                <div className='dividerContainer'>
                  <hr className='dividerHr' />
                </div>
                <div className="descriptionContainer">
                  <div className="descriptionLabel">
                    Description:
                  </div>
                  <div className="descriptionText">
                    {/* {description} */}
                  </div>
                </div>
                <div className='dividerContainer'>
                  <hr className='dividerHr' />
                </div>
                <div className="locationContainer">
                  <div className="locationLabel">
                    Slogan:
                  </div>
                  <div className="locationText">
                    {/* {slogan} */}
                  </div>
                </div>
                <div className='dividerContainer'>
                  <hr className='dividerHr' />
                </div>

                <div className="descriptionContainer">
                  <div className="descriptionLabel">
                    AI Description:
                  </div>
                  <div className="descriptionText">
                    {/* {customAIDescription} */}
                  </div>
                </div>
                
              </div>
            </div>}
        </Card>
      </Grid>

      {/* <Dialog open={openDeleteModal} onClose={() => setOpenDeleteModal(fasle)}>
        <DialogTitle sx={{ color: 'red' }}>
          Warning!!!
        </DialogTitle>
        <DialogContent>
          Are you sure you want to delete hotel details?
        </DialogContent>
        <DialogActions>
          <Button variant='contained' sx={{ color: 'white !important', backgroundColor: 'red' }} onClick={() => handleDeleteHotelFromRedux()}>
            DELETE
          </Button>
          <Button onClick={() => setOpenDeleteModal(false)}>
            CLOSE
          </Button>
        </DialogActions>
      </Dialog> */}
      {/* <RegisterHotelForm open={openAddBuisness} setOpenAddBuisness={setOpenAddBuisness} /> */}

      {/* <EditBuisnessDialog open={openEditBuisness} setOpenEditBuisness={setOpenEditBuisness} /> */}
    </DashboardLayout>
  </>)
};
// Buisness.defaultProps = {
//   width: "auto",
//   sorted: "none",
//   align: "left",
// };
// Buisness.propTypes = {
//   width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   children: PropTypes.node.isRequired,
//   sorted: PropTypes.oneOf([false, "none", "asce", "desc"]),
//   align: PropTypes.oneOf(["left", "right", "center"]),
// };
export default HotelDetails;