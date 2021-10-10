import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Card';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { useRedirect } from '../../hooks/useRedirect';


const Project = React.memo(({ project, index, setTargetIndex, setActionType }) => {
    const { toProject } = useRedirect();


    const statusChange = () => {
        setActionType("statusChange");
        setTargetIndex(index);
    }

    const deleteProject = () => {
        setActionType("delete");
        setTargetIndex(index);
    }


    const openHandler = (id) => () => toProject(id);

    const [MoreAnchorEl, setMoreAnchorEl] = useState(null);

    const isMenuOpen = Boolean(MoreAnchorEl);

    const handleMenuClose = () => {
        setMoreAnchorEl(null);
    };

    const handleMenuOpen = (event) => {
        setMoreAnchorEl(event.currentTarget);
    };

    const MenuComponent = (
        <Menu
            anchorEl={MoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <div>
                <MenuItem
                    size="large"
                    aria-label="change-state"
                    color="inherit"
                    onClick={statusChange}
                >
                    {project.status === "uncompleted" ? (
                        <>
                            <DoneIcon />
                            <Typography variant="body2" p={1}>完了済みに変更</Typography>
                        </>
                    ) : (
                        <>
                            <SettingsBackupRestoreIcon />
                            <Typography variant="body2" p={1}>取り組み中に変更</Typography>
                        </>
                    )}
                </MenuItem>
                <MenuItem
                    size="large"
                    aria-label="delete-project"
                    color="inherit"
                    onClick={deleteProject}
                >
                    <DeleteIcon />
                    <Typography variant="body2" p={1}>削除する</Typography>
                </MenuItem>
            </div>
        </Menu>
    )

    return (
        <Grid item sx={{ position: "relative" }}>
            <IconButton onClick={handleMenuOpen} sx={{ position: "absolute", top: 10, right: 10, zIndex: 2 }}>
                <MoreVertIcon />
            </IconButton>
            <Paper sx={{
                position: 'relative',
                width: 200,
                height: 200,
                p: 3,
                m: 1,
                display: "flex",
                flexFlow: "column",
                textAlign: "start",
                justifyContent: "space-between",
                ":hover": {
                    boxShadow: 6,
                    cursor: "pointer"
                }
            }} onClick={openHandler(`${project._id}`)}>
                <Typography variant="body2">{project.title}</Typography>
                <Box>
                    <Typography variant="body2" align="right">{project.updatedAt.slice(0, 10)}</Typography>
                    <Typography variant="body2" align="right">{project.updatedAt.slice(11, 16)}</Typography>
                </Box>
            </Paper>
            {MenuComponent}
        </Grid>
    )

});

export default Project;