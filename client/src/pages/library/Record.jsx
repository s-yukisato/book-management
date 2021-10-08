import React from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import BookIcon from '@mui/icons-material/Book';
import DeleteIcon from '@mui/icons-material/Delete';

import LightTooltip from '../../components/block/LightTooltip';
import { ReadOnlySlider } from './Slider';

const Record = React.memo(({ record, index, setTargetIndex, setActionType }) => {
    console.log("rendner rec")

    const openDialog = () => {
        setActionType("update");
        setTargetIndex(index);
    }

    const statusChange = () => {
        setActionType("statusChange");
        setTargetIndex(index);
    }

    const deleteRecord = () => {
        setActionType("delete");
        setTargetIndex(index);
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
                    onClick={openDialog}
                    sx={{
                        width: 78,
                        height: 112,
                        ml: 2,
                        cursor: "pointer"
                    }} />
                <Box flex="auto" sx={{ textAlign: "center", py: 3, cursor: "pointer" }} onClick={openDialog}>
                    <Typography variant="h4">{Math.floor(record.page / record.book.pages * 100)}%</Typography>
                </Box>
                <Box display='flex' flexDirection='column'>
                    <Box sx={{ flex: 2, cursor: "pointer" }} onClick={openDialog}>
                        <Typography variant="body2" sx={{ textAlign: 'end', mb: 1 }}>最終更新日</Typography>
                        <Typography variant="body2" sx={{ textAlign: 'end' }}>{record.updatedAt.slice(0, 10)}</Typography>
                        <Typography variant="body2" sx={{ textAlign: 'end' }}>{record.updatedAt.slice(11, 16)}</Typography>
                    </Box>
                    <Box sx={{ display: { xs: 'block', sm: 'flex' }, flex: 1 }}>
                        {record.status !== "read" && (
                            <LightTooltip title="「読み終えた」に変更">
                                <IconButton onClick={statusChange}>
                                    <BookIcon />
                                </IconButton>
                            </LightTooltip>
                        )}
                        <LightTooltip title="削除する">
                            <IconButton onClick={deleteRecord}>
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
                <ReadOnlySlider now={record.page} max={record.book.pages} />
            </Box>
        </Box>
    )
});

export default Record;