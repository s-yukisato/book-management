import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';

import LightTooltip from '../components/LightTooltip';
import Slider from '../components/Slider';
import Rating from '../components/Rating';

const books = [
    {
        id: 1, title: 'Python'
    },
    {
        id: 2, title: 'Java'
    },
    {
        id: 3, title: 'Scala'
    },
    {
        id: 1, title: 'Python'
    },
    {
        id: 2, title: 'Java'
    },
    {
        id: 3, title: 'Scala'
    },
]

const Library = () => {
    return (
        <Container>
            <Typography variant="body1">Library</Typography>
            <Grid container spacing={2}>
                {books.map(book => (
                    <Card sx={{
                        width: "80%",
                        height: 150,
                        mb: 1,
                        p: 2,
                        display: 'flex',
                        ":hover": {
                            boxShadow: 6,
                        },
                    }}>
                        <CardMedia
                            component="img"
                            image={book.image}
                            alt="No image"
                            sx={{
                                width: 97,
                                height: 130
                            }}
                        />
                        <CardContent>
                            <Typography variant="body2" component="div" sx={{
                                height: "30%",
                                overflow: 'hidden'
                            }}>
                                {book ? book.title : "Not found"}
                            </Typography>
                            <Slider />
                            <Rating />
                        </CardContent>
                        <CardActions>
                            <Box sx={{ height: "70%" }}></Box>
                            <Box sx={{ display: "flex" }}>
                                <LightTooltip title="編集する">
                                    <IconButton>
                                        <EditIcon />
                                    </IconButton>
                                </LightTooltip>
                                <LightTooltip title="詳細を見る">
                                    <IconButton>
                                        <InfoOutlinedIcon />
                                    </IconButton>
                                </LightTooltip>
                                <LightTooltip title="シェアする">
                                    <IconButton>
                                        <ShareIcon />
                                    </IconButton>
                                </LightTooltip>
                                <LightTooltip title="削除する">
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                </LightTooltip>
                            </Box>
                        </CardActions>
                    </Card>
                ))}
            </Grid>
        </Container>
    )
}

export default Library;