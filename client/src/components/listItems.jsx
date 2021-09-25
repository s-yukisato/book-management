import { Link as RouterLink } from "react-router-dom"

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import StarsIcon from '@mui/icons-material/Stars';
import SettingsIcon from '@mui/icons-material/Settings';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LogoutIcon from '@mui/icons-material/Logout';


export const MainListItems = () => {
    return (
        <>
            <List>
                <ListItem button component={RouterLink} to="/" key={1}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="ホームページへ" />
                </ListItem>
                <ListItem button component={RouterLink} to="/dashboard" key={2}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="ダッシュボードへ" />
                </ListItem>
                <ListItem button component={RouterLink} to="/projects" key={3}>
                    <ListItemIcon>
                        <AppRegistrationIcon />
                    </ListItemIcon>
                    <ListItemText primary="プロジェクトへ" />
                </ListItem>
                <ListItem button component={RouterLink} to="/library" key={4}>
                    <ListItemIcon>
                        <StarsIcon />
                    </ListItemIcon>
                    <ListItemText primary="進捗を確認する" />
                </ListItem>
            </List>
        </>
    )
}


export const SecondaryListItems = () => {
    return (
        <>
            <List>
            <ListSubheader inset>アカウント</ListSubheader>
                <ListItem button component={RouterLink} to="/myaccount" key={5}>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="設定ページへ" />
                </ListItem>

                <ListItem button component={RouterLink} to="/support" key={6}>
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
        </>
    )

}