import React, { useState } from "react";
import { Link as RouterLink } from 'react-router-dom';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import Content from './Content';
import MenuWrapper from '../../components/container/MenuWrapper';
import Footer from '../../components/container/Footer';


const listItems = [
    {
        title: "",
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


const Main = () => {
    const [open, setOpen] = useState(listItems.map((item) => ({ [item.title]: false })))

    const handleClick = (prop) => (_) => {
        setOpen({ ...open, [prop]: !open[prop] });
    };

    const Menu = (
        <>
            <List
                sx={{ width: '100%', maxWidth: 200, p: 2, my: 4 }}
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
        </>
    )


    const MobileSearch = (
        <>

        </>
    );


    return (
        <>
            <MenuWrapper
                menu={Menu}
                mobileMenu={MobileSearch}
                contents={<Content />} />
            <Footer />
        </>
    )
}

export default Main;