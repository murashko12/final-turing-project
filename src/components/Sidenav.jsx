import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import ArticleIcon from '@mui/icons-material/Article';

import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import HelpIcon from '@mui/icons-material/Help';
import { Link, NavLink } from 'react-router-dom';

export default function SwipeableTemporaryDrawer() {
  
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
      setState({ ...state, [anchor]: open });
  };

  const listSidenav1 = [
    {
      id: 1,
      text: 'Главное',
      link: '/',
      icon: <HomeIcon/>
    },
    {
      id: 2,
      text: 'О нас',
      link: '/about',
      icon: <InfoIcon/> 
    },
    {
      id: 3,
      text: 'Курсы',
      link: '/courses',
      icon: <SchoolIcon/> 
    },
    {
      id: 4,
      text: 'Новости',
      link: '/news',
      icon: <ArticleIcon/> 
    },
  ]

  const list = (anchor) => (

    <Box
      sx={{ 
          width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, 
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      
    >
      
      <List>
        {listSidenav1.map(({id, text, link, icon}) => (
          <ListItem key={id} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <Link to={link} style={{ textDecoration: 'none', color: 'black' }}>
                <ListItemText primary={text} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>


      <List>

        <Divider />
        
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon/>
            </ListItemIcon>
            <ListItemText primary={'Настройки'} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HelpIcon/>
            </ListItemIcon>
            <ListItemText primary={'Помощь'} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon/>
            </ListItemIcon>
            <ListItemText primary={'Выход'} />
          </ListItemButton>
        </ListItem>
        
      </List>
    </Box>
  );

  return (
    <Box sx={{m: 0}}>
        
            <Button onClick={toggleDrawer('left', true)}><MenuIcon style={{ fill: '#FFF' }} /></Button>

            <SwipeableDrawer
                anchor={'left'}
                open={state['left']}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            >
                {list('left')}
            </SwipeableDrawer>
        
    </Box>
  );
}