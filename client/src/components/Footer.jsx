import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import Logo from '../assets/logo_transparent.png';

import Copyright from './Copyright'


const Footer = () => {
<<<<<<< HEAD
=======
    // const color = "#06b632"
>>>>>>> feature/library-page
    return (
        <>
            <Grid container sx={{ bgcolor: '#939597', p: 2 }}>
                <Grid container xs={12} sm={3} sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                    <img src={Logo} width="100%" height="100%" alt="Logo" />
                </Grid>
                <Grid container xs={12} sm={3} sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                    <List>
                        <ListItem>
                            <Typography variant="h6">コンテンツ</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="body1"></Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="body1">ホーム</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="body1">プロジェクト</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="body1">ダッシュボード</Typography>
                        </ListItem>
                    </List>
                </Grid>
                <Grid container xs={12} sm={3} sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                    <List>
                        <ListItem>
                            <Typography variant="h6">コンタクト</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="body1"></Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="body1">お問い合わせ</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="body1">ヘルプ</Typography>
                        </ListItem>
                    </List>
                </Grid>
                <Grid container xs={12} sm={3} sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                    <List>
                        <ListItem>
                            <Typography variant="h6">最新情報</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="body1"></Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="body1"></Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="body1"></Typography>
                        </ListItem>
                    </List>
                </Grid>
                <Grid container sx={{ display: 'flex', justifyContent: 'center', m: 2 }}>
                    <Copyright />
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;