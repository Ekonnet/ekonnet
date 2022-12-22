import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// import styled from 'styled-components'

export default function Buttons(props) {


  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div className='d-flex gap-3'>
        <Button className="sign-up-btn " bg="linear-gradient(90deg, #BC35BC 0%, #124EE8 100%)" href='/sign-up' variant="contained" size="medium">{props.service} {props.signup}</Button>
        <Button className='sign-in-btn' href='/sign-in' variant="contained" size="medium">Sign In</Button>
      </div>
    </Box>
  );
}