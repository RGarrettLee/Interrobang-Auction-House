import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import DrawerComp from '../DrawerComp'
import '../../styles/Header.css';

const Header = () => {
    return (
        <React.Fragment>
            <AppBar >
                <Toolbar>
                    
                    <Typography variant="h1" sx={{ fontSize: '32px', paddingLeft: '5%' }}> ‽nterrobang Auction House </Typography>
<DrawerComp />
                </Toolbar>

            </AppBar>
        </React.Fragment>
    )
}
export default Header 
