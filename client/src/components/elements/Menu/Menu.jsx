import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
export default function DropMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button sx={{color: 'solids.white'}}
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon/>
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={handleClose}><NavLink to="/" style={({ isActive }) => ({
                    fontFamily: 'Montserrat Alternates',
                    fontSize: '20px',
                    textDecoration: 'none',
                    justifyContent: 'center',
                    color: isActive ? '#ff7043' : '#ffa270',
                })} >Home</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to="my-account" style={({ isActive }) => ({
                    fontFamily: 'Montserrat Alternates',
                    fontSize: '20px',
                    textDecoration: 'none',
                    justifyContent: 'center',
                    color: isActive ? '#ff7043' : '#ffa270',
                })} >My Account</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to="/logout" style={({ isActive }) => ({
                    fontFamily: 'Montserrat Alternates',
                    fontSize: '20px',
                    textDecoration: 'none',
                    justifyContent: 'center',
                    color: isActive ? '#ff7043' : '#ffa270',
                })} >Logout</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to="/notfound" style={({ isActive }) => ({
                    fontFamily: 'Montserrat Alternates',
                    fontSize: '20px',
                    textDecoration: 'none',
                    justifyContent: 'center',
                    color: isActive ? '#ff7043' : '#ffa270',
                })} >Not Found</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to="/register" style={({ isActive }) => ({
                    fontFamily: 'Montserrat Alternates',
                    fontSize: '20px',
                    textDecoration: 'none',
                    justifyContent: 'center',
                    color: isActive ? '#ff7043' : '#ffa270',
                })} >Register</NavLink></MenuItem>
            </Menu>
        </div>
    );
}
