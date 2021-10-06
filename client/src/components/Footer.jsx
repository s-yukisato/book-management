import React, { useState } from "react";
import { Link as RouterLink } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import Logo from '../assets/logo_transparent.png';

import Copyright from './Copyright'


const CGrid = ({ children }) => (
    <Grid
        item
        textAlign="center"
        xs={12}
        sm={6}
        md={3}
    >
        {children}
    </Grid>
)

const listItems = [
    {
        title: "コンテンツ",
        contents: [
            {
                title: "ホーム",
                link: "/"
            },
            {
                title: "ダッシュボード",
                link: "/dashboard"
            },
            {
                title: "プロジェクト",
                link: "/projects"
            }
        ]
    },
    {
        title: "コンタクト",
        contents: [
            {
                title: "お問い合わせ",
                link: "/support"
            },
            {
                title: "ヘルプ",
                link: "/help"
            },
        ]
    },
    {
        title: "管理者情報",
        contents: [
            {
                title: "Github",
                url: "https://github.com/s-yukisato"
            },
            {
                title: "Twitter",
                url: "https://twitter.com/"
            },
        ]
    },
]


const Footer = React.memo(() => {
    const [open, setOpen] = useState(listItems.map((item) => ({ [item.title]: false })))

    console.log("rendereee")

    const handleClick = (prop) => (e) => {
        console.log(open[prop])
        setOpen({ ...open, [prop]: !open[prop] });
    };
    return (
        <>
            <Grid
                container
                justifyContent="center"
                sx={{ bgcolor: 'rgba(147, 149, 151, 0.8)', p: 2 }}
            >
                <CGrid>
                    <img src={Logo} width="200px" height="200px" alt="Logo" />
                </CGrid>

                {listItems.map(listItem => (
                    <CGrid>
                        <List sx={{ display: { xs: "none", sm: 'inline-block' } }}>
                            <ListItem key={listItem.title}>
                                <Typography variant="h6">
                                    {listItem.title}
                                </Typography>
                            </ListItem>
                            {listItem.contents.map(item => (
                                item.link ? (
                                    <ListItemButton component={RouterLink} to={item.link} key={item.title}>
                                        <ListItemText size={8} primary={item.title} />
                                    </ListItemButton>
                                ) : (
                                    <ListItemButton target="_blank" component={'a'} href={item.url} key={item.title}>
                                        <ListItemText primary={item.title} />
                                    </ListItemButton>
                                )
                            ))}
                        </List>
                    </CGrid>
                ))}

                <List
                    sx={{ width: '100%', maxWidth: 360, display: { xs: "block", sm: "none" } }}
                    component="nav"
                >
                    {listItems.map(listItem => (
                        <>
                            <ListItemButton onClick={handleClick(listItem.title)} sx={{ borderBottom: '1px solid' }}>
                                <ListItemText primary={listItem.title} />
                                {open[listItem.title] ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>

                            <Collapse in={open[listItem.title]} timeout="auto" unmountOnExit>
                                {listItem.contents.map(item => (
                                    item.link ? (
                                        <ListItemButton component={RouterLink} to={item.link} key={item.title} sx={{ pl: 4 }} >
                                            <ListItemText primary={item.title} />
                                        </ListItemButton>
                                    ) : (
                                        <ListItemButton target="_blank" component={'a'} href={item.url} key={item.title} sx={{ pl: 4 }}>
                                            <ListItemText primary={item.title} />
                                        </ListItemButton>
                                    )
                                ))}
                            </Collapse>
                        </>
                    ))}
                </List>
                <Copyright m={2} />
            </Grid>
        </>
    )
});

export default Footer;
