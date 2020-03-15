import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

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

const ExpansionPanelDetails = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        marginBottom: '10px',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
    },
}))(MuiExpansionPanelDetails);
const useStyles = makeStyles(theme => ({
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
    paper: {
        width: '70%',
        height: '100%',
        textAlign: 'center',

    }
}));

function OpenedIssues(data) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState('');
    console.log(data)
    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    return (

        <div className="opened-issues">
            {
                data.data.nodes.map((data, index) =>
                    <Button color="primary" key={index} className={classes.root}>
                        <ExpansionPanel square expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                            <ExpansionPanelSummary aria-controls="panel1d-content" id="panel2d-header">
                                <Typography>{data.title}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    {data.body}
                                </Typography>
                                <div>
                                    <h3>Comments</h3>
                                    {
                                        data.comments.nodes.map((comments, index) =>
                                            <Paper children={<Typography>{comments.bodyText}</Typography>} />
                                        )
                                    }
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Button>
                )
            }
        </div>


    );
}

export default OpenedIssues;
