import * as React from 'react';
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
import { Helmet } from 'react-helmet';
import axios from 'axios'
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

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

export default function SignUp() {
  const[firstName, setfirstname]=useState('')
  const[lastName, setlastname]=useState('')
  const[email, setemail]=useState('')
  const[password, setpassword]=useState('')
  const[mobile, setmobile]=useState('')
  const[country, setcountry]=useState('')
  const navigate = useNavigate()
  //const[data, setData]= useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({
    //   firstname: data.post('firstName'),
    //   lastname: data.post('lastName'),
    //   email: data.post('email'),
    //   password: data.post('password'),
    //   mobile: data.post('mobile'),
    //   country: data.post('country')
    // });
    // const data = new FormData(e.currentTarget);
    axios.post('https://ekonnet.com/ekoapi/register',{
               firstname : firstName,
               lastname : lastName,
               email: email,
               password: password,
               mobile: mobile,
               country: country
    })
    .then(result=>{
      console.log(result)
      //setData(result) 
      navigate('/sign-in');  
    })
    .catch(error=>{
      console.log(error)
    })
    
  };

  return (
    <>
     <Helmet>
        <title>Ekonnet | Sign Up </title>
      </Helmet>
    <ThemeProvider theme={theme}>
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField onChange={(e)=> setfirstname(e.target.value)} value={firstName} 
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField onChange={(e)=>setlastname(e.target.value)} value={lastName}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField onChange={(e)=> setemail(e.target.value)} value={email} 
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField onChange={(e)=> setpassword(e.target.value)} value={password}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField onChange={(e)=> setmobile(e.target.value)} value={mobile}
                  // required
                  fullWidth
                  name="mobile"
                  label="Mobile No"
                  type="mobile"
                  id="mobile"
                  autoComplete="mobile"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField onChange={(e)=> setcountry(e.target.value)} value={country}
                  // required
                  fullWidth
                  name="country"
                  label="Country"
                  type="country"
                  id="country"
                  autoComplete="country"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            {/* <Button onClick ={handleApi} */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/sign-in" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    </>
  );
}