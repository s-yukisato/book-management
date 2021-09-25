import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';

import EditIcon from '@mui/icons-material/Edit';

const Account = () => {
    return (
        <>
            <Grid container>
                <Grid container sm={12} sx={{ textAlign: 'center' }}>
                    <Typography variant="h4">ようこそ！</Typography>
                </Grid>
                <Grid container sm={12} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Paper>
                        <Typography variant="h6">アカウント名</Typography>
                        <Fab size="small" variant="extended">
                            <EditIcon />
                            編集する
                        </Fab>
                    </Paper>
                    <Paper>
                        <Typography variant="h6">メールアドレス</Typography>
                        <Fab size="small" variant="extended">
                            <EditIcon />
                            編集する
                        </Fab>
                    </Paper>
                    <Paper>
                        <Typography variant="h6">パスワード</Typography>
                        <Fab size="small" variant="extended">
                            <EditIcon />
                            編集する
                        </Fab>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default Account;