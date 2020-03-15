import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        textAlign: 'center',
    },


}));



function Header() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Typography variant="h4" color="primary">Github Repo Details</Typography>
        </div>


    );
}

export default Header;
