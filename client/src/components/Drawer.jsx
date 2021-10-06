import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

import { MainListItems, SecondaryListItems } from './listItems'


const DrawerComponent = ({ state, toggleDrawer }) => {

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <MainListItems />
      <Divider />
      <SecondaryListItems />
    </Box >
  );

  return (
    <>
      <Drawer
        anchor='top'
        open={state}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </>
  );
};

export default DrawerComponent;