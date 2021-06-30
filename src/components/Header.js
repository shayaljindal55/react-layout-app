import React from 'react'
import {AppBar, Toolbar, Grid, IconButton, Badge, makeStyles} from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
    root : {
        backgroundColor: '#fff',
        transform: 'translateZ(0)'
    }
})

export default function Header() {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.root}>
        <Toolbar>
        <Grid container>
        <Grid item sm></Grid>
        <Grid item>
            <IconButton>
                <Badge>
                    <ExitToAppIcon fontSize="small" />
                </Badge>
            </IconButton>
        </Grid>
        </Grid>
        </Toolbar>
        </AppBar>
    )
}
