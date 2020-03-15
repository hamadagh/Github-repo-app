import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Button from '@material-ui/core/Button';


const ExpansionPanel = withStyles({
    root: {
        width: '100%',
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            marginTop: '200px',
        },
    },
    expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginTop: -1,
        minHeight: 156,
        '&$expanded': {
            minHeight: 56,

        },
    },
    content: {
        '&$expanded': {

        },
    },
    expanded: {},
})(MuiExpansionPanelSummary);

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
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            height: 'auto',
        },
    },
}));

function PullRequests(data) {
    const classes = useStyles();


    return (
        <div>
            {
                data.data.nodes.map((data, index) =>
                    <Button color="primary" key={index} className={classes.root}>
                        <ExpansionPanel square >
                            <ExpansionPanelSummary aria-controls="panel1d-content" id="panel2d-header">
                                <Typography>{data.title}</Typography>
                            </ExpansionPanelSummary>
                        </ExpansionPanel>
                    </Button>
                )
            }
        </div>


    )




}

export default PullRequests;
