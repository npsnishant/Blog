import React from 'react'
import {AppBar, Toolbar, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    component:{
        background: 'black',
        color: 'red'
    },
    tool: {
        color: 'yellow',
        justifyContent: 'center',
        '& > *': {
            padding: 20
        }
    }
})

const Header = () => {
    const classes = useStyles();
    
    return (
        <>
            <AppBar className={classes.component}>
                <Toolbar className={classes.tool}>
                    <Typography>Home</Typography>
                    <Typography>About</Typography>
                    <Typography>Contact US</Typography>
                    <Typography>Login</Typography>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header
