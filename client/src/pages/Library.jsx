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
import Snackbar from '../components/Snackbar';
// import Modal from '../components/Modal';

import { useFetchRecordContext } from '../context/FetchContext';
import { deleteRecord } from '../hooks/useDelete';

const Library = () => {
    const { dataState } = useFetchRecordContext();
    let records = dataState.data;

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState();

    const handleEdit = () => {
        // setOpen(true);
    };

    const handleDelete = (prop) => async () => {
        const { result } = await deleteRecord(prop);
        setMessage(result);
        setOpen(true);
    };

    const history = useHistory();

    const handleClick = () => {
        history.push("/")
    }
    return (
        <>
            <AppBar />
            <Grid container direction="column" spacing={2} sx={{ my: 3, width: { sm: "90vw", md: "80vw" } }}>
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
                                    src={record.book.image}
                                    alt="No image"
                                    sx={{
                                        width: 78,
                                        height: 112
                                    }} />
                                <Box sx={{ p: 2 }}>
                                    <Typography variant="h4">{Math.floor(record.progress / 300 * 100)}%</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ flex: 2 }}>
                                        <Typography variant="body2" sx={{ textAlign: 'end', mb: 1 }}>最終更新日</Typography>
                                        <Typography variant="body2" sx={{ textAlign: 'end' }}>{record.updatedAt.slice(0, 10)}</Typography>
                                        <Typography variant="body2" sx={{ textAlign: 'end' }}>{record.updatedAt.slice(11, 16)}</Typography>
                                    </Box>
                                    <Box sx={{ display: { xs: 'block', sm: 'flex' }, flex: 1 }}>
                                        <LightTooltip title="編集する">
                                            <IconButton onClick={handleEdit}>
                                                <EditIcon />
                                            </IconButton>
                                        </LightTooltip>
                                        {/* <Modal open={open} setOpen={setOpen} /> */}
                                        <LightTooltip title="削除する">
                                            <IconButton onClick={handleDelete(record._id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </LightTooltip>
                                        <Snackbar open={open} setOpen={setOpen} message={message} />
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Slider value={record.progress} />
                            </Box>
                        </Box>
                    </Grid>
                )) : (
                    <Grid item sx={{ display: { xs: 'block', sm: 'flex' }, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
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