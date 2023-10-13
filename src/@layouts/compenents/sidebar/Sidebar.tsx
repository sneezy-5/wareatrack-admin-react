import useResponsive from "@/hooks/useResponsive";
import { styled } from '@mui/material/styles';
import { Box, Drawer, IconButton, Typography } from '@mui/material';
import Scrollbar from '@/components/scrolbar/Scrolbar';
import NavSection from '@/components/nav-section/NavSection';
import sidebarItem from '@layouts/compenents/sidebar/sidebareItem'
import MenuIcon from '@mui/icons-material/Menu';

const StyledRoot =  styled('div')({
    display: 'flex',
    height: '100vh',
    // width:'50%',
    // background:'red',
    overflow: 'hidden',
  });

const NAV_WIDTH = 260;


interface sidebarInterface{
    openNav:boolean;
    onCloseNav: () => void; 
}

const Sidebar: React.FC<sidebarInterface> = ({ openNav, onCloseNav })=>{

    const { pathname } = useLocation();
  
    useEffect(() => {
      if (openNav) {
        onCloseNav();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);
  
    const isDesktop = useResponsive('up', 'md');

    const renderContent = (
        <Scrollbar
          sx={{
            height: 1,
            '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
          }}
        >

          <Box 
          sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:'30px',
            height:'80px',
            background:'rgb(2, 101, 199)'
          }}>
            <Typography sx={{ color:'#fff'}}>Dashboard Admin</Typography>
            <IconButton style={{color:'#fff'}}> <MenuIcon/></IconButton>
          </Box>
    
          <NavSection data={sidebarItem} />
    
          <Box sx={{ flexGrow: 1 }} />
    
        </Scrollbar>
      );
    return (
        <>
        <StyledRoot>
        <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
      
    >
      
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              background: `linear-gradient(to bottom,  #4421d2, #6801e7)`,
              borderRadius:'30px',
              height:'90vh',
              left:'8px',
              top:'10px',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
               width: NAV_WIDTH,
               background: `linear-gradient(to bottom,  #4421d2, #6801e7)`,
               borderRadius:'30px',
               height:'90vh',
               left:'8px',
               top:'10px',
             },
           
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
   
        </StyledRoot>
        </>
    )
}

export default Sidebar