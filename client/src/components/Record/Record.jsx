import React, { useState } from 'react';
import axios from 'axios';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import BookIcon from '@mui/icons-material/Book';
import DeleteIcon from '@mui/icons-material/Delete';

import LightTooltip from '../../components/LightTooltip';
import Slider from '../../components/Slider';
import Snackbar from '../../components/Snackbar';

import { useUpdateContext } from './UpdateContext';

const Record = React.memo(({ record, records, setRecords }) => {
    console.log("rendner rec")
    const [open, setOpen] = useState(false);

    const { handleOpen } = useUpdateContext();

    const finishedHandler = () => {
        setRecords(records.map((item) => {
            if (item._id === record._id) {
                return { ...item, status: "read" }
            }
            return item
        }))
        setOpen(true);
    }

    
    const deleteHandler = async () => {
        setRecords(records.filter(el => el._id !== record._id))
        await axios.delete(`http://localhost:3001/api/v1/record/${record._id}`)
            .then(res => res.json())
            .catch(err => console.error(err))
    }

    return (
        <Box
            sx={{
                pt: 2, px: 2, boxShadow: 2, mb: 2,
                ":hover": { boxShadow: 6 }
            }}
        >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box
                    component="img"
                    src={record.book.image}
                    alt="No image"
                    onClick={handleOpen}
                    sx={{
                        width: 78,
                        height: 112,
                        ml: 2,
                        cursor: "pointer"
                    }} />
                <Box flex="auto" sx={{ textAlign: "center", py: 3, cursor: "pointer" }} onClick={handleOpen}>
                    <Typography variant="h4">{Math.floor(record.page / record.book.page * 100)}%</Typography>
                </Box>
                <Box display='flex' flexDirection='column'>
                    <Box sx={{ flex: 2, cursor: "pointer" }} onClick={handleOpen}>
                        <Typography variant="body2" sx={{ textAlign: 'end', mb: 1 }}>最終更新日</Typography>
                        <Typography variant="body2" sx={{ textAlign: 'end' }}>{record.updatedAt.slice(0, 10)}</Typography>
                        <Typography variant="body2" sx={{ textAlign: 'end' }}>{record.updatedAt.slice(11, 16)}</Typography>
                    </Box>
                    <Box sx={{ display: { xs: 'block', sm: 'flex' }, flex: 1 }}>
                        {record.status !== "read" && (
                            <LightTooltip title="読み終えた">
                                <IconButton onClick={finishedHandler}>
                                    <BookIcon />
                                </IconButton>
                            </LightTooltip>
                        )}
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
                <Slider now={record.page} max={record.book.page} />
            </Box>
            <Snackbar open={open} setOpen={setOpen} message="状態を [ 読み終えた ] に変更しました" />
        </Box>
    )
})

export default Record;