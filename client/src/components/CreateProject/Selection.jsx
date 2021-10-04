import { useState } from 'react';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

import { useFetchRecordContext } from '../../context/FetchContext';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(book, selected, theme) {
  return {
    fontWeight:
      selected.indexOf(book) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip({ values, setValues }) {
  const { dataState } = useFetchRecordContext();

  const records = dataState.data;
  const books = records.length > 0 ? records.map(record => record.book) : [];

  const theme = useTheme();
  const [selected, setSelected] = useState(values.books);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelected(
      typeof value === 'string' ? value.split(',') : value,
    );
    setValues({ ...values, 'books': event.target.value });
  };

  return (
    <>
      <FormControl sx={{ m: 1, width: 320 }}>
        <InputLabel id="select-book">本棚書籍一覧</InputLabel>
        <Select
          id="select-book"
          multiple
          value={selected}
          onChange={handleChange}
          input={<OutlinedInput id="select-book" label="本棚書籍一覧" width="320" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {books.map((book) => (
            <MenuItem
              key={book.isbn}
              value={book.title}
              style={getStyles(book.title, selected, theme)}
            >
              <Checkbox checked={selected.indexOf(book.title) > -1} />
              <ListItemText primary={book.title} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}