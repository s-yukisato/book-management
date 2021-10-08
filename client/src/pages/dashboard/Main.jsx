import { useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import BarChartIcon from '@mui/icons-material/BarChart';
import DateRangeIcon from '@mui/icons-material/DateRange';
import EventNoteIcon from '@mui/icons-material/EventNote';

import MenuWrapper from '../../components/container/MenuWrapper';
import DashboardComponent from './DashboardComponent';


const list = [
    {
        name: "全期間",
        state: "all",
        icon: <BarChartIcon />
    },
    {
        name: "過去7日",
        state: "week",
        icon: <DateRangeIcon />
    },
    {
        name: "過去30日",
        state: "month",
        icon: <EventNoteIcon />
    }
]

const TopDashboard = () => {
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
                width: 150, minHeight: "100vh",
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
            sx={{
                display: { xs: 'block', sm: 'none' },
                minWidth: "30px", minHeight: "30px", px: 0
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
            contents={<DashboardComponent state={state} />} />
    )
}

export default TopDashboard;