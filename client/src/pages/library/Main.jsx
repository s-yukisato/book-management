import { useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import ViewListIcon from '@mui/icons-material/ViewList';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BookIcon from '@mui/icons-material/Book';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

import MenuWrapper from '../../components/container/MenuWrapper';
import RecordContainer from './RecordContainer';

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
    const [stateCount, setStateCount] = useState(list.map((item) => ({ [item.state]: 0 })));

    const handleChange = (e, value) => setState(value);

    console.log(stateCount)

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
                    label={item.name}
                    disabled={stateCount[item.state] === 0}
                    sx={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between' }} />
            ))}
        </Tabs>
    )

    const MobileMenuTabs = (
        <Tabs
            value={state}
            onChange={handleChange}
            sx={{ px: 0 }}
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
            contents={<RecordContainer state={state} setStateCount={setStateCount} />} />
    )
}

export default TopRecord