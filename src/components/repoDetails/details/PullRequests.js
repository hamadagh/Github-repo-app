import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            height: theme.spacing(16),
        },
    },
}));

function PullRequests() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Paper elevation={2} />
            <Paper elevation={2} />
            <Paper elevation={2} />
            <Paper elevation={2} />
            <Paper elevation={2} />
            <Paper elevation={3} />
            <Paper elevation={3} />
            <Paper elevation={3} />
            <Paper elevation={3} />
            <Paper elevation={3} />
        </div>
    );
}

export default PullRequests;
