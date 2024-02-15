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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "views/dashboard/data/reportsBarChartData";
import reportsLineChartData from "views/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "views/dashboard/components/Projects";
import OrdersOverview from "views/dashboard/components/OrdersOverview";
import { useEffect, useState } from "react";

const Dashboard = (props) => {
  const { sales, tasks } = reportsLineChartData;
  const {
    getAllUsers,
    allUsersData,
    allHotelsData,
    getAllHotels,
  } = props;
  useEffect(() => {
    const getUsersFromRedux = async () => {
      try {
        await getAllUsers();
        await getAllHotels();
      }
      catch (err) {
        alert('Something went wrong!!!')
      }
    };

    getUsersFromRedux();
  }, []);

  const [activeUserCount, setActiveUserCount] = useState(0);
  const [activeBusinessCount, setActiveBusinessCount] = useState(0);

  useEffect(() => {
    let count = 0;
    allUsersData && allUsersData.length > 0 && allUsersData.map(user => {
      if(user.isActivated)
        count++;
    });
    setActiveUserCount(count);
    count = 0;
    allHotelsData && allHotelsData.length > 0 && allHotelsData.map(hotel => {
      if(hotel.isActive) count++;
    });
    setActiveBusinessCount(count);
  }, [allUsersData, allHotelsData])


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Total Users"
                count={allUsersData ? allUsersData.length : 'NA'}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Total active Users"
                count={activeUserCount}
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Total businesses"
                count={allHotelsData ? allHotelsData.length : 0}
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Total Active businesses"
                count={activeBusinessCount}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="Registrations per week"
                  description="Profits earned by each of your Buisnesses"
                  date="last calculated 1 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="Hotel per month"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        {/* <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox> */}
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
