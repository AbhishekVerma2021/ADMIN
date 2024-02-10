// import React, { useState } from 'react';
// import { Box, Card, CardContent, Typography, TextField, Button, Rating } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
// import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';

// const customIcons = {
//   1: {
//     icon: <SentimentVeryDissatisfiedIcon />,
//     label: 'Very Bad',
//   },
//   2: {
//     icon: <SentimentDissatisfiedIcon />,
//     label: 'Bad',
//   },
//   3: {
//     icon: <SentimentSatisfiedIcon />,
//     label: 'Neutral',
//   },
//   4: {
//     icon: <SentimentSatisfiedAltIcon />,
//     label: 'Good',
//   },
//   5: {
//     icon: <SentimentVerySatisfiedIcon />,
//     label: 'Excellent',
//   },
// };

// function IconContainer(props) {
//   const { value, ...other } = props;
//   return <span {...other}>{customIcons[value].icon}</span>;
// }

// export default function SurveyCard() {
//   const [value, setValue] = useState(2);

//   return (
//     <DashboardLayout>
//       <Card sx={{ maxWidth: 345, backgroundColor: '#4B0082', color: '#FFFFFF' }}>
//         <CardContent>
//           <Typography variant="h5" component="div">
//             SURVEY
//           </Typography>
//           <Typography sx={{ mb: 1.5 }}>
//             An mei sadipscing dissentiet, eos ea partem viderer facilisi.
//           </Typography>
//           <Typography variant="body2">
//             - The Satisfyc Team
//           </Typography>
//           <Box
//             sx={{
//               '& > legend': { mt: 2 },
//             }}
//           >
//             <Typography component="legend">How was the service provided?</Typography>
//             <Rating
//               name="customized-icons"
//               defaultValue={2}
//               getLabelText={(value) => customIcons[value].label}
//               IconContainerComponent={IconContainer}
//               onChange={(event, newValue) => {
//                 setValue(newValue);
//               }}
//             />
//           </Box>
//           <TextField
//             id="outlined-multiline-static"
//             label="Your Review"
//             multiline
//             rows={4}
//             defaultValue=""
//             variant="filled"
//             sx={{ width: '100%', backgroundColor: '#7B1FA2', margin: '8px 0' }}
//           />
//           <Button variant="contained" sx={{ backgroundColor: '#FFD700', color: '#000', '&:hover': { backgroundColor: '#FFEA00' } }}>
//             Next
//           </Button>
//         </CardContent>
//       </Card>
//     </DashboardLayout>
//   );
// }
import * as React from 'react';
import { Box, Card, CardContent, Typography, TextField, Button, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import './SurveyCard.css';
// Custom Styled Rating for colors and icons
const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

// Custom Styled Button
const NextButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.warning.main,
  color: theme.palette.getContrastText(theme.palette.warning.main),
  '&:hover': {
    backgroundColor: theme.palette.warning.dark,
  },
  [theme.breakpoints.down('sm')]: {
    // Custom responsiveness
    width: '100%',
  },
}));

// SurveyCard Component
export default function SurveyCard() {
  const [value, setValue] = React.useState(2);

  return (
    <DashboardLayout>

      <Box sx={{ maxWidth: '400px', mx: 'auto', p: 2 }}>
        <Card sx={{ bgcolor: 'primary.dark', color: 'white', boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              SURVEY
            </Typography>
            <Typography variant="body2">
              An mei sadipscing dissentiet, eos ea partem viderer facilisi. Brute nostrud democritum in vis, nam ei erat zril mediocrem. No postea diceret vix.
            </Typography>
            <Typography sx={{ mb: 2 }} color="text.secondary">
              - The Satisfyc Team
            </Typography>
            <StyledRating
              name="customized-color"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
              precision={0.5}
              icon={<SentimentVerySatisfiedIcon fontSize="inherit" />}
              emptyIcon={<SentimentVeryDissatisfiedIcon fontSize="inherit" />}
            />
            <TextField
              fullWidth
              id="survey-comment"
              label="Your Review"
              multiline
              rows={4}
              placeholder="Type your review here..."
              margin="normal"
              variant="filled"
              InputLabelProps={{
                style: { color: '#fff' },
              }}
              InputProps={{
                style: { color: '#fff', backgroundColor: '#7B1FA2' },
              }}
            />
            <NextButton variant="contained" size="large">
              Next
            </NextButton>
          </CardContent>
        </Card>
      </Box>
    </DashboardLayout>
  );
}
