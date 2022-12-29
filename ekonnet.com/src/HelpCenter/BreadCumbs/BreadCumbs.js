import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
import {Link} from "react-router-dom";
import Stack from '@mui/material/Stack';

// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
function handleClick(event) {
  event.preventDefault();
  alert('You clicked a breadcrumb.');
}


export default function CustomSeparator() {

//  const sampleItems=[
//     {
//         href:"/",text:"home"
//     }
//     {
//         href:"/getting-started",text:"getting started"
//     }
//  ]

  const breadcrumbs = [
    <Link underline="hover" key="1" color="#00C4F4" href="/" onClick={handleClick}
       
   >
    Help Center
    </Link>,

    <Typography key="3" color="#fff">
      Getting Started   
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb" color="#00C4F4">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}