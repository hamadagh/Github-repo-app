import React, { useEffect, useState } from 'react';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import { Typography, makeStyles } from "@material-ui/core";
import { lightBlue } from '@material-ui/core/colors';
import { useQuery } from "@apollo/react-hooks";
import { GET_REPO } from '../../queries';
import CircularProgress from '@material-ui/core/CircularProgress';
import NavTabs from './NavTabs'




const useStyles = makeStyles({
    chooseRepoNote: {
        marginTop: '1rem',
        textAlign: 'center',
    },
    icon: {
        marginTop: '10rem',
        opacity: '0.2',

    },
    note: {
        textAlign: 'center',
    },
    progress: {

        textAlign: 'center',
        marginTop: '350px',
        '& > * + *': {
            marginTop: '50px',
        },
    }
});


function RepoDetails({ user, repo }) {
    const classes = useStyles();




    const { data, loading, error } = useQuery(GET_REPO,
        { variables: { "name": repo, owner: user } }
    );
    if (loading) return (
        <div className={classes.progress}>
            <CircularProgress disableShrink />
        </div>

    );

    if (data) {
        console.log(data)
        return (
            <NavTabs data={data} />
        )
    }





    return (
        <div className="Repo-details">
            <FolderOutlinedIcon style={{ fontSize: 180, color: lightBlue[100] }} className={classes.icon} />
            <Typography
                variant={'overline'}
                className={classes.chooseRepoNote}
                component={'div'}
            >
                CHOOSE A REPO
    </Typography>
        </div>
    );

}
export default RepoDetails;
