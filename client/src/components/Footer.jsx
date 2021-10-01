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
        contents: ["ホーム", "ダッシュボード", "プロジェクト"]
    },
    {
        title: "コンタクト",
        contents: ["お問い合わせ", "ヘルプ"]
    },
    {
        title: "管理者情報",
        contents: ["Github", "...so on"]
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
                                <ListItemButton key={content}>
                                    <Typography variant="body2">{content}</Typography>
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