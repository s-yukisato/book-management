import { useState } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import BookIcon from '@mui/icons-material/Book';
import DeleteIcon from '@mui/icons-material/Delete';

import LightTooltip from '../../components/LightTooltip';
import Slider from '../../components/Slider';
import Snackbar from '../../components/Snackbar';


const Record = ({ record, records, setRecords }) => {
    const [open, setOpen] = useState(false);

    const finishedHandler = () => {
        setRecords(records.map((item) => {
            if (item._id === record._id) {
                return { ...item, status: "read" }
            }
            return item
        }))
        setOpen(true);
    }


    const editHandler = () => {
        console.log("RRR")
    }

    const deleteHandler = () => {
        setRecords(records.filter(el => el._id !== record._id))
    }
    return (
        <Grid item>
            <Box
                onClick={editHandler}
                sx={{
                    pt: 2,
                    px: 2,
                    boxShadow: 2,
                    ":hover": {
                        boxShadow: 6,
                        cursor: "pointer"
                    }
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box
                        component="img"
                        src={record.book.image}
                        alt="No image"
                        sx={{
                            width: 78,
                            height: 112,
                            ml: 2
                        }} />
                    <Box sx={{ py: 3 }}>
                        <Typography variant="h4">{Math.floor(record.progress / 300 * 100)}%</Typography>
                    </Box>
                    <Box display='flex' flexDirection='column'>
                        <Box sx={{ flex: 2 }}>
                            <Typography variant="body2" sx={{ textAlign: 'end', mb: 1 }}>最終更新日</Typography>
                            <Typography variant="body2" sx={{ textAlign: 'end' }}>{record.updatedAt.slice(0, 10)}</Typography>
                            <Typography variant="body2" sx={{ textAlign: 'end' }}>{record.updatedAt.slice(11, 16)}</Typography>
                        </Box>
                        <Box sx={{ display: { xs: 'block', sm: 'flex' }, flex: 1 }}>

                            <LightTooltip title="読み終えた">
                                <IconButton onClick={finishedHandler}>
                                    <BookIcon />
                                </IconButton>
                            </LightTooltip>

                            <LightTooltip title="削除する">
                                <IconButton onClick={deleteHandler}>
                                    <DeleteIcon />
                                </IconButton>
                            </LightTooltip>
                        </Box>
                    </Box>
                </Box>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Slider value={record.progress} />
                </Box>
                <Snackbar open={open} setOpen={setOpen} message="状態を [ 読み終えた ] に変更しました" />
            </Box>
        </Grid>
    )
}

export default Record;