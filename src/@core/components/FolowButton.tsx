import { Box, IconButton } from "@mui/material";
//import { Link } from "react-router-dom";
import FacebookOutlined from '@mui/icons-material/FacebookOutlined';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import YouTube from '@mui/icons-material/YouTube';

const FollowButton = () => {
  return (
    <Box
    sx={{
        background:"#ff4f84",
        width:{
            xs:"8%",
            sm:"8",
            md:"8%",
            lg:"8%",
            xl:"8%"
        },
        height:{
            xs:"34vh",
            sm:"40vh",
            md:"47vh",
            lg:"47vh",
            xl:"47vh"
        },
        //borderRadius:"15p",
        borderTopLeftRadius:"15px",
        borderBottomLeftRadius:"15px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        // position:"relative",
        // top:"50px"
    }}>

    <Box>
    <IconButton 
       sx={{
        color:"#fff",
    }}
           >
            <FacebookOutlined/>
            </IconButton>
        <IconButton 
            sx={{
                color:"#fff",
            }}>
            <Instagram/>
            </IconButton>
        <IconButton 
            sx={{
                color:"#fff",
            }}>
            <Twitter/>
            </IconButton>
        <IconButton 
            sx={{
                color:"#fff",
            }}>
            <YouTube/>
            </IconButton>
    </Box>
    </Box>
  );
};

export default FollowButton;
