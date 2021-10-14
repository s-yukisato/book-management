import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import AccountCircle from '@mui/icons-material/AccountCircle';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import BarChartIcon from '@mui/icons-material/BarChart';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import HomeIcon from '@mui/icons-material/Home';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import MoreIcon from '@mui/icons-material/MoreVert';

import LightTooltip from '../block/LightTooltip';

import NameLogo from '../../assets/name.png';


const Header = React.memo(({ menu }) => {
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
            icon: <BarChartIcon />
        },
        {
            title: "プロジェクトへ",
            to: "/projects",
            areaLabel: "projectlink",
            icon: <AppRegistrationIcon />
        },
        {
            title: "ライブラリへ",
            to: "/library",
            areaLabel: "librarylink",
            icon: <ImportContactsIcon />
        },
        {
            title: "サポートページへ",
            to: "/support",
            areaLabel: "supportlink",
            icon: <ContactSupportIcon />
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
            {listItems.map((item, index) => (
                <div>
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
                    {index === 3 && <Divider />}
                </div>
            ))}
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <MuiAppBar position="fixed" sx={{ bgcolor: "rgb(181, 205, 163)" }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: { xs: "block", sm: "none" } }} />
                    <Box sx={{ display: { xs: "block", sm: "none" } }}>{menu}</Box>
                    <Box sx={{ display: { xs: "none", sm: "block" } }} component={RouterLink} to={"/"}>
                        <Box component={"img"} src={NameLogo} width={128} height={40} pl={3} pt={1} />
                    </Box>
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
            </MuiAppBar>
            <Toolbar id="back-to-top-anchor" />
            {renderMobileMenu}
        </Box>
    );
});

export default Header;