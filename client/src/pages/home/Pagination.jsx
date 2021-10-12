import MuiPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


const Pagination = ({ currentPage, setCurrentPage, maxPage }) => {
  const handleChange = (e, value) => {
    setCurrentPage(parseInt(value));
    const anchor = (e.target.ownerDocument || document).querySelector(
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
      <MuiPagination
        count={maxPage ? maxPage : 0}
        page={currentPage}
        variant="outlined"
        color="secondary"
        onChange={handleChange} />
    </Stack>
  );
};

export default Pagination;