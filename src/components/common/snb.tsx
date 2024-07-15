import { Box, Divider, IconButton, List, Toolbar, styled } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { FC } from 'react';
import { drawerWidth } from '@/constants/layout';
import NavList from './nav-list';
import dealiousLogo from '@/assets/logo.png';
import EnvBadge from '@/components/common/env-badge';

const StyledDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

interface DrawerProps {
  open: boolean;
  toggle: () => void;
}
const Drawer: FC<DrawerProps> = ({ open, toggle }) => {
  return (
    <StyledDrawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: [1],
        }}
      >
        <Box sx={{ paddingLeft: '76px', display: 'flex', alignItems: 'center', flexGrow: 1, position: 'relative' }}>
          <img src={dealiousLogo} alt="" style={{ height: '40px', marginBottom: '6px' }} />
          <EnvBadge />
        </Box>
        <IconButton onClick={toggle}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <NavList />
      </List>
    </StyledDrawer>
  );
};
export default Drawer;
