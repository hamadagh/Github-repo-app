import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: '10px',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            height: theme.spacing(16),
        },
    },
}));

function ClosedIssues(data) {
    const classes = useStyles();


    return (
        <div className="closed-issues">

            {
                data.data.nodes.map((data, index) =>
                    <Paper children={<Typography>{data.title}</Typography>} className={classes.paper} elevation={3} key={index} />
                )
            }
        </div>

    );
}

export default ClosedIssues;
