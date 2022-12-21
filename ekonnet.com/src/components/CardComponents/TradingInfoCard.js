import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Container } from 'react-bootstrap';
import exchangImg from '../assets/exchange-img.png'

export default function ActionAreaCard() {
  return (
    <Container>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
           className='img-fluid'
            image={exchangImg}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Exchange
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Ekonnet offers order books with top tier liquidity,
              allowing users to easily exchange Bitcoin, Ethereum,
              EOS, Litecoin, Ripple, NEO and many other digital assets
              with minimal slippage. Ekonnet also boasts a suite of order
              types to help traders take advantage of every situation

            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}