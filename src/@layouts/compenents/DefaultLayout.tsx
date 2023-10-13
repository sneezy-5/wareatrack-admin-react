import {  styled } from "@mui/material"
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import useResponsive from "@/hooks/useResponsive";



// ----------------------------------------------------------------------

const NAV_WIDTH = 280;
const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const StyledRoot = styled('div')({
  display:"flex",
  flexDirection:'row',
  background:'#F4F5FA',
});

const StyleLayout = styled('div') (({ theme }) =>({
    // background:'orange',
    width:'77%',
    height:'130vh',
    // [theme.breakpoints.up('md')]: {
     
    //   width: '100%',
       
    // },
  
}));
const SidebarIvisble = styled('div') ({
 
});

const Main = styled('div')(({ theme }) => ({
  // flexGrow: 1,
  // overflow: 'auto',
  // minHeight: '100%',
  // paddingTop: APP_BAR_MOBILE + 24,
  // paddingBottom: theme.spacing(10),
  // background:"blue",
  // [theme.breakpoints.up('md')]: {
  //   paddingTop: APP_BAR_DESKTOP + 24,
  //   paddingLeft: theme.spacing(2),
  //   paddingRight: theme.spacing(2),
   
  //   //  width: `calc(100% - ${NAV_WIDTH + 1}px)`,
     
  // },

}));

// ----------------------------------------------------------------------

const  DefaultLayout = () => {
    const [open, setOpen] = useState(false);
    const isDesktop = useResponsive('up', 'md');
        
    return(
      <StyledRoot>
        <Sidebar openNav={open} onCloseNav={() => setOpen(false)} />
     
       {isDesktop ? (
      <><SidebarIvisble style={{ width: `${NAV_WIDTH}px` }}>

          </SidebarIvisble><StyleLayout>

              <Main>
                <Header onOpenNav={() => setOpen(true)} />
                <Outlet />
              </Main>
            </StyleLayout></>
       
      ) : (
        <><SidebarIvisble>

            </SidebarIvisble><StyleLayout style={{width:'100%'}}>

                <Main>
                  <Header onOpenNav={() => setOpen(true)} />
                  <Outlet />
                </Main>
              </StyleLayout></>
         
      )}
       
      
        </StyledRoot>
     
    )
}

export default DefaultLayout