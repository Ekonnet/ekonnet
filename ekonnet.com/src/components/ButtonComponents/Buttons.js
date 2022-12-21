import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Buttons() {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div className='d-flex gap-2'>
        <Button color="secondary" href='/sign-up' variant="contained" size="medium">Sign Up</Button>
        <Button color="primary" href='/sign-in' variant="contained" size="medium">Sign In</Button>
      </div>
    </Box>
  );
}