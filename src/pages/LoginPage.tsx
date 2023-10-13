import {   Grid, styled } from "@mui/material";
// import useResponsive from "../hooks/useResponsive";
import LoginForm from "../components/form/LoginForm";
import login from "../assets/images/login.jpeg"
//------------------------------------------------------------------------------------------------------



// const StyledContenair = styled('div')(({ theme }) => ({
//     [theme.breakpoints.up('md')]: {
//       width: '100%',
//       height:'100vh',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems:"center",
//       background: 'linear-gradient(to left, rgb(233, 235, 205), rgb(166, 166, 220))'

//     },
//   }));


const StyledContenair = styled('div') ({
    width: '100%',
    height:'100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:"center",
    background: 'linear-gradient(to left, rgb(233, 235, 205), rgb(166, 166, 220))'
});
  

  
const StyledCard = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    width: '60%',
    height: '30rem',
    background: 'rgb(188, 207, 113)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.7)',
    borderRadius: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '70%',
    height: '20rem',
    background: 'rgb(188, 207, 113)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.7)',
    borderRadius: '30px',
  },
  [theme.breakpoints.down('lg')]: {
    width: '60%',
    height: '30rem',
    background: 'rgb(188, 207, 113)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.7)',
    borderRadius: '30px',
  },
}));


  
const StyledImg = styled('img')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '300px',
  },
  [theme.breakpoints.down('lg')]: {
    width: '350px',
  },
}));

  
//------------------------------------------------------------------------------------------------------
const LoginPage =()=>{
    // const mdUp = useResponsive('up', 'md');
    return(
        <>
          <StyledContenair>
              <StyledCard>
                <Grid item xs={12} sm={6} md={4} lg={3} sx={{
                  display:"flex",
                  justifyContent:"center",
                  alignItems:'center',
                  // background:"orange",
                  width:"100%",
                  height:"100%"
                }} >
                  <LoginForm/>
                  
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} sx={{
                  display:{
                    xs:"none",
                    sm:"flex",
                    md:"flex"
                  },
                  justifyContent:"center",
                  alignItems:'center',
                  // background:"red",
                  width:"100%",
                  height:"100%"
                }}>
                {/* <img src={login} alt="login" width={350} /> */}
                <StyledImg src={login} alt="login"/>

                </Grid >
              </StyledCard>
          </StyledContenair>
        </>
    )
};


export default LoginPage