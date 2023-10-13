import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { Box, List, ListItemText } from '@mui/material';
//
import Icon from '@mdi/react';
import { StyledNavItem } from './styles';

// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
};

// interface NavSectionInterface{
//   data:[];
// }


export default function NavSection ({ data = [], ...other }) {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item:{  
          title:string;
          path:string;
          icon:string;
          info?:string;
        }) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------


interface NavItemInterface{
  item:{
    title:string;
    path:string;
    icon:string;
    info?:string;
  };
}

const  NavItem: React.FC<NavItemInterface> = ({ item })=> {
  const { title, path, icon, info } = item;

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        
        color:'white',
        '&.active': {
          color: '#fff',
          bgcolor: 'rgb(99, 78, 221)',
          fontWeight: 'fontWeightBold',
          borderRadius:'30px'
        },
      }}
    >

      <Icon path={icon}
        size={1}
        horizontal
        style={{ marginRight:10}}
        />
      <ListItemText disableTypography primary={title} sx={{ fontSize:'16px', fontFamily:'Roboto'}} />

      {info && info}
    </StyledNavItem>
  );
}
