import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { ReactComponent as BookLoverLogo } from '../assets/undraw_book_lover_mkck.svg';

import LightTooltip from '../components/LightTooltip';
import Slider from '../components/Slider';
import AppBar from '../components/AppBar';
import Modal from '../components/Modal';

const records = [
    // {
    //     _id: 1,
    //     image: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/0102/9784866430102.jpg?_ex=200x200",
    // },
    // {
    //     _id: 2,
    //     image: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/0102/9784866430102.jpg?_ex=200x200",
    // },
    // {
    //     _id: 3,
    //     image: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/0102/9784866430102.jpg?_ex=200x200",
    // },
    // {
    //     _id: 4,
    //     image: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/0102/9784866430102.jpg?_ex=200x200",
    // },

]

const book = []

const Library = () => {
    const [open, setOpen] = useState(false);

    const handleEdit = () => {
        setOpen(true);
    };

    const history = useHistory();

    const handleClick = () => {
        history.push("/")
    }
    return (
        <>
            <AppBar />
            <Grid container direction="column" spacing={2} sx={{ my: 3, width: "90vw" }}>
                {records.length > 0 ? records.map(record => (
                    <Grid item key={record._id}>
                        <Box sx={{
                            p: 2,
                            boxShadow: 2,
                            ":hover": {
                                boxShadow: 6,
                            }
                        }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Box
                                    component="img"
                                    src={record.image}
                                    alt="No image"
                                    sx={{
                                        width: 78,
                                        height: 112
                                    }} />
                                <Box sx={{ p: 2 }}>
                                    <Typography variant="h4">33%</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ flex: 2 }} />
                                    <Box sx={{ display: { xs: 'block', sm: 'flex'}, flex: 1 }}>
                                        <LightTooltip title="編集する" onClick={handleEdit}>
                                            <IconButton>
                                                <EditIcon />
                                            </IconButton>
                                        </LightTooltip>
                                        <Modal open={open} setOpen={setOpen} book={book} />
                                        <LightTooltip title="削除する">
                                            <IconButton>
                                                <DeleteIcon />
                                            </IconButton>
                                        </LightTooltip>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Slider />
                            </Box>
                        </Box>
                    </Grid>
                )) : (
                    <Grid item sx={{ display: { xs: 'block', sm: 'flex'}, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <Box>
                            <BookLoverLogo width="80%" height="80%" />
                        </Box>
                        <Box sx={{ mx: 1, my: 3 }}>
                            <Typography variant="h6">本棚に登録しましょう。</Typography>
                            <Button onClick={handleClick}>探しに行く</Button>
                        </Box>
                    </Grid>
                )}
            </Grid>
        </>
    )
}

export default Library;