import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled({ currentPage, setCurrentPage, maxPage }) {
  const handleChange = (event, value) => {
    setCurrentPage(parseInt(value));
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Stack spacing={2} p={2}>
      <Typography>Page: {currentPage}</Typography>
      <Pagination count={maxPage} page={currentPage} variant="outlined" color="secondary" onChange={handleChange} />
    </Stack>
  );
}