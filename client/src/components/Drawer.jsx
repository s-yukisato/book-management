import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import StarsIcon from '@mui/icons-material/Stars';
import SettingsIcon from '@mui/icons-material/Settings';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LogoutIcon from '@mui/icons-material/Logout';


const DrawerComponent = ({ state, toggleDrawer }) => {

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button key={1}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="ホームページへ" />
        </ListItem>
        <ListItem button key={2}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="ダッシュボードへ" />
        </ListItem>
        <ListItem button key={3}>
          <ListItemIcon>
            <AppRegistrationIcon />
          </ListItemIcon>
          <ListItemText primary="プロジェクトへ" />
        </ListItem>
        <ListItem button key={4}>
          <ListItemIcon>
            <StarsIcon />
          </ListItemIcon>
          <ListItemText primary="進捗を確認する" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key={5}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="設定ページへ" />
        </ListItem>

        <ListItem button key={6}>
          <ListItemIcon>
            <ContactSupportIcon />
          </ListItemIcon>
          <ListItemText primary="サポートページへ" />
        </ListItem>

        <ListItem button key={7}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="ログアウト" />
        </ListItem>
      </List>
    </Box >
  );

  return (
    <div>
      {
        <>
          <Drawer
            anchor='left'
            open={state}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        </>
      }
    </div>
  );
};

export default DrawerComponent;