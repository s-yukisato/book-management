import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled() {
  const [page, setPage] = useState(1);

  // useEffect(() => {
  //   // const options = {
  //   //   keyword: "",
  //   //   NGKeyword: "",
  //   //   sort: "sales",
  //   //   page: page
  //   // }
  //   // useFetch(url, options)
  // }, [page])
  const handleChange = (event, value) => {
    setPage(value);
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
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} variant="outlined" color="secondary" onChange={handleChange} />
    </Stack>
  );
}