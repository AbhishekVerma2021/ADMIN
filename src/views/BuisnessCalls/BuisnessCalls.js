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
import './BuisnessCalls.css';

// Data
import authorsTableData from "views/BuisnessCalls/data/authorsTableData";
import projectsTableData from "views/BuisnessCalls/data/projectsTableData";
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
import { Icon } from "@mui/material";
import MDProgress from "components/MDProgress";
import { Google } from "@mui/icons-material";
import businessIcon from '../../Images/business.png';

const BuisnessCalls = (props) => {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [rowsData, setRowsData] = useState([]);
  const [openReviewDialog, setOpenReviewDialog] = useState(false);
  const [secTableRowsData, setSecTableRowsData] = useState([]);
  const [hotel, setHotel] = useState('');
  const {
    getReviewsData,
    allReviewsData,
    getAllHotels,
    allHotelsData,
    getCalls,
    allBuisnessCallsData,
  } = props;

  const Author1 = ({ image, name, description }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
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

  const dataForRows = () => {
    let allRowsData = [];
    // console.log(reviewsData)
    allBuisnessCallsData && allBuisnessCallsData.length > 0 && [...allBuisnessCallsData].reverse().map(buisness => {
      const { name, businessEntityName, createdAt, emailId, address, mobileNumber } = buisness;

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

      // console.log(room)
      let singleData = {
        author: <Author1 image={businessIcon} name={businessEntityName} description={emailId} />,
        reviewCount: <Job title={name} description="Organization" />,
        function: <Job title={mobileNumber} description="Organization" />,
        status: (
          <MDBox ml={-1} sx={{ color: 'white !important' }}>
            {`${formattedTime} , ${formattedDate}`}
          </MDBox>
        ),
        action: (
          <MDTypography onClick={() => { setHotel(address); setOpenReviewDialog(true) }} component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View Full address
          </MDTypography>
        ),
      };
      allRowsData.push(singleData);
    });
    // console.log(allRowsData);
    setRowsData(allRowsData);
  };

  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );




  useEffect(() => {
    const getCallsFromRedux = async () => {
      try {
        // await getAllHotels();
        await getCalls();
      }
      catch (err) {
        alert('Something went wrong!!!')
      }
    };

    getCallsFromRedux();
  }, [])

  useEffect(() => {
    dataForRows();
    // console.log(allBuisnessCallsData)
  }, [allBuisnessCallsData])


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
                  All Business Calls
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows: rowsData }}
                  // allReviewsData={allReviewsData}
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
      <ViewReviewDialog open={openReviewDialog} handleOpen={setOpenReviewDialog} address={hotel} />
    </DashboardLayout>
  );
}

export default BuisnessCalls;
