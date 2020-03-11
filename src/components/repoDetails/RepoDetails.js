import React, { useEffect } from 'react';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import { Typography, makeStyles } from "@material-ui/core";
import { lightBlue } from '@material-ui/core/colors';



const useStyles = makeStyles({
    chooseRepoNote: {
        marginTop: '1rem',
        textAlign: 'center',
    },
    icon: {
        marginTop: '10rem',
        opacity: '0.2',

    }
});
function RepoDetails(props) {
    const classes = useStyles();
    useEffect(() => {
        console.log(props.searchTerm)
    })
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
