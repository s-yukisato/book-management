import { useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import AppsIcon from '@mui/icons-material/Apps';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import FactCheckIcon from '@mui/icons-material/FactCheck';

import MenuWrapper from '../../components/container/MenuWrapper';
import ProjectContainer from './ProjectContainer';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -5,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));


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

const Main = () => {
    const [state, setState] = useState("all");
    const [stateCount, setStateCount] = useState(list.map((item) => ({ [item.state]: 0 })));

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
                position: "fixed", top: 70, left: 5,
                width: 180, minHeight: "100vh",
            }}
        >
            {list.map(item => (
                <Tab
                    key={item.name}
                    value={item.state}
                    icon={
                        <StyledBadge badgeContent={stateCount[item.state]} color="secondary">
                            {item.icon}
                        </StyledBadge>
                    }
                    disabled={stateCount[item.state] === 0}
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
                        icon={
                            <StyledBadge badgeContent={stateCount[item.state]} color="secondary">
                                {item.icon}
                            </StyledBadge>
                        }
                        disabled={stateCount[item.state] === 0}
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
            contents={<ProjectContainer state={state} setStateCount={setStateCount} />} />
    )
}

export default Main;