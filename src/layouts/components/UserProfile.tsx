import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import theme from '@/theme';

const UserProfile = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event: React.MouseEvent<HTMLElement> ) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Badge
        overlap="circular"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        badgeContent={<div style={{ backgroundColor: 'green', width: 10, height: 10, borderRadius: '50%' }} />}
      >
        <Avatar
          onClick={handleClick}
          sx={{ backgroundColor: 'orange', color: '#000' }}
        >
        </Avatar>
      </Badge>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{    marginTop: theme.spacing(1.2),}}

      >
        <List>
          {/* User Avatar & Name */}
          <ListItem>
            <ListItemIcon>
              <Badge
                overlap="circular"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                badgeContent={<div style={{ backgroundColor: 'green', width: 10, height: 10, borderRadius: '50%' }} />}
              >
                <Avatar
                  style={{ backgroundColor: 'orange', color: '#000' }}
                >
                  {/* VImg */}
                </Avatar>
              </Badge>
            </ListItemIcon>
            <ListItemText
              primary="Admin"
              secondary="Super admin"
            />
          </ListItem>
          <Divider />

          {/* Profile */}
          <MenuItem sx={{ width:220, }}>
            <ListItemIcon>
              <AccountCircleIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Profil" />
          </MenuItem>

          {/* Settings */}
          <MenuItem>
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Paramètre" />
          </MenuItem>

          <Divider />

          <MenuItem>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Deconnexion" />
          </MenuItem>
        </List>
      </Menu>
    </div>
  );
};

export default UserProfile;
