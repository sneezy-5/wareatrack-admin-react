import { Box, Typography } from "@mui/material"
import NavBar from "../components/home/NavBar"
import equipment from '../assets/images/choose-your-doctor.png'
import ButtonBar from "../components/home/ButtonBar"
import BookButton from "../components/home/BookButton"
import FollowButton from "../@core/components/FolowButton"

const HomePage = ()=>{
    return(
        <>
        
        <Box 
        display={"flex"}
       // flexDirection={"row"}
        component={"div"}  sx={{
           // overflow: "hidden",
            display: "flex",
            flexDirection:"column",
            alignItems: "center",
            justifyContent: "center",
            background: `linear-gradient(to bottom, #0597ff, #32aaff)`, 
            //background: 'linear-gradient(135deg, #FF6B6B, #FFD166, #45B69C, #0081A7, #3D5A80)',
           

            height: "150vh",
            color: "#fff", 
          }}>
            <Box
            sx={{
                paddingBottom:"25px"
            }}>
            <Typography
            sx={{
                color:"#fff",
                fontFamily:"fantasy"
            }}>
          Lading Page Template
          </Typography>
            </Box>

       
            <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}
            sx={{
                //background:` url(${equipment})`,
               // background:'linear-gradient(to right, #026fb3, #7fb0d8)', 
               
                background: `linear-gradient(to left, #7fb0d8, transparent,#026fb3), url(${equipment})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height:'110vh',
                width:'85%',
                boxShadow:'  0px 41px 11px -25px rgba(0,0,0,0.46)',
    

            }}
           >
               <NavBar/>
               <Box
               sx={{
                paddingLeft:{
                    xs:"20px",
                    sm:"40px",
                    md:"50px",
                    lg:"90px",
                    xl:"90px"
                },
                display:"flex",
                justifyContent:"center",
                height:{
                    xs:"45vh",
                    sm:"40vh",
                    md:"40vh",
                    lg:"40px",
                    xl:"40px"
                },
                //maxHeight:"40vh",
                //background:"yellow"
               }}>
               <Box>
               <Typography
                sx={{
                    color:"#FFF",
                    fontSize:{
                        sx:"10px",
                        sm:"13",
                        md:"15",
                        lg:"18px",
                        xl:"24px"
                    },
                    fontFamily:"sans-serif"
                }}>
                    Your Healthy Is
                </Typography>
                <Typography
                sx={{
                    color:"#fff",
                    fontSize:{
                        sx:"10px",
                        sm:"13",
                        md:"15",
                        lg:"18px",
                        xl:"24px"
                    }
                }}>
                    Our priority.

                </Typography>
                <Typography
                sx={{
                    width:{
                        xs:"100%",
                        sm:"80%",
                        md:"45%",
                        lg:"45px",
                        xl:"40px"
                    },
                    color:"#fff",
                    paddingTop:"10px",
                    paddingBottom:"10px",
                   // background:"#FFF",
                    fontSize:{
                        sx:"10px",
                        sm:"13px",
                        md:"15px",
                        lg:"17px",
                        xl:"18px"
                    }
                }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores labore facilis laboriosam autem, enim eos, est atque nihil, quasi ad exercitationem voluptate omnis possimus et repellat! Enim error officia cupiditate.
                </Typography>
                <BookButton/>
               </Box>
                
                <FollowButton/>
               </Box>
               <ButtonBar/>
              
            </Box>
        </Box>
        </>
    )
}

export default  HomePage