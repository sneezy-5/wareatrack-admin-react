import { Box, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const BookButton = () => {
  return (
    <Box>
      <Button
        color="inherit"
        component={Link}
        variant="contained"
        to="#"
        sx={{
          fontFamily: 'Nunito, sans-serif',
          fontWeight: 600,
          outline: "none",
          border: "none",
          borderRadius: 0,

          background: '#ff4f84',
          textTransform: 'none',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#01796f', 
            color: '#FFF',
          },
        }}
      >
        Book an Appointment
      </Button>
      <IconButton 
            sx={{
                color:"#ff4f84",
                background:"#fff",
                border:"none",
                borderRadius:0,
                height:"6.1vh",
                width:"5.5vh"
            }}>
            <ArrowForwardIosIcon/>
            </IconButton>
    </Box>
  );
};

export default BookButton;
