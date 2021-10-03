import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import HomeIcon from '@mui/icons-material/Home';
import AccountCircle from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

import LightTooltip from './LightTooltip';


export default function PrimarySearchAppBar({ menu }) {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };


    const mobileMenuId = 'primary-search-account-menu-mobile';

    const listItems = [
        {
            title: "ホームページへ",
            to: "/",
            areaLabel: "homelink",
            icon: <HomeIcon />
        },
        {
            title: "ダッシュボードへ",
            to: "/dashboard",
            areaLabel: "dashboardlink",
            icon: <DashboardIcon />
        },
        {
            title: "お知らせ",
            to: "/",
            areaLabel: "notifications",
            icon: <NotificationsIcon />
        },
        {
            title: "マイページへ",
            to: "/mypage",
            areaLabel: "mypagelink",
            icon: <AccountCircle />
        },
    ]

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {listItems.map(item => (
                <MenuItem
                    component={RouterLink}
                    to={item.to}
                    size="large"
                    aria-label={item.areaLabel}
                    color="inherit"
                >
                    {item.icon}
                    <Typography variant="body2" p={1}>{item.title}</Typography>
                </MenuItem>
            ))}
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ bgcolor: '#91B54D' }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: "block", sm: "none" } }}>{menu}</Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        {listItems.map(item => (
                            <LightTooltip title={item.title}>
                                <IconButton
                                    component={RouterLink}
                                    to={item.to}
                                    aria-label={item.areaLabel}
                                    color="inherit"
                                >
                                    {item.icon}
                                </IconButton>
                            </LightTooltip>
                        ))}
                    </Box>
                    <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
            {renderMobileMenu}
        </Box>
    );
}