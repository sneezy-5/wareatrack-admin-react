// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import UserProfile from '@/layouts/components/UserProfile';



// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const HEADER_MOBILE = 60;

const HEADER_DESKTOP = 60;

const StyledRoot = styled(AppBar)(({ theme }) => ({
//   ...bgBlur({ color: theme.palette.background.default }),
  background: '#fff',
  boxShadow: 'none',
  // [theme.breakpoints.up('md')]: {
  //   width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  // },
  // [theme.breakpoints.up('lg')]: {
  //   width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  // },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
  [theme.breakpoints.up('md')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------



interface HeaderProps{
    onOpenNav:()=>void
}
const  Header: React.FC<HeaderProps> = ({ onOpenNav })=> {
  return (
    <StyledRoot position='static'>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: 'text.primary',
            display: { lg: 'none', md:'none' },
          }}
        >
      <MenuIcon/>
        </IconButton>
        <Typography sx={{color:'#000'}}>
          Dashboard
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
          sx={{
            position:'absolute',
            right:0
          }}
        >

          <UserProfile/>
        </Stack>
        
      </StyledToolbar>
    </StyledRoot>
  );
}

export default Header