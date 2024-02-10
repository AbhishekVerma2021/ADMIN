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

// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";
import './ProfilesList.css';
// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import glassDoor from '../../../Images/glassdoor.png';
import instagram from '../../../Images/instagram.png';
import maps from '../../../Images/maps.png';
import { IconButton } from "@mui/material";
function ProfilesList({ title, profiles, shadow, allReviewsData }) {
  // const { customer_feedback, starRating, platformName } = all
  const renderProfiles = allReviewsData.map(({ platform, customer_feedback, starRating }, index) => {
    const platformIcon = platform === 'google' ? maps : platform === 'instagram' ? instagram : glassDoor;
    return <>
      {index < 4 &&
        <MDBox key={name} component="li" display="flex" alignItems="center" py={1} mb={1}>
          <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
            <MDTypography sx={{ textTransform: 'capitalize' }} variant="button" fontWeight="medium">
              {platform}
            </MDTypography>
            <MDTypography sx={{ textTransform: 'capitalize' }} variant="caption" color="text">
              ⭐{starRating}
            </MDTypography>
            <MDTypography sx={{ textTransform: 'capitalize' }} variant="caption" className="reviewTextContainer" color="text">
              {customer_feedback}
            </MDTypography>
          </MDBox>
          <MDBox ml="auto">
            {true ? (
              // <IconButton>
              // </IconButton>
              <MDButton component={Link} to={'/allReviews'} variant="text" color="info">
                <img height={30} src={platformIcon} alt="Icon" />
              </MDButton>
            ) : (
              <MDButton
                component="a"
                // href={action.route}
                target="_blank"
                rel="noreferrer"
                variant="text"
              // color={action.color}
              >
                {/* {action.label} */}
              </MDButton>
            )}
          </MDBox>
        </MDBox>
      }</>
  });

  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      <MDBox pt={2} px={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        {allReviewsData && allReviewsData.length === 0 ?
          <MDBox component="ul" display="flex" flexDirection="column" sx={{ color: 'grey' }} p={0} m={0}>
            No reviews posted yet
          </MDBox>
          :
          <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
            {renderProfiles}
          </MDBox>
        }
      </MDBox>
    </Card>
  );
}

// Setting default props for the ProfilesList
ProfilesList.defaultProps = {
  shadow: true,
};

// Typechecking props for the ProfilesList
ProfilesList.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
  shadow: PropTypes.bool,
};

export default ProfilesList;
