//import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Stack, Box, Toolbar, AppBar, Typography, useMediaQuery } from '@mui/material';
import { width } from '../../theme/size';
import BookButton from './BookButton';
import { menuList } from './NavBarItem';
import routes from '../../router/routes';
import theme from '../../theme';
import MobileDrawer from './MobileDrawer';
//import logo from '../assets/logo.svg';

const NavBar =()=> {
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <Box component="div" sx={{ overflow: 'hidden' }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          width: '100%',
          height: {
            xs:"13vh",
            sm:"15vh",
            md:"15vh"
          },
          display: 'flex',
          //justifyContent: 'center',
         // alignItems: 'center',
          minHeight: '13vh',
          padding: '0 !important',
          //position: 'fixed',
          background:  '#fff', 
          transformOrigin: 'center',
        }}
      >
        <Toolbar
          sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
           
          }}
        >
       

            {isMatch ? (
            <>
          <Box
          
          sx={{
            paddingRight:4,
            fontSize: { xs: '20px', sm: '20px' },
            fontWeight: { xs: 500, sm: 800 },
          }}
          
        >
          {/* <img src={logo} alt="Logo" style={{ width: '70px', minWidth: '20px', maxWidth: '70px' }} /> */}
               <Typography
           sx={{
            fontSize: { xs: '20px', sm: '20px' },
           }}> YOURLOGO</Typography>
            <Typography
            sx={{
                fontSize: { xs: '10px', sm: '10px' },
               }}>czdczd zdzdqszzef</Typography>
              <MobileDrawer />
              </Box>
            </>
          ) : (
            <><Box

                sx={{
                  paddingRight: 4,
                  fontSize: { xs: '20px', sm: '20px' },
                  fontWeight: { xs: 500, sm: 800 },
                }}

              >
                {/* <img src={logo} alt="Logo" style={{ width: '70px', minWidth: '20px', maxWidth: '70px' }} /> */}
                <Typography
                  sx={{
                    fontSize: { xs: '20px', sm: '20px' },
                  }}> YOURLOGO</Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '10px', sm: '10px' },
                  }}>czdczd zdzdqszzef</Typography>
              </Box><Stack
                direction="row"

                alignItems="center"
                sx={{
                  width: width,
                }}
                spacing={8}
              >
                  {menuList.map((item) => (
                    <Link
                      to={item.link}
                      style={{
                        textDecoration: "none",
                      }}
                      key={item.name}
                    >
                      <Typography
                        fontWeight={500}
                        color={location.pathname === routes.home ? "primary" : "secondary"}
                        sx={{
                          color: "#000",
                          textTransform: "uppercase",
                          fontSize: "12px !important",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Link>
                  ))}


                  <BookButton />
                </Stack></>
           )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;