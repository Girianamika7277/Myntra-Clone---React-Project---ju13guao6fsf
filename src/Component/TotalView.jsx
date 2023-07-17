import { useState, useEffect, useContext } from 'react';

import { Box, Typography, styled } from '@mui/material';
import { DataWishlistContext } from '../DataApp';
// import { useDispatch } from 'react-redux';
// import { getCartTotal } from '../../feature/cartSlice';

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    borderBottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
    color: #878787;
`;

const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }
`;

const Price = styled(Typography)`
    float: right;
`;

const TotalAmount = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
    border-top: 1px dashed #e0e0e0;
    padding: 20px 0;
    border-bottom: 1px dashed #e0e0e0;
`;

const Discount = styled(Typography)`
    font-size: 16px; 
    color: green;
`


const TotalView = () => {
    
    const localContext = useContext(DataWishlistContext)
    const { wishlist } = localContext
    const items = wishlist.length

  
  
    const totalprice = wishlist.reduce((a, b) => {
      return a + Number(b.strickPrice)
    }, 0)
    const finalprice = wishlist.reduce((a, b) => (a + Number(b.finalPrice)), 0)
  
    const discount = totalprice - finalprice
  
    

    return (
        <Box>           
                <>                
            <Header>
                <Heading>PRICE DETAILS</Heading>
            </Header>
            <Container>
                <Typography>Price ({items})
                    {/* <Price component="span">₹220</Price> */}
                    <Price component="span">${totalprice}</Price>
                </Typography>
                <Typography>Discount
                    {/* <Price component="span">-$0</Price> */}
                    <Price component="span">-${discount}</Price>
                </Typography>
                <Typography>Delivery Charges
                    <Price component="span">$40</Price>
                </Typography>
                <TotalAmount>Total Amount
                    {/* <Price>₹2000</Price> */}
                    <Price>${finalprice  + 40}</Price>
                </TotalAmount>
                {/* <Discount>You will save ₹10 on this order</Discount> */}
                <Discount>You will save ${discount} - discount on this order</Discount>
            </Container>
            </>           
        </Box>
    )
}

export default TotalView;