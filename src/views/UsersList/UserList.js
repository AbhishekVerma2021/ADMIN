/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import './UserList.css';

// Data
import authorsTableData from "views/UsersList/data/authorsTableData";
import projectsTableData from "views/UsersList/data/projectsTableData";
import { useEffect, useState } from "react";
import MDAvatar from "components/MDAvatar";
import glassDoor from '../../Images/glassdoor.png';
import instagram from '../../Images/instagram.png';
import maps from '../../Images/maps.png';
import twitter from '../../Images/twitter.png';
import facebook from '../../Images/facebook.png';
import MDBadge from "../../components/MDBadge";

import ViewReviewDialog from "./ViewReviewDialog";
import Projects from "views/dashboard/components/Projects";
import { Icon, Switch } from "@mui/material";
import MDProgress from "components/MDProgress";
import { Google } from "@mui/icons-material";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import accountIcon from '../../Images/account.png';

const UserList = (props) => {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [rowsData, setRowsData] = useState([]);
  const [openReviewDialog, setOpenReviewDialog] = useState(false);
  const [secTableRowsData, setSecTableRowsData] = useState([]);
  const [dialogData, setDialogData] = useState({});
  const [userData, setUserData] = useState({});
  const {
    getReviewsData,
    getAllUsers,
    allUsersData,
    disableUser,
    enableUser,
    getUserHotelData,
    selectedUserHotelData,
  } = props;


  const handleDisableUser = async (uid) => {
    try {
      await disableUser(uid);
    }
    catch (e) {
      alert("Something went wrong!!")
    };
  };

  const handleEnableUser = async (uid) => {
    try {
      await enableUser(uid);
    }
    catch (e) {
      alert("Something went wrong!!")
    };
  };

  const getUserInfo = async (uid) => {
    try {
      await getUserHotelData(uid);
    }
    catch (e) {
      alert("Something went wrong!!");
    }
  };

  useEffect(() => {
    setUserData(selectedUserHotelData);
  }, [selectedUserHotelData]);

  const Author = ({ image, name, description }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={accountIcon} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" className="platformNameInList" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption" component="div" className="reviewTextForReview">{description}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      {/* <MDTypography variant="caption">{description}</MDTypography> */}
    </MDBox>
  );

  function dateDifference(date1) {
    // Ensure date1 is the earlier date
    let date2 = new Date();
    if (date1 > date2) {
      [date1, date2] = [date2, date1];
    }

    const date1Y = date1.getFullYear();
    const date2Y = date2.getFullYear();
    const date1M = date1.getMonth();
    const date2M = date2.getMonth();
    const date1D = date1.getDate();
    const date2D = date2.getDate();

    let years = date2Y - date1Y;
    let months = date2M - date1M;
    let days = date2D - date1D;

    if (months < 0) {
      years--;
      months += 12;
    }

    if (days < 0) {
      months--;
      const previousMonth = new Date(date2Y, date2M, 0);
      days += previousMonth.getDate();
      if (months < 0) {
        years--;
        months += 12;
      }
    }

    return `${years}Y ${months}M ${days}D`;
  }

  // const givenDate = new Date("2024-01-18T16:42:19.782Z");
  // const today = new Date();

  // console.log();




  const dataForRows = (reviewsData) => {
    let allRowsData = [];
    // const [hook, setHook] = useState();
    // console.log(reviewsData)
    allUsersData && allUsersData.length > 0 && allUsersData.map(user => {
      const { name, email, username, isActivated, createdAt, business_id, _id, isPremium } = user;
      const hotelData = business_id;
      const platformIcon = '' === 'google' ? maps : '' === 'instagram' ? instagram : '' === 'glassdoor' ? glassDoor : '' === 'twitter' ? twitter : facebook;
      const date = new Date(createdAt);
      const formattedDate = date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      });

      const timeDate = new Date(createdAt);
      const formattedTime = timeDate.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
      const ceratedDate = new Date(createdAt);
      // const [userState, setUserState] = useState(isActivated)
      let singleData = {
        author: <Author image={platformIcon} name={name} description={email} />,
        userStatus: <MDBox ml={-1}>
          <MDBadge badgeContent={isActivated ? "ACTIVE" : "INACTIVE"} sx={{ cursor: 'pointer' }} color={isActivated ? "success" : "error"} variant="gradient" size="sm" />
          <Switch checked={isActivated} onClick={() => isActivated ? handleDisableUser(_id) : handleEnableUser(_id)} />
        </MDBox>,
        function: <Job title={username} description="Organization" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent={isPremium ? "ACTIVE" : "INACTIVE"} color={isPremium ? "success" : "error"} variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {dateDifference(ceratedDate)}
          </MDTypography>
        ),
        action: (
          <MDTypography onClick={() => { setDialogData(hotelData); getUserInfo(_id); setOpenReviewDialog(true) }} component="a" href="#" variant="caption" color="text" fontWeight="medium">
            More
          </MDTypography>
        ),
      };
      allRowsData.push(singleData);
    });
    // console.log(allRowsData);
    setRowsData(allRowsData);
  };

  // const Project = ({ image, name }) => (
  //   <MDBox display="flex" alignItems="center" lineHeight={1}>
  //     <MDAvatar src={image} name={name} size="sm" variant="rounded" />
  //     <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
  //       {name}
  //     </MDTypography>
  //   </MDBox>
  // );

  // const Progress = ({ color, value }) => (
  //   <MDBox display="flex" alignItems="center">
  //     <MDTypography variant="caption" color="text" fontWeight="medium">
  //       {value}%
  //     </MDTypography>
  //     <MDBox ml={0.5} width="9rem">
  //       <MDProgress variant="gradient" color={color} value={value} />
  //     </MDBox>
  //   </MDBox>
  // );

  // const dataForSecondTable = () => {
  //   let googleCount = 0, glassDoorCount = 0, facebookCount = 0, twitterCount = 0, instagramCount = 0;
  //   allUsersData && allUsersData.length > 0 && allUsersData.map(review => {
  //     const { platform } = review;
  //     switch (platform) {
  //       case 'glassdoor': {
  //         glassDoorCount++;
  //         break;
  //       }
  //       case 'instagram': {
  //         instagramCount++;
  //         break;
  //       }
  //       case 'facebook': {
  //         facebookCount++;
  //         break;
  //       }
  //       case 'twitter': {
  //         twitterCount++;
  //         break;
  //       }
  //       case 'google': {
  //         googleCount++;
  //         break;
  //       }
  //       default: break;
  //     };
  //   });
  //   const totalReviews = googleCount + glassDoorCount + instagramCount + twitterCount + facebookCount;
  //   let gPercent = (googleCount / totalReviews) * 100, tPercent = (twitterCount / totalReviews) * 100, glPercent = (glassDoorCount / totalReviews) * 100, fPercent = (facebookCount / totalReviews) * 100, iPercent = (instagramCount / totalReviews) * 100;
  //   const data = [{
  //     project: <Project image={maps} name="Google Maps" />,
  //     budget: (
  //       <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
  //         {googleCount}
  //       </MDTypography>
  //     ),
  //     status: (
  //       <MDBox ml={-1}>
  //         <MDBadge badgeContent='active' color="success" variant="gradient" size="sm" />
  //       </MDBox>
  //     ),
  //     completion: <Progress color={gPercent > 80 ? "success" : gPercent > 40 ? "info" : "error"} value={gPercent.toFixed(2)} />,
  //     // action: (
  //     //   <MDTypography component="a" href="#" color="text">
  //     //     <Icon>more_vert</Icon>
  //     //   </MDTypography>
  //     // ),
  //   },
  //   {
  //     project: <Project image={instagram} name="Instagram" />,
  //     budget: (
  //       <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
  //         {instagramCount}
  //       </MDTypography>
  //     ),
  //     status: (
  //       <MDBox ml={-1}>
  //         <MDBadge badgeContent='OFFLINE' color="dark" variant="gradient" size="sm" />
  //       </MDBox>
  //     ),
  //     completion: <Progress color={iPercent > 80 ? "success" : iPercent > 40 ? "info" : "error"} value={iPercent.toFixed(2)} />,
  //     // action: (
  //     //   <MDTypography component="a" href="#" color="text">
  //     //     <Icon>more_vert</Icon>
  //     //   </MDTypography>
  //     // ),
  //   },
  //   {
  //     project: <Project image={twitter} name="Twitter" />,
  //     budget: (
  //       <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
  //         {twitterCount}
  //       </MDTypography>
  //     ),
  //     status: (
  //       <MDBox ml={-1}>
  //         <MDBadge badgeContent='active' color="success" variant="gradient" size="sm" />
  //       </MDBox>
  //     ),
  //     completion: <Progress color={tPercent > 80 ? "success" : tPercent > 40 ? "info" : "error"} value={tPercent.toFixed(2)} />,
  //     // action: (
  //     //   <MDTypography component="a" href="#" color="text">
  //     //     <Icon>more_vert</Icon>
  //     //   </MDTypography>
  //     // ),
  //   },
  //   {
  //     project: <Project image={glassDoor} name="Glassdoor" />,
  //     budget: (
  //       <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
  //         {glassDoorCount}
  //       </MDTypography>
  //     ),
  //     status: (
  //       <MDBox ml={-1}>
  //         <MDBadge badgeContent='active' color="success" variant="gradient" size="sm" />
  //       </MDBox>
  //     ),
  //     completion: <Progress color={glPercent > 80 ? "success" : glPercent > 40 ? "info" : "error"} value={glPercent.toFixed(2)} />,
  //     // action: (
  //     //   <MDTypography component="a" href="#" color="text">
  //     //     <Icon>more_vert</Icon>
  //     //   </MDTypography>
  //     // ),
  //   },
  //   {
  //     project: <Project image={facebook} name="Facebook" />,
  //     budget: (
  //       <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
  //         {facebookCount}
  //       </MDTypography>
  //     ),
  //     status: (
  //       <MDBox ml={-1}>
  //         <MDBadge badgeContent='OFFLINE' color="dark" variant="gradient" size="sm" />
  //       </MDBox>
  //     ),
  //     completion: <Progress color={fPercent > 80 ? "success" : fPercent > 40 ? "info" : "error"} value={fPercent.toFixed(2)} />,
  //     // action: (
  //     //   <MDTypography component="a" href="#" color="text">
  //     //     <Icon>more_vert</Icon>
  //     //   </MDTypography>
  //     // ),
  //   }];
  //   setSecTableRowsData(data);
  // };


  useEffect(() => {
    const getUsersFromRedux = async () => {
      try {
        await getAllUsers();
      }
      catch (err) {
        alert('Something went wrong!!!')
      }
    };

    getUsersFromRedux();
  }, [])

  useEffect(() => {
    dataForRows(allUsersData);
    // dataForSecondTable();
  }, [allUsersData])


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Users
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows: rowsData }}
                  allUsersData={allUsersData}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
          {/* <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Reviews Statics
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: secTableRowsData }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid> */}
        </Grid>
      </MDBox>
      <Footer />
      <ViewReviewDialog open={openReviewDialog} handleOpen={setOpenReviewDialog} data={dialogData} />
    </DashboardLayout>
  );
}

export default UserList;
