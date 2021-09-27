import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


const RatingComponent = ({ values, setValues }) => {
  const handleChange = (e) => {
    setValues({ ...values, rating: parseInt(e.target.value) });
  };

  return (
    <Stack spacing={1}>
      <Rating
        value={values.rating}
        precision={0.5}
        onChange={handleChange} />
    </Stack>
  );
}

export default RatingComponent;