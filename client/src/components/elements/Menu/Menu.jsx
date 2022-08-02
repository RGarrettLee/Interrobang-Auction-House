import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';



export default function DropMenu(props) {
    const isLoggedIn = props.isLoggedIn

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

            <Button sx={{ color: 'solids.white' }}
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon />
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
                <MenuItem onClick={handleClose}>
                    <NavLink to="/" style={({ isActive }) => ({
                        fontFamily: 'Montserrat Alternates',
                        fontSize: '20px',
                        textDecoration: 'none',
                        justifyContent: 'center',
                        color: isActive ? '#ff7043' : '#715a52',
                    })} >
                        Home
                    </NavLink>
                </MenuItem>

                {isLoggedIn ? (
                    <span>      <MenuItem onClick={handleClose}>
                        <NavLink to="my-account" style={({ isActive }) => ({
                            fontFamily: 'Montserrat Alternates',
                            fontSize: '20px',
                            textDecoration: 'none',
                            justifyContent: 'center',
                            color: isActive ? '#ff7043' : '#715a52',
                        })} >
                            My Account
                        </NavLink>
                    </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <NavLink to="/logout" style={({ isActive }) => ({
                                fontFamily: 'Montserrat Alternates',
                                fontSize: '20px',
                                textDecoration: 'none',
                                justifyContent: 'center',
                                color: isActive ? '#ff7043' : '#715a52',
                            })} >
                                Logout
                            </NavLink>
                        </MenuItem></span>
                ) : (
                    <span> <MenuItem onClick={handleClose}>
                        <NavLink to="/register" style={({ isActive }) => ({
                            fontFamily: 'Montserrat Alternates',
                            fontSize: '20px',
                            textDecoration: 'none',
                            justifyContent: 'center',
                            color: isActive ? '#ff7043' : '#715a52',
                        })} >
                            Register
                        </NavLink>
                    </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <NavLink to="/login" style={({ isActive }) => ({
                                fontFamily: 'Montserrat Alternates',
                                fontSize: '20px',
                                textDecoration: 'none',
                                justifyContent: 'center',
                                color: isActive ? '#ff7043' : '#715a52',
                            })} >
                                Login
                            </NavLink>
                        </MenuItem></span>
                )}
                <MenuItem onClick={handleClose}>
                    <NavLink to="/admin" style={({ isActive }) => ({
                        fontFamily: 'Montserrat Alternates',
                        fontSize: '20px',
                        textDecoration: 'none',
                        justifyContent: 'center',
                        color: isActive ? '#ff7043' : '#715a52',
                    })} >
                        Admin
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <NavLink to="/e404" style={({ isActive }) => ({
                        fontFamily: 'Montserrat Alternates',
                        fontSize: '20px',
                        textDecoration: 'none',
                        justifyContent: 'center',
                        color: isActive ? '#ff7043' : '#715a52',
                    })} >
                        404 Page Not Found
                    </NavLink>
                </MenuItem>
            </Menu>
        </div>
    );
}
