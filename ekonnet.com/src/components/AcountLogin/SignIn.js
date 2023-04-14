import * as React from 'react';
//import PropTypes from 'prop-types'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../AcountLogin/login.css';
import { Helmet } from 'react-helmet';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useState } from 'react';
import {SignInUrl } from '../../Constants/UrlConstants';
//import { ToastContainer, toast } from 'react-toastify';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Ekonnet.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
 
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const handleOnChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append('email', inputs.email);
    formData.append('password', inputs.password);
    console.log(formData)
    axios.post(SignInUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
     
    }
    ).then(async (response) => {
      console.log(response)
      // localStorage.setItem('token', response.data.access_token);
      // localStorage.setItem('name', response.data.data.firstname);
      // localStorage.setItem('pass', response.data.data.password);
      // localStorage.setItem('Email', response.data.data.email);
      // localStorage.setItem('Status', response.data.status);



      if (response) {
        toast('User Added Succesfully!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setTimeout(() => {
          navigate('/');
        }, 3000);

      }
    }).catch((error) => {
      console.log(error);
    });

  };  
  return (
    <>
       <Helmet>
        <title>Ekonnet | Sign In </title>
      </Helmet>
    
    <ThemeProvider theme={theme}>
<section id='bgcolor'>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} Validate sx={{ mt: 1 }}>
            <TextField
              margin="normal" 
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={inputs.email}
              onChange={handleOnChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={inputs.password}
              onChange={handleOnChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            {/* {localStorage.getItem('token') && (
            <div>
               {localStorage.getItem('token')}
            </div>
         )} */}
         {/* {localStorage.getItem('name') && (
            <div>
               {localStorage.getItem('name')}
            </div>
         )} */}
         {/* {localStorage.getItem('pass') && (
            <div>
               {localStorage.getItem('pass')}
            </div>
         )} */}
          {/* {localStorage.getItem('Email') && (
            <div>
               {localStorage.getItem('Email')}
            </div>
         )} */}
         {/* {localStorage.getItem('Status') && (
            <div>
               {localStorage.getItem('Status')}
            </div>
         )} */}
            <Grid container>
              <Grid item xs>
                <Link href="forgot-password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      </section>
    </ThemeProvider>
    </>
    
  );
}
// SignIn.propTypes = {
//   setToken: PropTypes.func.isRequired
// }