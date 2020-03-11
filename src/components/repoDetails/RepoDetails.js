import React, { useEffect } from 'react';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import { Typography, makeStyles } from "@material-ui/core";
import { lightBlue } from '@material-ui/core/colors';
import { useQuery } from "@apollo/react-hooks";
import { GET_REPOS } from '../../queries';


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
    const owner = props.searchTerm[0];
    const name = props.searchTerm[1];
    const { data, loading, error } = useQuery(GET_REPOS,
        { variables: { name: { name }, owner: { owner } } }
    );
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
