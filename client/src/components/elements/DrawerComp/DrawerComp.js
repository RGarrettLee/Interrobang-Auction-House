import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './DrawerComp.css'

// Setup NavItems
//  About is not contained in pages as it is the Default Page.
const PAGES = [ 'Dashboard','Login'];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer sx={{ color:'primary.main' }} open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List sx={{ padding: '30px' }}>
          <ListItemButton sx={{ textAlign: 'Center' }} onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                <NavLink to="/" style={({ isActive }) => ({
                  fontFamily: 'Helvetica',
                  fontSize: '20px',
                  textDecoration: 'none',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  padding: '10px',
                  paddingLeft: '50px',
                  paddingRight: '50px',
                  boxShadow: '3px 5px 5px #888888',
                  color: isActive ? 'solids.black' : 'solids.white',
                  background: isActive ? 'primary.light' : 'primarty.dark',
                })}
                >
                 Home</NavLink>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          
          {
            PAGES.map((page, index) => (
              <ListItemButton sx={{ textAlign: 'Center' }} onClick={() => setOpenDrawer(false)} key={index}>
                <ListItemIcon>
                  <ListItemText>
                    <NavLink to={page} style={({ isActive }) => ({
                      fontFamily: 'Helvetica',
                      fontSize: '20px',
                      textDecoration: 'none',
                      justifyContent: 'center',
                      borderRadius: '10px',
                      padding: '10px',
                      paddingLeft: '50px',
                      paddingRight: '50px',
                      boxShadow: '3px 5px 5px #888888',
                      color: isActive ? 'solids.black' : 'solids.white',
                      background: isActive ? 'primary.light' : 'primarty.dark',
                    })}
                    >
                      {page}
                    </NavLink>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))
          }
        </List>
      </Drawer>
      <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  )
}

export default DrawerComp;