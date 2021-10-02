import { useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import ViewListIcon from '@mui/icons-material/ViewList';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BookIcon from '@mui/icons-material/Book';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

import MenuWrapper from '../MenuWrapper';
import RecordComponent from './RecordComponent';


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

    const handleChange = (e, value) => {
        setState(value);
    }

    const MenuTabs = (
        <Tabs
            orientation="vertical"
            value={state}
            onChange={handleChange}
            sx={{
                borderRight: 1, borderColor: 'divider',
                position: "fixed", top: 70, left: 5, right: 5,
                width: 180, minHeight: "100vh",
            }}
        >
            {list.map(item => (
                <Tab
                    key={item.name}
                    value={item.state}
                    icon={item.icon}
                    label={item.name}
                    sx={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between' }} />
            ))}
        </Tabs>
    )

    const MobileMenuTabs = (
        <Tabs
            value={state}
            onChange={handleChange}
            sx={{ display: { xs: 'block', sm: 'none' },
            px: 0
        }}
        >
            {
                list.map(item => (
                    <Tab
                        key={item.name}
                        value={item.state}
                        icon={item.icon}
                        label={item.name}
                        sx={{
                            fontSize: "5px", color: "white",
                            pl: 0, pr: 0,
                            minWidth: 0, minHeight: 0, width: "70px"
                         }} />
                ))
            }
        </Tabs >
    )

    return (
        <MenuWrapper
            menu={MenuTabs}
            mobileMenu={MobileMenuTabs}
            contents={<RecordComponent state={state} />} />
    )
}

export default TopRecord