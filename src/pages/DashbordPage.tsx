import { Container, Grid, Typography, styled } from "@mui/material";


const NAV_WIDTH = 280;
const StyledRoot = styled('div') (({ theme }) => ({
    display: 'flex',
    minHeight: '100%',
    height: '100vh',
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${NAV_WIDTH + 1}px)`,
      },
    [theme.breakpoints.up('lg')]: {
        width: `calc(100% - ${NAV_WIDTH + 1}px)`,
      },
    // backgroundColor: 'blue'
  }));
  
const DashboardPage = ()=>{

    return (
        <>
        {/* <StyledRoot>
            ghjklmù*
        </StyledRoot> */}
         <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          {/* <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Weekly Sales" total={714000} icon={'ant-design:android-filled'} />
          </Grid> */}


        
     
        </Grid>
      </Container>
        </>
    )
}

export default DashboardPage