import { Link as RouterLink } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import Logo from '../assets/logo_transparent.png';

import Copyright from './Copyright'


const CGrid = ({ children }) => (
    <Grid
        item
        textAlign="center"
        p={2}
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
                link: "/"
            },
            {
                title: "Twitter",
                link: "/"
            },
        ]
    },
]


const Footer = () => {
    return (
        <>
            <Grid
                container
                sx={{ bgcolor: '#939597' }}
            >
                <CGrid>
                    <img src={Logo} width="200px" height="200px" alt="Logo" />
                </CGrid>

                {listItems.map(listItem => (
                    <CGrid>
                        <List sx={{ display: 'inline-block' }}>
                            <ListItem key={listItem.title}>
                                <Typography variant="h6">
                                    {listItem.title}
                                </Typography>
                            </ListItem>
                            {listItem.contents.map(content => (
                                <ListItemButton component={RouterLink} to={content.link} key={content.title}>
                                    <Typography variant="body2">{content.title}</Typography>
                                </ListItemButton>
                            ))}
                        </List>
                    </CGrid>
                ))}
                <Grid item width="100vw">
                    <Copyright m={2} />
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;