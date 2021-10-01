import { useState } from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ViewListIcon from '@mui/icons-material/ViewList';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BookIcon from '@mui/icons-material/Book';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

import MenuWrapper from '../MenuContents';
import RecordComponent from './RecordComponent';

import LightTooltip from '../LightTooltip';

const list = [
    {
        name: "すべての本",
        state: "all",
        icon: <ViewListIcon />
    },
    {
        name: "読んでいる本",
        state: "reading",
        icon: <AutoStoriesIcon />
    },
    {
        name: "読み終えた本",
        state: "read",
        icon: <BookIcon />
    },
    {
        name: "読みたい本",
        state: "wanted",
        icon: <MenuBookIcon />
    }
]

const TopRecord = () => {
    const [state, setState] = useState("all");

    const handleChange = (prop) => () => {
        setState(prop)
    }

    const menu = (
        <List sx={{ position: "fixed", top: "70px", left: "10px" }}>
            {list.map(item => (
                <ListItem button
                    onClick={handleChange(item.state)}
                    key={item.name}>
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>
                    
                    <ListItemText primary={item.name} />
                </ListItem>
            ))}
        </List>
    )


    const mobileMenu = (
        <Box sx={{
            display: { xs: "flex", md: "none" },
            bgcolor: "#7c9b40",
            px: 2,
            borderRadius: 12
        }}>
            {list.map(item => (
                <LightTooltip title={item.name} mx={1}>
                    <IconButton
                        onClick={handleChange(item.state)}
                        sx={{ color: "#FFF" }}
                    >
                        {item.icon}
                    </IconButton>
                </LightTooltip>
            ))}
        </Box>
    )

    return (
        <MenuWrapper
            menu={menu}
            mobileMenu={mobileMenu}
            contents={<RecordComponent state={state} />} />
    )
}

export default TopRecord