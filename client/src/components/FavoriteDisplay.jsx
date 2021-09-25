import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import LightTooltip from './LightTooltip';

const FavoriteDisplay = ({ favorited, toggleFavorited }) => {
    return (
        <>
            {favorited ? (
                <LightTooltip title="お気に入りを解除する">
                    <IconButton onClick={toggleFavorited}>
                        <FavoriteIcon color="error" />
                    </IconButton>
                </LightTooltip>
            ) : (
                <LightTooltip title="お気に入りに登録する">
                    <IconButton onClick={toggleFavorited}>
                        <FavoriteBorderIcon />
                    </IconButton>
                </LightTooltip>
            )}
        </>
    )
};

export default FavoriteDisplay;