import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { SignUpUrl} from '../../Constants/UrlConstants';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const theme = createTheme();

export default function SignUp(response) {
  // const loginhandle =()=>{
   
  //   navigate('/authentication')
  // }

 const [errorMessage, setErrorMessage] = useState('');
 const [svgCode, setSvgCode] = useState('');
 const country= [
    {name:'Afghanistan'},{name:'Albania'},{name:'Algeria'},{name:'Andorra'},{name:'Angola'},{name:'Antigua and Barbuda'},{name:'Argentina'},{name:'Armenia'},{name:'Australia'},{name:'Austria'},{name:'Azerbaijan'},{name:'The Bahamas'},{name:'Bahrain'},{name:'Bangladesh'},{name:'Barbados'},{name:'Belarus'},{name:'Belgium'},{name:'Belize'},{name:'Benin'},{name:'Bhutan'},{name:'Bolivia'},{name:'Bosnia and Herzegovina'},{name:'Botswana'},{name:'Brazil'},{name:'Brunei'},{name:'Bulgaria'},{name:'Burkina Faso'},{name:'Burundi'},{name:'Cabo Verde'},{name:'Cambodia'},{name:'Cameroon'},{name:'Canada'},{name:'Central African Republic'},{name:'Chad'},{name:'Chile'},{name:'China'},{name:'Colombia'},{name:'Comoros'},{name:'Congo, Democratic Republic of the'},{name:'Congo, Republic of the'},{name:'Costa Rica'},{name:'Côte d’Ivoire'},{name:'Croatia'},{name:'Cuba'},{name:'Cyprus'},{name:'Czech Republic'},{name:'Denmark'},{name:'Djibouti'},{name: 'Dominica'},{name:'Dominican Republic'},{name:'East Timor (Timor-Leste)'},{name:'Ecuador'},{name:'Egypt'},{name:'El Salvador'},{name:'Equatorial Guinea'},{name:'Eritrea'},{name:'Estonia'},{name:'Eswatini'},{name:'Ethiopia'},{name:'Fiji'},{name:'Finland'},{name:'France'},{name:'Gabon'},{name:'The Gambia'},{name:'Georgia'},{name:'Germany'},{name:'Ghana'},{name:'Greece'},{name:'Grenada'},{name:'Guatemala'},{name:'Guinea'},{name:'Guinea-Bissau'},{name:'Guyana'},{name:'Haiti'},{name:'Honduras'},{name:'Hungary'},{name:'Iceland'},{name:'India'},{name:'Indonesia'},{name:'Iran'},{name:'Iraq'},{name:'Ireland'},{name:'Israel'},{name:'Italy'},{name:'Jamaica'},{name:'Japan'},{name:'Jordan'},{name:'Kazakhstan'},{name:'Kenya'},{name:'Kiribati'},{name:'Korea, North'},{name:'Korea, South'},{name:'Kosovo'},{name:'Kuwait'},{name:'Kyrgyzstan'},{name:'Laos'},{name:'Latvia'},{name:'Lebanon'},{name:'Lesotho'},{name:'Liberia'},{name:'Libya'},{name:'Liechtenstein'},{name:'Lithuania'},{name:'Luxembourg'},{name:'Madagascar'},{name:'Malawi'},{name:'Malaysia'},{name:'Maldives'},{name:'Mali'},{name:'Malta'},{name:'Marshall Islands'},{name:'Mauritania'},{name:'Mauritius'},{name:'Mexico'},{name:'Micronesia, Federated States of'},{name:'Moldova'},{name:'Monaco'},{name:'Mongolia'},{name:'Montenegro'},{name:'Morocco'},{name:'Mozambique'},{name:'Myanmar (Burma)'},{name:'Namibia'},{name:'Nauru'},{name:'Nepal'},{name:'Netherlands'},{name:'New Zealand'},{name:'Nicaragua'},{name:'Niger'},{name:'Nigeria'},{name:'North Macedonia'},{name:'Norway'},{name:'Oman'},{name:'Pakistan'},{name:'Palau'},{name:'Panama'},{name:'Papua New Guinea'},{name:'Paraguay'},{name:'Peru'},{name:'Philippines'},{name:'Poland'},{name:'Portugal'},{name:'Qatar'},{name:'Romania'},{name:'Russia'},{name:'Rwanda'},{name:'Saint Kitts and Nevis'},{name:'Saint Lucia'},{name:'Saint Vincent and the Grenadines'},{name:'Samoa'},{name:'San Marino'},{name:'Sao Tome and Principe'},{name:'Saudi Arabia'},{name:'Senegal'},{name:'Serbia'},{name:'Seychelles'},{name:'Sierra Leone'},{name:'Singapore'},{name:'Slovakia'},{name:'Slovenia'},{name:'Solomon Islands'},{name:'Somalia'},{name:'South Africa'},{name:'Spain'},{name:'Sri Lanka'},{name:'Sudan'},{name:'Sudan, South'},{name:'Suriname'},{name:'Sweden'},{name:'Switzerland'},{name:'Syria'},{name:'Taiwan'},{name:'Tajikistan'},{name:'Tanzania'},{name:'Thailand'},{name:'Togo'},{name:'Tonga'},{name:'Trinidad and Tobago'},{name:'Tunisia'},{name:'Turkey'},{name:'Turkmenistan'},{name:'Tuvalu'},{name:'Uganda'},{name:'Ukraine'},{name:'United Arab Emirates'},{name:'United Kingdom'},{name:'United States'},{name:'Uruguay'},{name:'Uzbekistan'},{name:'Vanuatu'},{name:'Vatican City'},{name:'Venezuela'},{name:'Vietnam'},{name:'Yemen'},{name:'Zambia'},{name:'Zimbabwe'},
     
];
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobile:'',
    country:'',
    errors: [],
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
    formData.append('firstName', inputs.firstName);
    formData.append('lastName', inputs.lastName);
    formData.append('email', inputs.email);
    formData.append('password', inputs.password);
    formData.append('mobile', inputs.mobile);
    formData.append('country', inputs.country);
    console.log(inputs); 
    axios.post(SignUpUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        
      },
    }).then(async (response) => {
      console.log(response)
      setSvgCode(response.data.qrCodeImage);
       localStorage.setItem('login', true)
      localStorage.setItem('qrcode', response.data.qrCodeImage);
      localStorage.setItem('Id', response.data.user_id);
      if (response.data.result===true) {
        
        toast('User Added Succesfully!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }      
);
        setTimeout(() => {
           navigate('/authentication');
        }, 2000);

      }    
     })
    .catch((error) => {
      console.log(error.response.data.errors);
      setErrorMessage(error.response.data.errors);
    });
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
              marginBottom: 8
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <ToastContainer />
            <Box component="form" validate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                   // required
                    fullWidth
                    type="text"
                    id="firstName"
                    label="First Name"
                    autoFocus
                    value={inputs.firstName}
                    onChange={handleOnChange}
                    inputProps={{ maxLength: 10 }}
                  />
                  {errorMessage && (
                    <p className="error" style={{color:"red"}}> {errorMessage.firstName} </p>
)}
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    //required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    value={inputs.lastName}
                    onChange={handleOnChange}
                    type="text"
                    inputProps={{ maxLength: 10 }}
                  /> 
                   {errorMessage && (
                    <p className="error" style={{color:"red"}}> {errorMessage.lastName} </p>
)}
                  {/* {userErr?<span>last name is not less then 3 character</span>: ""}               */}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    //required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={inputs.email}
                    onChange={handleOnChange}
                    type="text"
                  />
                   {errorMessage && (
                    <p className="error" style={{color:"red"}}> {errorMessage.email} </p>
)}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                   // required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={inputs.password}
                    onChange={handleOnChange}
                  />
                   {errorMessage && (
                    <p className="error" style={{color:"red"}}> {errorMessage.password} </p>
)}
                </Grid>

                <Grid item xs={12}>
                  <TextField
                   // required
                    fullWidth
                    id="mobile"
                    label="Mobile Number"
                    name="mobile"
                    type="text"
                    autoComplete="mobile"
                    value={inputs.mobile}
                    onChange={handleOnChange}
                   // pattern="[0-9]*"
                   // inputProps={{ maxLength: 10, minLength: 10}}
                  />
                   {errorMessage && (
                    <p className="error" style={{color:"red"}}> {errorMessage.mobile} </p>
)}
                </Grid>
            <Grid item xs={12}>
            <Box sx={{ minWidth: 120}}>
             <FormControl fullWidth>
             <InputLabel id="country">Country </InputLabel>
         <Select
         // required
          labelId="country"
          typr="text"
          id="country" 
          name="country"
          label="Country"      
           value={inputs.country}
           onChange={handleOnChange}
         >
           {country.map((countries) => (
              <MenuItem value={countries.name}>{countries.name}</MenuItem>
            ))}
        </Select>
        {errorMessage && (
                    <p className="error" style={{color:"red"}}> {errorMessage.country} </p>
)}
      </FormControl>
    </Box>
    </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
              // onClick={() =>loginhandle()}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                value="button"
              >
                Sign Up
              </Button>
              {/* <div dangerouslySetInnerHTML={{ __html: svgCode}} /> */}
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/sign-in" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}