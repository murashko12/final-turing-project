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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';

import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import HelpIcon from '@mui/icons-material/Help';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false
  });

    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open });
    };

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
        {['О нас', 'Курсы'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
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
    <div>
        <React.Fragment sx={{m: 0}}>
            <Button onClick={toggleDrawer('left', true)}><MenuIcon style={{ fill: '#FFF' }} /></Button>
            
                
                    
                
            
            <SwipeableDrawer
                anchor={'left'}
                open={state['left']}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            >
                {list('left')}
            </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}