import React from 'react'
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material'
import DropMenu from '../Menu/Menu'

const Header = () => {
    return (
        <React.Fragment>
            <AppBar >
                <Toolbar>
                    <DropMenu />
                    <Typography variant="h1" sx={{ fontSize: '32px', paddingLeft: '5%' }}>
                        <NavLink style={({ isActive }) => ({
                            fontFamily: 'Montserrat Alternates',
                            fontSize: '32px',
                            fontWeight: 'bolder',
                            textDecoration: 'none',
                            color: '#fff',
                        })} to="/">
                            ‽nterrobang Auction House
                        </NavLink>
                    </Typography>

                </Toolbar>

            </AppBar>
        </React.Fragment>
    )
}
export default Header 
