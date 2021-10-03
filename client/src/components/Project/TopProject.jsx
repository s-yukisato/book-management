import { useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import AppsIcon from '@mui/icons-material/Apps';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import FactCheckIcon from '@mui/icons-material/FactCheck';

import MenuWrapper from '../MenuWrapper';
import ProjectComponent from './ProjectComponent';


const list = [
    {
        name: "すべて",
        state: "all",
        icon: <AppsIcon />
    },
    {
        name: "取り組み中",
        state: "uncompleted",
        icon: <FeaturedPlayListIcon />
    },
    {
        name: "完了済み",
        state: "completed",
        icon: <FactCheckIcon />
    }
]

const TopProject = () => {
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
            sx={{ minWidth: "30px", minHeight: "30px", px: 0 }}
        >
            {
                list.map(item => (
                    <Tab
                        key={item.name}
                        value={item.state}
                        icon={item.icon}
                        label={item.name}
                        sx={{
                            minWidth: 0,
                            minHeight: 0,
                            width: "80px",
                            px: 1,
                            color: "white",
                            fontSize: "10px"
                        }}
                    />
                ))
            }
        </Tabs >
    )

    return (
        <MenuWrapper
            menu={MenuTabs}
            mobileMenu={MobileMenuTabs}
            contents={<ProjectComponent state={state} />} />
    )
}

export default TopProject